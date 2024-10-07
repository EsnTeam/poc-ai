/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DomPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { Directive, Inject, InjectionToken, } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Injection token that can be used to reference instances of `MatMenuContent`. It serves
 * as alternative token to the actual `MatMenuContent` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
export const ESN_MENU_CONTENT = new InjectionToken('EsnMenuContent');
export class _EsnMenuContentBase {
    constructor(_template, _componentFactoryResolver, _appRef, _injector, _viewContainerRef, _document, _changeDetectorRef) {
        this._template = _template;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._injector = _injector;
        this._viewContainerRef = _viewContainerRef;
        this._document = _document;
        this._changeDetectorRef = _changeDetectorRef;
        /** Emits when the menu content has been attached. */
        this._attached = new Subject();
    }
    /**
     * Attaches the content with a particular context.
     * @docs-private
     */
    attach(context = {}) {
        if (!this._portal) {
            this._portal = new TemplatePortal(this._template, this._viewContainerRef);
        }
        this.detach();
        if (!this._outlet) {
            this._outlet = new DomPortalOutlet(this._document.createElement('div'), this._componentFactoryResolver, this._appRef, this._injector);
        }
        const element = this._template.elementRef.nativeElement;
        // Because we support opening the same menu from different triggers (which in turn have their
        // own `OverlayRef` panel), we have to re-insert the host element every time, otherwise we
        // risk it staying attached to a pane that's no longer in the DOM.
        element.parentNode.insertBefore(this._outlet.outletElement, element);
        // When `EsnMenuContent` is used in an `OnPush` component, the insertion of the menu
        // content via `createEmbeddedView` does not cause the content to be seen as "dirty"
        // by Angular. This causes the `@ContentChildren` for menu items within the menu to
        // not be updated by Angular. By explicitly marking for check here, we tell Angular that
        // it needs to check for new menu items and update the `@ContentChild` in `EsnMenu`.
        // @breaking-change 9.0.0 Make change detector ref required
        this._changeDetectorRef?.markForCheck();
        this._portal.attach(this._outlet, context);
        this._attached.next();
    }
    /**
     * Detaches the content.
     * @docs-private
     */
    detach() {
        if (this._portal.isAttached) {
            this._portal.detach();
        }
    }
    ngOnDestroy() {
        if (this._outlet) {
            this._outlet.dispose();
        }
    }
}
_EsnMenuContentBase.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: _EsnMenuContentBase, deps: [{ token: i0.TemplateRef }, { token: i0.ComponentFactoryResolver }, { token: i0.ApplicationRef }, { token: i0.Injector }, { token: i0.ViewContainerRef }, { token: DOCUMENT }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
_EsnMenuContentBase.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: _EsnMenuContentBase, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: _EsnMenuContentBase, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: i0.ViewContainerRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.ChangeDetectorRef }]; } });
/** Menu content that will be rendered lazily once the menu is opened. */
export class EsnMenuContent extends _EsnMenuContentBase {
}
EsnMenuContent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnMenuContent, deps: null, target: i0.ɵɵFactoryTarget.Directive });
EsnMenuContent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: EsnMenuContent, selector: "ng-template[esnMenuContent]", providers: [{ provide: ESN_MENU_CONTENT, useExisting: EsnMenuContent }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnMenuContent, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ng-template[esnMenuContent]',
                    providers: [{ provide: ESN_MENU_CONTENT, useExisting: EsnMenuContent }],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1jb250ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvbWVudS9tZW51LWNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLGVBQWUsRUFBRSxjQUFjLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUlMLFNBQVMsRUFDVCxNQUFNLEVBQ04sY0FBYyxHQUtmLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7O0FBRTdCOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGNBQWMsQ0FBaUIsZ0JBQWdCLENBQUMsQ0FBQztBQUdyRixNQUFNLE9BQWdCLG1CQUFtQjtJQStCdkMsWUFDVSxTQUEyQixFQUMzQix5QkFBbUQsRUFDbkQsT0FBdUIsRUFDdkIsU0FBbUIsRUFDbkIsaUJBQW1DLEVBQ2pCLFNBQWMsRUFDaEMsa0JBQXNDO1FBTnRDLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMEI7UUFDbkQsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQUs7UUFDaEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQWxDaEQscURBQXFEO1FBQzVDLGNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBa0N0QyxDQUFDO0lBRUo7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFVBQWUsRUFBRTtRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDM0U7UUFFRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFZCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksZUFBZSxDQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFDbkMsSUFBSSxDQUFDLHlCQUF5QixFQUM5QixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxTQUFTLENBQ2YsQ0FBQztTQUNIO1FBRUQsTUFBTSxPQUFPLEdBQWdCLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUVyRSw2RkFBNkY7UUFDN0YsMEZBQTBGO1FBQzFGLGtFQUFrRTtRQUNsRSxPQUFPLENBQUMsVUFBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0RSxvRkFBb0Y7UUFDcEYsb0ZBQW9GO1FBQ3BGLG1GQUFtRjtRQUNuRix3RkFBd0Y7UUFDeEYsb0ZBQW9GO1FBQ3BGLDJEQUEyRDtRQUMzRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNO1FBQ0osSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7O2lIQTdGbUIsbUJBQW1CLDJLQXFDN0IsUUFBUTtxR0FyQ0UsbUJBQW1COzRGQUFuQixtQkFBbUI7a0JBRHhDLFNBQVM7OzBCQXNDTCxNQUFNOzJCQUFDLFFBQVE7O0FBMkRwQix5RUFBeUU7QUFLekUsTUFBTSxPQUFPLGNBQWUsU0FBUSxtQkFBbUI7OzRHQUExQyxjQUFjO2dHQUFkLGNBQWMsc0RBRmQsQ0FBQyxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFDLENBQUM7NEZBRTFELGNBQWM7a0JBSjFCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBQyxDQUFDO2lCQUN0RSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtEb21Qb3J0YWxPdXRsZXQsIFRlbXBsYXRlUG9ydGFsfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBBcHBsaWNhdGlvblJlZixcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEluamVjdCxcclxuICBJbmplY3Rpb25Ub2tlbixcclxuICBJbmplY3RvcixcclxuICBPbkRlc3Ryb3ksXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcclxuXHJcbi8qKlxyXG4gKiBJbmplY3Rpb24gdG9rZW4gdGhhdCBjYW4gYmUgdXNlZCB0byByZWZlcmVuY2UgaW5zdGFuY2VzIG9mIGBNYXRNZW51Q29udGVudGAuIEl0IHNlcnZlc1xyXG4gKiBhcyBhbHRlcm5hdGl2ZSB0b2tlbiB0byB0aGUgYWN0dWFsIGBNYXRNZW51Q29udGVudGAgY2xhc3Mgd2hpY2ggY291bGQgY2F1c2UgdW5uZWNlc3NhcnlcclxuICogcmV0ZW50aW9uIG9mIHRoZSBjbGFzcyBhbmQgaXRzIGRpcmVjdGl2ZSBtZXRhZGF0YS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBFU05fTUVOVV9DT05URU5UID0gbmV3IEluamVjdGlvblRva2VuPEVzbk1lbnVDb250ZW50PignRXNuTWVudUNvbnRlbnQnKTtcclxuXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgX0Vzbk1lbnVDb250ZW50QmFzZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBfcG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDxhbnk+O1xyXG4gIHByaXZhdGUgX291dGxldDogRG9tUG9ydGFsT3V0bGV0O1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiB0aGUgbWVudSBjb250ZW50IGhhcyBiZWVuIGF0dGFjaGVkLiAqL1xyXG4gIHJlYWRvbmx5IF9hdHRhY2hlZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXHJcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgZG9jdW1lbnQ6IGFueSxcclxuICAgIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICApO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCBgY2hhbmdlRGV0ZWN0b3JSZWZgIGlzIG5vdyBhIHJlcXVpcmVkIHBhcmFtZXRlci5cclxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDkuMC4wXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PixcclxuICAgIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcclxuICAgIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBkb2N1bWVudDogYW55LFxyXG4gICAgY2hhbmdlRGV0ZWN0b3JSZWY/OiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICApO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX3RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxyXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXHJcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZj86IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICkge31cclxuXHJcbiAgLyoqXHJcbiAgICogQXR0YWNoZXMgdGhlIGNvbnRlbnQgd2l0aCBhIHBhcnRpY3VsYXIgY29udGV4dC5cclxuICAgKiBAZG9jcy1wcml2YXRlXHJcbiAgICovXHJcbiAgYXR0YWNoKGNvbnRleHQ6IGFueSA9IHt9KSB7XHJcbiAgICBpZiAoIXRoaXMuX3BvcnRhbCkge1xyXG4gICAgICB0aGlzLl9wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5fdGVtcGxhdGUsIHRoaXMuX3ZpZXdDb250YWluZXJSZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGV0YWNoKCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLl9vdXRsZXQpIHtcclxuICAgICAgdGhpcy5fb3V0bGV0ID0gbmV3IERvbVBvcnRhbE91dGxldChcclxuICAgICAgICB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICAgICAgdGhpcy5fYXBwUmVmLFxyXG4gICAgICAgIHRoaXMuX2luamVjdG9yLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5fdGVtcGxhdGUuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIC8vIEJlY2F1c2Ugd2Ugc3VwcG9ydCBvcGVuaW5nIHRoZSBzYW1lIG1lbnUgZnJvbSBkaWZmZXJlbnQgdHJpZ2dlcnMgKHdoaWNoIGluIHR1cm4gaGF2ZSB0aGVpclxyXG4gICAgLy8gb3duIGBPdmVybGF5UmVmYCBwYW5lbCksIHdlIGhhdmUgdG8gcmUtaW5zZXJ0IHRoZSBob3N0IGVsZW1lbnQgZXZlcnkgdGltZSwgb3RoZXJ3aXNlIHdlXHJcbiAgICAvLyByaXNrIGl0IHN0YXlpbmcgYXR0YWNoZWQgdG8gYSBwYW5lIHRoYXQncyBubyBsb25nZXIgaW4gdGhlIERPTS5cclxuICAgIGVsZW1lbnQucGFyZW50Tm9kZSEuaW5zZXJ0QmVmb3JlKHRoaXMuX291dGxldC5vdXRsZXRFbGVtZW50LCBlbGVtZW50KTtcclxuXHJcbiAgICAvLyBXaGVuIGBFc25NZW51Q29udGVudGAgaXMgdXNlZCBpbiBhbiBgT25QdXNoYCBjb21wb25lbnQsIHRoZSBpbnNlcnRpb24gb2YgdGhlIG1lbnVcclxuICAgIC8vIGNvbnRlbnQgdmlhIGBjcmVhdGVFbWJlZGRlZFZpZXdgIGRvZXMgbm90IGNhdXNlIHRoZSBjb250ZW50IHRvIGJlIHNlZW4gYXMgXCJkaXJ0eVwiXHJcbiAgICAvLyBieSBBbmd1bGFyLiBUaGlzIGNhdXNlcyB0aGUgYEBDb250ZW50Q2hpbGRyZW5gIGZvciBtZW51IGl0ZW1zIHdpdGhpbiB0aGUgbWVudSB0b1xyXG4gICAgLy8gbm90IGJlIHVwZGF0ZWQgYnkgQW5ndWxhci4gQnkgZXhwbGljaXRseSBtYXJraW5nIGZvciBjaGVjayBoZXJlLCB3ZSB0ZWxsIEFuZ3VsYXIgdGhhdFxyXG4gICAgLy8gaXQgbmVlZHMgdG8gY2hlY2sgZm9yIG5ldyBtZW51IGl0ZW1zIGFuZCB1cGRhdGUgdGhlIGBAQ29udGVudENoaWxkYCBpbiBgRXNuTWVudWAuXHJcbiAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDkuMC4wIE1ha2UgY2hhbmdlIGRldGVjdG9yIHJlZiByZXF1aXJlZFxyXG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWY/Lm1hcmtGb3JDaGVjaygpO1xyXG4gICAgdGhpcy5fcG9ydGFsLmF0dGFjaCh0aGlzLl9vdXRsZXQsIGNvbnRleHQpO1xyXG4gICAgdGhpcy5fYXR0YWNoZWQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0YWNoZXMgdGhlIGNvbnRlbnQuXHJcbiAgICogQGRvY3MtcHJpdmF0ZVxyXG4gICAqL1xyXG4gIGRldGFjaCgpIHtcclxuICAgIGlmICh0aGlzLl9wb3J0YWwuaXNBdHRhY2hlZCkge1xyXG4gICAgICB0aGlzLl9wb3J0YWwuZGV0YWNoKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLl9vdXRsZXQpIHtcclxuICAgICAgdGhpcy5fb3V0bGV0LmRpc3Bvc2UoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKiBNZW51IGNvbnRlbnQgdGhhdCB3aWxsIGJlIHJlbmRlcmVkIGxhemlseSBvbmNlIHRoZSBtZW51IGlzIG9wZW5lZC4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVtlc25NZW51Q29udGVudF0nLFxyXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFU05fTUVOVV9DT05URU5ULCB1c2VFeGlzdGluZzogRXNuTWVudUNvbnRlbnR9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzbk1lbnVDb250ZW50IGV4dGVuZHMgX0Vzbk1lbnVDb250ZW50QmFzZSB7fVxyXG4iXX0=