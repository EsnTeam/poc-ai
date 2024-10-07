import { ElementRef, NgZone, ViewContainerRef } from '@angular/core';
import { _MatTooltipBase, MatTooltipDefaultOptions, TooltipComponent } from "@angular/material/tooltip";
import { ComponentType, Overlay, ScrollStrategy } from "@angular/cdk/overlay";
import { ScrollDispatcher } from "@angular/cdk/scrolling";
import { Platform } from "@angular/cdk/platform";
import { AriaDescriber, FocusMonitor } from "@angular/cdk/a11y";
import { Directionality } from "@angular/cdk/bidi";
import * as i0 from "@angular/core";
export declare const ESN_TOOLTIP_SCROLL_STRATEGY: import("@angular/core").InjectionToken<() => ScrollStrategy>;
export declare const ESN_TOOLTIP_DEFAULT_OPTIONS: import("@angular/core").InjectionToken<MatTooltipDefaultOptions>;
export declare class EsnTooltip extends _MatTooltipBase<TooltipComponent> {
    protected readonly _tooltipComponent: ComponentType<TooltipComponent>;
    constructor(overlay: Overlay, elementRef: ElementRef<HTMLElement>, scrollDispatcher: ScrollDispatcher, viewContainerRef: ViewContainerRef, ngZone: NgZone, platform: Platform, ariaDescriber: AriaDescriber, focusMonitor: FocusMonitor, scrollStrategy: ScrollStrategy, dir: Directionality, defaultOptions: MatTooltipDefaultOptions);
    setMessage(msg: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnTooltip, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnTooltip>;
}
