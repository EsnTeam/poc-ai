/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { EsnRecycleRows, EsnTable } from './table';
import { CdkTableModule } from '@angular/cdk/table';
import { EsnCell, EsnCellDef, EsnColumnDef, EsnFooterCell, EsnFooterCellDef, EsnHeaderCell, EsnHeaderCellDef, } from './cell';
import { EsnFooterRow, EsnFooterRowDef, EsnHeaderRow, EsnHeaderRowDef, EsnRow, EsnRowDef, EsnNoDataRow, } from './row';
import { EsnTextColumn } from './text-column';
import { MatCommonModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { EsnPaginatorModule } from '../paginator/paginator.module';
import { EsnAsyncTable } from './async-table/async-table.component';
import { CommonModule } from '@angular/common';
import { ESN_ASYNC_DATASOURCE_DEFAULT_ADAPTER, EsnAsyncDataSourceAdapter } from './async-table/esnAsyncTableAdapter';
import { EsnAsyncDataSourceFactory } from './async-table/esnAsyncDataSourceFactory';
import * as i0 from "@angular/core";
const EXPORTED_DECLARATIONS = [
    // Table
    EsnTable,
    EsnRecycleRows,
    // Template defs
    EsnHeaderCellDef,
    EsnHeaderRowDef,
    EsnColumnDef,
    EsnCellDef,
    EsnRowDef,
    EsnFooterCellDef,
    EsnFooterRowDef,
    // Cell directives
    EsnHeaderCell,
    EsnCell,
    EsnFooterCell,
    // Row directives
    EsnHeaderRow,
    EsnRow,
    EsnFooterRow,
    EsnNoDataRow,
    EsnTextColumn,
    //Async table
    EsnAsyncTable,
];
export class EsnTableModule {
}
EsnTableModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnTableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EsnTableModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: EsnTableModule, declarations: [
        // Table
        EsnTable,
        EsnRecycleRows,
        // Template defs
        EsnHeaderCellDef,
        EsnHeaderRowDef,
        EsnColumnDef,
        EsnCellDef,
        EsnRowDef,
        EsnFooterCellDef,
        EsnFooterRowDef,
        // Cell directives
        EsnHeaderCell,
        EsnCell,
        EsnFooterCell,
        // Row directives
        EsnHeaderRow,
        EsnRow,
        EsnFooterRow,
        EsnNoDataRow,
        EsnTextColumn,
        //Async table
        EsnAsyncTable], imports: [CommonModule,
        CdkTableModule,
        MatCommonModule,
        MatTableModule,
        // Only for Async table
        EsnPaginatorModule], exports: [MatCommonModule, 
        // Table
        EsnTable,
        EsnRecycleRows,
        // Template defs
        EsnHeaderCellDef,
        EsnHeaderRowDef,
        EsnColumnDef,
        EsnCellDef,
        EsnRowDef,
        EsnFooterCellDef,
        EsnFooterRowDef,
        // Cell directives
        EsnHeaderCell,
        EsnCell,
        EsnFooterCell,
        // Row directives
        EsnHeaderRow,
        EsnRow,
        EsnFooterRow,
        EsnNoDataRow,
        EsnTextColumn,
        //Async table
        EsnAsyncTable] });
EsnTableModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnTableModule, providers: [
        { provide: EsnAsyncDataSourceAdapter, useClass: ESN_ASYNC_DATASOURCE_DEFAULT_ADAPTER },
        EsnAsyncDataSourceFactory
    ], imports: [CommonModule,
        CdkTableModule,
        MatCommonModule,
        MatTableModule,
        // Only for Async table
        EsnPaginatorModule, MatCommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnTableModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        CdkTableModule,
                        MatCommonModule,
                        MatTableModule,
                        // Only for Async table
                        EsnPaginatorModule,
                    ],
                    exports: [MatCommonModule, EXPORTED_DECLARATIONS],
                    declarations: EXPORTED_DECLARATIONS,
                    providers: [
                        { provide: EsnAsyncDataSourceAdapter, useClass: ESN_ASYNC_DATASOURCE_DEFAULT_ADAPTER },
                        EsnAsyncDataSourceFactory
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUvdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFDTCxPQUFPLEVBQ1AsVUFBVSxFQUNWLFlBQVksRUFDWixhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixnQkFBZ0IsR0FDakIsTUFBTSxRQUFRLENBQUM7QUFDaEIsT0FBTyxFQUNMLFlBQVksRUFDWixlQUFlLEVBQ2YsWUFBWSxFQUNaLGVBQWUsRUFDZixNQUFNLEVBQ04sU0FBUyxFQUNULFlBQVksR0FDYixNQUFNLE9BQU8sQ0FBQztBQUNmLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSx5QkFBeUIsRUFBd0MsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzSixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7QUFJcEYsTUFBTSxxQkFBcUIsR0FBRztJQUM1QixRQUFRO0lBQ1IsUUFBUTtJQUNSLGNBQWM7SUFFZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0lBQ1osVUFBVTtJQUNWLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUVmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsT0FBTztJQUNQLGFBQWE7SUFFYixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLE1BQU07SUFDTixZQUFZO0lBQ1osWUFBWTtJQUVaLGFBQWE7SUFFYixhQUFhO0lBQ2IsYUFBYTtDQUNkLENBQUM7QUFtQkYsTUFBTSxPQUFPLGNBQWM7OzRHQUFkLGNBQWM7NkdBQWQsY0FBYztRQS9DekIsUUFBUTtRQUNSLFFBQVE7UUFDUixjQUFjO1FBRWQsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsWUFBWTtRQUNaLFVBQVU7UUFDVixTQUFTO1FBQ1QsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFFZixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLE9BQU87UUFDUCxhQUFhO1FBRWIsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixNQUFNO1FBQ04sWUFBWTtRQUNaLFlBQVk7UUFFWixhQUFhO1FBRWIsYUFBYTtRQUNiLGFBQWEsYUFNWCxZQUFZO1FBQ1osY0FBYztRQUNkLGVBQWU7UUFDZixjQUFjO1FBQ2QsdUJBQXVCO1FBQ3ZCLGtCQUFrQixhQUVWLGVBQWU7UUF4Q3pCLFFBQVE7UUFDUixRQUFRO1FBQ1IsY0FBYztRQUVkLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLFlBQVk7UUFDWixVQUFVO1FBQ1YsU0FBUztRQUNULGdCQUFnQjtRQUNoQixlQUFlO1FBRWYsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixPQUFPO1FBQ1AsYUFBYTtRQUViLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osTUFBTTtRQUNOLFlBQVk7UUFDWixZQUFZO1FBRVosYUFBYTtRQUViLGFBQWE7UUFDYixhQUFhOzZHQW9CRixjQUFjLGFBTGY7UUFDUixFQUFDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxRQUFRLEVBQUUsb0NBQW9DLEVBQUM7UUFDcEYseUJBQXlCO0tBQzFCLFlBWkMsWUFBWTtRQUNaLGNBQWM7UUFDZCxlQUFlO1FBQ2YsY0FBYztRQUNkLHVCQUF1QjtRQUN2QixrQkFBa0IsRUFFVixlQUFlOzRGQU9kLGNBQWM7a0JBaEIxQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixjQUFjO3dCQUNkLHVCQUF1Qjt3QkFDdkIsa0JBQWtCO3FCQUNuQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUscUJBQXFCLENBQUM7b0JBQ2pELFlBQVksRUFBRSxxQkFBcUI7b0JBQ25DLFNBQVMsRUFBQzt3QkFDUixFQUFDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxRQUFRLEVBQUUsb0NBQW9DLEVBQUM7d0JBQ3BGLHlCQUF5QjtxQkFDMUI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVzblJlY3ljbGVSb3dzLCBFc25UYWJsZSB9IGZyb20gJy4vdGFibGUnO1xyXG5pbXBvcnQgeyBDZGtUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XHJcbmltcG9ydCB7XHJcbiAgRXNuQ2VsbCxcclxuICBFc25DZWxsRGVmLFxyXG4gIEVzbkNvbHVtbkRlZixcclxuICBFc25Gb290ZXJDZWxsLFxyXG4gIEVzbkZvb3RlckNlbGxEZWYsXHJcbiAgRXNuSGVhZGVyQ2VsbCxcclxuICBFc25IZWFkZXJDZWxsRGVmLFxyXG59IGZyb20gJy4vY2VsbCc7XHJcbmltcG9ydCB7XHJcbiAgRXNuRm9vdGVyUm93LFxyXG4gIEVzbkZvb3RlclJvd0RlZixcclxuICBFc25IZWFkZXJSb3csXHJcbiAgRXNuSGVhZGVyUm93RGVmLFxyXG4gIEVzblJvdyxcclxuICBFc25Sb3dEZWYsXHJcbiAgRXNuTm9EYXRhUm93LFxyXG59IGZyb20gJy4vcm93JztcclxuaW1wb3J0IHsgRXNuVGV4dENvbHVtbiB9IGZyb20gJy4vdGV4dC1jb2x1bW4nO1xyXG5pbXBvcnQgeyBNYXRDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xyXG5pbXBvcnQgeyBFc25QYWdpbmF0b3JNb2R1bGUgfSBmcm9tICcuLi9wYWdpbmF0b3IvcGFnaW5hdG9yLm1vZHVsZSc7XHJcbmltcG9ydCB7IEVzbkFzeW5jVGFibGUgfSBmcm9tICcuL2FzeW5jLXRhYmxlL2FzeW5jLXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEVTTl9BU1lOQ19EQVRBU09VUkNFX0RFRkFVTFRfQURBUFRFUiwgRXNuQXN5bmNEYXRhU291cmNlQWRhcHRlciwgRXNuQXN5bmNEYXRhc291cmNlQ2FsbFdyYXBwZXJBZGFwdGVyIH0gZnJvbSAnLi9hc3luYy10YWJsZS9lc25Bc3luY1RhYmxlQWRhcHRlcic7XHJcbmltcG9ydCB7IEVzbkFzeW5jRGF0YVNvdXJjZUZhY3RvcnkgfSBmcm9tICcuL2FzeW5jLXRhYmxlL2VzbkFzeW5jRGF0YVNvdXJjZUZhY3RvcnknO1xyXG5cclxuXHJcblxyXG5jb25zdCBFWFBPUlRFRF9ERUNMQVJBVElPTlMgPSBbXHJcbiAgLy8gVGFibGVcclxuICBFc25UYWJsZSxcclxuICBFc25SZWN5Y2xlUm93cyxcclxuXHJcbiAgLy8gVGVtcGxhdGUgZGVmc1xyXG4gIEVzbkhlYWRlckNlbGxEZWYsXHJcbiAgRXNuSGVhZGVyUm93RGVmLFxyXG4gIEVzbkNvbHVtbkRlZixcclxuICBFc25DZWxsRGVmLFxyXG4gIEVzblJvd0RlZixcclxuICBFc25Gb290ZXJDZWxsRGVmLFxyXG4gIEVzbkZvb3RlclJvd0RlZixcclxuXHJcbiAgLy8gQ2VsbCBkaXJlY3RpdmVzXHJcbiAgRXNuSGVhZGVyQ2VsbCxcclxuICBFc25DZWxsLFxyXG4gIEVzbkZvb3RlckNlbGwsXHJcblxyXG4gIC8vIFJvdyBkaXJlY3RpdmVzXHJcbiAgRXNuSGVhZGVyUm93LFxyXG4gIEVzblJvdyxcclxuICBFc25Gb290ZXJSb3csXHJcbiAgRXNuTm9EYXRhUm93LFxyXG5cclxuICBFc25UZXh0Q29sdW1uLFxyXG5cclxuICAvL0FzeW5jIHRhYmxlXHJcbiAgRXNuQXN5bmNUYWJsZSxcclxuXTtcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIENka1RhYmxlTW9kdWxlLFxyXG4gICAgTWF0Q29tbW9uTW9kdWxlLFxyXG4gICAgTWF0VGFibGVNb2R1bGUsXHJcbiAgICAvLyBPbmx5IGZvciBBc3luYyB0YWJsZVxyXG4gICAgRXNuUGFnaW5hdG9yTW9kdWxlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW01hdENvbW1vbk1vZHVsZSwgRVhQT1JURURfREVDTEFSQVRJT05TXSxcclxuICBkZWNsYXJhdGlvbnM6IEVYUE9SVEVEX0RFQ0xBUkFUSU9OUyxcclxuICBwcm92aWRlcnM6W1xyXG4gICAge3Byb3ZpZGU6IEVzbkFzeW5jRGF0YVNvdXJjZUFkYXB0ZXIsIHVzZUNsYXNzOiBFU05fQVNZTkNfREFUQVNPVVJDRV9ERUZBVUxUX0FEQVBURVJ9LFxyXG4gICAgRXNuQXN5bmNEYXRhU291cmNlRmFjdG9yeVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVzblRhYmxlTW9kdWxlIHt9XHJcblxyXG4iXX0=