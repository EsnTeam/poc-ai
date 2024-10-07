import { Component, ContentChildren, Input, ViewChild, } from '@angular/core';
import { EsnPaginator } from '../../paginator/paginator.component';
import { EsnColumnDef } from '../cell';
import { EsnTable } from '../table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../paginator/paginator.component";
import * as i3 from "../table";
import * as i4 from "../row";
export class EsnAsyncTable {
    constructor() {
        this.hidePageSize = false;
        this.pageSizeOptions = [10, 20, 50];
        this.showFirstLastButtons = true;
        this.numberOfResults = 0;
    }
    refresh() {
        if (this.paginator) {
            this.paginator.pageIndex = 0;
        }
        this.load();
    }
    load() {
        this.dataSource.load(this.paginator.pageIndex, this.paginator.pageSize);
    }
    ngOnChanges(changes) {
        if (!!changes['dataSource']) {
            this.dataSource.numberOfResults$.subscribe((nb) => (this.numberOfResults = nb));
        }
    }
    ngAfterContentInit() {
        this.columnDefs.forEach((columnDef) => this.table.addColumnDef(columnDef));
    }
    ngAfterViewInit() {
        this.paginator.page.subscribe(() => this.load());
        this.load();
    }
}
EsnAsyncTable.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAsyncTable, deps: [], target: i0.ɵɵFactoryTarget.Component });
EsnAsyncTable.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnAsyncTable, selector: "esn-async-table", inputs: { dataSource: "dataSource", displayedColumns: "displayedColumns", hidePageSize: "hidePageSize", pageSizeOptions: "pageSizeOptions", showFirstLastButtons: "showFirstLastButtons" }, queries: [{ propertyName: "columnDefs", predicate: EsnColumnDef }], viewQueries: [{ propertyName: "table", first: true, predicate: EsnTable, descendants: true, static: true }, { propertyName: "paginator", first: true, predicate: EsnPaginator, descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"table-wrapper\" [ngClass]=\"{'loading': dataSource.loading$ | async }\">\r\n  <table\r\n    esn-table\r\n    [dataSource]=\"dataSource\"\r\n  >\r\n    <ng-content></ng-content>\r\n\r\n    <tr esn-header-row *esnHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr esn-row *esnRowDef=\"let row; columns: displayedColumns\"></tr>\r\n  </table>\r\n</div>\r\n<esn-paginator\r\n  [length]=\"numberOfResults\"\r\n  [hidePageSize]=\"hidePageSize\"\r\n  [pageSizeOptions]=\"pageSizeOptions\"\r\n  [showFirstLastButtons]=\"showFirstLastButtons\"\r\n></esn-paginator>\r\n\r\n", styles: [".loading{position:relative}.loading:after{content:\" \";height:100%;width:100%;position:absolute;top:0;left:0;background:rgba(255,255,255,.7);z-index:100}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: i2.EsnPaginator, selector: "esn-paginator", inputs: ["disabled", "hidePageSize", "length", "pageIndex", "pageSize", "pageSizeOptions", "selectConfig", "showFirstLastButtons"], outputs: ["page"] }, { kind: "component", type: i3.EsnTable, selector: "esn-table, table[esn-table]", exportAs: ["esnTable"] }, { kind: "directive", type: i4.EsnHeaderRowDef, selector: "[esnHeaderRowDef]", inputs: ["esnHeaderRowDef", "esnHeaderRowDefSticky"] }, { kind: "directive", type: i4.EsnRowDef, selector: "[esnRowDef]", inputs: ["esnRowDefColumns", "esnRowDefWhen"] }, { kind: "component", type: i4.EsnHeaderRow, selector: "esn-header-row, tr[esn-header-row]", exportAs: ["esnHeaderRow"] }, { kind: "component", type: i4.EsnRow, selector: "esn-row, tr[esn-row]", exportAs: ["esnRow"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAsyncTable, decorators: [{
            type: Component,
            args: [{ selector: 'esn-async-table', template: "<div class=\"table-wrapper\" [ngClass]=\"{'loading': dataSource.loading$ | async }\">\r\n  <table\r\n    esn-table\r\n    [dataSource]=\"dataSource\"\r\n  >\r\n    <ng-content></ng-content>\r\n\r\n    <tr esn-header-row *esnHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr esn-row *esnRowDef=\"let row; columns: displayedColumns\"></tr>\r\n  </table>\r\n</div>\r\n<esn-paginator\r\n  [length]=\"numberOfResults\"\r\n  [hidePageSize]=\"hidePageSize\"\r\n  [pageSizeOptions]=\"pageSizeOptions\"\r\n  [showFirstLastButtons]=\"showFirstLastButtons\"\r\n></esn-paginator>\r\n\r\n", styles: [".loading{position:relative}.loading:after{content:\" \";height:100%;width:100%;position:absolute;top:0;left:0;background:rgba(255,255,255,.7);z-index:100}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { dataSource: [{
                type: Input
            }], displayedColumns: [{
                type: Input
            }], hidePageSize: [{
                type: Input
            }], pageSizeOptions: [{
                type: Input
            }], showFirstLastButtons: [{
                type: Input
            }], table: [{
                type: ViewChild,
                args: [EsnTable, { static: true }]
            }], paginator: [{
                type: ViewChild,
                args: [EsnPaginator, { static: false }]
            }], columnDefs: [{
                type: ContentChildren,
                args: [EsnColumnDef]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmMtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUvYXN5bmMtdGFibGUvYXN5bmMtdGFibGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUvYXN5bmMtdGFibGUvYXN5bmMtdGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUlMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUN2QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7Ozs7QUFTcEMsTUFBTSxPQUFPLGFBQWE7SUFpQnhCO1FBYlMsaUJBQVksR0FBcUIsS0FBSyxDQUFDO1FBQ3ZDLG9CQUFlLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLHlCQUFvQixHQUFxQixJQUFJLENBQUM7UUFHaEQsb0JBQWUsR0FBVyxDQUFDLENBQUM7SUFRcEIsQ0FBQztJQUVULE9BQU87UUFDWixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2IsQ0FBQztJQUVNLElBQUk7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUN4QixDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQ3hDLENBQUMsRUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDLENBQzVDLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFFN0UsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7MkdBakRVLGFBQWE7K0ZBQWIsYUFBYSw4UUFhUCxZQUFZLG9FQUZsQixRQUFRLDBGQUNSLFlBQVkscUVDakN6Qixra0JBa0JBOzRGREdhLGFBQWE7a0JBTHpCLFNBQVM7K0JBQ0UsaUJBQWlCOzBFQUtsQixVQUFVO3NCQUFsQixLQUFLO2dCQUNHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFFRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0csb0JBQW9CO3NCQUE1QixLQUFLO2dCQUtpQyxLQUFLO3NCQUEzQyxTQUFTO3VCQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBQ08sU0FBUztzQkFBcEQsU0FBUzt1QkFBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQUNYLFVBQVU7c0JBQXhDLGVBQWU7dUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBRdWVyeUxpc3QsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVzblBhZ2luYXRvciB9IGZyb20gJy4uLy4uL3BhZ2luYXRvci9wYWdpbmF0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXNuQ29sdW1uRGVmIH0gZnJvbSAnLi4vY2VsbCc7XHJcbmltcG9ydCB7IEVzblRhYmxlIH0gZnJvbSAnLi4vdGFibGUnO1xyXG5pbXBvcnQgeyBFc25Bc3luY0RhdGFTb3VyY2UgfSBmcm9tICcuL2Vzbi1hc3luYy1kYXRhc291cmNlJztcclxuaW1wb3J0IHsgRXNuQXN5bmNEYXRhU291cmNlQWRhcHRlciB9IGZyb20gJy4vZXNuQXN5bmNUYWJsZUFkYXB0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlc24tYXN5bmMtdGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hc3luYy10YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXN5bmMtdGFibGUuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzbkFzeW5jVGFibGUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIGRhdGFTb3VyY2U6IEVzbkFzeW5jRGF0YVNvdXJjZTxhbnk+O1xyXG4gIEBJbnB1dCgpIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdO1xyXG5cclxuICBASW5wdXQoKSBoaWRlUGFnZVNpemU6IGJvb2xlYW4gfCBzdHJpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBwYWdlU2l6ZU9wdGlvbnM6IG51bWJlcltdID0gWzEwLCAyMCwgNTBdO1xyXG4gIEBJbnB1dCgpIHNob3dGaXJzdExhc3RCdXR0b25zOiBib29sZWFuIHwgc3RyaW5nID0gdHJ1ZTtcclxuXHJcblxyXG4gIHB1YmxpYyBudW1iZXJPZlJlc3VsdHM6IG51bWJlciA9IDA7XHJcblxyXG4gIEBWaWV3Q2hpbGQoRXNuVGFibGUsIHsgc3RhdGljOiB0cnVlIH0pIHRhYmxlOiBFc25UYWJsZTxhbnk+O1xyXG4gIEBWaWV3Q2hpbGQoRXNuUGFnaW5hdG9yLCB7IHN0YXRpYzogZmFsc2UgfSkgcGFnaW5hdG9yOiBFc25QYWdpbmF0b3I7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihFc25Db2x1bW5EZWYpIGNvbHVtbkRlZnM6IFF1ZXJ5TGlzdDxFc25Db2x1bW5EZWY+O1xyXG5cclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIHJlZnJlc2goKSB7XHJcbiAgICBpZiAodGhpcy5wYWdpbmF0b3IpIHtcclxuICAgICAgdGhpcy5wYWdpbmF0b3IucGFnZUluZGV4ID0gMDtcclxuICAgIH1cclxuICAgIHRoaXMubG9hZCgpXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpIHtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkKFxyXG4gICAgICB0aGlzLnBhZ2luYXRvci5wYWdlSW5kZXgsXHJcbiAgICAgIHRoaXMucGFnaW5hdG9yLnBhZ2VTaXplXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYoISFjaGFuZ2VzWydkYXRhU291cmNlJ10pIHtcclxuICAgICAgdGhpcy5kYXRhU291cmNlLm51bWJlck9mUmVzdWx0cyQuc3Vic2NyaWJlKFxyXG4gICAgICAgIChuYjogbnVtYmVyKSA9PiAodGhpcy5udW1iZXJPZlJlc3VsdHMgPSBuYilcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuY29sdW1uRGVmcy5mb3JFYWNoKChjb2x1bW5EZWYpID0+IHRoaXMudGFibGUuYWRkQ29sdW1uRGVmKGNvbHVtbkRlZikpO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnBhZ2luYXRvci5wYWdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLmxvYWQoKSk7XHJcbiAgICB0aGlzLmxvYWQoKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInRhYmxlLXdyYXBwZXJcIiBbbmdDbGFzc109XCJ7J2xvYWRpbmcnOiBkYXRhU291cmNlLmxvYWRpbmckIHwgYXN5bmMgfVwiPlxyXG4gIDx0YWJsZVxyXG4gICAgZXNuLXRhYmxlXHJcbiAgICBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCJcclxuICA+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcblxyXG4gICAgPHRyIGVzbi1oZWFkZXItcm93ICplc25IZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cclxuICAgIDx0ciBlc24tcm93ICplc25Sb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cclxuICA8L3RhYmxlPlxyXG48L2Rpdj5cclxuPGVzbi1wYWdpbmF0b3JcclxuICBbbGVuZ3RoXT1cIm51bWJlck9mUmVzdWx0c1wiXHJcbiAgW2hpZGVQYWdlU2l6ZV09XCJoaWRlUGFnZVNpemVcIlxyXG4gIFtwYWdlU2l6ZU9wdGlvbnNdPVwicGFnZVNpemVPcHRpb25zXCJcclxuICBbc2hvd0ZpcnN0TGFzdEJ1dHRvbnNdPVwic2hvd0ZpcnN0TGFzdEJ1dHRvbnNcIlxyXG4+PC9lc24tcGFnaW5hdG9yPlxyXG5cclxuIl19