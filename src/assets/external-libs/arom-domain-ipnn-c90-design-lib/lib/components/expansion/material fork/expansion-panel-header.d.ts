/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FocusableOption, FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy } from '@angular/core';
import { HasTabIndex } from '@angular/material/core';
import { EsnAccordionTogglePosition } from './accordion-base';
import { EsnExpansionPanel, EsnExpansionPanelDefaultOptions } from './expansion-panel';
import * as i0 from "@angular/core";
/** @docs-private */
declare abstract class EsnExpansionPanelHeaderBase {
    abstract readonly disabled: boolean;
}
declare const _EsnExpansionPanelHeaderMixinBase: import("@angular/material/core")._Constructor<HasTabIndex> & import("@angular/material/core")._AbstractConstructor<HasTabIndex> & typeof EsnExpansionPanelHeaderBase;
/**
 * Header element of a `<esn-expansion-panel>`.
 */
export declare class EsnExpansionPanelHeader extends _EsnExpansionPanelHeaderMixinBase implements AfterViewInit, OnDestroy, FocusableOption, HasTabIndex {
    panel: EsnExpansionPanel;
    private _element;
    private _focusMonitor;
    private _changeDetectorRef;
    _animationMode?: string | undefined;
    private _parentChangeSubscription;
    constructor(panel: EsnExpansionPanel, _element: ElementRef, _focusMonitor: FocusMonitor, _changeDetectorRef: ChangeDetectorRef, defaultOptions?: EsnExpansionPanelDefaultOptions, _animationMode?: string | undefined, tabIndex?: string);
    /** Height of the header while the panel is expanded. */
    expandedHeight: string;
    /** Height of the header while the panel is collapsed. */
    collapsedHeight: string;
    /**
     * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
     * @docs-private
     */
    get disabled(): boolean;
    /** Toggles the expanded state of the panel. */
    _toggle(): void;
    /** Gets whether the panel is expanded. */
    _isExpanded(): boolean;
    /** Gets the expanded state string of the panel. */
    _getExpandedState(): string;
    /** Gets the panel id. */
    _getPanelId(): string;
    /** Gets the toggle position for the header. */
    _getTogglePosition(): EsnAccordionTogglePosition;
    /** Gets whether the expand indicator should be shown. */
    _showToggle(): boolean;
    /**
     * Gets the current height of the header. Null if no custom height has been
     * specified, and if the default height from the stylesheet should be used.
     */
    _getHeaderHeight(): string | null;
    /** Handle keydown event calling to toggle() if appropriate. */
    _keydown(event: KeyboardEvent): void;
    /**
     * Focuses the panel header. Implemented as a part of `FocusableOption`.
     * @param origin Origin of the action that triggered the focus.
     * @docs-private
     */
    focus(origin?: FocusOrigin, options?: FocusOptions): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnExpansionPanelHeader, [{ host: true; }, null, null, null, { optional: true; }, { optional: true; }, { attribute: "tabindex"; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnExpansionPanelHeader, "esn-expansion-panel-header", never, { "tabIndex": "tabIndex"; "expandedHeight": "expandedHeight"; "collapsedHeight": "collapsedHeight"; }, {}, never, ["esn-panel-title", "esn-panel-description", "*"], false, never>;
}
/**
 * Description element of a `<esn-expansion-panel-header>`.
 */
export declare class EsnExpansionPanelDescription {
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnExpansionPanelDescription, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EsnExpansionPanelDescription, "esn-panel-description", never, {}, {}, never, never, false, never>;
}
/**
 * Title element of a `<esn-expansion-panel-header>`.
 */
export declare class EsnExpansionPanelTitle {
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnExpansionPanelTitle, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EsnExpansionPanelTitle, "esn-panel-title", never, {}, {}, never, never, false, never>;
}
export {};
