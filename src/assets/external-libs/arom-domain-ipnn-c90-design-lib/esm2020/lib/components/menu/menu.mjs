/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, EventEmitter, Inject, InjectionToken, Input, Output, TemplateRef, QueryList, ViewChild, ViewEncapsulation, } from '@angular/core';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ESCAPE, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, UP_ARROW, hasModifierKey, } from '@angular/cdk/keycodes';
import { merge, Subject } from 'rxjs';
import { startWith, switchMap, take } from 'rxjs/operators';
import { EsnMenuItem } from './menu-item';
import { ESN_MENU_PANEL } from './menu-panel';
import { throwEsnMenuInvalidPositionX, throwEsnMenuInvalidPositionY } from './menu-errors';
import { ESN_MENU_CONTENT } from './menu-content';
import { esnMenuAnimations } from './menu-animations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
let menuPanelUid = 0;
/** Injection token to be used to override the default options for `esn-menu`. */
export const ESN_MENU_DEFAULT_OPTIONS = new InjectionToken('esn-menu-default-options', {
    providedIn: 'root',
    factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY,
});
/** @docs-private */
export function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
    return {
        overlapTrigger: false,
        xPosition: 'after',
        yPosition: 'below',
        backdropClass: 'cdk-overlay-transparent-backdrop',
    };
}
const DEFAULT_COLOR = 'primary';
/** Base class with all of the `MatMenu` functionality. */
export class _EsnMenuBase {
    constructor(_elementRef, _ngZone, _defaultOptions, 
    // @breaking-change 15.0.0 `_changeDetectorRef` to become a required parameter.
    _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._defaultOptions = _defaultOptions;
        this._changeDetectorRef = _changeDetectorRef;
        this._xPosition = this._defaultOptions.xPosition;
        this._yPosition = this._defaultOptions.yPosition;
        /** Only the direct descendant menu items. */
        this._directDescendantItems = new QueryList();
        /** Config object to be passed into the menu's ngClass */
        this._classList = {};
        /** Current state of the panel animation. */
        this._panelAnimationState = 'void';
        /** Emits whenever an animation on the menu completes. */
        this._animationDone = new Subject();
        /** Class or list of classes to be added to the overlay panel. */
        this.overlayPanelClass = this._defaultOptions.overlayPanelClass || '';
        /** Class to be added to the backdrop element. */
        this.backdropClass = this._defaultOptions.backdropClass;
        this._overlapTrigger = this._defaultOptions.overlapTrigger;
        this._hasBackdrop = this._defaultOptions.hasBackdrop;
        this.color = DEFAULT_COLOR;
        /** Event emitted when the menu is closed. */
        this.closed = new EventEmitter();
        /**
         * Event emitted when the menu is closed.
         * @deprecated Switch to `closed` instead
         * @breaking-change 8.0.0
         */
        this.close = this.closed;
        this.panelId = `esn-menu-panel-${menuPanelUid++}`;
    }
    /** Position of the menu in the X axis. */
    get xPosition() {
        return this._xPosition;
    }
    set xPosition(value) {
        if (value !== 'before' &&
            value !== 'after') {
            throwEsnMenuInvalidPositionX();
        }
        this._xPosition = value;
        this.setPositionClasses();
    }
    /** Position of the menu in the Y axis. */
    get yPosition() {
        return this._yPosition;
    }
    set yPosition(value) {
        if (value !== 'above' && value !== 'below') {
            throwEsnMenuInvalidPositionY();
        }
        this._yPosition = value;
        this.setPositionClasses();
    }
    /** Whether the menu should overlap its trigger. */
    get overlapTrigger() {
        return this._overlapTrigger;
    }
    set overlapTrigger(value) {
        this._overlapTrigger = coerceBooleanProperty(value);
    }
    /** Whether the menu has a backdrop. */
    get hasBackdrop() {
        return this._hasBackdrop;
    }
    set hasBackdrop(value) {
        this._hasBackdrop = coerceBooleanProperty(value);
    }
    /**
     * This method takes classes set on the host esn-menu element and applies them on the
     * menu template that displays in the overlay container.  Otherwise, it's difficult
     * to style the containing menu from outside the component.
     * @param classes list of class names
     */
    set panelClass(classes) {
        const previousPanelClass = this._previousPanelClass;
        if (previousPanelClass && previousPanelClass.length) {
            previousPanelClass.split(' ').forEach((className) => {
                this._classList[className] = false;
            });
        }
        this._previousPanelClass = classes;
        if (classes && classes.length) {
            classes.split(' ').forEach((className) => {
                this._classList[className] = true;
            });
            this._elementRef.nativeElement.className = '';
        }
    }
    /**
     * This method takes classes set on the host esn-menu element and applies them on the
     * menu template that displays in the overlay container.  Otherwise, it's difficult
     * to style the containing menu from outside the component.
     * @deprecated Use `panelClass` instead.
     * @breaking-change 8.0.0
     */
    get classList() {
        return this.panelClass;
    }
    set classList(classes) {
        this.panelClass = classes;
    }
    ngOnInit() {
        this.setPositionClasses();
    }
    ngAfterContentInit() {
        this._updateDirectDescendants();
        this._keyManager = new FocusKeyManager(this._directDescendantItems)
            .withWrap()
            .withTypeAhead()
            .withHomeAndEnd();
        this._keyManager.tabOut.subscribe(() => this.closed.emit('tab'));
        // If a user manually (programmatically) focuses a menu item, we need to reflect that focus
        // change back to the key manager. Note that we don't need to unsubscribe here because _focused
        // is internal and we know that it gets completed on destroy.
        this._directDescendantItems.changes
            .pipe(startWith(this._directDescendantItems), switchMap(items => merge(...items.map((item) => item._focused))))
            .subscribe(focusedItem => this._keyManager.updateActiveItem(focusedItem));
        this._directDescendantItems.changes.subscribe((itemsList) => {
            // Move focus to another item, if the active item is removed from the list.
            // We need to debounce the callback, because multiple items might be removed
            // in quick succession.
            const manager = this._keyManager;
            if (this._panelAnimationState === 'enter' && manager.activeItem?._hasFocus()) {
                const items = itemsList.toArray();
                const index = Math.max(0, Math.min(items.length - 1, manager.activeItemIndex || 0));
                if (items[index] && !items[index].disabled) {
                    manager.setActiveItem(index);
                }
                else {
                    manager.setNextItemActive();
                }
            }
        });
    }
    ngOnDestroy() {
        this._keyManager?.destroy();
        this._directDescendantItems.destroy();
        this.closed.complete();
        this._firstItemFocusSubscription?.unsubscribe();
    }
    /** Stream that emits whenever the hovered menu item changes. */
    _hovered() {
        // Coerce the `changes` property because Angular types it as `Observable<any>`
        const itemChanges = this._directDescendantItems.changes;
        return itemChanges.pipe(startWith(this._directDescendantItems), switchMap(items => merge(...items.map((item) => item._hovered))));
    }
    /*
     * Registers a menu item with the menu.
     * @docs-private
     * @deprecated No longer being used. To be removed.
     * @breaking-change 9.0.0
     */
    addItem(_item) { }
    /**
     * Removes an item from the menu.
     * @docs-private
     * @deprecated No longer being used. To be removed.
     * @breaking-change 9.0.0
     */
    removeItem(_item) { }
    /** Handle a keyboard event from the menu, delegating to the appropriate action. */
    _handleKeydown(event) {
        const keyCode = event.keyCode;
        const manager = this._keyManager;
        switch (keyCode) {
            case ESCAPE:
                if (!hasModifierKey(event)) {
                    event.preventDefault();
                    this.closed.emit('keydown');
                }
                break;
            case LEFT_ARROW:
                if (this.parentMenu && this.direction === 'ltr') {
                    this.closed.emit('keydown');
                }
                break;
            case RIGHT_ARROW:
                if (this.parentMenu && this.direction === 'rtl') {
                    this.closed.emit('keydown');
                }
                break;
            default:
                if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
                    manager.setFocusOrigin('keyboard');
                }
                manager.onKeydown(event);
                return;
        }
        // Don't allow the event to propagate if we've already handled it, or it may
        // end up reaching other overlays that were opened earlier (see #22694).
        event.stopPropagation();
    }
    /**
     * Focus the first item in the menu.
     * @param origin Action from which the focus originated. Used to set the correct styling.
     */
    focusFirstItem(origin = 'program') {
        // Wait for `onStable` to ensure iOS VoiceOver screen reader focuses the first item (#24735).
        this._firstItemFocusSubscription?.unsubscribe();
        this._firstItemFocusSubscription = this._ngZone.onStable.pipe(take(1)).subscribe(() => {
            let menuPanel = null;
            if (this._directDescendantItems.length) {
                // Because the `esn-menuPanel` is at the DOM insertion point, not inside the overlay, we don't
                // have a nice way of getting a hold of the menuPanel panel. We can't use a `ViewChild` either
                // because the panel is inside an `ng-template`. We work around it by starting from one of
                // the items and walking up the DOM.
                menuPanel = this._directDescendantItems.first._getHostElement().closest('[role="menu"]');
            }
            // If an item in the menuPanel is already focused, avoid overriding the focus.
            if (!menuPanel || !menuPanel.contains(document.activeElement)) {
                const manager = this._keyManager;
                manager.setFocusOrigin(origin).setFirstItemActive();
                // If there's no active item at this point, it means that all the items are disabled.
                // Move focus to the menuPanel panel so keyboard events like Escape still work. Also this will
                // give _some_ feedback to screen readers.
                if (!manager.activeItem && menuPanel) {
                    menuPanel.focus();
                }
            }
        });
    }
    /**
     * Resets the active item in the menu. This is used when the menu is opened, allowing
     * the user to start from the first option when pressing the down arrow.
     */
    resetActiveItem() {
        this._keyManager.setActiveItem(-1);
    }
    /**
     * Sets the menu panel elevation.
     * @param depth Number of parent menus that come before the menu.
     */
    setElevation(depth) {
        // The elevation starts at the base and increases by one for each level.
        // Capped at 24 because that's the maximum elevation defined in the Material design spec.
        const elevation = Math.min(this._baseElevation + depth, 24);
        const newElevation = `${this._elevationPrefix}${elevation}`;
        const customElevation = Object.keys(this._classList).find(className => {
            return className.startsWith(this._elevationPrefix);
        });
        if (!customElevation || customElevation === this._previousElevation) {
            if (this._previousElevation) {
                this._classList[this._previousElevation] = false;
            }
            this._classList[newElevation] = true;
            this._previousElevation = newElevation;
        }
    }
    /**
     * Adds classes to the menu panel based on its position. Can be used by
     * consumers to add specific styling based on the position.
     * @param posX Position of the menu along the x axis.
     * @param posY Position of the menu along the y axis.
     * @docs-private
     */
    setPositionClasses(posX = this.xPosition, posY = this.yPosition) {
        const classes = this._classList;
        classes['esn-menu-before'] = posX === 'before';
        classes['esn-menu-after'] = posX === 'after';
        classes['esn-menu-above'] = posY === 'above';
        classes['esn-menu-below'] = posY === 'below';
        // @breaking-change 15.0.0 Remove null check for `_changeDetectorRef`.
        this._changeDetectorRef?.markForCheck();
    }
    /** Starts the enter animation. */
    _startAnimation() {
        // @breaking-change 8.0.0 Combine with _resetAnimation.
        this._panelAnimationState = 'enter';
    }
    /** Resets the panel animation to its initial state. */
    _resetAnimation() {
        // @breaking-change 8.0.0 Combine with _startAnimation.
        this._panelAnimationState = 'void';
    }
    /** Callback that is invoked when the panel animation completes. */
    _onAnimationDone(event) {
        this._animationDone.next(event);
        this._isAnimating = false;
    }
    _onAnimationStart(event) {
        this._isAnimating = true;
        // Scroll the content element to the top as soon as the animation starts. This is necessary,
        // because we move focus to the first item while it's still being animated, which can throw
        // the browser off when it determines the scroll position. Alternatively we can move focus
        // when the animation is done, however moving focus asynchronously will interrupt screen
        // readers which are in the process of reading out the menu already. We take the `element`
        // from the `event` since we can't use a `ViewChild` to access the pane.
        if (event.toState === 'enter' && this._keyManager.activeItemIndex === 0) {
            event.element.scrollTop = 0;
        }
    }
    /**
     * Sets up a stream that will keep track of any newly-added menu items and will update the list
     * of direct descendants. We collect the descendants this way, because `_allItems` can include
     * items that are part of child menus, and using a custom way of registering items is unreliable
     * when it comes to maintaining the item order.
     */
    _updateDirectDescendants() {
        this._allItems.changes
            .pipe(startWith(this._allItems))
            .subscribe((items) => {
            this._directDescendantItems.reset(items.filter(item => item._parentMenu === this));
            this._directDescendantItems.notifyOnChanges();
        });
    }
}
_EsnMenuBase.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: _EsnMenuBase, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }, { token: ESN_MENU_DEFAULT_OPTIONS }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
_EsnMenuBase.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: _EsnMenuBase, inputs: { backdropClass: "backdropClass", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], ariaDescribedby: ["aria-describedby", "ariaDescribedby"], xPosition: "xPosition", yPosition: "yPosition", overlapTrigger: "overlapTrigger", hasBackdrop: "hasBackdrop", panelClass: ["class", "panelClass"], classList: "classList", color: "color" }, outputs: { closed: "closed", close: "close" }, queries: [{ propertyName: "lazyContent", first: true, predicate: ESN_MENU_CONTENT, descendants: true }, { propertyName: "_allItems", predicate: EsnMenuItem, descendants: true }, { propertyName: "items", predicate: EsnMenuItem }], viewQueries: [{ propertyName: "templateRef", first: true, predicate: TemplateRef, descendants: true }], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: _EsnMenuBase, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [ESN_MENU_DEFAULT_OPTIONS]
                }] }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { _allItems: [{
                type: ContentChildren,
                args: [EsnMenuItem, { descendants: true }]
            }], backdropClass: [{
                type: Input
            }], ariaLabel: [{
                type: Input,
                args: ['aria-label']
            }], ariaLabelledby: [{
                type: Input,
                args: ['aria-labelledby']
            }], ariaDescribedby: [{
                type: Input,
                args: ['aria-describedby']
            }], xPosition: [{
                type: Input
            }], yPosition: [{
                type: Input
            }], templateRef: [{
                type: ViewChild,
                args: [TemplateRef]
            }], items: [{
                type: ContentChildren,
                args: [EsnMenuItem, { descendants: false }]
            }], lazyContent: [{
                type: ContentChild,
                args: [ESN_MENU_CONTENT]
            }], overlapTrigger: [{
                type: Input
            }], hasBackdrop: [{
                type: Input
            }], panelClass: [{
                type: Input,
                args: ['class']
            }], classList: [{
                type: Input
            }], color: [{
                type: Input
            }], closed: [{
                type: Output
            }], close: [{
                type: Output
            }] } });
export class EsnMenu extends _EsnMenuBase {
    constructor(_elementRef, _ngZone, _defaultOptions, changeDetectorRef) {
        super(_elementRef, _ngZone, _defaultOptions, changeDetectorRef);
        this._elevationPrefix = 'esn-elevation-z';
        this._baseElevation = 8;
    }
}
EsnMenu.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnMenu, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }, { token: ESN_MENU_DEFAULT_OPTIONS }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
EsnMenu.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnMenu, selector: "esn-menu", host: { properties: { "attr.aria-label": "null", "attr.aria-labelledby": "null", "attr.aria-describedby": "null", "class.esn-menu-primary": "color === 'primary'", "class.esn-menu-accent": "color === 'accent'", "class.esn-menu-success": "color === 'success'", "class.esn-menu-error": "color === 'error'", "class.esn-menu-warning": "color === 'warning'", "class.esn-menu-neutral": "color === 'neutral'" }, classAttribute: "esn-menu" }, providers: [{ provide: ESN_MENU_PANEL, useExisting: EsnMenu }], exportAs: ["esnMenu"], usesInheritance: true, ngImport: i0, template: "<ng-template>\r\n  <div\r\n    class=\"esn-mdc-menu-panel mdc-menu-surface mdc-menu-surface--open esn-mdc-elevation-specific\"\r\n    [id]=\"panelId\"\r\n    [ngClass]=\"_classList\"\r\n    (keydown)=\"_handleKeydown($event)\"\r\n    (click)=\"closed.emit('click')\"\r\n    [@transformMenu]=\"_panelAnimationState\"\r\n    (@transformMenu.start)=\"_onAnimationStart($event)\"\r\n    (@transformMenu.done)=\"_onAnimationDone($event)\"\r\n    tabindex=\"-1\"\r\n    role=\"menu\"\r\n    [attr.aria-label]=\"ariaLabel || null\"\r\n    [attr.aria-labelledby]=\"ariaLabelledby || null\"\r\n    [attr.aria-describedby]=\"ariaDescribedby || null\">\r\n    <div class=\"esn-mdc-menu-content mdc-list\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n", styles: [".mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}esn-menu{display:none}.esn-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.esn-mdc-menu-content:focus{outline:none}.esn-mdc-menu-panel.ng-animating{pointer-events:none}.esn-mdc-menu-panel.esn-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;position:relative}.esn-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0 16px;-webkit-user-select:none;user-select:none;outline:none;border:none;-webkit-tap-highlight-color:transparent;cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px}.esn-mdc-menu-item:focus{outline:none}[dir=rtl] .esn-mdc-menu-item,.esn-mdc-menu-item[dir=rtl]{padding-left:16px;padding-right:16px}.esn-mdc-menu-item::-moz-focus-inner{border:0}.esn-mdc-menu-item.mdc-list-item{align-items:center}.esn-mdc-menu-item[disabled]{cursor:default;opacity:.38}.esn-mdc-menu-item[disabled]:after{display:block;position:absolute;content:\"\";inset:0}.esn-mdc-menu-item esn-icon{margin-right:16px}[dir=rtl] .esn-mdc-menu-item{text-align:right}[dir=rtl] .esn-mdc-menu-item esn-icon{margin-right:0;margin-left:16px}.esn-mdc-menu-item .mdc-list-item__primary-text{white-space:normal}.esn-mdc-menu-item.esn-mdc-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .esn-mdc-menu-item.esn-mdc-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.esn-mdc-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .esn-mdc-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .esn-mdc-menu-submenu-icon{fill:CanvasText}.esn-mdc-menu-item .esn-mdc-menu-ripple{inset:0;position:absolute;pointer-events:none}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], animations: [esnMenuAnimations.transformMenu, esnMenuAnimations.fadeInItems], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnMenu, decorators: [{
            type: Component,
            args: [{ selector: 'esn-menu', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, exportAs: 'esnMenu', host: {
                        class: 'esn-menu',
                        '[attr.aria-label]': 'null',
                        '[attr.aria-labelledby]': 'null',
                        '[attr.aria-describedby]': 'null',
                        '[class.esn-menu-primary]': `color === 'primary'`,
                        '[class.esn-menu-accent]': `color === 'accent'`,
                        '[class.esn-menu-success]': `color === 'success'`,
                        '[class.esn-menu-error]': `color === 'error'`,
                        '[class.esn-menu-warning]': `color === 'warning'`,
                        '[class.esn-menu-neutral]': `color === 'neutral'`,
                    }, animations: [esnMenuAnimations.transformMenu, esnMenuAnimations.fadeInItems], providers: [{ provide: ESN_MENU_PANEL, useExisting: EsnMenu }], template: "<ng-template>\r\n  <div\r\n    class=\"esn-mdc-menu-panel mdc-menu-surface mdc-menu-surface--open esn-mdc-elevation-specific\"\r\n    [id]=\"panelId\"\r\n    [ngClass]=\"_classList\"\r\n    (keydown)=\"_handleKeydown($event)\"\r\n    (click)=\"closed.emit('click')\"\r\n    [@transformMenu]=\"_panelAnimationState\"\r\n    (@transformMenu.start)=\"_onAnimationStart($event)\"\r\n    (@transformMenu.done)=\"_onAnimationDone($event)\"\r\n    tabindex=\"-1\"\r\n    role=\"menu\"\r\n    [attr.aria-label]=\"ariaLabel || null\"\r\n    [attr.aria-labelledby]=\"ariaLabelledby || null\"\r\n    [attr.aria-describedby]=\"ariaDescribedby || null\">\r\n    <div class=\"esn-mdc-menu-content mdc-list\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n", styles: [".mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}esn-menu{display:none}.esn-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.esn-mdc-menu-content:focus{outline:none}.esn-mdc-menu-panel.ng-animating{pointer-events:none}.esn-mdc-menu-panel.esn-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;position:relative}.esn-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0 16px;-webkit-user-select:none;user-select:none;outline:none;border:none;-webkit-tap-highlight-color:transparent;cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px}.esn-mdc-menu-item:focus{outline:none}[dir=rtl] .esn-mdc-menu-item,.esn-mdc-menu-item[dir=rtl]{padding-left:16px;padding-right:16px}.esn-mdc-menu-item::-moz-focus-inner{border:0}.esn-mdc-menu-item.mdc-list-item{align-items:center}.esn-mdc-menu-item[disabled]{cursor:default;opacity:.38}.esn-mdc-menu-item[disabled]:after{display:block;position:absolute;content:\"\";inset:0}.esn-mdc-menu-item esn-icon{margin-right:16px}[dir=rtl] .esn-mdc-menu-item{text-align:right}[dir=rtl] .esn-mdc-menu-item esn-icon{margin-right:0;margin-left:16px}.esn-mdc-menu-item .mdc-list-item__primary-text{white-space:normal}.esn-mdc-menu-item.esn-mdc-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .esn-mdc-menu-item.esn-mdc-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.esn-mdc-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .esn-mdc-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .esn-mdc-menu-submenu-icon{fill:CanvasText}.esn-mdc-menu-item .esn-mdc-menu-ripple{inset:0;position:absolute;pointer-events:none}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [ESN_MENU_DEFAULT_OPTIONS]
                }] }, { type: i0.ChangeDetectorRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL21lbnUvbWVudS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL21lbnUvbWVudS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBQ2YsU0FBUyxFQUVULFlBQVksRUFDWixNQUFNLEVBQ04sY0FBYyxFQUNkLEtBQUssRUFHTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEdBR2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBQyxlQUFlLEVBQWMsTUFBTSxtQkFBbUIsQ0FBQztBQUUvRCxPQUFPLEVBQWUscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRSxPQUFPLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFDVixXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsRUFDUixjQUFjLEdBQ2YsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUMsS0FBSyxFQUFjLE9BQU8sRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUM5RCxPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3hDLE9BQU8sRUFBZSxjQUFjLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFMUQsT0FBTyxFQUFDLDRCQUE0QixFQUFFLDRCQUE0QixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9B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QUFXLENBQUMsYUFDakUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsV0FBVyxTQUFTLEVBQUMsQ0FBQzs7MEJBbUJ6RCxNQUFNOzJCQUFDLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5qZWN0aW9uVG9rZW4sXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBPbkluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QW5pbWF0aW9uRXZlbnR9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQge0ZvY3VzS2V5TWFuYWdlciwgRm9jdXNPcmlnaW59IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHtEaXJlY3Rpb259IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHtCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcclxuaW1wb3J0IHtcclxuICBFU0NBUEUsXHJcbiAgTEVGVF9BUlJPVyxcclxuICBSSUdIVF9BUlJPVyxcclxuICBET1dOX0FSUk9XLFxyXG4gIFVQX0FSUk9XLFxyXG4gIGhhc01vZGlmaWVyS2V5LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7bWVyZ2UsIE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7c3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHRha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHtFc25NZW51SXRlbX0gZnJvbSAnLi9tZW51LWl0ZW0nO1xyXG5pbXBvcnQge0Vzbk1lbnVQYW5lbCwgRVNOX01FTlVfUEFORUx9IGZyb20gJy4vbWVudS1wYW5lbCc7XHJcbmltcG9ydCB7TWVudVBvc2l0aW9uWCwgTWVudVBvc2l0aW9uWX0gZnJvbSAnLi9tZW51LXBvc2l0aW9ucyc7XHJcbmltcG9ydCB7dGhyb3dFc25NZW51SW52YWxpZFBvc2l0aW9uWCwgdGhyb3dFc25NZW51SW52YWxpZFBvc2l0aW9uWX0gZnJvbSAnLi9tZW51LWVycm9ycyc7XHJcbmltcG9ydCB7RXNuTWVudUNvbnRlbnQsIEVTTl9NRU5VX0NPTlRFTlR9IGZyb20gJy4vbWVudS1jb250ZW50JztcclxuaW1wb3J0IHtlc25NZW51QW5pbWF0aW9uc30gZnJvbSAnLi9tZW51LWFuaW1hdGlvbnMnO1xyXG5cclxubGV0IG1lbnVQYW5lbFVpZCA9IDA7XHJcblxyXG4vKiogUmVhc29uIHdoeSB0aGUgbWVudSB3YXMgY2xvc2VkLiAqL1xyXG5leHBvcnQgdHlwZSBNZW51Q2xvc2VSZWFzb24gPSB2b2lkIHwgJ2NsaWNrJyB8ICdrZXlkb3duJyB8ICd0YWInO1xyXG5cclxuLyoqIERlZmF1bHQgYGVzbi1tZW51YCBvcHRpb25zIHRoYXQgY2FuIGJlIG92ZXJyaWRkZW4uICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXNuTWVudURlZmF1bHRPcHRpb25zIHtcclxuICAvKiogVGhlIHgtYXhpcyBwb3NpdGlvbiBvZiB0aGUgbWVudS4gKi9cclxuICB4UG9zaXRpb246IE1lbnVQb3NpdGlvblg7XHJcblxyXG4gIC8qKiBUaGUgeS1heGlzIHBvc2l0aW9uIG9mIHRoZSBtZW51LiAqL1xyXG4gIHlQb3NpdGlvbjogTWVudVBvc2l0aW9uWTtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIG1lbnUgc2hvdWxkIG92ZXJsYXAgdGhlIG1lbnUgdHJpZ2dlci4gKi9cclxuICBvdmVybGFwVHJpZ2dlcjogYm9vbGVhbjtcclxuXHJcbiAgLyoqIENsYXNzIHRvIGJlIGFwcGxpZWQgdG8gdGhlIG1lbnUncyBiYWNrZHJvcC4gKi9cclxuICBiYWNrZHJvcENsYXNzOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBDbGFzcyBvciBsaXN0IG9mIGNsYXNzZXMgdG8gYmUgYXBwbGllZCB0byB0aGUgbWVudSdzIG92ZXJsYXkgcGFuZWwuICovXHJcbiAgb3ZlcmxheVBhbmVsQ2xhc3M/OiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIG1lbnUgaGFzIGEgYmFja2Ryb3AuICovXHJcbiAgaGFzQmFja2Ryb3A/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKiogSW5qZWN0aW9uIHRva2VuIHRvIGJlIHVzZWQgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgb3B0aW9ucyBmb3IgYGVzbi1tZW51YC4gKi9cclxuZXhwb3J0IGNvbnN0IEVTTl9NRU5VX0RFRkFVTFRfT1BUSU9OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxFc25NZW51RGVmYXVsdE9wdGlvbnM+KFxyXG4gICdlc24tbWVudS1kZWZhdWx0LW9wdGlvbnMnLFxyXG4gIHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290JyxcclxuICAgIGZhY3Rvcnk6IE1BVF9NRU5VX0RFRkFVTFRfT1BUSU9OU19GQUNUT1JZLFxyXG4gIH0sXHJcbik7XHJcblxyXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gTUFUX01FTlVfREVGQVVMVF9PUFRJT05TX0ZBQ1RPUlkoKTogRXNuTWVudURlZmF1bHRPcHRpb25zIHtcclxuICByZXR1cm4ge1xyXG4gICAgb3ZlcmxhcFRyaWdnZXI6IGZhbHNlLFxyXG4gICAgeFBvc2l0aW9uOiAnYWZ0ZXInLFxyXG4gICAgeVBvc2l0aW9uOiAnYmVsb3cnLFxyXG4gICAgYmFja2Ryb3BDbGFzczogJ2Nkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wJyxcclxuICB9O1xyXG59XHJcbmV4cG9ydCB0eXBlIEVzbk1lbnVDb2xvciA9ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB8ICduZXV0cmFsJyB8IHVuZGVmaW5lZDtcclxuY29uc3QgREVGQVVMVF9DT0xPUjogRXNuTWVudUNvbG9yID0gJ3ByaW1hcnknO1xyXG5cclxuLyoqIEJhc2UgY2xhc3Mgd2l0aCBhbGwgb2YgdGhlIGBNYXRNZW51YCBmdW5jdGlvbmFsaXR5LiAqL1xyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGNsYXNzIF9Fc25NZW51QmFzZVxyXG4gIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgRXNuTWVudVBhbmVsPEVzbk1lbnVJdGVtPiwgT25Jbml0LCBPbkRlc3Ryb3lcclxue1xyXG4gIHByaXZhdGUgX2tleU1hbmFnZXI6IEZvY3VzS2V5TWFuYWdlcjxFc25NZW51SXRlbT47XHJcbiAgcHJpdmF0ZSBfeFBvc2l0aW9uOiBNZW51UG9zaXRpb25YID0gdGhpcy5fZGVmYXVsdE9wdGlvbnMueFBvc2l0aW9uO1xyXG4gIHByaXZhdGUgX3lQb3NpdGlvbjogTWVudVBvc2l0aW9uWSA9IHRoaXMuX2RlZmF1bHRPcHRpb25zLnlQb3NpdGlvbjtcclxuICBwcml2YXRlIF9maXJzdEl0ZW1Gb2N1c1N1YnNjcmlwdGlvbj86IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIF9wcmV2aW91c0VsZXZhdGlvbjogc3RyaW5nO1xyXG4gIHByb3RlY3RlZCBfZWxldmF0aW9uUHJlZml4OiBzdHJpbmc7XHJcbiAgcHJvdGVjdGVkIF9iYXNlRWxldmF0aW9uOiBudW1iZXI7XHJcblxyXG4gIC8qKiBBbGwgaXRlbXMgaW5zaWRlIHRoZSBtZW51LiBJbmNsdWRlcyBpdGVtcyBuZXN0ZWQgaW5zaWRlIGFub3RoZXIgbWVudS4gKi9cclxuICBAQ29udGVudENoaWxkcmVuKEVzbk1lbnVJdGVtLCB7ZGVzY2VuZGFudHM6IHRydWV9KSBfYWxsSXRlbXM6IFF1ZXJ5TGlzdDxFc25NZW51SXRlbT47XHJcblxyXG4gIC8qKiBPbmx5IHRoZSBkaXJlY3QgZGVzY2VuZGFudCBtZW51IGl0ZW1zLiAqL1xyXG4gIF9kaXJlY3REZXNjZW5kYW50SXRlbXMgPSBuZXcgUXVlcnlMaXN0PEVzbk1lbnVJdGVtPigpO1xyXG5cclxuICAvKiogQ29uZmlnIG9iamVjdCB0byBiZSBwYXNzZWQgaW50byB0aGUgbWVudSdzIG5nQ2xhc3MgKi9cclxuICBfY2xhc3NMaXN0OiB7W2tleTogc3RyaW5nXTogYm9vbGVhbn0gPSB7fTtcclxuXHJcbiAgLyoqIEN1cnJlbnQgc3RhdGUgb2YgdGhlIHBhbmVsIGFuaW1hdGlvbi4gKi9cclxuICBfcGFuZWxBbmltYXRpb25TdGF0ZTogJ3ZvaWQnIHwgJ2VudGVyJyA9ICd2b2lkJztcclxuXHJcbiAgLyoqIEVtaXRzIHdoZW5ldmVyIGFuIGFuaW1hdGlvbiBvbiB0aGUgbWVudSBjb21wbGV0ZXMuICovXHJcbiAgcmVhZG9ubHkgX2FuaW1hdGlvbkRvbmUgPSBuZXcgU3ViamVjdDxBbmltYXRpb25FdmVudD4oKTtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIG1lbnUgaXMgYW5pbWF0aW5nLiAqL1xyXG4gIF9pc0FuaW1hdGluZzogYm9vbGVhbjtcclxuXHJcbiAgLyoqIFBhcmVudCBtZW51IG9mIHRoZSBjdXJyZW50IG1lbnUgcGFuZWwuICovXHJcbiAgcGFyZW50TWVudTogRXNuTWVudVBhbmVsIHwgdW5kZWZpbmVkO1xyXG5cclxuICAvKiogTGF5b3V0IGRpcmVjdGlvbiBvZiB0aGUgbWVudS4gKi9cclxuICBkaXJlY3Rpb246IERpcmVjdGlvbjtcclxuXHJcbiAgLyoqIENsYXNzIG9yIGxpc3Qgb2YgY2xhc3NlcyB0byBiZSBhZGRlZCB0byB0aGUgb3ZlcmxheSBwYW5lbC4gKi9cclxuICBvdmVybGF5UGFuZWxDbGFzczogc3RyaW5nIHwgc3RyaW5nW10gPSB0aGlzLl9kZWZhdWx0T3B0aW9ucy5vdmVybGF5UGFuZWxDbGFzcyB8fCAnJztcclxuXHJcbiAgLyoqIENsYXNzIHRvIGJlIGFkZGVkIHRvIHRoZSBiYWNrZHJvcCBlbGVtZW50LiAqL1xyXG4gIEBJbnB1dCgpIGJhY2tkcm9wQ2xhc3M6IHN0cmluZyA9IHRoaXMuX2RlZmF1bHRPcHRpb25zLmJhY2tkcm9wQ2xhc3M7XHJcblxyXG4gIC8qKiBhcmlhLWxhYmVsIGZvciB0aGUgbWVudSBwYW5lbC4gKi9cclxuICBASW5wdXQoJ2FyaWEtbGFiZWwnKSBhcmlhTGFiZWw6IHN0cmluZztcclxuXHJcbiAgLyoqIGFyaWEtbGFiZWxsZWRieSBmb3IgdGhlIG1lbnUgcGFuZWwuICovXHJcbiAgQElucHV0KCdhcmlhLWxhYmVsbGVkYnknKSBhcmlhTGFiZWxsZWRieTogc3RyaW5nO1xyXG5cclxuICAvKiogYXJpYS1kZXNjcmliZWRieSBmb3IgdGhlIG1lbnUgcGFuZWwuICovXHJcbiAgQElucHV0KCdhcmlhLWRlc2NyaWJlZGJ5JykgYXJpYURlc2NyaWJlZGJ5OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBQb3NpdGlvbiBvZiB0aGUgbWVudSBpbiB0aGUgWCBheGlzLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHhQb3NpdGlvbigpOiBNZW51UG9zaXRpb25YIHtcclxuICAgIHJldHVybiB0aGlzLl94UG9zaXRpb247XHJcbiAgfVxyXG4gIHNldCB4UG9zaXRpb24odmFsdWU6IE1lbnVQb3NpdGlvblgpIHtcclxuICAgIGlmIChcclxuICAgICAgdmFsdWUgIT09ICdiZWZvcmUnICYmXHJcbiAgICAgIHZhbHVlICE9PSAnYWZ0ZXInXHJcbiAgICApIHtcclxuICAgICAgdGhyb3dFc25NZW51SW52YWxpZFBvc2l0aW9uWCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5feFBvc2l0aW9uID0gdmFsdWU7XHJcbiAgICB0aGlzLnNldFBvc2l0aW9uQ2xhc3NlcygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFBvc2l0aW9uIG9mIHRoZSBtZW51IGluIHRoZSBZIGF4aXMuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgeVBvc2l0aW9uKCk6IE1lbnVQb3NpdGlvblkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3lQb3NpdGlvbjtcclxuICB9XHJcbiAgc2V0IHlQb3NpdGlvbih2YWx1ZTogTWVudVBvc2l0aW9uWSkge1xyXG4gICAgaWYgKHZhbHVlICE9PSAnYWJvdmUnICYmIHZhbHVlICE9PSAnYmVsb3cnKSB7XHJcbiAgICAgIHRocm93RXNuTWVudUludmFsaWRQb3NpdGlvblkoKTtcclxuICAgIH1cclxuICAgIHRoaXMuX3lQb3NpdGlvbiA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZXRQb3NpdGlvbkNsYXNzZXMoKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXHJcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIC8qKlxyXG4gICAqIExpc3Qgb2YgdGhlIGl0ZW1zIGluc2lkZSBvZiBhIG1lbnUuXHJcbiAgICogQGRlcHJlY2F0ZWRcclxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDguMC4wXHJcbiAgICovXHJcbiAgQENvbnRlbnRDaGlsZHJlbihFc25NZW51SXRlbSwge2Rlc2NlbmRhbnRzOiBmYWxzZX0pIGl0ZW1zOiBRdWVyeUxpc3Q8RXNuTWVudUl0ZW0+O1xyXG5cclxuICAvKipcclxuICAgKiBNZW51IGNvbnRlbnQgdGhhdCB3aWxsIGJlIHJlbmRlcmVkIGxhemlseS5cclxuICAgKiBAZG9jcy1wcml2YXRlXHJcbiAgICovXHJcbiAgQENvbnRlbnRDaGlsZChFU05fTUVOVV9DT05URU5UKSBsYXp5Q29udGVudDogRXNuTWVudUNvbnRlbnQ7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBtZW51IHNob3VsZCBvdmVybGFwIGl0cyB0cmlnZ2VyLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG92ZXJsYXBUcmlnZ2VyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX292ZXJsYXBUcmlnZ2VyO1xyXG4gIH1cclxuICBzZXQgb3ZlcmxhcFRyaWdnZXIodmFsdWU6IEJvb2xlYW5JbnB1dCkge1xyXG4gICAgdGhpcy5fb3ZlcmxhcFRyaWdnZXIgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9vdmVybGFwVHJpZ2dlcjogYm9vbGVhbiA9IHRoaXMuX2RlZmF1bHRPcHRpb25zLm92ZXJsYXBUcmlnZ2VyO1xyXG5cclxuICAvKiogV2hldGhlciB0aGUgbWVudSBoYXMgYSBiYWNrZHJvcC4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBoYXNCYWNrZHJvcCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9oYXNCYWNrZHJvcDtcclxuICB9XHJcbiAgc2V0IGhhc0JhY2tkcm9wKHZhbHVlOiBCb29sZWFuSW5wdXQpIHtcclxuICAgIHRoaXMuX2hhc0JhY2tkcm9wID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfaGFzQmFja2Ryb3A6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB0aGlzLl9kZWZhdWx0T3B0aW9ucy5oYXNCYWNrZHJvcDtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgdGFrZXMgY2xhc3NlcyBzZXQgb24gdGhlIGhvc3QgZXNuLW1lbnUgZWxlbWVudCBhbmQgYXBwbGllcyB0aGVtIG9uIHRoZVxyXG4gICAqIG1lbnUgdGVtcGxhdGUgdGhhdCBkaXNwbGF5cyBpbiB0aGUgb3ZlcmxheSBjb250YWluZXIuICBPdGhlcndpc2UsIGl0J3MgZGlmZmljdWx0XHJcbiAgICogdG8gc3R5bGUgdGhlIGNvbnRhaW5pbmcgbWVudSBmcm9tIG91dHNpZGUgdGhlIGNvbXBvbmVudC5cclxuICAgKiBAcGFyYW0gY2xhc3NlcyBsaXN0IG9mIGNsYXNzIG5hbWVzXHJcbiAgICovXHJcbiAgQElucHV0KCdjbGFzcycpXHJcbiAgc2V0IHBhbmVsQ2xhc3MoY2xhc3Nlczogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBwcmV2aW91c1BhbmVsQ2xhc3MgPSB0aGlzLl9wcmV2aW91c1BhbmVsQ2xhc3M7XHJcblxyXG4gICAgaWYgKHByZXZpb3VzUGFuZWxDbGFzcyAmJiBwcmV2aW91c1BhbmVsQ2xhc3MubGVuZ3RoKSB7XHJcbiAgICAgIHByZXZpb3VzUGFuZWxDbGFzcy5zcGxpdCgnICcpLmZvckVhY2goKGNsYXNzTmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fY2xhc3NMaXN0W2NsYXNzTmFtZV0gPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fcHJldmlvdXNQYW5lbENsYXNzID0gY2xhc3NlcztcclxuXHJcbiAgICBpZiAoY2xhc3NlcyAmJiBjbGFzc2VzLmxlbmd0aCkge1xyXG4gICAgICBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaCgoY2xhc3NOYW1lOiBzdHJpbmcpID0+IHtcclxuICAgICAgICB0aGlzLl9jbGFzc0xpc3RbY2xhc3NOYW1lXSA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuICBwcml2YXRlIF9wcmV2aW91c1BhbmVsQ2xhc3M6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgdGFrZXMgY2xhc3NlcyBzZXQgb24gdGhlIGhvc3QgZXNuLW1lbnUgZWxlbWVudCBhbmQgYXBwbGllcyB0aGVtIG9uIHRoZVxyXG4gICAqIG1lbnUgdGVtcGxhdGUgdGhhdCBkaXNwbGF5cyBpbiB0aGUgb3ZlcmxheSBjb250YWluZXIuICBPdGhlcndpc2UsIGl0J3MgZGlmZmljdWx0XHJcbiAgICogdG8gc3R5bGUgdGhlIGNvbnRhaW5pbmcgbWVudSBmcm9tIG91dHNpZGUgdGhlIGNvbXBvbmVudC5cclxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYHBhbmVsQ2xhc3NgIGluc3RlYWQuXHJcbiAgICogQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGNsYXNzTGlzdCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMucGFuZWxDbGFzcztcclxuICB9XHJcbiAgc2V0IGNsYXNzTGlzdChjbGFzc2VzOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucGFuZWxDbGFzcyA9IGNsYXNzZXM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBjb2xvciA6RXNuTWVudUNvbG9yID0gREVGQVVMVF9DT0xPUlxyXG5cclxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBtZW51IGlzIGNsb3NlZC4gKi9cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xvc2VkOiBFdmVudEVtaXR0ZXI8TWVudUNsb3NlUmVhc29uPiA9IG5ldyBFdmVudEVtaXR0ZXI8TWVudUNsb3NlUmVhc29uPigpO1xyXG5cclxuICAvKipcclxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIG1lbnUgaXMgY2xvc2VkLlxyXG4gICAqIEBkZXByZWNhdGVkIFN3aXRjaCB0byBgY2xvc2VkYCBpbnN0ZWFkXHJcbiAgICogQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbG9zZTogRXZlbnRFbWl0dGVyPE1lbnVDbG9zZVJlYXNvbj4gPSB0aGlzLmNsb3NlZDtcclxuXHJcbiAgcmVhZG9ubHkgcGFuZWxJZCA9IGBlc24tbWVudS1wYW5lbC0ke21lbnVQYW5lbFVpZCsrfWA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXHJcbiAgICBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIGRlZmF1bHRPcHRpb25zOiBFc25NZW51RGVmYXVsdE9wdGlvbnMsXHJcbiAgICBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgYF9jaGFuZ2VEZXRlY3RvclJlZmAgdG8gYmVjb21lIGEgcmVxdWlyZWQgcGFyYW1ldGVyLlxyXG4gICAqIEBicmVha2luZy1jaGFuZ2UgMTUuMC4wXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgIG5nWm9uZTogTmdab25lLFxyXG4gICAgZGVmYXVsdE9wdGlvbnM6IEVzbk1lbnVEZWZhdWx0T3B0aW9ucyxcclxuICAgIGNoYW5nZURldGVjdG9yUmVmPzogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxyXG4gICAgQEluamVjdChFU05fTUVOVV9ERUZBVUxUX09QVElPTlMpIHByaXZhdGUgX2RlZmF1bHRPcHRpb25zOiBFc25NZW51RGVmYXVsdE9wdGlvbnMsXHJcbiAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDE1LjAuMCBgX2NoYW5nZURldGVjdG9yUmVmYCB0byBiZWNvbWUgYSByZXF1aXJlZCBwYXJhbWV0ZXIuXHJcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZj86IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnNldFBvc2l0aW9uQ2xhc3NlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5fdXBkYXRlRGlyZWN0RGVzY2VuZGFudHMoKTtcclxuICAgIHRoaXMuX2tleU1hbmFnZXIgPSBuZXcgRm9jdXNLZXlNYW5hZ2VyKHRoaXMuX2RpcmVjdERlc2NlbmRhbnRJdGVtcylcclxuICAgICAgLndpdGhXcmFwKClcclxuICAgICAgLndpdGhUeXBlQWhlYWQoKVxyXG4gICAgICAud2l0aEhvbWVBbmRFbmQoKTtcclxuICAgIHRoaXMuX2tleU1hbmFnZXIudGFiT3V0LnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsb3NlZC5lbWl0KCd0YWInKSk7XHJcblxyXG4gICAgLy8gSWYgYSB1c2VyIG1hbnVhbGx5IChwcm9ncmFtbWF0aWNhbGx5KSBmb2N1c2VzIGEgbWVudSBpdGVtLCB3ZSBuZWVkIHRvIHJlZmxlY3QgdGhhdCBmb2N1c1xyXG4gICAgLy8gY2hhbmdlIGJhY2sgdG8gdGhlIGtleSBtYW5hZ2VyLiBOb3RlIHRoYXQgd2UgZG9uJ3QgbmVlZCB0byB1bnN1YnNjcmliZSBoZXJlIGJlY2F1c2UgX2ZvY3VzZWRcclxuICAgIC8vIGlzIGludGVybmFsIGFuZCB3ZSBrbm93IHRoYXQgaXQgZ2V0cyBjb21wbGV0ZWQgb24gZGVzdHJveS5cclxuICAgIHRoaXMuX2RpcmVjdERlc2NlbmRhbnRJdGVtcy5jaGFuZ2VzXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHN0YXJ0V2l0aCh0aGlzLl9kaXJlY3REZXNjZW5kYW50SXRlbXMpLFxyXG4gICAgICAgIHN3aXRjaE1hcChpdGVtcyA9PiBtZXJnZSguLi5pdGVtcy5tYXAoKGl0ZW06IEVzbk1lbnVJdGVtKSA9PiBpdGVtLl9mb2N1c2VkKSkpLFxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoZm9jdXNlZEl0ZW0gPT4gdGhpcy5fa2V5TWFuYWdlci51cGRhdGVBY3RpdmVJdGVtKGZvY3VzZWRJdGVtIGFzIEVzbk1lbnVJdGVtKSk7XHJcblxyXG4gICAgdGhpcy5fZGlyZWN0RGVzY2VuZGFudEl0ZW1zLmNoYW5nZXMuc3Vic2NyaWJlKChpdGVtc0xpc3Q6IFF1ZXJ5TGlzdDxFc25NZW51SXRlbT4pID0+IHtcclxuICAgICAgLy8gTW92ZSBmb2N1cyB0byBhbm90aGVyIGl0ZW0sIGlmIHRoZSBhY3RpdmUgaXRlbSBpcyByZW1vdmVkIGZyb20gdGhlIGxpc3QuXHJcbiAgICAgIC8vIFdlIG5lZWQgdG8gZGVib3VuY2UgdGhlIGNhbGxiYWNrLCBiZWNhdXNlIG11bHRpcGxlIGl0ZW1zIG1pZ2h0IGJlIHJlbW92ZWRcclxuICAgICAgLy8gaW4gcXVpY2sgc3VjY2Vzc2lvbi5cclxuICAgICAgY29uc3QgbWFuYWdlciA9IHRoaXMuX2tleU1hbmFnZXI7XHJcblxyXG4gICAgICBpZiAodGhpcy5fcGFuZWxBbmltYXRpb25TdGF0ZSA9PT0gJ2VudGVyJyAmJiBtYW5hZ2VyLmFjdGl2ZUl0ZW0/Ll9oYXNGb2N1cygpKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBpdGVtc0xpc3QudG9BcnJheSgpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oaXRlbXMubGVuZ3RoIC0gMSwgbWFuYWdlci5hY3RpdmVJdGVtSW5kZXggfHwgMCkpO1xyXG5cclxuICAgICAgICBpZiAoaXRlbXNbaW5kZXhdICYmICFpdGVtc1tpbmRleF0uZGlzYWJsZWQpIHtcclxuICAgICAgICAgIG1hbmFnZXIuc2V0QWN0aXZlSXRlbShpbmRleCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG1hbmFnZXIuc2V0TmV4dEl0ZW1BY3RpdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9rZXlNYW5hZ2VyPy5kZXN0cm95KCk7XHJcbiAgICB0aGlzLl9kaXJlY3REZXNjZW5kYW50SXRlbXMuZGVzdHJveSgpO1xyXG4gICAgdGhpcy5jbG9zZWQuY29tcGxldGUoKTtcclxuICAgIHRoaXMuX2ZpcnN0SXRlbUZvY3VzU3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW5ldmVyIHRoZSBob3ZlcmVkIG1lbnUgaXRlbSBjaGFuZ2VzLiAqL1xyXG4gIF9ob3ZlcmVkKCk6IE9ic2VydmFibGU8RXNuTWVudUl0ZW0+IHtcclxuICAgIC8vIENvZXJjZSB0aGUgYGNoYW5nZXNgIHByb3BlcnR5IGJlY2F1c2UgQW5ndWxhciB0eXBlcyBpdCBhcyBgT2JzZXJ2YWJsZTxhbnk+YFxyXG4gICAgY29uc3QgaXRlbUNoYW5nZXMgPSB0aGlzLl9kaXJlY3REZXNjZW5kYW50SXRlbXMuY2hhbmdlcyBhcyBPYnNlcnZhYmxlPFF1ZXJ5TGlzdDxFc25NZW51SXRlbT4+O1xyXG4gICAgcmV0dXJuIGl0ZW1DaGFuZ2VzLnBpcGUoXHJcbiAgICAgIHN0YXJ0V2l0aCh0aGlzLl9kaXJlY3REZXNjZW5kYW50SXRlbXMpLFxyXG4gICAgICBzd2l0Y2hNYXAoaXRlbXMgPT4gbWVyZ2UoLi4uaXRlbXMubWFwKChpdGVtOiBFc25NZW51SXRlbSkgPT4gaXRlbS5faG92ZXJlZCkpKSxcclxuICAgICkgYXMgT2JzZXJ2YWJsZTxFc25NZW51SXRlbT47XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIFJlZ2lzdGVycyBhIG1lbnUgaXRlbSB3aXRoIHRoZSBtZW51LlxyXG4gICAqIEBkb2NzLXByaXZhdGVcclxuICAgKiBAZGVwcmVjYXRlZCBObyBsb25nZXIgYmVpbmcgdXNlZC4gVG8gYmUgcmVtb3ZlZC5cclxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDkuMC4wXHJcbiAgICovXHJcbiAgYWRkSXRlbShfaXRlbTogRXNuTWVudUl0ZW0pIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYW4gaXRlbSBmcm9tIHRoZSBtZW51LlxyXG4gICAqIEBkb2NzLXByaXZhdGVcclxuICAgKiBAZGVwcmVjYXRlZCBObyBsb25nZXIgYmVpbmcgdXNlZC4gVG8gYmUgcmVtb3ZlZC5cclxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDkuMC4wXHJcbiAgICovXHJcbiAgcmVtb3ZlSXRlbShfaXRlbTogRXNuTWVudUl0ZW0pIHt9XHJcblxyXG4gIC8qKiBIYW5kbGUgYSBrZXlib2FyZCBldmVudCBmcm9tIHRoZSBtZW51LCBkZWxlZ2F0aW5nIHRvIHRoZSBhcHByb3ByaWF0ZSBhY3Rpb24uICovXHJcbiAgX2hhbmRsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xyXG4gICAgY29uc3QgbWFuYWdlciA9IHRoaXMuX2tleU1hbmFnZXI7XHJcblxyXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XHJcbiAgICAgIGNhc2UgRVNDQVBFOlxyXG4gICAgICAgIGlmICghaGFzTW9kaWZpZXJLZXkoZXZlbnQpKSB7XHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgdGhpcy5jbG9zZWQuZW1pdCgna2V5ZG93bicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMRUZUX0FSUk9XOlxyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudE1lbnUgJiYgdGhpcy5kaXJlY3Rpb24gPT09ICdsdHInKSB7XHJcbiAgICAgICAgICB0aGlzLmNsb3NlZC5lbWl0KCdrZXlkb3duJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJJR0hUX0FSUk9XOlxyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudE1lbnUgJiYgdGhpcy5kaXJlY3Rpb24gPT09ICdydGwnKSB7XHJcbiAgICAgICAgICB0aGlzLmNsb3NlZC5lbWl0KCdrZXlkb3duJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGlmIChrZXlDb2RlID09PSBVUF9BUlJPVyB8fCBrZXlDb2RlID09PSBET1dOX0FSUk9XKSB7XHJcbiAgICAgICAgICBtYW5hZ2VyLnNldEZvY3VzT3JpZ2luKCdrZXlib2FyZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFuYWdlci5vbktleWRvd24oZXZlbnQpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEb24ndCBhbGxvdyB0aGUgZXZlbnQgdG8gcHJvcGFnYXRlIGlmIHdlJ3ZlIGFscmVhZHkgaGFuZGxlZCBpdCwgb3IgaXQgbWF5XHJcbiAgICAvLyBlbmQgdXAgcmVhY2hpbmcgb3RoZXIgb3ZlcmxheXMgdGhhdCB3ZXJlIG9wZW5lZCBlYXJsaWVyIChzZWUgIzIyNjk0KS5cclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm9jdXMgdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIG1lbnUuXHJcbiAgICogQHBhcmFtIG9yaWdpbiBBY3Rpb24gZnJvbSB3aGljaCB0aGUgZm9jdXMgb3JpZ2luYXRlZC4gVXNlZCB0byBzZXQgdGhlIGNvcnJlY3Qgc3R5bGluZy5cclxuICAgKi9cclxuICBmb2N1c0ZpcnN0SXRlbShvcmlnaW46IEZvY3VzT3JpZ2luID0gJ3Byb2dyYW0nKTogdm9pZCB7XHJcbiAgICAvLyBXYWl0IGZvciBgb25TdGFibGVgIHRvIGVuc3VyZSBpT1MgVm9pY2VPdmVyIHNjcmVlbiByZWFkZXIgZm9jdXNlcyB0aGUgZmlyc3QgaXRlbSAoIzI0NzM1KS5cclxuICAgIHRoaXMuX2ZpcnN0SXRlbUZvY3VzU3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5fZmlyc3RJdGVtRm9jdXNTdWJzY3JpcHRpb24gPSB0aGlzLl9uZ1pvbmUub25TdGFibGUucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICBsZXQgbWVudVBhbmVsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX2RpcmVjdERlc2NlbmRhbnRJdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAvLyBCZWNhdXNlIHRoZSBgZXNuLW1lbnVQYW5lbGAgaXMgYXQgdGhlIERPTSBpbnNlcnRpb24gcG9pbnQsIG5vdCBpbnNpZGUgdGhlIG92ZXJsYXksIHdlIGRvbid0XHJcbiAgICAgICAgLy8gaGF2ZSBhIG5pY2Ugd2F5IG9mIGdldHRpbmcgYSBob2xkIG9mIHRoZSBtZW51UGFuZWwgcGFuZWwuIFdlIGNhbid0IHVzZSBhIGBWaWV3Q2hpbGRgIGVpdGhlclxyXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlIHBhbmVsIGlzIGluc2lkZSBhbiBgbmctdGVtcGxhdGVgLiBXZSB3b3JrIGFyb3VuZCBpdCBieSBzdGFydGluZyBmcm9tIG9uZSBvZlxyXG4gICAgICAgIC8vIHRoZSBpdGVtcyBhbmQgd2Fsa2luZyB1cCB0aGUgRE9NLlxyXG4gICAgICAgIG1lbnVQYW5lbCA9IHRoaXMuX2RpcmVjdERlc2NlbmRhbnRJdGVtcy5maXJzdCEuX2dldEhvc3RFbGVtZW50KCkuY2xvc2VzdCgnW3JvbGU9XCJtZW51XCJdJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIElmIGFuIGl0ZW0gaW4gdGhlIG1lbnVQYW5lbCBpcyBhbHJlYWR5IGZvY3VzZWQsIGF2b2lkIG92ZXJyaWRpbmcgdGhlIGZvY3VzLlxyXG4gICAgICBpZiAoIW1lbnVQYW5lbCB8fCAhbWVudVBhbmVsLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XHJcbiAgICAgICAgY29uc3QgbWFuYWdlciA9IHRoaXMuX2tleU1hbmFnZXI7XHJcbiAgICAgICAgbWFuYWdlci5zZXRGb2N1c09yaWdpbihvcmlnaW4pLnNldEZpcnN0SXRlbUFjdGl2ZSgpO1xyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGFjdGl2ZSBpdGVtIGF0IHRoaXMgcG9pbnQsIGl0IG1lYW5zIHRoYXQgYWxsIHRoZSBpdGVtcyBhcmUgZGlzYWJsZWQuXHJcbiAgICAgICAgLy8gTW92ZSBmb2N1cyB0byB0aGUgbWVudVBhbmVsIHBhbmVsIHNvIGtleWJvYXJkIGV2ZW50cyBsaWtlIEVzY2FwZSBzdGlsbCB3b3JrLiBBbHNvIHRoaXMgd2lsbFxyXG4gICAgICAgIC8vIGdpdmUgX3NvbWVfIGZlZWRiYWNrIHRvIHNjcmVlbiByZWFkZXJzLlxyXG4gICAgICAgIGlmICghbWFuYWdlci5hY3RpdmVJdGVtICYmIG1lbnVQYW5lbCkge1xyXG4gICAgICAgICAgbWVudVBhbmVsLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0cyB0aGUgYWN0aXZlIGl0ZW0gaW4gdGhlIG1lbnUuIFRoaXMgaXMgdXNlZCB3aGVuIHRoZSBtZW51IGlzIG9wZW5lZCwgYWxsb3dpbmdcclxuICAgKiB0aGUgdXNlciB0byBzdGFydCBmcm9tIHRoZSBmaXJzdCBvcHRpb24gd2hlbiBwcmVzc2luZyB0aGUgZG93biBhcnJvdy5cclxuICAgKi9cclxuICByZXNldEFjdGl2ZUl0ZW0oKSB7XHJcbiAgICB0aGlzLl9rZXlNYW5hZ2VyLnNldEFjdGl2ZUl0ZW0oLTEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgbWVudSBwYW5lbCBlbGV2YXRpb24uXHJcbiAgICogQHBhcmFtIGRlcHRoIE51bWJlciBvZiBwYXJlbnQgbWVudXMgdGhhdCBjb21lIGJlZm9yZSB0aGUgbWVudS5cclxuICAgKi9cclxuICBzZXRFbGV2YXRpb24oZGVwdGg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgLy8gVGhlIGVsZXZhdGlvbiBzdGFydHMgYXQgdGhlIGJhc2UgYW5kIGluY3JlYXNlcyBieSBvbmUgZm9yIGVhY2ggbGV2ZWwuXHJcbiAgICAvLyBDYXBwZWQgYXQgMjQgYmVjYXVzZSB0aGF0J3MgdGhlIG1heGltdW0gZWxldmF0aW9uIGRlZmluZWQgaW4gdGhlIE1hdGVyaWFsIGRlc2lnbiBzcGVjLlxyXG4gICAgY29uc3QgZWxldmF0aW9uID0gTWF0aC5taW4odGhpcy5fYmFzZUVsZXZhdGlvbiArIGRlcHRoLCAyNCk7XHJcbiAgICBjb25zdCBuZXdFbGV2YXRpb24gPSBgJHt0aGlzLl9lbGV2YXRpb25QcmVmaXh9JHtlbGV2YXRpb259YDtcclxuICAgIGNvbnN0IGN1c3RvbUVsZXZhdGlvbiA9IE9iamVjdC5rZXlzKHRoaXMuX2NsYXNzTGlzdCkuZmluZChjbGFzc05hbWUgPT4ge1xyXG4gICAgICByZXR1cm4gY2xhc3NOYW1lLnN0YXJ0c1dpdGgodGhpcy5fZWxldmF0aW9uUHJlZml4KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghY3VzdG9tRWxldmF0aW9uIHx8IGN1c3RvbUVsZXZhdGlvbiA9PT0gdGhpcy5fcHJldmlvdXNFbGV2YXRpb24pIHtcclxuICAgICAgaWYgKHRoaXMuX3ByZXZpb3VzRWxldmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fY2xhc3NMaXN0W3RoaXMuX3ByZXZpb3VzRWxldmF0aW9uXSA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl9jbGFzc0xpc3RbbmV3RWxldmF0aW9uXSA9IHRydWU7XHJcbiAgICAgIHRoaXMuX3ByZXZpb3VzRWxldmF0aW9uID0gbmV3RWxldmF0aW9uO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBjbGFzc2VzIHRvIHRoZSBtZW51IHBhbmVsIGJhc2VkIG9uIGl0cyBwb3NpdGlvbi4gQ2FuIGJlIHVzZWQgYnlcclxuICAgKiBjb25zdW1lcnMgdG8gYWRkIHNwZWNpZmljIHN0eWxpbmcgYmFzZWQgb24gdGhlIHBvc2l0aW9uLlxyXG4gICAqIEBwYXJhbSBwb3NYIFBvc2l0aW9uIG9mIHRoZSBtZW51IGFsb25nIHRoZSB4IGF4aXMuXHJcbiAgICogQHBhcmFtIHBvc1kgUG9zaXRpb24gb2YgdGhlIG1lbnUgYWxvbmcgdGhlIHkgYXhpcy5cclxuICAgKiBAZG9jcy1wcml2YXRlXHJcbiAgICovXHJcbiAgc2V0UG9zaXRpb25DbGFzc2VzKHBvc1g6IE1lbnVQb3NpdGlvblggPSB0aGlzLnhQb3NpdGlvbiwgcG9zWTogTWVudVBvc2l0aW9uWSA9IHRoaXMueVBvc2l0aW9uKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdGhpcy5fY2xhc3NMaXN0O1xyXG4gICAgY2xhc3Nlc1snZXNuLW1lbnUtYmVmb3JlJ10gPSBwb3NYID09PSAnYmVmb3JlJztcclxuICAgIGNsYXNzZXNbJ2Vzbi1tZW51LWFmdGVyJ10gPSBwb3NYID09PSAnYWZ0ZXInO1xyXG4gICAgY2xhc3Nlc1snZXNuLW1lbnUtYWJvdmUnXSA9IHBvc1kgPT09ICdhYm92ZSc7XHJcbiAgICBjbGFzc2VzWydlc24tbWVudS1iZWxvdyddID0gcG9zWSA9PT0gJ2JlbG93JztcclxuXHJcbiAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDE1LjAuMCBSZW1vdmUgbnVsbCBjaGVjayBmb3IgYF9jaGFuZ2VEZXRlY3RvclJlZmAuXHJcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZj8ubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvKiogU3RhcnRzIHRoZSBlbnRlciBhbmltYXRpb24uICovXHJcbiAgX3N0YXJ0QW5pbWF0aW9uKCkge1xyXG4gICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCBDb21iaW5lIHdpdGggX3Jlc2V0QW5pbWF0aW9uLlxyXG4gICAgdGhpcy5fcGFuZWxBbmltYXRpb25TdGF0ZSA9ICdlbnRlcic7XHJcbiAgfVxyXG5cclxuICAvKiogUmVzZXRzIHRoZSBwYW5lbCBhbmltYXRpb24gdG8gaXRzIGluaXRpYWwgc3RhdGUuICovXHJcbiAgX3Jlc2V0QW5pbWF0aW9uKCkge1xyXG4gICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCBDb21iaW5lIHdpdGggX3N0YXJ0QW5pbWF0aW9uLlxyXG4gICAgdGhpcy5fcGFuZWxBbmltYXRpb25TdGF0ZSA9ICd2b2lkJztcclxuICB9XHJcblxyXG4gIC8qKiBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiB0aGUgcGFuZWwgYW5pbWF0aW9uIGNvbXBsZXRlcy4gKi9cclxuICBfb25BbmltYXRpb25Eb25lKGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xyXG4gICAgdGhpcy5fYW5pbWF0aW9uRG9uZS5uZXh0KGV2ZW50KTtcclxuICAgIHRoaXMuX2lzQW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBfb25BbmltYXRpb25TdGFydChldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcclxuICAgIHRoaXMuX2lzQW5pbWF0aW5nID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBTY3JvbGwgdGhlIGNvbnRlbnQgZWxlbWVudCB0byB0aGUgdG9wIGFzIHNvb24gYXMgdGhlIGFuaW1hdGlvbiBzdGFydHMuIFRoaXMgaXMgbmVjZXNzYXJ5LFxyXG4gICAgLy8gYmVjYXVzZSB3ZSBtb3ZlIGZvY3VzIHRvIHRoZSBmaXJzdCBpdGVtIHdoaWxlIGl0J3Mgc3RpbGwgYmVpbmcgYW5pbWF0ZWQsIHdoaWNoIGNhbiB0aHJvd1xyXG4gICAgLy8gdGhlIGJyb3dzZXIgb2ZmIHdoZW4gaXQgZGV0ZXJtaW5lcyB0aGUgc2Nyb2xsIHBvc2l0aW9uLiBBbHRlcm5hdGl2ZWx5IHdlIGNhbiBtb3ZlIGZvY3VzXHJcbiAgICAvLyB3aGVuIHRoZSBhbmltYXRpb24gaXMgZG9uZSwgaG93ZXZlciBtb3ZpbmcgZm9jdXMgYXN5bmNocm9ub3VzbHkgd2lsbCBpbnRlcnJ1cHQgc2NyZWVuXHJcbiAgICAvLyByZWFkZXJzIHdoaWNoIGFyZSBpbiB0aGUgcHJvY2VzcyBvZiByZWFkaW5nIG91dCB0aGUgbWVudSBhbHJlYWR5LiBXZSB0YWtlIHRoZSBgZWxlbWVudGBcclxuICAgIC8vIGZyb20gdGhlIGBldmVudGAgc2luY2Ugd2UgY2FuJ3QgdXNlIGEgYFZpZXdDaGlsZGAgdG8gYWNjZXNzIHRoZSBwYW5lLlxyXG4gICAgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdlbnRlcicgJiYgdGhpcy5fa2V5TWFuYWdlci5hY3RpdmVJdGVtSW5kZXggPT09IDApIHtcclxuICAgICAgZXZlbnQuZWxlbWVudC5zY3JvbGxUb3AgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB1cCBhIHN0cmVhbSB0aGF0IHdpbGwga2VlcCB0cmFjayBvZiBhbnkgbmV3bHktYWRkZWQgbWVudSBpdGVtcyBhbmQgd2lsbCB1cGRhdGUgdGhlIGxpc3RcclxuICAgKiBvZiBkaXJlY3QgZGVzY2VuZGFudHMuIFdlIGNvbGxlY3QgdGhlIGRlc2NlbmRhbnRzIHRoaXMgd2F5LCBiZWNhdXNlIGBfYWxsSXRlbXNgIGNhbiBpbmNsdWRlXHJcbiAgICogaXRlbXMgdGhhdCBhcmUgcGFydCBvZiBjaGlsZCBtZW51cywgYW5kIHVzaW5nIGEgY3VzdG9tIHdheSBvZiByZWdpc3RlcmluZyBpdGVtcyBpcyB1bnJlbGlhYmxlXHJcbiAgICogd2hlbiBpdCBjb21lcyB0byBtYWludGFpbmluZyB0aGUgaXRlbSBvcmRlci5cclxuICAgKi9cclxuICBwcml2YXRlIF91cGRhdGVEaXJlY3REZXNjZW5kYW50cygpIHtcclxuICAgIHRoaXMuX2FsbEl0ZW1zLmNoYW5nZXNcclxuICAgICAgLnBpcGUoc3RhcnRXaXRoKHRoaXMuX2FsbEl0ZW1zKSlcclxuICAgICAgLnN1YnNjcmliZSgoaXRlbXM6IFF1ZXJ5TGlzdDxFc25NZW51SXRlbT4pID0+IHtcclxuICAgICAgICB0aGlzLl9kaXJlY3REZXNjZW5kYW50SXRlbXMucmVzZXQoaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5fcGFyZW50TWVudSA9PT0gdGhpcykpO1xyXG4gICAgICAgIHRoaXMuX2RpcmVjdERlc2NlbmRhbnRJdGVtcy5ub3RpZnlPbkNoYW5nZXMoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Vzbi1tZW51JyxcclxuICB0ZW1wbGF0ZVVybDogJ21lbnUuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ21lbnUuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgZXhwb3J0QXM6ICdlc25NZW51JyxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2Vzbi1tZW51JyxcclxuICAgICdbYXR0ci5hcmlhLWxhYmVsXSc6ICdudWxsJyxcclxuICAgICdbYXR0ci5hcmlhLWxhYmVsbGVkYnldJzogJ251bGwnLFxyXG4gICAgJ1thdHRyLmFyaWEtZGVzY3JpYmVkYnldJzogJ251bGwnLFxyXG4gICAgJ1tjbGFzcy5lc24tbWVudS1wcmltYXJ5XSc6IGBjb2xvciA9PT0gJ3ByaW1hcnknYCxcclxuICAgICdbY2xhc3MuZXNuLW1lbnUtYWNjZW50XSc6IGBjb2xvciA9PT0gJ2FjY2VudCdgLFxyXG4gICAgJ1tjbGFzcy5lc24tbWVudS1zdWNjZXNzXSc6IGBjb2xvciA9PT0gJ3N1Y2Nlc3MnYCxcclxuICAgICdbY2xhc3MuZXNuLW1lbnUtZXJyb3JdJzogYGNvbG9yID09PSAnZXJyb3InYCxcclxuICAgICdbY2xhc3MuZXNuLW1lbnUtd2FybmluZ10nOiBgY29sb3IgPT09ICd3YXJuaW5nJ2AsXHJcbiAgICAnW2NsYXNzLmVzbi1tZW51LW5ldXRyYWxdJzogYGNvbG9yID09PSAnbmV1dHJhbCdgLFxyXG4gIH0sXHJcbiAgYW5pbWF0aW9uczogW2Vzbk1lbnVBbmltYXRpb25zLnRyYW5zZm9ybU1lbnUsIGVzbk1lbnVBbmltYXRpb25zLmZhZGVJbkl0ZW1zXSxcclxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRVNOX01FTlVfUEFORUwsIHVzZUV4aXN0aW5nOiBFc25NZW51fV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25NZW51IGV4dGVuZHMgX0Vzbk1lbnVCYXNlIHtcclxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2VsZXZhdGlvblByZWZpeCA9ICdlc24tZWxldmF0aW9uLXonO1xyXG4gIHByb3RlY3RlZCBvdmVycmlkZSBfYmFzZUVsZXZhdGlvbiA9IDg7XHJcblxyXG4gIC8qXHJcbiAgICogQGRlcHJlY2F0ZWQgYGNoYW5nZURldGVjdG9yUmVmYCBwYXJhbWV0ZXIgd2lsbCBiZWNvbWUgYSByZXF1aXJlZCBwYXJhbWV0ZXIuXHJcbiAgICogQGJyZWFraW5nLWNoYW5nZSAxNS4wLjBcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBkZWZhdWx0T3B0aW9uczogRXNuTWVudURlZmF1bHRPcHRpb25zLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgX25nWm9uZTogTmdab25lLFxyXG4gICAgQEluamVjdChFU05fTUVOVV9ERUZBVUxUX09QVElPTlMpIF9kZWZhdWx0T3B0aW9uczogRXNuTWVudURlZmF1bHRPcHRpb25zLFxyXG4gICAgY2hhbmdlRGV0ZWN0b3JSZWY/OiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICApIHtcclxuICAgIHN1cGVyKF9lbGVtZW50UmVmLCBfbmdab25lLCBfZGVmYXVsdE9wdGlvbnMsIGNoYW5nZURldGVjdG9yUmVmKTtcclxuICB9XHJcbn1cclxuIiwiPG5nLXRlbXBsYXRlPlxyXG4gIDxkaXZcclxuICAgIGNsYXNzPVwiZXNuLW1kYy1tZW51LXBhbmVsIG1kYy1tZW51LXN1cmZhY2UgbWRjLW1lbnUtc3VyZmFjZS0tb3BlbiBlc24tbWRjLWVsZXZhdGlvbi1zcGVjaWZpY1wiXHJcbiAgICBbaWRdPVwicGFuZWxJZFwiXHJcbiAgICBbbmdDbGFzc109XCJfY2xhc3NMaXN0XCJcclxuICAgIChrZXlkb3duKT1cIl9oYW5kbGVLZXlkb3duKCRldmVudClcIlxyXG4gICAgKGNsaWNrKT1cImNsb3NlZC5lbWl0KCdjbGljaycpXCJcclxuICAgIFtAdHJhbnNmb3JtTWVudV09XCJfcGFuZWxBbmltYXRpb25TdGF0ZVwiXHJcbiAgICAoQHRyYW5zZm9ybU1lbnUuc3RhcnQpPVwiX29uQW5pbWF0aW9uU3RhcnQoJGV2ZW50KVwiXHJcbiAgICAoQHRyYW5zZm9ybU1lbnUuZG9uZSk9XCJfb25BbmltYXRpb25Eb25lKCRldmVudClcIlxyXG4gICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgICByb2xlPVwibWVudVwiXHJcbiAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImFyaWFMYWJlbCB8fCBudWxsXCJcclxuICAgIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJhcmlhTGFiZWxsZWRieSB8fCBudWxsXCJcclxuICAgIFthdHRyLmFyaWEtZGVzY3JpYmVkYnldPVwiYXJpYURlc2NyaWJlZGJ5IHx8IG51bGxcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJlc24tbWRjLW1lbnUtY29udGVudCBtZGMtbGlzdFwiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19