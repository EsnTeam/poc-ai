import { coerceBooleanProperty, coerceNumberProperty, } from '@angular/cdk/coercion';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, forwardRef, Inject, InjectionToken, Input, Optional, ViewEncapsulation, } from '@angular/core';
// import { MatDrawer, MatDrawerContainer, MatDrawerContent, MAT_DRAWER_CONTAINER } from './drawer';
import { MatDrawer, matDrawerAnimations, MatDrawerContainer, MatDrawerContent, } from '@angular/material/sidenav';
import { EsnUtils } from '../../utils/public-api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
import * as i2 from "@angular/common";
import * as i3 from "../button/button.component";
import * as i4 from "../icon/icon.component";
import * as i5 from "@angular/cdk/a11y";
import * as i6 from "@angular/cdk/platform";
import * as i7 from "@angular/cdk/layout";
import * as i8 from "@angular/cdk/observers";
import * as i9 from "@angular/material/sidenav";
export const MAT_DRAWER_CONTAINER = new InjectionToken('MAT_DRAWER_CONTAINER');
export class EsnSidenavContent extends MatDrawerContent {
    constructor(changeDetectorRef, container, elementRef, scrollDispatcher, ngZone) {
        super(changeDetectorRef, container, elementRef, scrollDispatcher, ngZone);
        this.changeDetectorRef = changeDetectorRef;
        this.isToggleButtonDisplayed = false;
    }
    ngAfterViewInit() {
        this._container._allDrawers.forEach((dr) => {
            if (!!dr.mobileQuery) {
                dr.mobileQuery.addEventListener('change', () => this.updateToggleButtonDisplay());
                dr.updateMode();
                this.updateToggleButtonDisplay();
            }
        });
    }
    updateToggleButtonDisplay() {
        setTimeout(() => {
            this.isToggleButtonDisplayed = this._container._allDrawers.some((dr) => dr.mode === 'over');
            this.changeDetectorRef.detectChanges();
        }, 0);
    }
    toggle() {
        this._container._allDrawers.forEach((dr) => {
            dr.opened ? dr.close() : dr.open();
        });
    }
}
EsnSidenavContent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSidenavContent, deps: [{ token: i0.ChangeDetectorRef }, { token: forwardRef(() => EsnSidenavContainer) }, { token: i0.ElementRef }, { token: i1.ScrollDispatcher }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
EsnSidenavContent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnSidenavContent, selector: "esn-sidenav-content", host: { properties: { "style.margin-left.px": "_container._contentMargins.left", "style.margin-right.px": "_container._contentMargins.right" }, classAttribute: "mat-drawer-content mat-sidenav-content" }, providers: [
        {
            provide: CdkScrollable,
            useExisting: EsnSidenavContent,
        },
    ], usesInheritance: true, ngImport: i0, template: `
    <esn-button 
      *ngIf="isToggleButtonDisplayed" 
      class="esn-sidenav-toggle-button"
      (click)="toggle()"
      [color]="'neutral'"
      [iconOnly]="true"
      [type]="'basic'">
      <esn-icon name="menu"></esn-icon>
    </esn-button>
    <ng-content></ng-content>`, isInline: true, dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.EsnButton, selector: "esn-button", inputs: ["type", "size", "disabled", "round", "iconOnly", "color"], outputs: ["click"] }, { kind: "component", type: i4.EsnIcon, selector: "esn-icon", inputs: ["name", "boxed", "size"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSidenavContent, decorators: [{
            type: Component,
            args: [{
                    selector: 'esn-sidenav-content',
                    template: `
    <esn-button 
      *ngIf="isToggleButtonDisplayed" 
      class="esn-sidenav-toggle-button"
      (click)="toggle()"
      [color]="'neutral'"
      [iconOnly]="true"
      [type]="'basic'">
      <esn-icon name="menu"></esn-icon>
    </esn-button>
    <ng-content></ng-content>`,
                    host: {
                        class: 'mat-drawer-content mat-sidenav-content',
                        '[style.margin-left.px]': '_container._contentMargins.left',
                        '[style.margin-right.px]': '_container._contentMargins.right',
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        {
                            provide: CdkScrollable,
                            useExisting: EsnSidenavContent,
                        },
                    ],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: EsnSidenavContainer, decorators: [{
                    type: Inject,
                    args: [forwardRef(() => EsnSidenavContainer)]
                }] }, { type: i0.ElementRef }, { type: i1.ScrollDispatcher }, { type: i0.NgZone }]; } });
export class EsnSidenav extends MatDrawer {
    constructor(_elementRef, _focusTrapFactory, _focusMonitor, _platform, _ngZone, _interactivityChecker, media, changeDetectorRef, _doc, _container) {
        super(_elementRef, _focusTrapFactory, _focusMonitor, _platform, _ngZone, _interactivityChecker, _doc, _container);
        this.media = media;
        this.changeDetectorRef = changeDetectorRef;
        this._fixedInViewport = false;
        this._fixedTopGap = 0;
        this._fixedBottomGap = 0;
        // Esn custom
        this.reactiveMode = false;
        this._mobileQueryListener = () => { };
        this.modeInitialized = false;
    }
    /** Whether the sidenav is fixed in the viewport. */
    get fixedInViewport() {
        return this._fixedInViewport;
    }
    set fixedInViewport(value) {
        this._fixedInViewport = coerceBooleanProperty(value);
    }
    /**
     * The gap between the top of the sidenav and the top of the viewport when the sidenav is in fixed
     * mode.
     */
    get fixedTopGap() {
        return this._fixedTopGap;
    }
    set fixedTopGap(value) {
        this._fixedTopGap = coerceNumberProperty(value);
    }
    /**
     * The gap between the bottom of the sidenav and the bottom of the viewport when the sidenav is in
     * fixed mode.
     */
    get fixedBottomGap() {
        return this._fixedBottomGap;
    }
    set fixedBottomGap(value) {
        this._fixedBottomGap = coerceNumberProperty(value);
    }
    ngOnInit() {
        this.autoFocus = false;
        this.reactiveMode = this.reactiveMode || this.reactiveMode === '';
        if (this.reactiveMode) {
            this.mobileQuery = this.media.matchMedia(`(max-width: ${this.reactiveBreakpointWidth || EsnUtils.BREAKPOINTS.tabletLarge})`);
            this._initListener();
        }
    }
    _initListener() {
        this._mobileQueryListener = () => {
            // this.isSidebarOpened = !this.mobileQuery.matches;
            this.changeDetectorRef.detectChanges();
            this.updateMode();
        };
        this.mobileQuery.addEventListener('change', this._mobileQueryListener);
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        if (this.reactiveMode) {
            this.updateMode();
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        if (this.reactiveMode) {
            this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
        }
    }
    updateMode() {
        setTimeout(() => {
            this.mode = this.mobileQuery.matches ? 'over' : 'side';
            if (this.mode === 'over') {
                this.close();
            }
            else {
                this.open();
            }
            if (!this.modeInitialized) {
                this.modeInitialized = true;
                setTimeout(() => this._mobileQueryListener());
            }
        });
    }
    onContentChanges() {
        setTimeout(() => { this.updateMode(); });
    }
}
EsnSidenav.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSidenav, deps: [{ token: i0.ElementRef }, { token: i5.FocusTrapFactory }, { token: i5.FocusMonitor }, { token: i6.Platform }, { token: i0.NgZone }, { token: i5.InteractivityChecker }, { token: i7.MediaMatcher }, { token: i0.ChangeDetectorRef }, { token: DOCUMENT, optional: true }, { token: MAT_DRAWER_CONTAINER, optional: true }], target: i0.ɵɵFactoryTarget.Component });
EsnSidenav.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnSidenav, selector: "esn-sidenav", inputs: { fixedInViewport: "fixedInViewport", fixedTopGap: "fixedTopGap", fixedBottomGap: "fixedBottomGap", reactiveMode: "reactiveMode", reactiveBreakpointWidth: "reactiveBreakpointWidth" }, host: { attributes: { "tabIndex": "-1" }, properties: { "attr.align": "null", "class.mat-drawer-end": "position === \"end\"", "class.mat-drawer-over": "mode === \"over\"", "class.mat-drawer-push": "mode === \"push\"", "class.mat-drawer-side": "mode === \"side\"", "class.mat-drawer-opened": "opened", "class.mat-sidenav-fixed": "fixedInViewport", "style.top.px": "fixedInViewport ? fixedTopGap : null", "style.bottom.px": "fixedInViewport ? fixedBottomGap : null" }, classAttribute: "mat-drawer mat-sidenav" }, exportAs: ["esnSidenav"], usesInheritance: true, ngImport: i0, template: "<div class=\"mat-drawer-inner-container\" cdkScrollable #content (cdkObserveContent)=\"onContentChanges()\">\r\n  <ng-content></ng-content>\r\n</div>\r\n", dependencies: [{ kind: "directive", type: i1.CdkScrollable, selector: "[cdk-scrollable], [cdkScrollable]" }, { kind: "directive", type: i8.CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }], animations: [matDrawerAnimations.transformDrawer], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSidenav, decorators: [{
            type: Component,
            args: [{ selector: 'esn-sidenav', exportAs: 'esnSidenav', animations: [matDrawerAnimations.transformDrawer], host: {
                        class: 'mat-drawer mat-sidenav',
                        tabIndex: '-1',
                        // must prevent the browser from aligning text based on value
                        '[attr.align]': 'null',
                        '[class.mat-drawer-end]': 'position === "end"',
                        '[class.mat-drawer-over]': 'mode === "over"',
                        '[class.mat-drawer-push]': 'mode === "push"',
                        '[class.mat-drawer-side]': 'mode === "side"',
                        '[class.mat-drawer-opened]': 'opened',
                        '[class.mat-sidenav-fixed]': 'fixedInViewport',
                        '[style.top.px]': 'fixedInViewport ? fixedTopGap : null',
                        '[style.bottom.px]': 'fixedInViewport ? fixedBottomGap : null',
                    }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"mat-drawer-inner-container\" cdkScrollable #content (cdkObserveContent)=\"onContentChanges()\">\r\n  <ng-content></ng-content>\r\n</div>\r\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i5.FocusTrapFactory }, { type: i5.FocusMonitor }, { type: i6.Platform }, { type: i0.NgZone }, { type: i5.InteractivityChecker }, { type: i7.MediaMatcher }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i9.MatDrawerContainer, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [MAT_DRAWER_CONTAINER]
                }] }]; }, propDecorators: { fixedInViewport: [{
                type: Input
            }], fixedTopGap: [{
                type: Input
            }], fixedBottomGap: [{
                type: Input
            }], reactiveMode: [{
                type: Input
            }], reactiveBreakpointWidth: [{
                type: Input
            }] } });
export class EsnSidenavContainer extends MatDrawerContainer {
}
EsnSidenavContainer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSidenavContainer, deps: null, target: i0.ɵɵFactoryTarget.Component });
EsnSidenavContainer.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnSidenavContainer, selector: "esn-sidenav-container", host: { properties: { "class.mat-drawer-container-explicit-backdrop": "_backdropOverride" }, classAttribute: "mat-drawer-container mat-sidenav-container" }, providers: [
        {
            provide: MAT_DRAWER_CONTAINER,
            useExisting: EsnSidenavContainer,
        },
    ], queries: [{ propertyName: "_content", first: true, predicate: EsnSidenavContent, descendants: true }, { propertyName: "_allDrawers", predicate: EsnSidenav, descendants: true }], exportAs: ["esnSidenavContainer"], usesInheritance: true, ngImport: i0, template: "<div class=\"mat-drawer-backdrop\" (click)=\"_onBackdropClicked()\" *ngIf=\"hasBackdrop\"\r\n     [class.mat-drawer-shown]=\"_isShowingBackdrop()\"></div>\r\n<ng-content select=\"esn-sidenav\"></ng-content>\r\n\r\n<ng-content select=\"esn-sidenav-content\">\r\n \r\n\r\n</ng-content>\r\n<esn-sidenav-content *ngIf=\"!_content\">\r\n  <ng-content></ng-content>\r\n</esn-sidenav-content>\r\n", styles: [".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{inset:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{inset:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:.4s;transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:.4s;transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%,0,0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%,0,0)}[dir=rtl] .mat-drawer{transform:translate3d(100%,0,0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%,0,0)}.mat-drawer[style*=\"visibility: hidden\"]{display:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}\n", "esn-sidenav-container{width:100%;height:100%}esn-sidenav-container esn-sidenav{min-width:180px;padding:1rem}esn-sidenav-container esn-sidenav .mat-drawer-inner-container{display:flex;flex-direction:column}esn-sidenav-container esn-sidenav .mat-drawer-inner-container esn-sidenav-button:not(:last-child){margin-bottom:.25rem}esn-sidenav-container esn-sidenav .mat-drawer-inner-container .esn-sidenav-button{width:100%}esn-sidenav-container esn-sidenav .mat-drawer-inner-container .esn-sidenav-button .esn-btn-inner{justify-content:start!important}esn-sidenav-container esn-sidenav .mat-drawer-inner-container .esn-sidenav-button .esn-btn-inner .mdc-button__label{width:100%}esn-sidenav-container esn-sidenav .mat-drawer-inner-container .esn-sidenav-button .esn-btn-inner .mdc-button__label :nth-last-child(2){margin-right:2rem}esn-sidenav-container esn-sidenav .mat-drawer-inner-container .esn-sidenav-button .esn-btn-inner .mdc-button__label .esn-icon{margin-right:.5rem}esn-sidenav-container esn-sidenav .mat-drawer-inner-container .esn-sidenav-button .esn-btn-inner .mdc-button__label .esn-badge{margin-left:auto}esn-sidenav-container esn-sidenav .mat-drawer-inner-container .esn-sidenav-footer{display:flex;flex-grow:1;padding-top:2rem;margin-bottom:.25rem}esn-sidenav-container esn-sidenav .mat-drawer-inner-container .esn-sidenav-footer .esn-sidenav-footer-inner{align-self:flex-end;width:100%}esn-sidenav-container esn-sidenav .mat-drawer-inner-container .esn-sidenav-section{display:flex;flex-direction:column}esn-sidenav-container esn-sidenav .mat-drawer-inner-container .esn-sidenav-section:not(:last-child){margin-bottom:1.5rem}esn-sidenav-container esn-sidenav .mat-drawer-inner-container .esn-sidenav-section label{margin-bottom:.5rem;margin-left:.75rem}esn-sidenav-container esn-sidenav .mat-drawer-inner-container .esn-sidenav-header{min-width:40px;padding-bottom:1rem}esn-sidenav-container esn-sidenav .mat-drawer-inner-container .esn-sidenav-header :first-child{margin-top:0}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: EsnSidenavContent, selector: "esn-sidenav-content" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSidenavContainer, decorators: [{
            type: Component,
            args: [{ selector: 'esn-sidenav-container', exportAs: 'esnSidenavContainer', host: {
                        class: 'mat-drawer-container mat-sidenav-container',
                        '[class.mat-drawer-container-explicit-backdrop]': '_backdropOverride',
                    }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        {
                            provide: MAT_DRAWER_CONTAINER,
                            useExisting: EsnSidenavContainer,
                        },
                    ], template: "<div class=\"mat-drawer-backdrop\" (click)=\"_onBackdropClicked()\" *ngIf=\"hasBackdrop\"\r\n     [class.mat-drawer-shown]=\"_isShowingBackdrop()\"></div>\r\n<ng-content select=\"esn-sidenav\"></ng-content>\r\n\r\n<ng-content select=\"esn-sidenav-content\">\r\n \r\n\r\n</ng-content>\r\n<esn-sidenav-content *ngIf=\"!_content\">\r\n  <ng-content></ng-content>\r\n</esn-sidenav-content>\r\n", styles: [".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{inset:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{inset:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:.4s;transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:.4s;transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%,0,0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%,0,0)}[dir=rtl] .mat-drawer{transform:translate3d(100%,0,0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%,0,0)}.mat-drawer[style*=\"visibility: hidden\"]{display:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}\n", "esn-sidenav-container{width:100%;height:100%}esn-sidenav-container esn-sidenav{min-width:180px;padding:1rem}esn-sidenav-container esn-sidenav .mat-drawer-inner-container{display:flex;flex-direction:column}esn-sidenav-container esn-sidenav .mat-drawer-inner-container esn-sidenav-button:not(:last-child){margin-bottom:.25rem}esn-sidenav-container esn-sidenav .mat-drawer-inner-container .esn-sidenav-button{width:100%}esn-sidenav-container esn-sidenav .mat-drawer-inner-container .esn-sidenav-button .esn-btn-inner{justify-content:start!important}esn-sidenav-container esn-sidenav .mat-drawer-inner-container .esn-sidenav-button .esn-btn-inner .mdc-button__label{width:100%}esn-sidenav-container esn-sidenav .mat-drawer-inner-container .esn-sidenav-button .esn-btn-inner .mdc-button__label :nth-last-child(2){margin-right:2rem}esn-sidenav-container esn-sidenav .mat-drawer-inner-container .esn-sidenav-button .esn-btn-inner .mdc-button__label .esn-icon{margin-right:.5rem}esn-sidenav-container esn-sidenav .mat-drawer-inner-container .esn-sidenav-button .esn-btn-inner .mdc-button__label .esn-badge{margin-left:auto}esn-sidenav-container esn-sidenav .mat-drawer-inner-container .esn-sidenav-footer{display:flex;flex-grow:1;padding-top:2rem;margin-bottom:.25rem}esn-sidenav-container esn-sidenav .mat-drawer-inner-container .esn-sidenav-footer .esn-sidenav-footer-inner{align-self:flex-end;width:100%}esn-sidenav-container esn-sidenav .mat-drawer-inner-container .esn-sidenav-section{display:flex;flex-direction:column}esn-sidenav-container esn-sidenav .mat-drawer-inner-container .esn-sidenav-section:not(:last-child){margin-bottom:1.5rem}esn-sidenav-container esn-sidenav .mat-drawer-inner-container .esn-sidenav-section label{margin-bottom:.5rem;margin-left:.75rem}esn-sidenav-container esn-sidenav .mat-drawer-inner-container .esn-sidenav-header{min-width:40px;padding-bottom:1rem}esn-sidenav-container esn-sidenav .mat-drawer-inner-container .esn-sidenav-header :first-child{margin-top:0}\n"] }]
        }], propDecorators: { _allDrawers: [{
                type: ContentChildren,
                args: [EsnSidenav, {
                        // We need to use `descendants: true`, because Ivy will no longer match
                        // indirect descendants if it's left as false.
                        descendants: true,
                    }]
            }], _content: [{
                type: ContentChild,
                args: [EsnSidenavContent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvc2lkZW5hdi9kcmF3ZXIuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi1jb250YWluZXIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxPQUFPLEVBRUwscUJBQXFCLEVBQ3JCLG9CQUFvQixHQUVyQixNQUFNLHVCQUF1QixDQUFDO0FBRy9CLE9BQU8sRUFBRSxhQUFhLEVBQW9CLE1BQU0sd0JBQXdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBRWYsVUFBVSxFQUNWLE1BQU0sRUFDTixjQUFjLEVBQ2QsS0FBSyxFQUlMLFFBQVEsRUFFUixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsb0dBQW9HO0FBQ3BHLE9BQU8sRUFDTCxTQUFTLEVBQ1QsbUJBQW1CLEVBQ25CLGtCQUFrQixFQUNsQixnQkFBZ0IsR0FDakIsTUFBTSwyQkFBMkIsQ0FBQztBQUNuQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7O0FBRWxELE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLElBQUksY0FBYyxDQUFDLHNCQUFzQixD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QkFBQyxRQUFROzswQkFDM0IsUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxvQkFBb0I7NENBckR0QyxlQUFlO3NCQURsQixLQUFLO2dCQWNGLFdBQVc7c0JBRGQsS0FBSztnQkFjRixjQUFjO3NCQURqQixLQUFLO2dCQVVHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csdUJBQXVCO3NCQUEvQixLQUFLOztBQXVHUixNQUFNLE9BQU8sbUJBQW9CLFNBQVEsa0JBQWtCOztpSEFBOUMsbUJBQW1CO3FHQUFuQixtQkFBbUIsNk1BUG5CO1FBQ1Q7WUFDRSxPQUFPLEVBQUUsb0JBQW9CO1lBQzdCLFdBQVcsRUFBRSxtQkFBbUI7U0FDakM7S0FDRixnRUFVYSxpQkFBaUIsaUVBUGQsVUFBVSwwR0U5UjdCLHVZQVdBLDB1SUY2RGEsaUJBQWlCOzRGQXFOakIsbUJBQW1CO2tCQWxCL0IsU0FBUzsrQkFDRSx1QkFBdUIsWUFDdkIscUJBQXFCLFFBR3pCO3dCQUNKLEtBQUssRUFBRSw0Q0FBNEM7d0JBQ25ELGdEQUFnRCxFQUFFLG1CQUFtQjtxQkFDdEUsbUJBQ2dCLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksYUFDMUI7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLG9CQUFvQjs0QkFDN0IsV0FBVyxxQkFBcUI7eUJBQ2pDO3FCQUNGOzhCQVFRLFdBQVc7c0JBTG5CLGVBQWU7dUJBQUMsVUFBVSxFQUFFO3dCQUMzQix1RUFBdUU7d0JBQ3ZFLDhDQUE4Qzt3QkFDOUMsV0FBVyxFQUFFLElBQUk7cUJBQ2xCO2dCQUd5QyxRQUFRO3NCQUFqRCxZQUFZO3VCQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRm9jdXNUcmFwRmFjdG9yeSxcclxuICBGb2N1c01vbml0b3IsXHJcbiAgSW50ZXJhY3Rpdml0eUNoZWNrZXIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQge1xyXG4gIEJvb2xlYW5JbnB1dCxcclxuICBjb2VyY2VCb29sZWFuUHJvcGVydHksXHJcbiAgY29lcmNlTnVtYmVyUHJvcGVydHksXHJcbiAgTnVtYmVySW5wdXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcclxuaW1wb3J0IHsgTWVkaWFNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgQ2RrU2Nyb2xsYWJsZSwgU2Nyb2xsRGlzcGF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSW5qZWN0LFxyXG4gIEluamVjdGlvblRva2VuLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy8gaW1wb3J0IHsgTWF0RHJhd2VyLCBNYXREcmF3ZXJDb250YWluZXIsIE1hdERyYXdlckNvbnRlbnQsIE1BVF9EUkFXRVJfQ09OVEFJTkVSIH0gZnJvbSAnLi9kcmF3ZXInO1xyXG5pbXBvcnQge1xyXG4gIE1hdERyYXdlcixcclxuICBtYXREcmF3ZXJBbmltYXRpb25zLFxyXG4gIE1hdERyYXdlckNvbnRhaW5lcixcclxuICBNYXREcmF3ZXJDb250ZW50LFxyXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xyXG5pbXBvcnQgeyBFc25VdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL3B1YmxpYy1hcGknO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1BVF9EUkFXRVJfQ09OVEFJTkVSID0gbmV3IEluamVjdGlvblRva2VuKCdNQVRfRFJBV0VSX0NPTlRBSU5FUicpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlc24tc2lkZW5hdi1jb250ZW50JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGVzbi1idXR0b24gXHJcbiAgICAgICpuZ0lmPVwiaXNUb2dnbGVCdXR0b25EaXNwbGF5ZWRcIiBcclxuICAgICAgY2xhc3M9XCJlc24tc2lkZW5hdi10b2dnbGUtYnV0dG9uXCJcclxuICAgICAgKGNsaWNrKT1cInRvZ2dsZSgpXCJcclxuICAgICAgW2NvbG9yXT1cIiduZXV0cmFsJ1wiXHJcbiAgICAgIFtpY29uT25seV09XCJ0cnVlXCJcclxuICAgICAgW3R5cGVdPVwiJ2Jhc2ljJ1wiPlxyXG4gICAgICA8ZXNuLWljb24gbmFtZT1cIm1lbnVcIj48L2Vzbi1pY29uPlxyXG4gICAgPC9lc24tYnV0dG9uPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdtYXQtZHJhd2VyLWNvbnRlbnQgbWF0LXNpZGVuYXYtY29udGVudCcsXHJcbiAgICAnW3N0eWxlLm1hcmdpbi1sZWZ0LnB4XSc6ICdfY29udGFpbmVyLl9jb250ZW50TWFyZ2lucy5sZWZ0JyxcclxuICAgICdbc3R5bGUubWFyZ2luLXJpZ2h0LnB4XSc6ICdfY29udGFpbmVyLl9jb250ZW50TWFyZ2lucy5yaWdodCcsXHJcbiAgfSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBDZGtTY3JvbGxhYmxlLFxyXG4gICAgICB1c2VFeGlzdGluZzogRXNuU2lkZW5hdkNvbnRlbnQsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25TaWRlbmF2Q29udGVudFxyXG4gIGV4dGVuZHMgTWF0RHJhd2VyQ29udGVudFxyXG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdFxyXG57XHJcbiAgcHVibGljIGlzVG9nZ2xlQnV0dG9uRGlzcGxheWVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQEluamVjdChmb3J3YXJkUmVmKCgpID0+IEVzblNpZGVuYXZDb250YWluZXIpKVxyXG4gICAgY29udGFpbmVyOiBFc25TaWRlbmF2Q29udGFpbmVyLFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXHJcbiAgICBzY3JvbGxEaXNwYXRjaGVyOiBTY3JvbGxEaXNwYXRjaGVyLFxyXG4gICAgbmdab25lOiBOZ1pvbmVcclxuICApIHtcclxuICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBjb250YWluZXIsIGVsZW1lbnRSZWYsIHNjcm9sbERpc3BhdGNoZXIsIG5nWm9uZSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jb250YWluZXIuX2FsbERyYXdlcnMuZm9yRWFjaCgoZHIpID0+IHtcclxuICAgICAgaWYgKCEhKGRyIGFzIEVzblNpZGVuYXYpLm1vYmlsZVF1ZXJ5KSB7XHJcbiAgICAgICAgKGRyIGFzIEVzblNpZGVuYXYpLm1vYmlsZVF1ZXJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZVRvZ2dsZUJ1dHRvbkRpc3BsYXkoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgKGRyIGFzIEVzblNpZGVuYXYpLnVwZGF0ZU1vZGUoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRvZ2dsZUJ1dHRvbkRpc3BsYXkoKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVRvZ2dsZUJ1dHRvbkRpc3BsYXkoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5pc1RvZ2dsZUJ1dHRvbkRpc3BsYXllZCA9IHRoaXMuX2NvbnRhaW5lci5fYWxsRHJhd2Vycy5zb21lKFxyXG4gICAgICAgIChkcikgPT4gZHIubW9kZSA9PT0gJ292ZXInXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG5cclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZSgpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5fYWxsRHJhd2Vycy5mb3JFYWNoKChkcikgPT4ge1xyXG4gICAgICBkci5vcGVuZWQgPyBkci5jbG9zZSgpIDogZHIub3BlbigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Vzbi1zaWRlbmF2JyxcclxuICBleHBvcnRBczogJ2VzblNpZGVuYXYnLFxyXG4gIHRlbXBsYXRlVXJsOiAnZHJhd2VyLmh0bWwnLFxyXG5cclxuICBhbmltYXRpb25zOiBbbWF0RHJhd2VyQW5pbWF0aW9ucy50cmFuc2Zvcm1EcmF3ZXJdLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnbWF0LWRyYXdlciBtYXQtc2lkZW5hdicsXHJcbiAgICB0YWJJbmRleDogJy0xJyxcclxuICAgIC8vIG11c3QgcHJldmVudCB0aGUgYnJvd3NlciBmcm9tIGFsaWduaW5nIHRleHQgYmFzZWQgb24gdmFsdWVcclxuICAgICdbYXR0ci5hbGlnbl0nOiAnbnVsbCcsXHJcbiAgICAnW2NsYXNzLm1hdC1kcmF3ZXItZW5kXSc6ICdwb3NpdGlvbiA9PT0gXCJlbmRcIicsXHJcbiAgICAnW2NsYXNzLm1hdC1kcmF3ZXItb3Zlcl0nOiAnbW9kZSA9PT0gXCJvdmVyXCInLFxyXG4gICAgJ1tjbGFzcy5tYXQtZHJhd2VyLXB1c2hdJzogJ21vZGUgPT09IFwicHVzaFwiJyxcclxuICAgICdbY2xhc3MubWF0LWRyYXdlci1zaWRlXSc6ICdtb2RlID09PSBcInNpZGVcIicsXHJcbiAgICAnW2NsYXNzLm1hdC1kcmF3ZXItb3BlbmVkXSc6ICdvcGVuZWQnLFxyXG4gICAgJ1tjbGFzcy5tYXQtc2lkZW5hdi1maXhlZF0nOiAnZml4ZWRJblZpZXdwb3J0JyxcclxuICAgICdbc3R5bGUudG9wLnB4XSc6ICdmaXhlZEluVmlld3BvcnQgPyBmaXhlZFRvcEdhcCA6IG51bGwnLFxyXG4gICAgJ1tzdHlsZS5ib3R0b20ucHhdJzogJ2ZpeGVkSW5WaWV3cG9ydCA/IGZpeGVkQm90dG9tR2FwIDogbnVsbCcsXHJcbiAgfSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuU2lkZW5hdlxyXG4gIGV4dGVuZHMgTWF0RHJhd2VyXHJcbiAgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIE9uSW5pdFxyXG57XHJcbiAgLyoqIFdoZXRoZXIgdGhlIHNpZGVuYXYgaXMgZml4ZWQgaW4gdGhlIHZpZXdwb3J0LiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGZpeGVkSW5WaWV3cG9ydCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9maXhlZEluVmlld3BvcnQ7XHJcbiAgfVxyXG4gIHNldCBmaXhlZEluVmlld3BvcnQodmFsdWU6IEJvb2xlYW5JbnB1dCkge1xyXG4gICAgdGhpcy5fZml4ZWRJblZpZXdwb3J0ID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfZml4ZWRJblZpZXdwb3J0ID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBnYXAgYmV0d2VlbiB0aGUgdG9wIG9mIHRoZSBzaWRlbmF2IGFuZCB0aGUgdG9wIG9mIHRoZSB2aWV3cG9ydCB3aGVuIHRoZSBzaWRlbmF2IGlzIGluIGZpeGVkXHJcbiAgICogbW9kZS5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBmaXhlZFRvcEdhcCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZpeGVkVG9wR2FwO1xyXG4gIH1cclxuICBzZXQgZml4ZWRUb3BHYXAodmFsdWU6IE51bWJlcklucHV0KSB7XHJcbiAgICB0aGlzLl9maXhlZFRvcEdhcCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfZml4ZWRUb3BHYXAgPSAwO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgZ2FwIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgc2lkZW5hdiBhbmQgdGhlIGJvdHRvbSBvZiB0aGUgdmlld3BvcnQgd2hlbiB0aGUgc2lkZW5hdiBpcyBpblxyXG4gICAqIGZpeGVkIG1vZGUuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBnZXQgZml4ZWRCb3R0b21HYXAoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9maXhlZEJvdHRvbUdhcDtcclxuICB9XHJcbiAgc2V0IGZpeGVkQm90dG9tR2FwKHZhbHVlOiBOdW1iZXJJbnB1dCkge1xyXG4gICAgdGhpcy5fZml4ZWRCb3R0b21HYXAgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2ZpeGVkQm90dG9tR2FwID0gMDtcclxuXHJcbiAgLy8gRXNuIGN1c3RvbVxyXG4gIEBJbnB1dCgpIHJlYWN0aXZlTW9kZTogYm9vbGVhbiB8IHN0cmluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHJlYWN0aXZlQnJlYWtwb2ludFdpZHRoPzogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgbW9iaWxlUXVlcnk6IE1lZGlhUXVlcnlMaXN0O1xyXG4gIHB1YmxpYyBfbW9iaWxlUXVlcnlMaXN0ZW5lcjogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xyXG4gIG1vZGVJbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgIF9mb2N1c1RyYXBGYWN0b3J5OiBGb2N1c1RyYXBGYWN0b3J5LFxyXG4gICAgX2ZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxyXG4gICAgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgIF9uZ1pvbmU6IE5nWm9uZSxcclxuICAgIF9pbnRlcmFjdGl2aXR5Q2hlY2tlcjogSW50ZXJhY3Rpdml0eUNoZWNrZXIsXHJcbiAgICBwdWJsaWMgbWVkaWE6IE1lZGlhTWF0Y2hlcixcclxuICAgIHB1YmxpYyBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcblxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgX2RvYzogYW55LFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfRFJBV0VSX0NPTlRBSU5FUikgX2NvbnRhaW5lcj86IE1hdERyYXdlckNvbnRhaW5lclxyXG4gICkge1xyXG4gICAgc3VwZXIoXHJcbiAgICAgIF9lbGVtZW50UmVmLFxyXG4gICAgICBfZm9jdXNUcmFwRmFjdG9yeSxcclxuICAgICAgX2ZvY3VzTW9uaXRvcixcclxuICAgICAgX3BsYXRmb3JtLFxyXG4gICAgICBfbmdab25lLFxyXG4gICAgICBfaW50ZXJhY3Rpdml0eUNoZWNrZXIsXHJcbiAgICAgIF9kb2MsXHJcbiAgICAgIF9jb250YWluZXJcclxuICAgICk7XHJcbiAgfVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hdXRvRm9jdXMgPSBmYWxzZTtcclxuICAgIHRoaXMucmVhY3RpdmVNb2RlID0gdGhpcy5yZWFjdGl2ZU1vZGUgfHwgdGhpcy5yZWFjdGl2ZU1vZGUgPT09ICcnO1xyXG4gICAgaWYgKHRoaXMucmVhY3RpdmVNb2RlKSB7XHJcbiAgICAgIHRoaXMubW9iaWxlUXVlcnkgPSB0aGlzLm1lZGlhLm1hdGNoTWVkaWEoXHJcbiAgICAgICAgYChtYXgtd2lkdGg6ICR7dGhpcy5yZWFjdGl2ZUJyZWFrcG9pbnRXaWR0aCB8fCBFc25VdGlscy5CUkVBS1BPSU5UUy50YWJsZXRMYXJnZX0pYFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLl9pbml0TGlzdGVuZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9pbml0TGlzdGVuZXIoKSB7XHJcbiAgICB0aGlzLl9tb2JpbGVRdWVyeUxpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgICAvLyB0aGlzLmlzU2lkZWJhck9wZW5lZCA9ICF0aGlzLm1vYmlsZVF1ZXJ5Lm1hdGNoZXM7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB0aGlzLnVwZGF0ZU1vZGUoKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHRoaXMubW9iaWxlUXVlcnkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5fbW9iaWxlUXVlcnlMaXN0ZW5lcik7XHJcbiAgfVxyXG5cclxuICBvdmVycmlkZSBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcclxuICAgIGlmICh0aGlzLnJlYWN0aXZlTW9kZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZU1vZGUoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3ZlcnJpZGUgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xyXG4gICAgaWYgKHRoaXMucmVhY3RpdmVNb2RlKSB7XHJcbiAgICAgIHRoaXMubW9iaWxlUXVlcnkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5fbW9iaWxlUXVlcnlMaXN0ZW5lcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlTW9kZSgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLm1vZGUgPSB0aGlzLm1vYmlsZVF1ZXJ5Lm1hdGNoZXMgPyAnb3ZlcicgOiAnc2lkZSc7XHJcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09ICdvdmVyJykge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgfVxyXG4gICAgICBpZighdGhpcy5tb2RlSW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICB0aGlzLm1vZGVJbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9tb2JpbGVRdWVyeUxpc3RlbmVyKCkpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ29udGVudENoYW5nZXMoKXtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLnVwZGF0ZU1vZGUoKSB9KVxyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlc24tc2lkZW5hdi1jb250YWluZXInLFxyXG4gIGV4cG9ydEFzOiAnZXNuU2lkZW5hdkNvbnRhaW5lcicsXHJcbiAgdGVtcGxhdGVVcmw6ICdzaWRlbmF2LWNvbnRhaW5lci5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnZHJhd2VyLnNjc3MnLCAnc2lkZW5hdi5zY3NzJ10sXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdtYXQtZHJhd2VyLWNvbnRhaW5lciBtYXQtc2lkZW5hdi1jb250YWluZXInLFxyXG4gICAgJ1tjbGFzcy5tYXQtZHJhd2VyLWNvbnRhaW5lci1leHBsaWNpdC1iYWNrZHJvcF0nOiAnX2JhY2tkcm9wT3ZlcnJpZGUnLFxyXG4gIH0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTUFUX0RSQVdFUl9DT05UQUlORVIsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBFc25TaWRlbmF2Q29udGFpbmVyLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuU2lkZW5hdkNvbnRhaW5lciBleHRlbmRzIE1hdERyYXdlckNvbnRhaW5lciB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihFc25TaWRlbmF2LCB7XHJcbiAgICAvLyBXZSBuZWVkIHRvIHVzZSBgZGVzY2VuZGFudHM6IHRydWVgLCBiZWNhdXNlIEl2eSB3aWxsIG5vIGxvbmdlciBtYXRjaFxyXG4gICAgLy8gaW5kaXJlY3QgZGVzY2VuZGFudHMgaWYgaXQncyBsZWZ0IGFzIGZhbHNlLlxyXG4gICAgZGVzY2VuZGFudHM6IHRydWUsXHJcbiAgfSlcclxuICBvdmVycmlkZSBfYWxsRHJhd2VyczogUXVlcnlMaXN0PEVzblNpZGVuYXY+O1xyXG5cclxuICBAQ29udGVudENoaWxkKEVzblNpZGVuYXZDb250ZW50KSBvdmVycmlkZSBfY29udGVudDogRXNuU2lkZW5hdkNvbnRlbnQ7XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVyXCIgY2RrU2Nyb2xsYWJsZSAjY29udGVudCAoY2RrT2JzZXJ2ZUNvbnRlbnQpPVwib25Db250ZW50Q2hhbmdlcygpXCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuIiwiPGRpdiBjbGFzcz1cIm1hdC1kcmF3ZXItYmFja2Ryb3BcIiAoY2xpY2spPVwiX29uQmFja2Ryb3BDbGlja2VkKClcIiAqbmdJZj1cImhhc0JhY2tkcm9wXCJcclxuICAgICBbY2xhc3MubWF0LWRyYXdlci1zaG93bl09XCJfaXNTaG93aW5nQmFja2Ryb3AoKVwiPjwvZGl2PlxyXG48bmctY29udGVudCBzZWxlY3Q9XCJlc24tc2lkZW5hdlwiPjwvbmctY29udGVudD5cclxuXHJcbjxuZy1jb250ZW50IHNlbGVjdD1cImVzbi1zaWRlbmF2LWNvbnRlbnRcIj5cclxuIFxyXG5cclxuPC9uZy1jb250ZW50PlxyXG48ZXNuLXNpZGVuYXYtY29udGVudCAqbmdJZj1cIiFfY29udGVudFwiPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9lc24tc2lkZW5hdi1jb250ZW50PlxyXG4iXX0=