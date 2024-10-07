/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CDK_TABLE_TEMPLATE, CdkTable, CDK_TABLE, _CoalescedStyleScheduler, _COALESCED_STYLE_SCHEDULER, STICKY_POSITIONING_LISTENER, } from '@angular/cdk/table';
import { ChangeDetectionStrategy, Component, Directive, ViewEncapsulation } from '@angular/core';
import { _DisposeViewRepeaterStrategy, _RecycleViewRepeaterStrategy, _VIEW_REPEATER_STRATEGY, } from '@angular/cdk/collections';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/table";
/**
 * Enables the recycle view repeater strategy, which reduces rendering latency. Not compatible with
 * tables that animate rows.
 */
export class EsnRecycleRows {
}
EsnRecycleRows.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnRecycleRows, deps: [], target: i0.ɵɵFactoryTarget.Directive });
EsnRecycleRows.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: EsnRecycleRows, selector: "esn-table[recycleRows], table[esn-table][recycleRows]", providers: [{ provide: _VIEW_REPEATER_STRATEGY, useClass: _RecycleViewRepeaterStrategy }], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnRecycleRows, decorators: [{
            type: Directive,
            args: [{
                    selector: 'esn-table[recycleRows], table[esn-table][recycleRows]',
                    providers: [{ provide: _VIEW_REPEATER_STRATEGY, useClass: _RecycleViewRepeaterStrategy }],
                }]
        }] });
/**
 * Wrapper for the CdkTable with Material design styles.
 */
export class EsnTable extends CdkTable {
    constructor() {
        super(...arguments);
        /** Overrides the sticky CSS class set by the `CdkTable`. */
        this.stickyCssClass = 'mat-table-sticky';
        /** Overrides the need to add position: sticky on every sticky cell element in `CdkTable`. */
        this.needsPositionStickyOnElement = false;
    }
    ngOnInit() {
        super.ngOnInit();
        // After ngOnInit, the `CdkTable` has created and inserted the table sections (thead, tbody,
        // tfoot). MDC requires the `mdc-data-table__content` class to be added to the body. Note that
        // this only applies to native tables, because we don't wrap the content of flexbox-based ones.
        if (this._isNativeHtmlTable) {
            const tbody = this._elementRef.nativeElement.querySelector('tbody');
            tbody.classList.add('mdc-data-table__content');
        }
    }
}
EsnTable.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnTable, deps: null, target: i0.ɵɵFactoryTarget.Component });
EsnTable.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnTable, selector: "esn-table, table[esn-table]", host: { properties: { "class.mat-table-fixed-layout": "fixedLayout" }, classAttribute: "esn-table" }, providers: [
        // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
        //  is only included in the build if used.
        { provide: _VIEW_REPEATER_STRATEGY, useClass: _DisposeViewRepeaterStrategy },
        { provide: CdkTable, useExisting: EsnTable },
        { provide: CDK_TABLE, useExisting: EsnTable },
        { provide: _COALESCED_STYLE_SCHEDULER, useClass: _CoalescedStyleScheduler },
        // Prevent nested tables from seeing this table's StickyPositioningListener.
        { provide: STICKY_POSITIONING_LISTENER, useValue: null },
    ], exportAs: ["esnTable"], usesInheritance: true, ngImport: i0, template: "\n  <ng-content select=\"caption\"></ng-content>\n  <ng-content select=\"colgroup, col\"></ng-content>\n  <ng-container headerRowOutlet></ng-container>\n  <ng-container rowOutlet></ng-container>\n  <ng-container noDataRowOutlet></ng-container>\n  <ng-container footerRowOutlet></ng-container>\n", isInline: true, styles: ["esn-table{display:block}esn-header-row{min-height:56px}esn-row,esn-footer-row{min-height:48px}esn-row,esn-header-row,esn-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}esn-cell:first-of-type,esn-header-cell:first-of-type,esn-footer-cell:first-of-type{padding-left:24px}[dir=rtl] esn-cell:first-of-type:not(:only-of-type),[dir=rtl] esn-header-cell:first-of-type:not(:only-of-type),[dir=rtl] esn-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}esn-cell:last-of-type,esn-header-cell:last-of-type,esn-footer-cell:last-of-type{padding-right:24px}[dir=rtl] esn-cell:last-of-type:not(:only-of-type),[dir=rtl] esn-header-cell:last-of-type:not(:only-of-type),[dir=rtl] esn-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}esn-cell,esn-header-cell,esn-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.esn-table{width:100%;border-spacing:0;background-color:transparent!important}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{font-size:.875rem;line-height:1.25rem;font-weight:400;height:48px}th.mat-header-cell{font-size:.75rem;line-height:1.125rem;font-weight:400;text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}td{padding-right:1rem!important}.mat-table-sticky{position:sticky!important}.mat-table-fixed-layout{table-layout:fixed}\n"], dependencies: [{ kind: "directive", type: i1.DataRowOutlet, selector: "[rowOutlet]" }, { kind: "directive", type: i1.HeaderRowOutlet, selector: "[headerRowOutlet]" }, { kind: "directive", type: i1.FooterRowOutlet, selector: "[footerRowOutlet]" }, { kind: "directive", type: i1.NoDataRowOutlet, selector: "[noDataRowOutlet]" }], changeDetection: i0.ChangeDetectionStrategy.Default, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnTable, decorators: [{
            type: Component,
            args: [{ selector: 'esn-table, table[esn-table]', exportAs: 'esnTable', template: CDK_TABLE_TEMPLATE, host: {
                        'class': 'esn-table',
                        '[class.mat-table-fixed-layout]': 'fixedLayout',
                    }, providers: [
                        // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
                        //  is only included in the build if used.
                        { provide: _VIEW_REPEATER_STRATEGY, useClass: _DisposeViewRepeaterStrategy },
                        { provide: CdkTable, useExisting: EsnTable },
                        { provide: CDK_TABLE, useExisting: EsnTable },
                        { provide: _COALESCED_STYLE_SCHEDULER, useClass: _CoalescedStyleScheduler },
                        // Prevent nested tables from seeing this table's StickyPositioningListener.
                        { provide: STICKY_POSITIONING_LISTENER, useValue: null },
                    ], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.Default, styles: ["esn-table{display:block}esn-header-row{min-height:56px}esn-row,esn-footer-row{min-height:48px}esn-row,esn-header-row,esn-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}esn-cell:first-of-type,esn-header-cell:first-of-type,esn-footer-cell:first-of-type{padding-left:24px}[dir=rtl] esn-cell:first-of-type:not(:only-of-type),[dir=rtl] esn-header-cell:first-of-type:not(:only-of-type),[dir=rtl] esn-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}esn-cell:last-of-type,esn-header-cell:last-of-type,esn-footer-cell:last-of-type{padding-right:24px}[dir=rtl] esn-cell:last-of-type:not(:only-of-type),[dir=rtl] esn-header-cell:last-of-type:not(:only-of-type),[dir=rtl] esn-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}esn-cell,esn-header-cell,esn-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.esn-table{width:100%;border-spacing:0;background-color:transparent!important}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{font-size:.875rem;line-height:1.25rem;font-weight:400;height:48px}th.mat-header-cell{font-size:.75rem;line-height:1.125rem;font-weight:400;text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}td{padding-right:1rem!important}.mat-table-sticky{position:sticky!important}.mat-table-fixed-layout{table-layout:fixed}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS90YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLFFBQVEsRUFDUixTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLDBCQUEwQixFQUMxQiwyQkFBMkIsR0FDNUIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQ0wsNEJBQTRCLEVBQzVCLDRCQUE0QixFQUM1Qix1QkFBdUIsR0FDeEIsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBRWxDOzs7R0FHRztBQUtILE1BQU0sT0FBTyxjQUFjOzs0R0FBZCxjQUFjO2dHQUFkLGNBQWMsZ0ZBRmQsQ0FBQyxFQUFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxRQUFRLEVBQUUsNEJBQTRCLEVBQUMsQ0FBQzs0RkFFNUUsY0FBYztrQkFKMUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsdURBQXVEO29CQUNqRSxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxRQUFRLEVBQUUsNEJBQTRCLEVBQUMsQ0FBQztpQkFDeEY7O0FBR0Q7O0dBRUc7QUF5QkgsTUFBTSxPQUFPLFFBQVksU0FBUSxRQUFXO0lBeEI1Qzs7UUF5QkUsNERBQTREO1FBQ3pDLG1CQUFjLEdBQUcsa0JBQWtCLENBQUM7UUFFdkQsNkZBQTZGO1FBQzFFLGlDQUE0QixHQUFHLEtBQUssQ0FBQztLQWF6RDtJQVhVLFFBQVE7UUFDZixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFakIsNEZBQTRGO1FBQzVGLDhGQUE4RjtRQUM5RiwrRkFBK0Y7UUFDL0YsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BFLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDOztzR0FqQlUsUUFBUTswRkFBUixRQUFRLDRKQWZSO1FBQ1QsZ0dBQWdHO1FBQ2hHLDBDQUEwQztRQUMxQyxFQUFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxRQUFRLEVBQUUsNEJBQTRCLEVBQUM7UUFDMUUsRUFBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUM7UUFDMUMsRUFBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUM7UUFDM0MsRUFBQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFDO1FBQ3pFLDRFQUE0RTtRQUM1RSxFQUFDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO0tBQ3ZEOzRGQU1VLFFBQVE7a0JBeEJwQixTQUFTOytCQUNFLDZCQUE2QixZQUM3QixVQUFVLFlBQ1Ysa0JBQWtCLFFBRXRCO3dCQUNKLE9BQU8sRUFBRSxXQUFXO3dCQUNwQixnQ0FBZ0MsRUFBRSxhQUFhO3FCQUNoRCxhQUNVO3dCQUNULGdHQUFnRzt3QkFDaEcsMENBQTBDO3dCQUMxQyxFQUFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxRQUFRLEVBQUUsNEJBQTRCLEVBQUM7d0JBQzFFLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLFVBQVUsRUFBQzt3QkFDMUMsRUFBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsVUFBVSxFQUFDO3dCQUMzQyxFQUFDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxRQUFRLEVBQUUsd0JBQXdCLEVBQUM7d0JBQ3pFLDRFQUE0RTt3QkFDNUUsRUFBQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQztxQkFDdkQsaUJBQ2MsaUJBQWlCLENBQUMsSUFBSSxtQkFHcEIsdUJBQXVCLENBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDREtfVEFCTEVfVEVNUExBVEUsXHJcbiAgQ2RrVGFibGUsXHJcbiAgQ0RLX1RBQkxFLFxyXG4gIF9Db2FsZXNjZWRTdHlsZVNjaGVkdWxlcixcclxuICBfQ09BTEVTQ0VEX1NUWUxFX1NDSEVEVUxFUixcclxuICBTVElDS1lfUE9TSVRJT05JTkdfTElTVEVORVIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcclxuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBEaXJlY3RpdmUsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBfRGlzcG9zZVZpZXdSZXBlYXRlclN0cmF0ZWd5LFxyXG4gIF9SZWN5Y2xlVmlld1JlcGVhdGVyU3RyYXRlZ3ksXHJcbiAgX1ZJRVdfUkVQRUFURVJfU1RSQVRFR1ksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcclxuXHJcbi8qKlxyXG4gKiBFbmFibGVzIHRoZSByZWN5Y2xlIHZpZXcgcmVwZWF0ZXIgc3RyYXRlZ3ksIHdoaWNoIHJlZHVjZXMgcmVuZGVyaW5nIGxhdGVuY3kuIE5vdCBjb21wYXRpYmxlIHdpdGhcclxuICogdGFibGVzIHRoYXQgYW5pbWF0ZSByb3dzLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdlc24tdGFibGVbcmVjeWNsZVJvd3NdLCB0YWJsZVtlc24tdGFibGVdW3JlY3ljbGVSb3dzXScsXHJcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IF9WSUVXX1JFUEVBVEVSX1NUUkFURUdZLCB1c2VDbGFzczogX1JlY3ljbGVWaWV3UmVwZWF0ZXJTdHJhdGVneX1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuUmVjeWNsZVJvd3Mge31cclxuXHJcbi8qKlxyXG4gKiBXcmFwcGVyIGZvciB0aGUgQ2RrVGFibGUgd2l0aCBNYXRlcmlhbCBkZXNpZ24gc3R5bGVzLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlc24tdGFibGUsIHRhYmxlW2Vzbi10YWJsZV0nLFxyXG4gIGV4cG9ydEFzOiAnZXNuVGFibGUnLFxyXG4gIHRlbXBsYXRlOiBDREtfVEFCTEVfVEVNUExBVEUsXHJcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLnNjc3MnXSxcclxuICBob3N0OiB7XHJcbiAgICAnY2xhc3MnOiAnZXNuLXRhYmxlJyxcclxuICAgICdbY2xhc3MubWF0LXRhYmxlLWZpeGVkLWxheW91dF0nOiAnZml4ZWRMYXlvdXQnLFxyXG4gIH0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICAvLyBUT0RPKG1pY2hhZWxqYW1lc3BhcnNvbnMpIEFic3RyYWN0IHRoZSB2aWV3IHJlcGVhdGVyIHN0cmF0ZWd5IHRvIGEgZGlyZWN0aXZlIEFQSSBzbyB0aGlzIGNvZGVcclxuICAgIC8vICBpcyBvbmx5IGluY2x1ZGVkIGluIHRoZSBidWlsZCBpZiB1c2VkLlxyXG4gICAge3Byb3ZpZGU6IF9WSUVXX1JFUEVBVEVSX1NUUkFURUdZLCB1c2VDbGFzczogX0Rpc3Bvc2VWaWV3UmVwZWF0ZXJTdHJhdGVneX0sXHJcbiAgICB7cHJvdmlkZTogQ2RrVGFibGUsIHVzZUV4aXN0aW5nOiBFc25UYWJsZX0sXHJcbiAgICB7cHJvdmlkZTogQ0RLX1RBQkxFLCB1c2VFeGlzdGluZzogRXNuVGFibGV9LFxyXG4gICAge3Byb3ZpZGU6IF9DT0FMRVNDRURfU1RZTEVfU0NIRURVTEVSLCB1c2VDbGFzczogX0NvYWxlc2NlZFN0eWxlU2NoZWR1bGVyfSxcclxuICAgIC8vIFByZXZlbnQgbmVzdGVkIHRhYmxlcyBmcm9tIHNlZWluZyB0aGlzIHRhYmxlJ3MgU3RpY2t5UG9zaXRpb25pbmdMaXN0ZW5lci5cclxuICAgIHtwcm92aWRlOiBTVElDS1lfUE9TSVRJT05JTkdfTElTVEVORVIsIHVzZVZhbHVlOiBudWxsfSxcclxuICBdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgLy8gU2VlIG5vdGUgb24gQ2RrVGFibGUgZm9yIGV4cGxhbmF0aW9uIG9uIHdoeSB0aGlzIHVzZXMgdGhlIGRlZmF1bHQgY2hhbmdlIGRldGVjdGlvbiBzdHJhdGVneS5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFsaWRhdGUtZGVjb3JhdG9yc1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzblRhYmxlPFQ+IGV4dGVuZHMgQ2RrVGFibGU8VD4ge1xyXG4gIC8qKiBPdmVycmlkZXMgdGhlIHN0aWNreSBDU1MgY2xhc3Mgc2V0IGJ5IHRoZSBgQ2RrVGFibGVgLiAqL1xyXG4gIHByb3RlY3RlZCBvdmVycmlkZSBzdGlja3lDc3NDbGFzcyA9ICdtYXQtdGFibGUtc3RpY2t5JztcclxuXHJcbiAgLyoqIE92ZXJyaWRlcyB0aGUgbmVlZCB0byBhZGQgcG9zaXRpb246IHN0aWNreSBvbiBldmVyeSBzdGlja3kgY2VsbCBlbGVtZW50IGluIGBDZGtUYWJsZWAuICovXHJcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIG5lZWRzUG9zaXRpb25TdGlja3lPbkVsZW1lbnQgPSBmYWxzZTtcclxuXHJcbiAgb3ZlcnJpZGUgbmdPbkluaXQoKSB7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG5cclxuICAgIC8vIEFmdGVyIG5nT25Jbml0LCB0aGUgYENka1RhYmxlYCBoYXMgY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgdGhlIHRhYmxlIHNlY3Rpb25zICh0aGVhZCwgdGJvZHksXHJcbiAgICAvLyB0Zm9vdCkuIE1EQyByZXF1aXJlcyB0aGUgYG1kYy1kYXRhLXRhYmxlX19jb250ZW50YCBjbGFzcyB0byBiZSBhZGRlZCB0byB0aGUgYm9keS4gTm90ZSB0aGF0XHJcbiAgICAvLyB0aGlzIG9ubHkgYXBwbGllcyB0byBuYXRpdmUgdGFibGVzLCBiZWNhdXNlIHdlIGRvbid0IHdyYXAgdGhlIGNvbnRlbnQgb2YgZmxleGJveC1iYXNlZCBvbmVzLlxyXG4gICAgaWYgKHRoaXMuX2lzTmF0aXZlSHRtbFRhYmxlKSB7XHJcbiAgICAgIGNvbnN0IHRib2R5ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Rib2R5Jyk7XHJcbiAgICAgIHRib2R5LmNsYXNzTGlzdC5hZGQoJ21kYy1kYXRhLXRhYmxlX19jb250ZW50Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==