/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AfterContentInit, ElementRef, EventEmitter, InjectionToken, NgZone, OnDestroy, TemplateRef, QueryList, OnInit, ChangeDetectorRef } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { FocusOrigin } from '@angular/cdk/a11y';
import { Direction } from '@angular/cdk/bidi';
import { BooleanInput } from '@angular/cdk/coercion';
import { Observable, Subject } from 'rxjs';
import { EsnMenuItem } from './menu-item';
import { EsnMenuPanel } from './menu-panel';
import { MenuPositionX, MenuPositionY } from './menu-positions';
import { EsnMenuContent } from './menu-content';
import * as i0 from "@angular/core";
/** Reason why the menu was closed. */
export declare type MenuCloseReason = void | 'click' | 'keydown' | 'tab';
/** Default `esn-menu` options that can be overridden. */
export interface EsnMenuDefaultOptions {
    /** The x-axis position of the menu. */
    xPosition: MenuPositionX;
    /** The y-axis position of the menu. */
    yPosition: MenuPositionY;
    /** Whether the menu should overlap the menu trigger. */
    overlapTrigger: boolean;
    /** Class to be applied to the menu's backdrop. */
    backdropClass: string;
    /** Class or list of classes to be applied to the menu's overlay panel. */
    overlayPanelClass?: string | string[];
    /** Whether the menu has a backdrop. */
    hasBackdrop?: boolean;
}
/** Injection token to be used to override the default options for `esn-menu`. */
export declare const ESN_MENU_DEFAULT_OPTIONS: InjectionToken<EsnMenuDefaultOptions>;
/** @docs-private */
export declare function MAT_MENU_DEFAULT_OPTIONS_FACTORY(): EsnMenuDefaultOptions;
export declare type EsnMenuColor = 'primary' | 'accent' | 'success' | 'error' | 'neutral' | undefined;
/** Base class with all of the `MatMenu` functionality. */
export declare class _EsnMenuBase implements AfterContentInit, EsnMenuPanel<EsnMenuItem>, OnInit, OnDestroy {
    private _elementRef;
    private _ngZone;
    private _defaultOptions;
    private _changeDetectorRef?;
    private _keyManager;
    private _xPosition;
    private _yPosition;
    private _firstItemFocusSubscription?;
    private _previousElevation;
    protected _elevationPrefix: string;
    protected _baseElevation: number;
    /** All items inside the menu. Includes items nested inside another menu. */
    _allItems: QueryList<EsnMenuItem>;
    /** Only the direct descendant menu items. */
    _directDescendantItems: QueryList<EsnMenuItem>;
    /** Config object to be passed into the menu's ngClass */
    _classList: {
        [key: string]: boolean;
    };
    /** Current state of the panel animation. */
    _panelAnimationState: 'void' | 'enter';
    /** Emits whenever an animation on the menu completes. */
    readonly _animationDone: Subject<AnimationEvent>;
    /** Whether the menu is animating. */
    _isAnimating: boolean;
    /** Parent menu of the current menu panel. */
    parentMenu: EsnMenuPanel | undefined;
    /** Layout direction of the menu. */
    direction: Direction;
    /** Class or list of classes to be added to the overlay panel. */
    overlayPanelClass: string | string[];
    /** Class to be added to the backdrop element. */
    backdropClass: string;
    /** aria-label for the menu panel. */
    ariaLabel: string;
    /** aria-labelledby for the menu panel. */
    ariaLabelledby: string;
    /** aria-describedby for the menu panel. */
    ariaDescribedby: string;
    /** Position of the menu in the X axis. */
    get xPosition(): MenuPositionX;
    set xPosition(value: MenuPositionX);
    /** Position of the menu in the Y axis. */
    get yPosition(): MenuPositionY;
    set yPosition(value: MenuPositionY);
    /** @docs-private */
    templateRef: TemplateRef<any>;
    /**
     * List of the items inside of a menu.
     * @deprecated
     * @breaking-change 8.0.0
     */
    items: QueryList<EsnMenuItem>;
    /**
     * Menu content that will be rendered lazily.
     * @docs-private
     */
    lazyContent: EsnMenuContent;
    /** Whether the menu should overlap its trigger. */
    get overlapTrigger(): boolean;
    set overlapTrigger(value: BooleanInput);
    private _overlapTrigger;
    /** Whether the menu has a backdrop. */
    get hasBackdrop(): boolean | undefined;
    set hasBackdrop(value: BooleanInput);
    private _hasBackdrop;
    /**
     * This method takes classes set on the host esn-menu element and applies them on the
     * menu template that displays in the overlay container.  Otherwise, it's difficult
     * to style the containing menu from outside the component.
     * @param classes list of class names
     */
    set panelClass(classes: string);
    private _previousPanelClass;
    /**
     * This method takes classes set on the host esn-menu element and applies them on the
     * menu template that displays in the overlay container.  Otherwise, it's difficult
     * to style the containing menu from outside the component.
     * @deprecated Use `panelClass` instead.
     * @breaking-change 8.0.0
     */
    get classList(): string;
    set classList(classes: string);
    color: EsnMenuColor;
    /** Event emitted when the menu is closed. */
    readonly closed: EventEmitter<MenuCloseReason>;
    /**
     * Event emitted when the menu is closed.
     * @deprecated Switch to `closed` instead
     * @breaking-change 8.0.0
     */
    readonly close: EventEmitter<MenuCloseReason>;
    readonly panelId: string;
    constructor(elementRef: ElementRef<HTMLElement>, ngZone: NgZone, defaultOptions: EsnMenuDefaultOptions, changeDetectorRef: ChangeDetectorRef);
    /**
     * @deprecated `_changeDetectorRef` to become a required parameter.
     * @breaking-change 15.0.0
     */
    constructor(elementRef: ElementRef<HTMLElement>, ngZone: NgZone, defaultOptions: EsnMenuDefaultOptions, changeDetectorRef?: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    /** Stream that emits whenever the hovered menu item changes. */
    _hovered(): Observable<EsnMenuItem>;
    addItem(_item: EsnMenuItem): void;
    /**
     * Removes an item from the menu.
     * @docs-private
     * @deprecated No longer being used. To be removed.
     * @breaking-change 9.0.0
     */
    removeItem(_item: EsnMenuItem): void;
    /** Handle a keyboard event from the menu, delegating to the appropriate action. */
    _handleKeydown(event: KeyboardEvent): void;
    /**
     * Focus the first item in the menu.
     * @param origin Action from which the focus originated. Used to set the correct styling.
     */
    focusFirstItem(origin?: FocusOrigin): void;
    /**
     * Resets the active item in the menu. This is used when the menu is opened, allowing
     * the user to start from the first option when pressing the down arrow.
     */
    resetActiveItem(): void;
    /**
     * Sets the menu panel elevation.
     * @param depth Number of parent menus that come before the menu.
     */
    setElevation(depth: number): void;
    /**
     * Adds classes to the menu panel based on its position. Can be used by
     * consumers to add specific styling based on the position.
     * @param posX Position of the menu along the x axis.
     * @param posY Position of the menu along the y axis.
     * @docs-private
     */
    setPositionClasses(posX?: MenuPositionX, posY?: MenuPositionY): void;
    /** Starts the enter animation. */
    _startAnimation(): void;
    /** Resets the panel animation to its initial state. */
    _resetAnimation(): void;
    /** Callback that is invoked when the panel animation completes. */
    _onAnimationDone(event: AnimationEvent): void;
    _onAnimationStart(event: AnimationEvent): void;
    /**
     * Sets up a stream that will keep track of any newly-added menu items and will update the list
     * of direct descendants. We collect the descendants this way, because `_allItems` can include
     * items that are part of child menus, and using a custom way of registering items is unreliable
     * when it comes to maintaining the item order.
     */
    private _updateDirectDescendants;
    static ɵfac: i0.ɵɵFactoryDeclaration<_EsnMenuBase, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<_EsnMenuBase, never, never, { "backdropClass": "backdropClass"; "ariaLabel": "aria-label"; "ariaLabelledby": "aria-labelledby"; "ariaDescribedby": "aria-describedby"; "xPosition": "xPosition"; "yPosition": "yPosition"; "overlapTrigger": "overlapTrigger"; "hasBackdrop": "hasBackdrop"; "panelClass": "class"; "classList": "classList"; "color": "color"; }, { "closed": "closed"; "close": "close"; }, ["lazyContent", "_allItems", "items"], never, false, never>;
}
export declare class EsnMenu extends _EsnMenuBase {
    protected _elevationPrefix: string;
    protected _baseElevation: number;
    constructor(elementRef: ElementRef<HTMLElement>, ngZone: NgZone, defaultOptions: EsnMenuDefaultOptions);
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnMenu, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnMenu, "esn-menu", ["esnMenu"], {}, {}, never, ["*"], false, never>;
}
