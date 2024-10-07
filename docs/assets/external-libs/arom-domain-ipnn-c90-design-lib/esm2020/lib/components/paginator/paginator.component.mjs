import { Component, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
import { Subject } from 'rxjs';
import { MatPaginator, } from '@angular/material/paginator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/paginator";
export class PageEvent {
}
export class EsnPaginator {
    constructor() {
        this.pageIndex = 0;
        this.pageSize = 20;
        this.selectConfig = {};
        this.page = new EventEmitter();
        this._initialized = new Subject();
    }
    ngAfterViewInit() {
        this.paginator.initialized.subscribe(() => {
            this._initialized.next();
            this._initialized.complete();
        });
        this.page.subscribe(ev => {
            this.pageIndex = ev.pageIndex;
            this.pageSize = ev.pageSize;
            this.length = ev.length;
        });
    }
    get initialized() {
        return this._initialized.asObservable();
    }
    getNumberOfPages() {
        return this.paginator?.getNumberOfPages();
    }
}
EsnPaginator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnPaginator, deps: [], target: i0.ɵɵFactoryTarget.Component });
EsnPaginator.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnPaginator, selector: "esn-paginator", inputs: { disabled: "disabled", hidePageSize: "hidePageSize", length: "length", pageIndex: "pageIndex", pageSize: "pageSize", pageSizeOptions: "pageSizeOptions", selectConfig: "selectConfig", showFirstLastButtons: "showFirstLastButtons" }, outputs: { page: "page" }, host: { classAttribute: "esn-paginator" }, viewQueries: [{ propertyName: "paginator", first: true, predicate: MatPaginator, descendants: true }], ngImport: i0, template: "<mat-paginator\r\n  [disabled]=\"disabled\"\r\n  [hidePageSize]=\"hidePageSize\"\r\n  [length]=\"length\"\r\n  [pageIndex]=\"pageIndex\"\r\n  [pageSize]=\"pageSize\"\r\n  [pageSizeOptions]=\"pageSizeOptions\"\r\n  [selectConfig]=\"selectConfig\"\r\n  [showFirstLastButtons]=\"showFirstLastButtons\"\r\n  (page)=\"page.emit($event)\"\r\n>\r\n</mat-paginator>\r\n", styles: [""], dependencies: [{ kind: "component", type: i1.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnPaginator, decorators: [{
            type: Component,
            args: [{ selector: 'esn-paginator', host: {
                        class: 'esn-paginator',
                    }, template: "<mat-paginator\r\n  [disabled]=\"disabled\"\r\n  [hidePageSize]=\"hidePageSize\"\r\n  [length]=\"length\"\r\n  [pageIndex]=\"pageIndex\"\r\n  [pageSize]=\"pageSize\"\r\n  [pageSizeOptions]=\"pageSizeOptions\"\r\n  [selectConfig]=\"selectConfig\"\r\n  [showFirstLastButtons]=\"showFirstLastButtons\"\r\n  (page)=\"page.emit($event)\"\r\n>\r\n</mat-paginator>\r\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { disabled: [{
                type: Input
            }], hidePageSize: [{
                type: Input
            }], length: [{
                type: Input
            }], pageIndex: [{
                type: Input
            }], pageSize: [{
                type: Input
            }], pageSizeOptions: [{
                type: Input
            }], selectConfig: [{
                type: Input
            }], showFirstLastButtons: [{
                type: Input
            }], page: [{
                type: Output
            }], paginator: [{
                type: ViewChild,
                args: [MatPaginator]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL3BhZ2luYXRvci9wYWdpbmF0b3IuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvcGFnaW5hdG9yL3BhZ2luYXRvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFDTCxZQUFZLEdBRWIsTUFBTSw2QkFBNkIsQ0FBQzs7O0FBR3JDLE1BQU0sT0FBUSxTQUFTO0NBU3RCO0FBWUQsTUFBTSxPQUFPLFlBQVk7SUFjdkI7UUFWUyxjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFFdEIsaUJBQVksR0FBNkIsRUFBRSxDQUFDO1FBRTNDLFNBQUksR0FBNEIsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUd4RSxpQkFBWSxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO0lBRW5DLENBQUM7SUFDaEIsZUFBZTtRQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQzlCLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3pDLENBQUM7SUFHTSxnQkFBZ0I7UUFDckIsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFFLENBQUM7SUFDNUMsQ0FBQzs7MEdBbkNVLFlBQVk7OEZBQVosWUFBWSxzWkFXWixZQUFZLGdEQ2hEekIsMldBWUE7NEZEeUJhLFlBQVk7a0JBUnhCLFNBQVM7K0JBQ0UsZUFBZSxRQUduQjt3QkFDSixLQUFLLEVBQUUsZUFBZTtxQkFDdkI7MEVBR1EsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLG9CQUFvQjtzQkFBNUIsS0FBSztnQkFDSSxJQUFJO3NCQUFiLE1BQU07Z0JBRWtCLFNBQVM7c0JBQWpDLFNBQVM7dUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7XHJcbiAgTWF0UGFnaW5hdG9yLFxyXG4gIE1hdFBhZ2luYXRvclNlbGVjdENvbmZpZyxcclxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xyXG5cclxuXHJcbmV4cG9ydCAgY2xhc3MgUGFnZUV2ZW50IHtcclxuICAvKiogVGhlIGN1cnJlbnQgcGFnZSBpbmRleC4gKi9cclxuICBwYWdlSW5kZXg6IG51bWJlcjtcclxuICAvKiogIEluZGV4IG9mIHRoZSBwYWdlIHRoYXQgd2FzIHNlbGVjdGVkIHByZXZpb3VzbHkuICovXHJcbiAgcHJldmlvdXNQYWdlSW5kZXg/OiBudW1iZXI7XHJcbiAgLyoqIFRoZSBjdXJyZW50IHBhZ2Ugc2l6ZS4gKi9cclxuICBwYWdlU2l6ZTogbnVtYmVyO1xyXG4gIC8qKiBUaGUgY3VycmVudCB0b3RhbCBudW1iZXIgb2YgaXRlbXMgYmVpbmcgcGFnZWQuICovXHJcbiAgbGVuZ3RoOiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlc24tcGFnaW5hdG9yJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5hdG9yLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wYWdpbmF0b3IuY29tcG9uZW50LnNjc3MnXSxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2Vzbi1wYWdpbmF0b3InLFxyXG4gIH0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25QYWdpbmF0b3IgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiB8IHN0cmluZztcclxuICBASW5wdXQoKSBoaWRlUGFnZVNpemU6IGJvb2xlYW4gfCBzdHJpbmc7XHJcbiAgQElucHV0KCkgbGVuZ3RoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgcGFnZUluZGV4OiBudW1iZXIgPSAwO1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplOiBudW1iZXIgPSAyMDtcclxuICBASW5wdXQoKSBwYWdlU2l6ZU9wdGlvbnM6IG51bWJlcltdO1xyXG4gIEBJbnB1dCgpIHNlbGVjdENvbmZpZzogTWF0UGFnaW5hdG9yU2VsZWN0Q29uZmlnID0ge307XHJcbiAgQElucHV0KCkgc2hvd0ZpcnN0TGFzdEJ1dHRvbnM6IGJvb2xlYW4gfCBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIHBhZ2U6IEV2ZW50RW1pdHRlcjxQYWdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlRXZlbnQ+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yKSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcclxuICBfaW5pdGlhbGl6ZWQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5wYWdpbmF0b3IuaW5pdGlhbGl6ZWQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5faW5pdGlhbGl6ZWQubmV4dCgpO1xyXG4gICAgICB0aGlzLl9pbml0aWFsaXplZC5jb21wbGV0ZSgpXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMucGFnZS5zdWJzY3JpYmUoZXYgPT4ge1xyXG4gICAgICB0aGlzLnBhZ2VJbmRleCA9IGV2LnBhZ2VJbmRleDtcclxuICAgICAgdGhpcy5wYWdlU2l6ZSA9IGV2LnBhZ2VTaXplO1xyXG4gICAgICB0aGlzLmxlbmd0aCA9IGV2Lmxlbmd0aDtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXQgaW5pdGlhbGl6ZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5pdGlhbGl6ZWQuYXNPYnNlcnZhYmxlKClcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgZ2V0TnVtYmVyT2ZQYWdlcygpe1xyXG4gICAgcmV0dXJuIHRoaXMucGFnaW5hdG9yPy5nZXROdW1iZXJPZlBhZ2VzKCk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIiwiPG1hdC1wYWdpbmF0b3JcclxuICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gIFtoaWRlUGFnZVNpemVdPVwiaGlkZVBhZ2VTaXplXCJcclxuICBbbGVuZ3RoXT1cImxlbmd0aFwiXHJcbiAgW3BhZ2VJbmRleF09XCJwYWdlSW5kZXhcIlxyXG4gIFtwYWdlU2l6ZV09XCJwYWdlU2l6ZVwiXHJcbiAgW3BhZ2VTaXplT3B0aW9uc109XCJwYWdlU2l6ZU9wdGlvbnNcIlxyXG4gIFtzZWxlY3RDb25maWddPVwic2VsZWN0Q29uZmlnXCJcclxuICBbc2hvd0ZpcnN0TGFzdEJ1dHRvbnNdPVwic2hvd0ZpcnN0TGFzdEJ1dHRvbnNcIlxyXG4gIChwYWdlKT1cInBhZ2UuZW1pdCgkZXZlbnQpXCJcclxuPlxyXG48L21hdC1wYWdpbmF0b3I+XHJcbiJdfQ==