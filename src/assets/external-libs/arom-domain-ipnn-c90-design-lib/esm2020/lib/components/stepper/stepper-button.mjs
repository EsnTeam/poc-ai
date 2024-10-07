/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CdkStepperNext, CdkStepperPrevious } from '@angular/cdk/stepper';
import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
/** Button that moves to the next step in a stepper workflow. */
export class EsnStepperNext extends CdkStepperNext {
}
EsnStepperNext.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnStepperNext, deps: null, target: i0.ɵɵFactoryTarget.Directive });
EsnStepperNext.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: EsnStepperNext, selector: "esn-button[esnStepperNext]", inputs: { type: "type" }, host: { properties: { "type": "type" }, classAttribute: "esn-stepper-next" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnStepperNext, decorators: [{
            type: Directive,
            args: [{
                    selector: 'esn-button[esnStepperNext]',
                    host: {
                        'class': 'esn-stepper-next',
                        '[type]': 'type',
                    },
                    inputs: ['type'],
                }]
        }] });
/** Button that moves to the previous step in a stepper workflow. */
export class EsnStepperPrevious extends CdkStepperPrevious {
}
EsnStepperPrevious.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnStepperPrevious, deps: null, target: i0.ɵɵFactoryTarget.Directive });
EsnStepperPrevious.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: EsnStepperPrevious, selector: "esn-button[esnStepperPrevious]", inputs: { type: "type" }, host: { properties: { "type": "type" }, classAttribute: "esn-stepper-previous" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnStepperPrevious, decorators: [{
            type: Directive,
            args: [{
                    selector: 'esn-button[esnStepperPrevious]',
                    host: {
                        'class': 'esn-stepper-previous',
                        '[type]': 'type',
                    },
                    inputs: ['type'],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1idXR0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9zdGVwcGVyL3N0ZXBwZXItYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUV4QyxnRUFBZ0U7QUFTaEUsTUFBTSxPQUFPLGNBQWUsU0FBUSxjQUFjOzs0R0FBckMsY0FBYztnR0FBZCxjQUFjOzRGQUFkLGNBQWM7a0JBUjFCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsSUFBSSxFQUFFO3dCQUNKLE9BQU8sRUFBRSxrQkFBa0I7d0JBQzNCLFFBQVEsRUFBRSxNQUFNO3FCQUNqQjtvQkFDRCxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7aUJBQ2pCOztBQUdELG9FQUFvRTtBQVNwRSxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsa0JBQWtCOztnSEFBN0Msa0JBQWtCO29HQUFsQixrQkFBa0I7NEZBQWxCLGtCQUFrQjtrQkFSOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO29CQUMxQyxJQUFJLEVBQUU7d0JBQ0osT0FBTyxFQUFFLHNCQUFzQjt3QkFDL0IsUUFBUSxFQUFFLE1BQU07cUJBQ2pCO29CQUNELE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztpQkFDakIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4gKi9cclxuXHJcbmltcG9ydCB7Q2RrU3RlcHBlck5leHQsIENka1N0ZXBwZXJQcmV2aW91c30gZnJvbSAnQGFuZ3VsYXIvY2RrL3N0ZXBwZXInO1xyXG5pbXBvcnQge0RpcmVjdGl2ZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKiogQnV0dG9uIHRoYXQgbW92ZXMgdG8gdGhlIG5leHQgc3RlcCBpbiBhIHN0ZXBwZXIgd29ya2Zsb3cuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnZXNuLWJ1dHRvbltlc25TdGVwcGVyTmV4dF0nLFxyXG4gIGhvc3Q6IHtcclxuICAgICdjbGFzcyc6ICdlc24tc3RlcHBlci1uZXh0JyxcclxuICAgICdbdHlwZV0nOiAndHlwZScsXHJcbiAgfSxcclxuICBpbnB1dHM6IFsndHlwZSddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuU3RlcHBlck5leHQgZXh0ZW5kcyBDZGtTdGVwcGVyTmV4dCB7fVxyXG5cclxuLyoqIEJ1dHRvbiB0aGF0IG1vdmVzIHRvIHRoZSBwcmV2aW91cyBzdGVwIGluIGEgc3RlcHBlciB3b3JrZmxvdy4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdlc24tYnV0dG9uW2VzblN0ZXBwZXJQcmV2aW91c10nLFxyXG4gIGhvc3Q6IHtcclxuICAgICdjbGFzcyc6ICdlc24tc3RlcHBlci1wcmV2aW91cycsXHJcbiAgICAnW3R5cGVdJzogJ3R5cGUnLFxyXG4gIH0sXHJcbiAgaW5wdXRzOiBbJ3R5cGUnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzblN0ZXBwZXJQcmV2aW91cyBleHRlbmRzIENka1N0ZXBwZXJQcmV2aW91cyB7fVxyXG4iXX0=