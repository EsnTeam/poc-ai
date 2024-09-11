import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import {
  ObjectSchema,
  ObjectSchemaAttribute,
} from 'src/app/modules/shared/model/object-schema';
import { PocUtils } from 'src/app/modules/shared/utils/utils';
import * as XLSX from 'xlsx-js-style';

@Injectable({
  providedIn: 'root',
})
export class EsnExcelService {
  public calculateSchemaDepth(
    schemaName: string,
    schemas: ObjectSchema[]
  ): number {
    const schema = schemas.find((s) => s.name == schemaName)!;
    if (schema?.attributes.every((attr) => !attr.isSubObjectIncluded)) {
      return 1;
    }

    return schema.attributes
      .filter((attr) => !!attr.isSubObjectIncluded)
      .reduce((acc, curr) => {
        const currDepth = this.calculateSchemaDepth(curr.type, schemas);
        if (currDepth > acc - 1) {
          return currDepth + 1;
        }
        return acc;
      }, 1);
  }

  public async generateCI(schemas: ObjectSchema[]) {
    const wb = XLSX.utils.book_new();

    // const schemaDepth = this.calculateSchemaDepth(schemas[0].name, schemas);

    const [headerRows, headerMerges] = this.createHeaderRows(schemas[0].name);

    const [rows, merges] = this.createCiRows(schemas, headerRows.length);

    // STEP 3: Create worksheet with rows; Add worksheet to workbook
    const ws = XLSX.utils.aoa_to_sheet([
      ...(headerRows as any[]),
      ...(rows as any[]),
    ]);

    const merge = [...(headerMerges as any[]), ...(merges as any[])];
    ws['!merges'] = merge;

    var wscols = [{ wpx: 160 }, ...Array(30).fill({ wpx: 95 })];

    ws['!cols'] = wscols;

    XLSX.utils.book_append_sheet(wb, ws, 'CI');

    const wbOut = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    saveAs(
      new Blob([wbOut], { type: 'application/octet-stream' }),
      'Contrat_interface.xlsx'
    );
  }

  public createCiRows(schemas: ObjectSchema[], nbHeaderRows: number) {
    const rows = [] as any;
    let merges = [] as any;

    const objects = this.getObjectsWithHierarchy(schemas, schemas[0], []);

    objects.forEach((obj) => {
      const [newRows, newMerges] = this.createObjectLines(obj, rows.length + 2);
      rows.push(...newRows);
      merges.push(...newMerges);
    });

    return [rows, merges];
  }

  public getCiColNames() {
    return [
      [`Libellé métier`],
      [`Objet`, `Description Objet Métier`, `Attribut`, `Description Attribut`],
      [
        `Objet CI`,
        `Cardinalité de l'objet`,
        `Attribut CI`,
        `Titre de l'attribut CI`,
        `Cardinalité Attribut (unique / multiples)`,
        `Obligatoire / Non Obligatoire`,
        `Type`,
        `Format`,
      ],
      [`Parent`, `Structure`],
    ];
  }

  public createObjectLines(
    obj: {
      obj: ObjectSchema;
      parents: string[];
      cardinality?: string;
      suggestedFieldName?: string;
    },
    nbRows: number
  ): any[][] {
    let attributes = obj.obj.attributes.filter((a) => !a.isSubObjectIncluded);
    if (!attributes.length) {
      attributes = [
        {
          name: '/',
          type: '/',
          isMandatory: false,
          isMultivalued: false,
          uuid: '/',
        },
      ];
    }
    const valAlignment = {
      vertical: 'center',
      horizontal: 'left',
      wrapText: true,
    };

    const borderS = {
      style: 'thin',
      color: { rgb: '000000' },
    };

    const borderStyle = {
      top: borderS,
      right: borderS,
      bottom: borderS,
      left: borderS,
    };

    const valStyle = {
      alignment: valAlignment,
      border: borderStyle,
    };

    const mdmStyle = {
      fill: { fgColor: { rgb: 'cbdfb8' } },
      ...valStyle,
    };
    const jsonSchemaStyle = {
      fill: { fgColor: { rgb: 'deedf2' } },
      ...valStyle,
    };

    const structStyleSchemaStyle = {
      fill: { fgColor: { rgb: 'faeadb' } },
      ...valStyle,
    };

    const sectionStyle = {
      ...valStyle,
      alignment: {
        vertical: 'center',
        horizontal: 'left',
        wrapText: true,
      },
      fill: { fgColor: { rgb: '000000' } },
      font: { color: { rgb: 'ffffff' } },
    };

    const rows = [] as any[];
    const merges = [];
    if (obj.parents.length < 2) {
      rows.push([
        {
          v: `${obj.obj.name}${!obj.parents.length ? ' (Objet racine)' : ''}`,
          s: sectionStyle,
        },
        ...this.emptyCells(
          this.getCiColNames().flat().length - 1,
          sectionStyle
        ),
      ]);

      merges.push({
        s: { r: nbRows, c: 0 },
        e: { r: nbRows, c: this.getCiColNames().flat().length - 1 },
      });
    }

    attributes.forEach((a) => {
      rows.push([
        { v: a.name, s: valStyle },
        ...this.makeCells(
          [obj.obj.name, obj.obj.name, a.name, a.name],
          mdmStyle
        ),
        ...this.makeCells(
          [
            obj.suggestedFieldName || ' ', // Objet CI
            obj.cardinality || '/', // Cardinalité de l'objet `${a.isMandatory ? 1 : 0}, ${a.isMultivalued ? 'N' : 1}`
            a.suggestedFieldName || ' ', // Attribut CI
            a.suggestedFieldName || ' ', // Titre de l'attribut CI
            a.name == '/' ? ' ' : a.isMultivalued ? 'Multiple' : 'Unique', // Cardinalité Attribut
            a.name == '/'
              ? ' '
              : a.isMandatory
              ? 'Obligatoire'
              : 'Non obligatoire', // Obligatoire / Non obligatoire
            a.type, // Type
            ' ', // Format
          ],
          jsonSchemaStyle
        ),

        ...this.makeCells(
          [
            obj.parents.length
              ? obj.parents[obj.parents.length - 1]
              : 'Aucun\n(Objet racine)', // Parent
            this.makeStructureString(obj.parents, obj.obj.name), // Structure
          ],
          structStyleSchemaStyle
        ),
      ]);
    });

    merges.push(
      ...this.mergeCells(
        [
          'Objet',
          `Description Objet Métier`,
          `Objet CI`,
          `Cardinalité de l'objet`,
          `Parent`,
          `Structure`,
        ],
        nbRows + +(obj.parents.length < 2),
        attributes.length
      )
    );
    return [rows, merges];
  }

  public mergeCells(colNames: string[], startRow: number, rowSpan: number) {
    return colNames.map((name) => ({
      s: { r: startRow, c: this.getColNumber(name) },
      e: { r: startRow + rowSpan - 1, c: this.getColNumber(name) },
    }));
  }

  public getColNumber(colName: string) {
    return this.getCiColNames()
      .flat()
      .findIndex((c) => c == colName);
  }

  public makeStructureString(parents: string[], objName: string) {
    if (!parents.length) {
      return ' ';
    }
    const hierarchy = parents.concat(objName);
    let structStr = '';
    for (let i = 0; i < hierarchy.length; i++) {
      structStr = structStr + hierarchy[i];
      if (i < hierarchy.length - 1) {
        structStr =
          structStr +
          '\n' +
          Array(i).fill('      ').join('') +
          ' |\n' +
          Array(i).fill('      ').join('') +
          ' |- ';
      }
    }

    return structStr;
  }

  public getObjectsWithHierarchy(
    schemas: ObjectSchema[],
    currentObj: ObjectSchema,
    parents: string[],
    cardinality?: string,
    suggestedFieldName?: string
  ) {
    console.log({ currentObj, parents });
    const objets = [
      { obj: currentObj, parents, cardinality, suggestedFieldName },
    ] as any[];

    currentObj.attributes.forEach((a) => {
      if (a.isSubObjectIncluded) {
        objets.push(
          ...this.getObjectsWithHierarchy(
            schemas,
            PocUtils.getSchemaNamed(a.type, schemas),
            parents.concat([currentObj.name]),
            `${a.isMandatory ? 1 : 0}, ${a.isMultivalued ? 'N' : 1}`,
            a.suggestedFieldName
          )
        );
      }
    });

    return objets;
  }

  public createHeaderRows(objectName: string) {
    const headerAlignment = {
      vertical: 'center',
      horizontal: 'center',
      wrapText: true,
    };

    const borderS = {
      style: 'thin',
      color: { rgb: '000000' },
    };

    const borderStyle = {
      top: borderS,
      right: borderS,
      bottom: borderS,
      left: borderS,
    };

    const headerStyle = {
      alignment: headerAlignment,
      font: { bold: true },
      border: borderStyle,
    };

    const greenStyle = {
      fill: { fgColor: { rgb: '9bce63' } },
      ...headerStyle,
    };
    const blueStyle = {
      fill: { fgColor: { rgb: 'abe3fc' } },
      ...headerStyle,
    };

    const strucutreStyle = {
      fill: { fgColor: { rgb: 'f5c242' } },
      ...headerStyle,
    };
    let headerRow1 = [
      {
        v: 'Libellé métier',
        s: headerStyle,
      },
      {
        v: 'MDM',
        s: greenStyle,
      },
      ...this.emptyCells(this.getCiColNames()[1].length - 1, headerStyle),
      {
        v: 'Json Schema',
        s: blueStyle,
      },
      ...this.emptyCells(this.getCiColNames()[2].length - 1, headerStyle),
      {
        v: 'Structure',
        s: strucutreStyle,
      },
      ...this.emptyCells(this.getCiColNames()[3].length - 1, strucutreStyle),
    ];

    let headerRow2 = [
      ...this.emptyCells(1, headerStyle),
      ...this.makeCells(this.getCiColNames()[1], greenStyle),
      ...this.makeCells(this.getCiColNames()[2], blueStyle),
      ...this.makeCells(this.getCiColNames()[3], strucutreStyle),
    ] as any[];

    const row3Style = {
      ...headerStyle,
      alignment: {
        vertical: 'center',
        horizontal: 'left',
        wrapText: true,
      },
      fill: { fgColor: { rgb: '000000' } },
      font: { color: { rgb: 'ffffff' } },
    };

    const headerRow3 = [
      {
        v: `Contrat d'interface ${objectName}`,
        s: row3Style,
      },
      this.emptyCells(this.getCiColNames().flat().length, row3Style),
    ];

    const merges = [
      { s: { r: 0, c: 0 }, e: { r: 1, c: 0 } },
      { s: { r: 0, c: 1 }, e: { r: 0, c: this.getCiColNames()[1].length } },
      {
        s: { r: 0, c: this.getCiColNames()[1].length + 1 },
        e: {
          r: 0,
          c: this.getCiColNames()[1].length + this.getCiColNames()[2].length,
        },
      },
      {
        s: {
          r: 0,
          c:
            this.getCiColNames()[1].length + this.getCiColNames()[2].length + 1,
        },

        e: {
          r: 0,
          c:
            this.getCiColNames()[1].length +
            this.getCiColNames()[2].length +
            this.getCiColNames()[3].length,
        },
      },
      // {
      //   s: { r: 2, c: 0 },
      //   e: { r: 2, c: this.getCiColNames().flat().length - 1 },
      // },
    ];

    return [[headerRow1, headerRow2], merges];
  }

  public emptyCells(nb: number, style: any) {
    const emptyCell = {
      v: ' ',
      s: style,
    };
    return Array(nb).fill(emptyCell);
  }

  public makeCells(contents: string[], style: any) {
    const cells = [] as any[];
    contents.forEach((c) =>
      cells.push({
        v: c,
        s: style,
      })
    );

    return cells;
  }
}
