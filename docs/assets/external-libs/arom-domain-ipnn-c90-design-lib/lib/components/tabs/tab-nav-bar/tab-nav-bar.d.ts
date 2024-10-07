import { FocusMonitor } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import { BooleanInput } from '@angular/cdk/coercion';
import { Platform } from '@angular/cdk/platform';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { QueryList, OnDestroy, ElementRef, NgZone, ChangeDetectorRef, AfterContentInit, AfterViewInit } from '@angular/core';
import { RippleGlobalOptions } from '@angular/material/core';
import { MatInkBar, MatTabLink, MatTabsConfig, _MatTabLinkBase, _MatTabNavBase } from '@angular/material/tabs';
import { BehaviorSubject } from 'rxjs';
import { MatInkBarItem } from '../ink-bar';
import * as i0 from "@angular/core";
/**
 * Navigation component matching the styles of the tab group header.
 * Provides anchored navigation with animated ink bar.
 */
export declare class EsnTabNav extends _MatTabNavBase implements AfterContentInit, AfterViewInit {
    /** Whether the ink bar should fit its width to the size of the tab label content. */
    get fitInkBarToContent(): boolean;
    set fitInkBarToContent(v: BooleanInput);
    _fitInkBarToContent: BehaviorSubject<boolean>;
    /** Whether tabs should be stretched to fill the header. */
    get stretchTabs(): boolean;
    set stretchTabs(v: BooleanInput);
    private _stretchTabs;
    _items: QueryList<MatTabLink>;
    _tabListContainer: ElementRef;
    _tabList: ElementRef;
    _tabListInner: ElementRef;
    _nextPaginator: ElementRef<HTMLElement>;
    _previousPaginator: ElementRef<HTMLElement>;
    _inkBar: MatInkBar;
    constructor(elementRef: ElementRef, dir: Directionality, ngZone: NgZone, changeDetectorRef: ChangeDetectorRef, viewportRuler: ViewportRuler, platform: Platform, animationMode?: string, defaultConfig?: MatTabsConfig);
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnTabNav, [null, { optional: true; }, null, null, null, null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnTabNav, "[esn-tab-nav-bar]", ["esnTabNavBar", "esnTabNav"], { "color": "color"; "fitInkBarToContent": "fitInkBarToContent"; "stretchTabs": "mat-stretch-tabs"; }, {}, ["_items"], ["*"], false, never>;
}
declare const _MatTabLinkBaseWithInkBarItem: typeof _MatTabLinkBase & (new (...args: any[]) => MatInkBarItem);
export declare class EsnTabLink extends _MatTabLinkBaseWithInkBarItem implements MatInkBarItem, OnDestroy {
    private readonly _destroyed;
    constructor(tabNavBar: EsnTabNav, elementRef: ElementRef, globalRippleOptions: RippleGlobalOptions | null, tabIndex: string, focusMonitor: FocusMonitor, animationMode?: string);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnTabLink, [null, null, { optional: true; }, { attribute: "tabindex"; }, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnTabLink, "[esn-tab-link], [esnTabLink]", ["esnTabLink"], { "disabled": "disabled"; "disableRipple": "disableRipple"; "tabIndex": "tabIndex"; "active": "active"; "id": "id"; }, {}, never, ["*"], false, never>;
}
/**
 * Tab panel component associated with MatTabNav.
 */
export declare class MatTabNavPanel {
    /** Unique id for the tab panel. */
    id: string;
    /** Id of the active tab in the nav bar. */
    _activeTabId?: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatTabNavPanel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatTabNavPanel, "mat-tab-nav-panel", ["matTabNavPanel"], { "id": "id"; }, {}, never, ["*"], false, never>;
}
export {};
