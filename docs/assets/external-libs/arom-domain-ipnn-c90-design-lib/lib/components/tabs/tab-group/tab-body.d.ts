import { Directionality } from "@angular/cdk/bidi";
import { CdkPortalOutlet } from "@angular/cdk/portal";
import { ChangeDetectorRef, ComponentFactoryResolver, ElementRef, OnDestroy, OnInit, ViewContainerRef } from "@angular/core";
import { _MatTabBodyBase } from "@angular/material/tabs";
import * as i0 from "@angular/core";
/**
 * Wrapper for the contents of a tab.
 * @docs-private
 */
export declare class MatTabBody extends _MatTabBodyBase {
    _portalHost: CdkPortalOutlet;
    constructor(elementRef: ElementRef<HTMLElement>, dir: Directionality, changeDetectorRef: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<MatTabBody, [null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatTabBody, "mat-tab-body", never, {}, {}, never, never, false, never>;
}
export declare class MatTabBodyPortal extends CdkPortalOutlet implements OnInit, OnDestroy {
    private _host;
    /** Subscription to events for when the tab body begins centering. */
    private _centeringSub;
    /** Subscription to events for when the tab body finishes leaving from center position. */
    private _leavingSub;
    constructor(componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, _host: MatTabBody, _document: any);
    /** Set initial visibility or set up subscription for changing visibility. */
    ngOnInit(): void;
    /** Clean up centering subscription. */
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatTabBodyPortal, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatTabBodyPortal, "[matTabBodyHost]", never, {}, {}, never, never, false, never>;
}
