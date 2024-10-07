/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CDK_ROW_TEMPLATE, CdkFooterRow, CdkFooterRowDef, CdkHeaderRow, CdkHeaderRowDef, CdkRow, CdkRowDef, CdkNoDataRow, } from '@angular/cdk/table';
import { ChangeDetectionStrategy, Component, Directive, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/table";
/**
 * Header row definition for the esn-table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
export class EsnHeaderRowDef extends CdkHeaderRowDef {
}
EsnHeaderRowDef.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnHeaderRowDef, deps: null, target: i0.ɵɵFactoryTarget.Directive });
EsnHeaderRowDef.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: EsnHeaderRowDef, selector: "[esnHeaderRowDef]", inputs: { columns: ["esnHeaderRowDef", "columns"], sticky: ["esnHeaderRowDefSticky", "sticky"] }, providers: [{ provide: CdkHeaderRowDef, useExisting: EsnHeaderRowDef }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnHeaderRowDef, decorators: [{
            type: Directive,
            args: [{
                    selector: '[esnHeaderRowDef]',
                    providers: [{ provide: CdkHeaderRowDef, useExisting: EsnHeaderRowDef }],
                    inputs: ['columns: esnHeaderRowDef', 'sticky: esnHeaderRowDefSticky'],
                }]
        }] });
/**
 * Footer row definition for the esn-table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
export class EsnFooterRowDef extends CdkFooterRowDef {
}
EsnFooterRowDef.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnFooterRowDef, deps: null, target: i0.ɵɵFactoryTarget.Directive });
EsnFooterRowDef.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: EsnFooterRowDef, selector: "[esnFooterRowDef]", inputs: { columns: ["esnFooterRowDef", "columns"], sticky: ["esnFooterRowDefSticky", "sticky"] }, providers: [{ provide: CdkFooterRowDef, useExisting: EsnFooterRowDef }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnFooterRowDef, decorators: [{
            type: Directive,
            args: [{
                    selector: '[esnFooterRowDef]',
                    providers: [{ provide: CdkFooterRowDef, useExisting: EsnFooterRowDef }],
                    inputs: ['columns: esnFooterRowDef', 'sticky: esnFooterRowDefSticky'],
                }]
        }] });
/**
 * Data row definition for the esn-table.
 * Captures the data row's template and other properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
export class EsnRowDef extends CdkRowDef {
}
EsnRowDef.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnRowDef, deps: null, target: i0.ɵɵFactoryTarget.Directive });
EsnRowDef.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: EsnRowDef, selector: "[esnRowDef]", inputs: { columns: ["esnRowDefColumns", "columns"], when: ["esnRowDefWhen", "when"] }, providers: [{ provide: CdkRowDef, useExisting: EsnRowDef }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnRowDef, decorators: [{
            type: Directive,
            args: [{
                    selector: '[esnRowDef]',
                    providers: [{ provide: CdkRowDef, useExisting: EsnRowDef }],
                    inputs: ['columns: esnRowDefColumns', 'when: esnRowDefWhen'],
                }]
        }] });
/** Header template container that contains the cell outlet. Adds the right class and role. */
export class EsnHeaderRow extends CdkHeaderRow {
}
EsnHeaderRow.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnHeaderRow, deps: null, target: i0.ɵɵFactoryTarget.Component });
EsnHeaderRow.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnHeaderRow, selector: "esn-header-row, tr[esn-header-row]", host: { attributes: { "role": "row" }, classAttribute: "mat-header-row" }, providers: [{ provide: CdkHeaderRow, useExisting: EsnHeaderRow }], exportAs: ["esnHeaderRow"], usesInheritance: true, ngImport: i0, template: "<ng-container cdkCellOutlet></ng-container>", isInline: true, dependencies: [{ kind: "directive", type: i1.CdkCellOutlet, selector: "[cdkCellOutlet]" }], changeDetection: i0.ChangeDetectionStrategy.Default, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnHeaderRow, decorators: [{
            type: Component,
            args: [{
                    selector: 'esn-header-row, tr[esn-header-row]',
                    template: CDK_ROW_TEMPLATE,
                    host: {
                        'class': 'mat-header-row',
                        'role': 'row',
                    },
                    // See note on CdkTable for explanation on why this uses the default change detection strategy.
                    // tslint:disable-next-line:validate-decorators
                    changeDetection: ChangeDetectionStrategy.Default,
                    encapsulation: ViewEncapsulation.None,
                    exportAs: 'esnHeaderRow',
                    providers: [{ provide: CdkHeaderRow, useExisting: EsnHeaderRow }],
                }]
        }] });
/** Footer template container that contains the cell outlet. Adds the right class and role. */
export class EsnFooterRow extends CdkFooterRow {
}
EsnFooterRow.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnFooterRow, deps: null, target: i0.ɵɵFactoryTarget.Component });
EsnFooterRow.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnFooterRow, selector: "esn-footer-row, tr[esn-footer-row]", host: { attributes: { "role": "row" }, classAttribute: "mat-footer-row" }, providers: [{ provide: CdkFooterRow, useExisting: EsnFooterRow }], exportAs: ["esnFooterRow"], usesInheritance: true, ngImport: i0, template: "<ng-container cdkCellOutlet></ng-container>", isInline: true, dependencies: [{ kind: "directive", type: i1.CdkCellOutlet, selector: "[cdkCellOutlet]" }], changeDetection: i0.ChangeDetectionStrategy.Default, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnFooterRow, decorators: [{
            type: Component,
            args: [{
                    selector: 'esn-footer-row, tr[esn-footer-row]',
                    template: CDK_ROW_TEMPLATE,
                    host: {
                        'class': 'mat-footer-row',
                        'role': 'row',
                    },
                    // See note on CdkTable for explanation on why this uses the default change detection strategy.
                    // tslint:disable-next-line:validate-decorators
                    changeDetection: ChangeDetectionStrategy.Default,
                    encapsulation: ViewEncapsulation.None,
                    exportAs: 'esnFooterRow',
                    providers: [{ provide: CdkFooterRow, useExisting: EsnFooterRow }],
                }]
        }] });
/** Data row template container that contains the cell outlet. Adds the right class and role. */
export class EsnRow extends CdkRow {
}
EsnRow.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnRow, deps: null, target: i0.ɵɵFactoryTarget.Component });
EsnRow.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnRow, selector: "esn-row, tr[esn-row]", host: { attributes: { "role": "row" }, classAttribute: "mat-row" }, providers: [{ provide: CdkRow, useExisting: EsnRow }], exportAs: ["esnRow"], usesInheritance: true, ngImport: i0, template: "<ng-container cdkCellOutlet></ng-container>", isInline: true, dependencies: [{ kind: "directive", type: i1.CdkCellOutlet, selector: "[cdkCellOutlet]" }], changeDetection: i0.ChangeDetectionStrategy.Default, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnRow, decorators: [{
            type: Component,
            args: [{
                    selector: 'esn-row, tr[esn-row]',
                    template: CDK_ROW_TEMPLATE,
                    host: {
                        'class': 'mat-row',
                        'role': 'row',
                    },
                    // See note on CdkTable for explanation on why this uses the default change detection strategy.
                    // tslint:disable-next-line:validate-decorators
                    changeDetection: ChangeDetectionStrategy.Default,
                    encapsulation: ViewEncapsulation.None,
                    exportAs: 'esnRow',
                    providers: [{ provide: CdkRow, useExisting: EsnRow }],
                }]
        }] });
/** Row that can be used to display a message when no data is shown in the table. */
export class EsnNoDataRow extends CdkNoDataRow {
    constructor() {
        super(...arguments);
        this._contentClassName = 'mat-no-data-row';
    }
}
EsnNoDataRow.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnNoDataRow, deps: null, target: i0.ɵɵFactoryTarget.Directive });
EsnNoDataRow.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: EsnNoDataRow, selector: "ng-template[esnNoDataRow]", providers: [{ provide: CdkNoDataRow, useExisting: EsnNoDataRow }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnNoDataRow, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ng-template[esnNoDataRow]',
                    providers: [{ provide: CdkNoDataRow, useExisting: EsnNoDataRow }],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUvcm93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLGVBQWUsRUFDZixZQUFZLEVBQ1osZUFBZSxFQUNmLE1BQU0sRUFDTixTQUFTLEVBQ1QsWUFBWSxHQUNiLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUUvRjs7O0dBR0c7QUFNSCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxlQUFlOzs2R0FBdkMsZUFBZTtpR0FBZixlQUFlLDhJQUhmLENBQUMsRUFBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUMsQ0FBQzs0RkFHMUQsZUFBZTtrQkFMM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxpQkFBaUIsRUFBQyxDQUFDO29CQUNyRSxNQUFNLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSwrQkFBK0IsQ0FBQztpQkFDdEU7O0FBR0Q7OztHQUdHO0FBTUgsTUFBTSxPQUFPLGVBQWdCLFNBQVEsZUFBZTs7NkdBQXZDLGVBQWU7aUdBQWYsZUFBZSw4SUFIZixDQUFDLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFDLENBQUM7NEZBRzFELGVBQWU7a0JBTDNCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsaUJBQWlCLEVBQUMsQ0FBQztvQkFDckUsTUFBTSxFQUFFLENBQUMsMEJBQTBCLEVBQUUsK0JBQStCLENBQUM7aUJBQ3RFOztBQUdEOzs7O0dBSUc7QUFNSCxNQUFNLE9BQU8sU0FBYSxTQUFRLFNBQVk7O3VHQUFqQyxTQUFTOzJGQUFULFNBQVMsNkhBSFQsQ0FBQyxFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBQyxDQUFDOzRGQUc5QyxTQUFTO2tCQUxyQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxXQUFXLEVBQUMsQ0FBQztvQkFDekQsTUFBTSxFQUFFLENBQUMsMkJBQTJCLEVBQUUscUJBQXFCLENBQUM7aUJBQzdEOztBQUdELDhGQUE4RjtBQWU5RixNQUFNLE9BQU8sWUFBYSxTQUFRLFlBQVk7OzBHQUFqQyxZQUFZOzhGQUFaLFlBQVksd0lBRlosQ0FBQyxFQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBQyxDQUFDOzRGQUVwRCxZQUFZO2tCQWR4QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxvQ0FBb0M7b0JBQzlDLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLElBQUksRUFBRTt3QkFDSixPQUFPLEVBQUUsZ0JBQWdCO3dCQUN6QixNQUFNLEVBQUUsS0FBSztxQkFDZDtvQkFDRCwrRkFBK0Y7b0JBQy9GLCtDQUErQztvQkFDL0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE9BQU87b0JBQ2hELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsY0FBYztvQkFDeEIsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsY0FBYyxFQUFDLENBQUM7aUJBQ2hFOztBQUdELDhGQUE4RjtBQWU5RixNQUFNLE9BQU8sWUFBYSxTQUFRLFlBQVk7OzBHQUFqQyxZQUFZOzhGQUFaLFlBQVksd0lBRlosQ0FBQyxFQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBQyxDQUFDOzRGQUVwRCxZQUFZO2tCQWR4QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxvQ0FBb0M7b0JBQzlDLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLElBQUksRUFBRTt3QkFDSixPQUFPLEVBQUUsZ0JBQWdCO3dCQUN6QixNQUFNLEVBQUUsS0FBSztxQkFDZDtvQkFDRCwrRkFBK0Y7b0JBQy9GLCtDQUErQztvQkFDL0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE9BQU87b0JBQ2hELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsY0FBYztvQkFDeEIsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsY0FBYyxFQUFDLENBQUM7aUJBQ2hFOztBQUdELGdHQUFnRztBQWVoRyxNQUFNLE9BQU8sTUFBTyxTQUFRLE1BQU07O29HQUFyQixNQUFNO3dGQUFOLE1BQU0sbUhBRk4sQ0FBQyxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBQyxDQUFDOzRGQUV4QyxNQUFNO2tCQWRsQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLElBQUksRUFBRTt3QkFDSixPQUFPLEVBQUUsU0FBUzt3QkFDbEIsTUFBTSxFQUFFLEtBQUs7cUJBQ2Q7b0JBQ0QsK0ZBQStGO29CQUMvRiwrQ0FBK0M7b0JBQy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxPQUFPO29CQUNoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxXQUFXLFFBQVEsRUFBQyxDQUFDO2lCQUNwRDs7QUFHRCxvRkFBb0Y7QUFLcEYsTUFBTSxPQUFPLFlBQWEsU0FBUSxZQUFZO0lBSjlDOztRQUtXLHNCQUFpQixHQUFHLGlCQUFpQixDQUFDO0tBQ2hEOzswR0FGWSxZQUFZOzhGQUFaLFlBQVksb0RBRlosQ0FBQyxFQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBQyxDQUFDOzRGQUVwRCxZQUFZO2tCQUp4QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLGNBQWMsRUFBQyxDQUFDO2lCQUNoRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDREtfUk9XX1RFTVBMQVRFLFxyXG4gIENka0Zvb3RlclJvdyxcclxuICBDZGtGb290ZXJSb3dEZWYsXHJcbiAgQ2RrSGVhZGVyUm93LFxyXG4gIENka0hlYWRlclJvd0RlZixcclxuICBDZGtSb3csXHJcbiAgQ2RrUm93RGVmLFxyXG4gIENka05vRGF0YVJvdyxcclxufSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xyXG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIERpcmVjdGl2ZSwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEhlYWRlciByb3cgZGVmaW5pdGlvbiBmb3IgdGhlIGVzbi10YWJsZS5cclxuICogQ2FwdHVyZXMgdGhlIGhlYWRlciByb3cncyB0ZW1wbGF0ZSBhbmQgb3RoZXIgaGVhZGVyIHByb3BlcnRpZXMgc3VjaCBhcyB0aGUgY29sdW1ucyB0byBkaXNwbGF5LlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZXNuSGVhZGVyUm93RGVmXScsXHJcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IENka0hlYWRlclJvd0RlZiwgdXNlRXhpc3Rpbmc6IEVzbkhlYWRlclJvd0RlZn1dLFxyXG4gIGlucHV0czogWydjb2x1bW5zOiBlc25IZWFkZXJSb3dEZWYnLCAnc3RpY2t5OiBlc25IZWFkZXJSb3dEZWZTdGlja3knXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzbkhlYWRlclJvd0RlZiBleHRlbmRzIENka0hlYWRlclJvd0RlZiB7fVxyXG5cclxuLyoqXHJcbiAqIEZvb3RlciByb3cgZGVmaW5pdGlvbiBmb3IgdGhlIGVzbi10YWJsZS5cclxuICogQ2FwdHVyZXMgdGhlIGZvb3RlciByb3cncyB0ZW1wbGF0ZSBhbmQgb3RoZXIgZm9vdGVyIHByb3BlcnRpZXMgc3VjaCBhcyB0aGUgY29sdW1ucyB0byBkaXNwbGF5LlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZXNuRm9vdGVyUm93RGVmXScsXHJcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IENka0Zvb3RlclJvd0RlZiwgdXNlRXhpc3Rpbmc6IEVzbkZvb3RlclJvd0RlZn1dLFxyXG4gIGlucHV0czogWydjb2x1bW5zOiBlc25Gb290ZXJSb3dEZWYnLCAnc3RpY2t5OiBlc25Gb290ZXJSb3dEZWZTdGlja3knXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzbkZvb3RlclJvd0RlZiBleHRlbmRzIENka0Zvb3RlclJvd0RlZiB7fVxyXG5cclxuLyoqXHJcbiAqIERhdGEgcm93IGRlZmluaXRpb24gZm9yIHRoZSBlc24tdGFibGUuXHJcbiAqIENhcHR1cmVzIHRoZSBkYXRhIHJvdydzIHRlbXBsYXRlIGFuZCBvdGhlciBwcm9wZXJ0aWVzIHN1Y2ggYXMgdGhlIGNvbHVtbnMgdG8gZGlzcGxheSBhbmRcclxuICogYSB3aGVuIHByZWRpY2F0ZSB0aGF0IGRlc2NyaWJlcyB3aGVuIHRoaXMgcm93IHNob3VsZCBiZSB1c2VkLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZXNuUm93RGVmXScsXHJcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IENka1Jvd0RlZiwgdXNlRXhpc3Rpbmc6IEVzblJvd0RlZn1dLFxyXG4gIGlucHV0czogWydjb2x1bW5zOiBlc25Sb3dEZWZDb2x1bW5zJywgJ3doZW46IGVzblJvd0RlZldoZW4nXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzblJvd0RlZjxUPiBleHRlbmRzIENka1Jvd0RlZjxUPiB7fVxyXG5cclxuLyoqIEhlYWRlciB0ZW1wbGF0ZSBjb250YWluZXIgdGhhdCBjb250YWlucyB0aGUgY2VsbCBvdXRsZXQuIEFkZHMgdGhlIHJpZ2h0IGNsYXNzIGFuZCByb2xlLiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Vzbi1oZWFkZXItcm93LCB0cltlc24taGVhZGVyLXJvd10nLFxyXG4gIHRlbXBsYXRlOiBDREtfUk9XX1RFTVBMQVRFLFxyXG4gIGhvc3Q6IHtcclxuICAgICdjbGFzcyc6ICdtYXQtaGVhZGVyLXJvdycsXHJcbiAgICAncm9sZSc6ICdyb3cnLFxyXG4gIH0sXHJcbiAgLy8gU2VlIG5vdGUgb24gQ2RrVGFibGUgZm9yIGV4cGxhbmF0aW9uIG9uIHdoeSB0aGlzIHVzZXMgdGhlIGRlZmF1bHQgY2hhbmdlIGRldGVjdGlvbiBzdHJhdGVneS5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFsaWRhdGUtZGVjb3JhdG9yc1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGV4cG9ydEFzOiAnZXNuSGVhZGVyUm93JyxcclxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogQ2RrSGVhZGVyUm93LCB1c2VFeGlzdGluZzogRXNuSGVhZGVyUm93fV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25IZWFkZXJSb3cgZXh0ZW5kcyBDZGtIZWFkZXJSb3cge31cclxuXHJcbi8qKiBGb290ZXIgdGVtcGxhdGUgY29udGFpbmVyIHRoYXQgY29udGFpbnMgdGhlIGNlbGwgb3V0bGV0LiBBZGRzIHRoZSByaWdodCBjbGFzcyBhbmQgcm9sZS4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlc24tZm9vdGVyLXJvdywgdHJbZXNuLWZvb3Rlci1yb3ddJyxcclxuICB0ZW1wbGF0ZTogQ0RLX1JPV19URU1QTEFURSxcclxuICBob3N0OiB7XHJcbiAgICAnY2xhc3MnOiAnbWF0LWZvb3Rlci1yb3cnLFxyXG4gICAgJ3JvbGUnOiAncm93JyxcclxuICB9LFxyXG4gIC8vIFNlZSBub3RlIG9uIENka1RhYmxlIGZvciBleHBsYW5hdGlvbiBvbiB3aHkgdGhpcyB1c2VzIHRoZSBkZWZhdWx0IGNoYW5nZSBkZXRlY3Rpb24gc3RyYXRlZ3kuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhbGlkYXRlLWRlY29yYXRvcnNcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBleHBvcnRBczogJ2VzbkZvb3RlclJvdycsXHJcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IENka0Zvb3RlclJvdywgdXNlRXhpc3Rpbmc6IEVzbkZvb3RlclJvd31dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuRm9vdGVyUm93IGV4dGVuZHMgQ2RrRm9vdGVyUm93IHt9XHJcblxyXG4vKiogRGF0YSByb3cgdGVtcGxhdGUgY29udGFpbmVyIHRoYXQgY29udGFpbnMgdGhlIGNlbGwgb3V0bGV0LiBBZGRzIHRoZSByaWdodCBjbGFzcyBhbmQgcm9sZS4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlc24tcm93LCB0cltlc24tcm93XScsXHJcbiAgdGVtcGxhdGU6IENES19ST1dfVEVNUExBVEUsXHJcbiAgaG9zdDoge1xyXG4gICAgJ2NsYXNzJzogJ21hdC1yb3cnLFxyXG4gICAgJ3JvbGUnOiAncm93JyxcclxuICB9LFxyXG4gIC8vIFNlZSBub3RlIG9uIENka1RhYmxlIGZvciBleHBsYW5hdGlvbiBvbiB3aHkgdGhpcyB1c2VzIHRoZSBkZWZhdWx0IGNoYW5nZSBkZXRlY3Rpb24gc3RyYXRlZ3kuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhbGlkYXRlLWRlY29yYXRvcnNcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBleHBvcnRBczogJ2VzblJvdycsXHJcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IENka1JvdywgdXNlRXhpc3Rpbmc6IEVzblJvd31dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuUm93IGV4dGVuZHMgQ2RrUm93IHt9XHJcblxyXG4vKiogUm93IHRoYXQgY2FuIGJlIHVzZWQgdG8gZGlzcGxheSBhIG1lc3NhZ2Ugd2hlbiBubyBkYXRhIGlzIHNob3duIGluIHRoZSB0YWJsZS4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVtlc25Ob0RhdGFSb3ddJyxcclxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogQ2RrTm9EYXRhUm93LCB1c2VFeGlzdGluZzogRXNuTm9EYXRhUm93fV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25Ob0RhdGFSb3cgZXh0ZW5kcyBDZGtOb0RhdGFSb3cge1xyXG4gIG92ZXJyaWRlIF9jb250ZW50Q2xhc3NOYW1lID0gJ21hdC1uby1kYXRhLXJvdyc7XHJcbn1cclxuIl19