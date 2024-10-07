import { FocusTrapFactory, FocusMonitor, InteractivityChecker } from '@angular/cdk/a11y';
import { BooleanInput, NumberInput } from '@angular/cdk/coercion';
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { AfterViewInit, ChangeDetectorRef, ElementRef, InjectionToken, NgZone, OnDestroy, OnInit, QueryList } from '@angular/core';
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav';
import * as i0 from "@angular/core";
export declare const MAT_DRAWER_CONTAINER: InjectionToken<unknown>;
export declare class EsnSidenavContent extends MatDrawerContent implements AfterViewInit {
    changeDetectorRef: ChangeDetectorRef;
    isToggleButtonDisplayed: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, container: EsnSidenavContainer, elementRef: ElementRef<HTMLElement>, scrollDispatcher: ScrollDispatcher, ngZone: NgZone);
    ngAfterViewInit(): void;
    updateToggleButtonDisplay(): void;
    toggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnSidenavContent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnSidenavContent, "esn-sidenav-content", never, {}, {}, never, ["*"], false, never>;
}
export declare class EsnSidenav extends MatDrawer implements OnDestroy, AfterViewInit, OnInit {
    media: MediaMatcher;
    changeDetectorRef: ChangeDetectorRef;
    /** Whether the sidenav is fixed in the viewport. */
    get fixedInViewport(): boolean;
    set fixedInViewport(value: BooleanInput);
    private _fixedInViewport;
    /**
     * The gap between the top of the sidenav and the top of the viewport when the sidenav is in fixed
     * mode.
     */
    get fixedTopGap(): number;
    set fixedTopGap(value: NumberInput);
    private _fixedTopGap;
    /**
     * The gap between the bottom of the sidenav and the bottom of the viewport when the sidenav is in
     * fixed mode.
     */
    get fixedBottomGap(): number;
    set fixedBottomGap(value: NumberInput);
    private _fixedBottomGap;
    reactiveMode: boolean | string;
    reactiveBreakpointWidth?: string;
    mobileQuery: MediaQueryList;
    _mobileQueryListener: () => void;
    modeInitialized: boolean;
    constructor(_elementRef: ElementRef<HTMLElement>, _focusTrapFactory: FocusTrapFactory, _focusMonitor: FocusMonitor, _platform: Platform, _ngZone: NgZone, _interactivityChecker: InteractivityChecker, media: MediaMatcher, changeDetectorRef: ChangeDetectorRef, _doc: any, _container?: MatDrawerContainer);
    ngOnInit(): void;
    _initListener(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    updateMode(): void;
    onContentChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnSidenav, [null, null, null, null, null, null, null, null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnSidenav, "esn-sidenav", ["esnSidenav"], { "fixedInViewport": "fixedInViewport"; "fixedTopGap": "fixedTopGap"; "fixedBottomGap": "fixedBottomGap"; "reactiveMode": "reactiveMode"; "reactiveBreakpointWidth": "reactiveBreakpointWidth"; }, {}, never, ["*"], false, never>;
}
export declare class EsnSidenavContainer extends MatDrawerContainer {
    _allDrawers: QueryList<EsnSidenav>;
    _content: EsnSidenavContent;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnSidenavContainer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnSidenavContainer, "esn-sidenav-container", ["esnSidenavContainer"], {}, {}, ["_content", "_allDrawers"], ["esn-sidenav", "esn-sidenav-content", "*"], false, never>;
}
