/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, Input } from '@angular/core';
import { CdkCell, CdkCellDef, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkHeaderCell, CdkHeaderCellDef, } from '@angular/cdk/table';
import * as i0 from "@angular/core";
/**
 * Cell definition for the esn-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
export class EsnCellDef extends CdkCellDef {
}
EsnCellDef.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnCellDef, deps: null, target: i0.ɵɵFactoryTarget.Directive });
EsnCellDef.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: EsnCellDef, selector: "[esnCellDef]", providers: [{ provide: CdkCellDef, useExisting: EsnCellDef }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnCellDef, decorators: [{
            type: Directive,
            args: [{
                    selector: '[esnCellDef]',
                    providers: [{ provide: CdkCellDef, useExisting: EsnCellDef }],
                }]
        }] });
/**
 * Header cell definition for the esn-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
export class EsnHeaderCellDef extends CdkHeaderCellDef {
}
EsnHeaderCellDef.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnHeaderCellDef, deps: null, target: i0.ɵɵFactoryTarget.Directive });
EsnHeaderCellDef.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: EsnHeaderCellDef, selector: "[esnHeaderCellDef]", providers: [{ provide: CdkHeaderCellDef, useExisting: EsnHeaderCellDef }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnHeaderCellDef, decorators: [{
            type: Directive,
            args: [{
                    selector: '[esnHeaderCellDef]',
                    providers: [{ provide: CdkHeaderCellDef, useExisting: EsnHeaderCellDef }],
                }]
        }] });
/**
 * Footer cell definition for the mat-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
export class EsnFooterCellDef extends CdkFooterCellDef {
}
EsnFooterCellDef.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnFooterCellDef, deps: null, target: i0.ɵɵFactoryTarget.Directive });
EsnFooterCellDef.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: EsnFooterCellDef, selector: "[esnFooterCellDef]", providers: [{ provide: CdkFooterCellDef, useExisting: EsnFooterCellDef }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnFooterCellDef, decorators: [{
            type: Directive,
            args: [{
                    selector: '[esnFooterCellDef]',
                    providers: [{ provide: CdkFooterCellDef, useExisting: EsnFooterCellDef }],
                }]
        }] });
/**
 * Column definition for the esn-table.
 * Defines a set of cells available for a table column.
 */
export class EsnColumnDef extends CdkColumnDef {
    /** Unique name for this column. */
    get name() {
        return this._name;
    }
    set name(name) {
        this._setNameInput(name);
    }
    /**
     * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
     * In the future, this will only add "mat-column-" and columnCssClassName
     * will change from type string[] to string.
     * @docs-private
     */
    _updateColumnCssClassName() {
        super._updateColumnCssClassName();
        this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`);
    }
}
EsnColumnDef.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnColumnDef, deps: null, target: i0.ɵɵFactoryTarget.Directive });
EsnColumnDef.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: EsnColumnDef, selector: "[esnColumnDef]", inputs: { sticky: "sticky", name: ["esnColumnDef", "name"] }, providers: [
        { provide: CdkColumnDef, useExisting: EsnColumnDef },
        { provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: EsnColumnDef },
    ], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnColumnDef, decorators: [{
            type: Directive,
            args: [{
                    selector: '[esnColumnDef]',
                    inputs: ['sticky'],
                    providers: [
                        { provide: CdkColumnDef, useExisting: EsnColumnDef },
                        { provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: EsnColumnDef },
                    ],
                }]
        }], propDecorators: { name: [{
                type: Input,
                args: ['esnColumnDef']
            }] } });
/** Header cell template container that adds the right classes and role. */
export class EsnHeaderCell extends CdkHeaderCell {
}
EsnHeaderCell.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnHeaderCell, deps: null, target: i0.ɵɵFactoryTarget.Directive });
EsnHeaderCell.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: EsnHeaderCell, selector: "esn-header-cell, th[esn-header-cell]", host: { attributes: { "role": "columnheader" }, classAttribute: "mat-header-cell" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnHeaderCell, decorators: [{
            type: Directive,
            args: [{
                    selector: 'esn-header-cell, th[esn-header-cell]',
                    host: {
                        'class': 'mat-header-cell',
                        'role': 'columnheader',
                    },
                }]
        }] });
/** Footer cell template container that adds the right classes and role. */
export class EsnFooterCell extends CdkFooterCell {
}
EsnFooterCell.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnFooterCell, deps: null, target: i0.ɵɵFactoryTarget.Directive });
EsnFooterCell.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: EsnFooterCell, selector: "esn-footer-cell, td[esn-footer-cell]", host: { attributes: { "role": "gridcell" }, classAttribute: "mat-footer-cell" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnFooterCell, decorators: [{
            type: Directive,
            args: [{
                    selector: 'esn-footer-cell, td[esn-footer-cell]',
                    host: {
                        'class': 'mat-footer-cell',
                        'role': 'gridcell',
                    },
                }]
        }] });
/** Cell template container that adds the right classes and role. */
export class EsnCell extends CdkCell {
}
EsnCell.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnCell, deps: null, target: i0.ɵɵFactoryTarget.Directive });
EsnCell.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: EsnCell, selector: "esn-cell, td[esn-cell]", host: { attributes: { "role": "gridcell" }, classAttribute: "mat-cell" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnCell, decorators: [{
            type: Directive,
            args: [{
                    selector: 'esn-cell, td[esn-cell]',
                    host: {
                        'class': 'mat-cell',
                        'role': 'gridcell',
                    },
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL2NlbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUNMLE9BQU8sRUFDUCxVQUFVLEVBQ1YsWUFBWSxFQUNaLGFBQWEsRUFDYixnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLGdCQUFnQixHQUNqQixNQUFNLG9CQUFvQixDQUFDOztBQUU1Qjs7O0dBR0c7QUFLSCxNQUFNLE9BQU8sVUFBVyxTQUFRLFVBQVU7O3dHQUE3QixVQUFVOzRGQUFWLFVBQVUsdUNBRlYsQ0FBQyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBQyxDQUFDOzRGQUVoRCxVQUFVO2tCQUp0QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxZQUFZLEVBQUMsQ0FBQztpQkFDNUQ7O0FBR0Q7OztHQUdHO0FBS0gsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjs7OEdBQXpDLGdCQUFnQjtrR0FBaEIsZ0JBQWdCLDZDQUZoQixDQUFDLEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBQyxDQUFDOzRGQUU1RCxnQkFBZ0I7a0JBSjVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxrQkFBa0IsRUFBQyxDQUFDO2lCQUN4RTs7QUFHRDs7O0dBR0c7QUFLSCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsZ0JBQWdCOzs4R0FBekMsZ0JBQWdCO2tHQUFoQixnQkFBZ0IsNkNBRmhCLENBQUMsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFDLENBQUM7NEZBRTVELGdCQUFnQjtrQkFKNUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLGtCQUFrQixFQUFDLENBQUM7aUJBQ3hFOztBQUdEOzs7R0FHRztBQVNILE1BQU0sT0FBTyxZQUFhLFNBQVEsWUFBWTtJQUM1QyxtQ0FBbUM7SUFDbkMsSUFDYSxJQUFJO1FBQ2YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxJQUFhLElBQUksQ0FBQyxJQUFZO1FBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ2dCLHlCQUF5QjtRQUMxQyxLQUFLLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsbUJBQW9CLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztJQUM1RSxDQUFDOzswR0FuQlUsWUFBWTs4RkFBWixZQUFZLHVHQUxaO1FBQ1QsRUFBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUM7UUFDbEQsRUFBQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBQztLQUNuRTs0RkFFVSxZQUFZO2tCQVJ4QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQztvQkFDbEIsU0FBUyxFQUFFO3dCQUNULEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLGNBQWMsRUFBQzt3QkFDbEQsRUFBQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsV0FBVyxjQUFjLEVBQUM7cUJBQ25FO2lCQUNGOzhCQUljLElBQUk7c0JBRGhCLEtBQUs7dUJBQUMsY0FBYzs7QUFvQnZCLDJFQUEyRTtBQVEzRSxNQUFNLE9BQU8sYUFBYyxTQUFRLGFBQWE7OzJHQUFuQyxhQUFhOytGQUFiLGFBQWE7NEZBQWIsYUFBYTtrQkFQekIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsc0NBQXNDO29CQUNoRCxJQUFJLEVBQUU7d0JBQ0osT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsTUFBTSxFQUFFLGNBQWM7cUJBQ3ZCO2lCQUNGOztBQUdELDJFQUEyRTtBQVEzRSxNQUFNLE9BQU8sYUFBYyxTQUFRLGFBQWE7OzJHQUFuQyxhQUFhOytGQUFiLGFBQWE7NEZBQWIsYUFBYTtrQkFQekIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsc0NBQXNDO29CQUNoRCxJQUFJLEVBQUU7d0JBQ0osT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsTUFBTSxFQUFFLFVBQVU7cUJBQ25CO2lCQUNGOztBQUdELG9FQUFvRTtBQVFwRSxNQUFNLE9BQU8sT0FBUSxTQUFRLE9BQU87O3FHQUF2QixPQUFPO3lGQUFQLE9BQU87NEZBQVAsT0FBTztrQkFQbkIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxJQUFJLEVBQUU7d0JBQ0osT0FBTyxFQUFFLFVBQVU7d0JBQ25CLE1BQU0sRUFBRSxVQUFVO3FCQUNuQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDZGtDZWxsLFxyXG4gIENka0NlbGxEZWYsXHJcbiAgQ2RrQ29sdW1uRGVmLFxyXG4gIENka0Zvb3RlckNlbGwsXHJcbiAgQ2RrRm9vdGVyQ2VsbERlZixcclxuICBDZGtIZWFkZXJDZWxsLFxyXG4gIENka0hlYWRlckNlbGxEZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcclxuXHJcbi8qKlxyXG4gKiBDZWxsIGRlZmluaXRpb24gZm9yIHRoZSBlc24tdGFibGUuXHJcbiAqIENhcHR1cmVzIHRoZSB0ZW1wbGF0ZSBvZiBhIGNvbHVtbidzIGRhdGEgcm93IGNlbGwgYXMgd2VsbCBhcyBjZWxsLXNwZWNpZmljIHByb3BlcnRpZXMuXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tlc25DZWxsRGVmXScsXHJcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IENka0NlbGxEZWYsIHVzZUV4aXN0aW5nOiBFc25DZWxsRGVmfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25DZWxsRGVmIGV4dGVuZHMgQ2RrQ2VsbERlZiB7fVxyXG5cclxuLyoqXHJcbiAqIEhlYWRlciBjZWxsIGRlZmluaXRpb24gZm9yIHRoZSBlc24tdGFibGUuXHJcbiAqIENhcHR1cmVzIHRoZSB0ZW1wbGF0ZSBvZiBhIGNvbHVtbidzIGhlYWRlciBjZWxsIGFuZCBhcyB3ZWxsIGFzIGNlbGwtc3BlY2lmaWMgcHJvcGVydGllcy5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2VzbkhlYWRlckNlbGxEZWZdJyxcclxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogQ2RrSGVhZGVyQ2VsbERlZiwgdXNlRXhpc3Rpbmc6IEVzbkhlYWRlckNlbGxEZWZ9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzbkhlYWRlckNlbGxEZWYgZXh0ZW5kcyBDZGtIZWFkZXJDZWxsRGVmIHt9XHJcblxyXG4vKipcclxuICogRm9vdGVyIGNlbGwgZGVmaW5pdGlvbiBmb3IgdGhlIG1hdC10YWJsZS5cclxuICogQ2FwdHVyZXMgdGhlIHRlbXBsYXRlIG9mIGEgY29sdW1uJ3MgZm9vdGVyIGNlbGwgYW5kIGFzIHdlbGwgYXMgY2VsbC1zcGVjaWZpYyBwcm9wZXJ0aWVzLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZXNuRm9vdGVyQ2VsbERlZl0nLFxyXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBDZGtGb290ZXJDZWxsRGVmLCB1c2VFeGlzdGluZzogRXNuRm9vdGVyQ2VsbERlZn1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuRm9vdGVyQ2VsbERlZiBleHRlbmRzIENka0Zvb3RlckNlbGxEZWYge31cclxuXHJcbi8qKlxyXG4gKiBDb2x1bW4gZGVmaW5pdGlvbiBmb3IgdGhlIGVzbi10YWJsZS5cclxuICogRGVmaW5lcyBhIHNldCBvZiBjZWxscyBhdmFpbGFibGUgZm9yIGEgdGFibGUgY29sdW1uLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZXNuQ29sdW1uRGVmXScsXHJcbiAgaW5wdXRzOiBbJ3N0aWNreSddLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge3Byb3ZpZGU6IENka0NvbHVtbkRlZiwgdXNlRXhpc3Rpbmc6IEVzbkNvbHVtbkRlZn0sXHJcbiAgICB7cHJvdmlkZTogJ01BVF9TT1JUX0hFQURFUl9DT0xVTU5fREVGJywgdXNlRXhpc3Rpbmc6IEVzbkNvbHVtbkRlZn0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzbkNvbHVtbkRlZiBleHRlbmRzIENka0NvbHVtbkRlZiB7XHJcbiAgLyoqIFVuaXF1ZSBuYW1lIGZvciB0aGlzIGNvbHVtbi4gKi9cclxuICBASW5wdXQoJ2VzbkNvbHVtbkRlZicpXHJcbiAgb3ZlcnJpZGUgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuICBvdmVycmlkZSBzZXQgbmFtZShuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3NldE5hbWVJbnB1dChuYW1lKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBcIm1hdC1jb2x1bW4tXCIgcHJlZml4IGluIGFkZGl0aW9uIHRvIFwiY2RrLWNvbHVtbi1cIiBwcmVmaXguXHJcbiAgICogSW4gdGhlIGZ1dHVyZSwgdGhpcyB3aWxsIG9ubHkgYWRkIFwibWF0LWNvbHVtbi1cIiBhbmQgY29sdW1uQ3NzQ2xhc3NOYW1lXHJcbiAgICogd2lsbCBjaGFuZ2UgZnJvbSB0eXBlIHN0cmluZ1tdIHRvIHN0cmluZy5cclxuICAgKiBAZG9jcy1wcml2YXRlXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIF91cGRhdGVDb2x1bW5Dc3NDbGFzc05hbWUoKSB7XHJcbiAgICBzdXBlci5fdXBkYXRlQ29sdW1uQ3NzQ2xhc3NOYW1lKCk7XHJcbiAgICB0aGlzLl9jb2x1bW5Dc3NDbGFzc05hbWUhLnB1c2goYG1hdC1jb2x1bW4tJHt0aGlzLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xyXG4gIH1cclxufVxyXG5cclxuLyoqIEhlYWRlciBjZWxsIHRlbXBsYXRlIGNvbnRhaW5lciB0aGF0IGFkZHMgdGhlIHJpZ2h0IGNsYXNzZXMgYW5kIHJvbGUuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnZXNuLWhlYWRlci1jZWxsLCB0aFtlc24taGVhZGVyLWNlbGxdJyxcclxuICBob3N0OiB7XHJcbiAgICAnY2xhc3MnOiAnbWF0LWhlYWRlci1jZWxsJyxcclxuICAgICdyb2xlJzogJ2NvbHVtbmhlYWRlcicsXHJcbiAgfSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzbkhlYWRlckNlbGwgZXh0ZW5kcyBDZGtIZWFkZXJDZWxsIHt9XHJcblxyXG4vKiogRm9vdGVyIGNlbGwgdGVtcGxhdGUgY29udGFpbmVyIHRoYXQgYWRkcyB0aGUgcmlnaHQgY2xhc3NlcyBhbmQgcm9sZS4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdlc24tZm9vdGVyLWNlbGwsIHRkW2Vzbi1mb290ZXItY2VsbF0nLFxyXG4gIGhvc3Q6IHtcclxuICAgICdjbGFzcyc6ICdtYXQtZm9vdGVyLWNlbGwnLFxyXG4gICAgJ3JvbGUnOiAnZ3JpZGNlbGwnLFxyXG4gIH0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25Gb290ZXJDZWxsIGV4dGVuZHMgQ2RrRm9vdGVyQ2VsbCB7fVxyXG5cclxuLyoqIENlbGwgdGVtcGxhdGUgY29udGFpbmVyIHRoYXQgYWRkcyB0aGUgcmlnaHQgY2xhc3NlcyBhbmQgcm9sZS4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdlc24tY2VsbCwgdGRbZXNuLWNlbGxdJyxcclxuICBob3N0OiB7XHJcbiAgICAnY2xhc3MnOiAnbWF0LWNlbGwnLFxyXG4gICAgJ3JvbGUnOiAnZ3JpZGNlbGwnLFxyXG4gIH0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25DZWxsIGV4dGVuZHMgQ2RrQ2VsbCB7fVxyXG4iXX0=