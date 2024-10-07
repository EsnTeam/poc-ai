import { ElementRef, NgZone, OnChanges, SimpleChanges, ViewContainerRef } from '@angular/core';
import { _MatTooltipBase, MatTooltipDefaultOptions, TooltipComponent } from "@angular/material/tooltip";
import { ComponentType, Overlay, ScrollStrategy } from "@angular/cdk/overlay";
import { ScrollDispatcher } from "@angular/cdk/scrolling";
import { Platform } from "@angular/cdk/platform";
import { AriaDescriber, FocusMonitor } from "@angular/cdk/a11y";
import { Directionality } from "@angular/cdk/bidi";
import { EsnTooltip } from "./models";
import * as i0 from "@angular/core";
export declare class TooltipDirective extends _MatTooltipBase<TooltipComponent> implements OnChanges {
    protected readonly _tooltipComponent: ComponentType<TooltipComponent>;
    esnTooltip: string | EsnTooltip | null;
    constructor(overlay: Overlay, elementRef: ElementRef<HTMLElement>, scrollDispatcher: ScrollDispatcher, viewContainerRef: ViewContainerRef, ngZone: NgZone, platform: Platform, ariaDescriber: AriaDescriber, focusMonitor: FocusMonitor, scrollStrategy: ScrollStrategy, dir: Directionality, defaultOptions: MatTooltipDefaultOptions);
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TooltipDirective, "[esnTooltip]", never, { "esnTooltip": "esnTooltip"; }, {}, never, never, false, never>;
}
