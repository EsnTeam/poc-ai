import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import {
  ObjectSchema,
  ObjectSchemaAttribute,
} from 'src/app/modules/shared/model/object-schema';
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

    const schemaDepth = this.calculateSchemaDepth(schemas[0].name, schemas);

    const [headerRows, headerMerges] = this.createHeaderRows(
      schemaDepth,
      schemas[0].name
    );

    const [rows, merges] = this.createCiRows(
      schemas,
      schemaDepth,
      headerRows.length
    );

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

  public createCiRows(
    schemas: ObjectSchema[],
    schemaDepth: number,
    nbHeaderRows: number
  ) {
    const rows = [] as any;
    let merges = [] as any;

    schemas[0].attributes.forEach((attr) => {
      this.fillAttributeRows(
        attr,
        schemaDepth,
        schemas,
        nbHeaderRows,
        1,
        rows,
        merges,
        true
      );
    });

    return [rows, merges];
  }

  public fillAttributeRows(
    attribute: ObjectSchemaAttribute,
    schemaDepth: number,
    schemas: ObjectSchema[],
    nbHeaderRows: number,
    attributeDepth: number,
    rows: any[],
    merges: any[],
    isNotFirstAttribute: boolean
  ) {
    const [r, m] = this.getAttributeRow(
      schemas,
      attribute,
      attributeDepth,
      schemaDepth,
      rows.length + nbHeaderRows
    );

    if (isNotFirstAttribute) {
      rows.push(r);
      if (m.length) {
        merges.push(...m);
      }
    }
    if (attribute.isSubObjectIncluded) {
      const schema2 = schemas.find((s) => s.name == attribute.type);
      schema2?.attributes.forEach((attr2, index) => {
        this.fillAttributeRows(
          attr2,
          schemaDepth,
          schemas,
          nbHeaderRows,
          attributeDepth + 1,
          rows,
          merges,
          !!index
        );
      });
    }
  }

  public getAttributeRow(
    schemas: ObjectSchema[],
    attr: ObjectSchemaAttribute,
    depth: number,
    totalSchemaDepth: number,
    rowNumber: number
  ) {
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

    const attributesNextDepth = [];
    let att = attr;
    while (att.isSubObjectIncluded) {
      let firstAttSubObj = schemas.find((s) => s.name == att.type)
        ?.attributes[0] as any;
      attributesNextDepth.push(firstAttSubObj);
      att = firstAttSubObj;
    }

    const rows = [
      ...this.emptyCells((depth - 1) * 2, valStyle),

      ...[attr]
        .concat(attributesNextDepth)
        .map((att, index) => [
          {
            v: att.name,
            s: depth + index > 1 ? mdmStyle : valStyle,
          },
          {
            v: att.name,
            s: mdmStyle,
          },
        ])
        .flat(),
      ...this.emptyCells(
        (totalSchemaDepth - depth - attributesNextDepth.length) * 2,
        mdmStyle
      ),
      ...this.emptyCells((depth - 1) * 2, jsonSchemaStyle),

      ...[attr]
        .concat(attributesNextDepth)
        .map((att) => [
          {
            v: att.suggestedFieldName || att.name,
            s: jsonSchemaStyle,
          },
          {
            v: `${att.isMandatory ? 1 : 0}, ${attr.isMultivalued ? 'N' : 1}`,
            s: jsonSchemaStyle,
          },
        ])
        .flat(),

      ...this.emptyCells(
        (totalSchemaDepth - depth - attributesNextDepth.length) * 2,
        jsonSchemaStyle
      ),
      {
        v: [attr].concat(attributesNextDepth)[attributesNextDepth.length].type,
        s: jsonSchemaStyle,
      },
      {
        v: ``,
        s: jsonSchemaStyle,
      },
    ];

    const merges = [] as any[];

    [attr].concat(attributesNextDepth).forEach((att, index) => {
      const attSpan = this.getAttributeSpan(att, schemas);
      if (attSpan > 1) {
        merges.push(
          ...[
            {
              s: { r: rowNumber, c: (depth + index - 1) * 2 },
              e: {
                r: rowNumber + attSpan - 1,
                c: (depth + index - 1) * 2,
              },
            },
            {
              s: { r: rowNumber, c: (depth + index - 1) * 2 + 1 },
              e: {
                r: rowNumber + attSpan - 1,
                c: (depth + index - 1) * 2 + 1,
              },
            },

            {
              s: {
                r: rowNumber,
                c: (totalSchemaDepth + depth + index - 1) * 2,
              },
              e: {
                r: rowNumber + attSpan - 1,
                c: (totalSchemaDepth + depth + index - 1) * 2,
              },
            },
            {
              s: {
                r: rowNumber,
                c: (totalSchemaDepth + depth + index - 1) * 2 + 1,
              },
              e: {
                r: rowNumber + attSpan - 1,
                c: (totalSchemaDepth + depth + index - 1) * 2 + 1,
              },
            },
          ]
        );
      }
    });

    return [rows, merges];
  }

  public getAttributeSpan(
    att: ObjectSchemaAttribute,
    schemas: ObjectSchema[]
  ): any {
    if (!att.isSubObjectIncluded) {
      return 1;
    }
    const schema = schemas.find((s) => s.name == att.type);
    return schema?.attributes.reduce(
      (acc, curr) => acc + this.getAttributeSpan(curr, schemas),
      0
    );
  }

  public createHeaderRows(schemaDepth: number, objectName: string) {
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
    let headerRow1 = [
      {
        v: 'Libellé métier',
        s: headerStyle,
      },
      {
        v: 'MDM',
        s: greenStyle,
      },
      ...this.emptyCells(schemaDepth * 2 - 2, headerStyle),
      {
        v: 'Json Schema',
        s: blueStyle,
      },
      ...this.emptyCells(schemaDepth * 2 + 2, headerStyle),
    ];

    let headerRow2 = [
      ...this.emptyCells(1, headerStyle),
      {
        v: 'Description Objet Métier',
        s: greenStyle,
      },
    ] as any[];

    for (let i = 2; i < schemaDepth + 1; i++) {
      headerRow2.push(
        {
          v: `Attribut niv ${i}`,
          s: greenStyle,
        },
        {
          v: `Description Attribut niv ${i}`,
          s: greenStyle,
        }
      );
    }

    headerRow2.push(
      {
        v: `Objet CI`,
        s: blueStyle,
      },
      {
        v: `Cardinalité Attribut CI`,
        s: blueStyle,
      }
    );

    for (let i = 2; i < schemaDepth + 1; i++) {
      headerRow2.push(
        {
          v: `Attribut CI niv ${i}`,
          s: blueStyle,
        },
        {
          v: `Cardinalité Attribut CI niv ${i}`,
          s: blueStyle,
        }
      );
    }

    headerRow2.push(
      {
        v: `Type`,
        s: blueStyle,
      },
      {
        v: `Format`,
        s: blueStyle,
      }
    );

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
      this.emptyCells(schemaDepth * 4 + 1, row3Style),
    ];

    const merges = [
      { s: { r: 0, c: 0 }, e: { r: 1, c: 0 } },
      { s: { r: 0, c: 1 }, e: { r: 0, c: schemaDepth * 2 - 1 } },
      { s: { r: 0, c: schemaDepth * 2 }, e: { r: 0, c: schemaDepth * 4 + 1 } },
      { s: { r: 2, c: 0 }, e: { r: 2, c: schemaDepth * 4 + 1 } },
    ];

    return [[headerRow1, headerRow2, headerRow3], merges];
  }

  public emptyCells(nb: number, style: any) {
    const emptyCell = {
      v: ' ',
      s: style,
    };
    return Array(nb).fill(emptyCell);
  }
}
