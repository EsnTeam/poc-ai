import { Injectable } from '@angular/core';
import readXlsxFile from 'read-excel-file';

@Injectable({
  providedIn: 'root',
})
export class EsnExcelParsingService {
  public parsedData: any;
  parse(file: any) {
    readXlsxFile(file).then((rows) => {
      console.log({ rows });

      this.parsedData = this.reformatData(rows as string[][]);

      console.log(this.reformatData(rows as string[][]));
      // `rows` is an array of rows
      // each row being an array of cells.
    });
  }

  public reformatData(data: string[][]) {
    const formatted = [];
    const [headerRow, headerRowIndex] = this.getHeaders(data);

    for (let row = (headerRowIndex as number) + 1; row < data.length; row++) {
      if (data[row].reduce((acc, curr) => acc + +!!curr, 0) > 3) {
        const elm = {} as any;
        for (let col = 0; col < data[row].length; col++) {
          const val = this.getLastValueInCol(row, col, data);
          if (!!val && !!(headerRow as string[])[col]) {
            elm[(headerRow as string[])[col]] = val;
          }
        }
        formatted.push(elm);
      }
    }

    return formatted;
  }

  public getHeaders(data: string[][]) {
    const headerRow = data.find(
      (row) =>
        row.some((val) => (val || '').includes('Attribut')) &&
        row.some((val) => (val || '').includes('Description'))
    );
    const headerRowIndex = data.findIndex((row) => row == headerRow);

    if (headerRowIndex > 0) {
      for (let i = 0; i < headerRow!.length; i++) {
        if (!headerRow![i]) {
          headerRow![i] = data[headerRowIndex - 1][i];
        }
      }
    }

    return [headerRow, headerRowIndex];
  }

  public getLastValueInCol(
    rowIndex: number,
    colIndex: number,
    data: string[][]
  ) {
    for (let r = rowIndex; r > -1; r--) {
      if (!!data[r][colIndex]) {
        return data[r][colIndex];
      }
    }
    return null;
  }
}
