/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Template to be used to override the icons inside the step header.
 */
export class EsnStepperIcon {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
EsnStepperIcon.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnStepperIcon, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
EsnStepperIcon.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: EsnStepperIcon, selector: "ng-template[esnStepperIcon]", inputs: { name: ["esnStepperIcon", "name"] }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnStepperIcon, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ng-template[esnStepperIcon]',
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; }, propDecorators: { name: [{
                type: Input,
                args: ['esnStepperIcon']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1pY29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvc3RlcHBlci9zdGVwcGVyLWljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQWMsTUFBTSxlQUFlLENBQUM7O0FBYTVEOztHQUVHO0FBSUgsTUFBTSxPQUFPLGNBQWM7SUFJekIsWUFBbUIsV0FBK0M7UUFBL0MsZ0JBQVcsR0FBWCxXQUFXLENBQW9DO0lBQUcsQ0FBQzs7NEdBSjNELGNBQWM7Z0dBQWQsY0FBYzs0RkFBZCxjQUFjO2tCQUgxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7aUJBQ3hDO2tHQUcwQixJQUFJO3NCQUE1QixLQUFLO3VCQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7U3RlcFN0YXRlfSBmcm9tICdAYW5ndWxhci9jZGsvc3RlcHBlcic7XHJcblxyXG4vKiogVGVtcGxhdGUgY29udGV4dCBhdmFpbGFibGUgdG8gYW4gYXR0YWNoZWQgYGVzblN0ZXBwZXJJY29uYC4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBFc25TdGVwcGVySWNvbkNvbnRleHQge1xyXG4gIC8qKiBJbmRleCBvZiB0aGUgc3RlcC4gKi9cclxuICBpbmRleDogbnVtYmVyO1xyXG4gIC8qKiBXaGV0aGVyIHRoZSBzdGVwIGlzIGN1cnJlbnRseSBhY3RpdmUuICovXHJcbiAgYWN0aXZlOiBib29sZWFuO1xyXG4gIC8qKiBXaGV0aGVyIHRoZSBzdGVwIGlzIG9wdGlvbmFsLiAqL1xyXG4gIG9wdGlvbmFsOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogVGVtcGxhdGUgdG8gYmUgdXNlZCB0byBvdmVycmlkZSB0aGUgaWNvbnMgaW5zaWRlIHRoZSBzdGVwIGhlYWRlci5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbZXNuU3RlcHBlckljb25dJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzblN0ZXBwZXJJY29uIHtcclxuICAvKiogTmFtZSBvZiB0aGUgaWNvbiB0byBiZSBvdmVycmlkZGVuLiAqL1xyXG4gIEBJbnB1dCgnZXNuU3RlcHBlckljb24nKSBuYW1lOiBTdGVwU3RhdGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8RXNuU3RlcHBlckljb25Db250ZXh0Pikge31cclxufVxyXG4iXX0=