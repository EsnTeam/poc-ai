/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/** Stepper data that is required for internationalization. */
export class EsnStepperIntl {
    constructor() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new Subject();
        /** Label that is rendered below optional steps. */
        this.optionalLabel = 'Optional';
        /** Label that is used to indicate step as completed to screen readers. */
        this.completedLabel = 'Completed';
        /** Label that is used to indicate step as editable to screen readers. */
        this.editableLabel = 'Editable';
    }
}
EsnStepperIntl.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnStepperIntl, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
EsnStepperIntl.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnStepperIntl, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnStepperIntl, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
/** @docs-private */
export function ESN_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
    return parentIntl || new EsnStepperIntl();
}
/** @docs-private */
export const ESN_STEPPER_INTL_PROVIDER = {
    provide: EsnStepperIntl,
    deps: [[new Optional(), new SkipSelf(), EsnStepperIntl]],
    useFactory: ESN_STEPPER_INTL_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1pbnRsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvc3RlcHBlci9zdGVwcGVyLWludGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7O0FBRTdCLDhEQUE4RDtBQUU5RCxNQUFNLE9BQU8sY0FBYztJQUQzQjtRQUVFOzs7V0FHRztRQUNNLFlBQU8sR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUV0RCxtREFBbUQ7UUFDbkQsa0JBQWEsR0FBVyxVQUFVLENBQUM7UUFFbkMsMEVBQTBFO1FBQzFFLG1CQUFjLEdBQVcsV0FBVyxDQUFDO1FBRXJDLHlFQUF5RTtRQUN6RSxrQkFBYSxHQUFXLFVBQVUsQ0FBQztLQUNwQzs7NEdBZlksY0FBYztnSEFBZCxjQUFjLGNBREYsTUFBTTs0RkFDbEIsY0FBYztrQkFEMUIsVUFBVTttQkFBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUM7O0FBa0JoQyxvQkFBb0I7QUFDcEIsTUFBTSxVQUFVLGlDQUFpQyxDQUFDLFVBQTBCO0lBQzFFLE9BQU8sVUFBVSxJQUFJLElBQUksY0FBYyxFQUFFLENBQUM7QUFDNUMsQ0FBQztBQUVELG9CQUFvQjtBQUNwQixNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBRztJQUN2QyxPQUFPLEVBQUUsY0FBYztJQUN2QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUN4RCxVQUFVLEVBQUUsaUNBQWlDO0NBQzlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4gKi9cclxuXHJcbmltcG9ydCB7SW5qZWN0YWJsZSwgT3B0aW9uYWwsIFNraXBTZWxmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcclxuXHJcbi8qKiBTdGVwcGVyIGRhdGEgdGhhdCBpcyByZXF1aXJlZCBmb3IgaW50ZXJuYXRpb25hbGl6YXRpb24uICovXHJcbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxyXG5leHBvcnQgY2xhc3MgRXNuU3RlcHBlckludGwge1xyXG4gIC8qKlxyXG4gICAqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW5ldmVyIHRoZSBsYWJlbHMgaGVyZSBhcmUgY2hhbmdlZC4gVXNlIHRoaXMgdG8gbm90aWZ5XHJcbiAgICogY29tcG9uZW50cyBpZiB0aGUgbGFiZWxzIGhhdmUgY2hhbmdlZCBhZnRlciBpbml0aWFsaXphdGlvbi5cclxuICAgKi9cclxuICByZWFkb25seSBjaGFuZ2VzOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgLyoqIExhYmVsIHRoYXQgaXMgcmVuZGVyZWQgYmVsb3cgb3B0aW9uYWwgc3RlcHMuICovXHJcbiAgb3B0aW9uYWxMYWJlbDogc3RyaW5nID0gJ09wdGlvbmFsJztcclxuXHJcbiAgLyoqIExhYmVsIHRoYXQgaXMgdXNlZCB0byBpbmRpY2F0ZSBzdGVwIGFzIGNvbXBsZXRlZCB0byBzY3JlZW4gcmVhZGVycy4gKi9cclxuICBjb21wbGV0ZWRMYWJlbDogc3RyaW5nID0gJ0NvbXBsZXRlZCc7XHJcblxyXG4gIC8qKiBMYWJlbCB0aGF0IGlzIHVzZWQgdG8gaW5kaWNhdGUgc3RlcCBhcyBlZGl0YWJsZSB0byBzY3JlZW4gcmVhZGVycy4gKi9cclxuICBlZGl0YWJsZUxhYmVsOiBzdHJpbmcgPSAnRWRpdGFibGUnO1xyXG59XHJcblxyXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gRVNOX1NURVBQRVJfSU5UTF9QUk9WSURFUl9GQUNUT1JZKHBhcmVudEludGw6IEVzblN0ZXBwZXJJbnRsKSB7XHJcbiAgcmV0dXJuIHBhcmVudEludGwgfHwgbmV3IEVzblN0ZXBwZXJJbnRsKCk7XHJcbn1cclxuXHJcbi8qKiBAZG9jcy1wcml2YXRlICovXHJcbmV4cG9ydCBjb25zdCBFU05fU1RFUFBFUl9JTlRMX1BST1ZJREVSID0ge1xyXG4gIHByb3ZpZGU6IEVzblN0ZXBwZXJJbnRsLFxyXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBFc25TdGVwcGVySW50bF1dLFxyXG4gIHVzZUZhY3Rvcnk6IEVTTl9TVEVQUEVSX0lOVExfUFJPVklERVJfRkFDVE9SWSxcclxufTtcclxuIl19