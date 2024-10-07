/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ElementRef, OnDestroy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CanDisable, CanDisableRipple } from '@angular/material/core';
import { FocusableOption, FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { Subject } from 'rxjs';
import { EsnMenuPanel } from './menu-panel';
import * as i0 from "@angular/core";
/** @docs-private */
declare const _EsnMenuItemBase: import("@angular/material/core")._Constructor<CanDisableRipple> & import("@angular/material/core")._AbstractConstructor<CanDisableRipple> & import("@angular/material/core")._Constructor<CanDisable> & import("@angular/material/core")._AbstractConstructor<CanDisable> & {
    new (): {};
};
/**
 * Single item inside of a `esn-menu`. Provides the menu item styling and accessibility treatment.
 */
export declare class EsnMenuItem extends _EsnMenuItemBase implements FocusableOption, CanDisable, CanDisableRipple, AfterViewInit, OnDestroy {
    private _elementRef;
    private _document?;
    private _focusMonitor?;
    _parentMenu?: EsnMenuPanel<EsnMenuItem> | undefined;
    private _changeDetectorRef?;
    /** ARIA role for the menu item. */
    role: 'menuitem' | 'menuitemradio' | 'menuitemcheckbox';
    /** Stream that emits when the menu item is hovered. */
    readonly _hovered: Subject<EsnMenuItem>;
    /** Stream that emits when the menu item is focused. */
    readonly _focused: Subject<EsnMenuItem>;
    /** Whether the menu item is highlighted. */
    _highlighted: boolean;
    /** Whether the menu item acts as a trigger for a sub-menu. */
    _triggersSubmenu: boolean;
    constructor(elementRef: ElementRef<HTMLElement>, document: any, focusMonitor: FocusMonitor, parentMenu: EsnMenuPanel<EsnMenuItem> | undefined, changeDetectorRef: ChangeDetectorRef);
    /**
     * @deprecated `document`, `changeDetectorRef` and `focusMonitor` to become required.
     * @breaking-change 12.0.0
     */
    constructor(elementRef: ElementRef<HTMLElement>, document?: any, focusMonitor?: FocusMonitor, parentMenu?: EsnMenuPanel<EsnMenuItem>, changeDetectorRef?: ChangeDetectorRef);
    /** Focuses the menu item. */
    focus(origin?: FocusOrigin, options?: FocusOptions): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /** Used to set the `tabindex`. */
    _getTabIndex(): string;
    /** Returns the host DOM element. */
    _getHostElement(): HTMLElement;
    /** Prevents the default element actions if it is disabled. */
    _checkDisabled(event: Event): void;
    /** Emits to the hover stream. */
    _handleMouseEnter(): void;
    /** Gets the label to be used when determining whether the option should be focused. */
    getLabel(): string;
    _setHighlighted(isHighlighted: boolean): void;
    _setTriggersSubmenu(triggersSubmenu: boolean): void;
    _hasFocus(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnMenuItem, [null, null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnMenuItem, "[esn-menu-item]", ["esnMenuItem"], { "disabled": "disabled"; "disableRipple": "disableRipple"; "role": "role"; }, {}, never, ["esn-icon, [esnMenuItemIcon]", "*"], false, never>;
}
export {};
