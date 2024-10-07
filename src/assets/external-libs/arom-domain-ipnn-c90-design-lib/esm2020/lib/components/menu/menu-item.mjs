/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation, Inject, Optional, Input, } from '@angular/core';
import { mixinDisabled, mixinDisableRipple, } from '@angular/material/core';
import { Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { ESN_MENU_PANEL } from './menu-panel';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
import * as i2 from "@angular/material/core";
import * as i3 from "@angular/common";
// Boilerplate for applying mixins to EsnMenuItem.
/** @docs-private */
const _EsnMenuItemBase = mixinDisableRipple(mixinDisabled(class {
}));
/**
 * Single item inside of a `esn-menu`. Provides the menu item styling and accessibility treatment.
 */
export class EsnMenuItem extends _EsnMenuItemBase {
    constructor(_elementRef, _document, _focusMonitor, _parentMenu, _changeDetectorRef) {
        super();
        this._elementRef = _elementRef;
        this._document = _document;
        this._focusMonitor = _focusMonitor;
        this._parentMenu = _parentMenu;
        this._changeDetectorRef = _changeDetectorRef;
        /** ARIA role for the menu item. */
        this.role = 'menuitem';
        /** Stream that emits when the menu item is hovered. */
        this._hovered = new Subject();
        /** Stream that emits when the menu item is focused. */
        this._focused = new Subject();
        /** Whether the menu item is highlighted. */
        this._highlighted = false;
        /** Whether the menu item acts as a trigger for a sub-menu. */
        this._triggersSubmenu = false;
        _parentMenu?.addItem?.(this);
    }
    /** Focuses the menu item. */
    focus(origin, options) {
        if (this._focusMonitor && origin) {
            this._focusMonitor.focusVia(this._getHostElement(), origin, options);
        }
        else {
            this._getHostElement().focus(options);
        }
        this._focused.next(this);
    }
    ngAfterViewInit() {
        if (this._focusMonitor) {
            // Start monitoring the element so it gets the appropriate focused classes. We want
            // to show the focus style for menu items only when the focus was not caused by a
            // mouse or touch interaction.
            this._focusMonitor.monitor(this._elementRef, false);
        }
    }
    ngOnDestroy() {
        if (this._focusMonitor) {
            this._focusMonitor.stopMonitoring(this._elementRef);
        }
        if (this._parentMenu && this._parentMenu.removeItem) {
            this._parentMenu.removeItem(this);
        }
        this._hovered.complete();
        this._focused.complete();
    }
    /** Used to set the `tabindex`. */
    _getTabIndex() {
        return this.disabled ? '-1' : '0';
    }
    /** Returns the host DOM element. */
    _getHostElement() {
        return this._elementRef.nativeElement;
    }
    /** Prevents the default element actions if it is disabled. */
    _checkDisabled(event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
    /** Emits to the hover stream. */
    _handleMouseEnter() {
        this._hovered.next(this);
    }
    /** Gets the label to be used when determining whether the option should be focused. */
    getLabel() {
        const clone = this._elementRef.nativeElement.cloneNode(true);
        // TODO change the esn-icon by esn-icon when it is ready !
        const icons = clone.querySelectorAll('esn-icon, .esn-btn-icon');
        // Strip away icons so they don't show up in the text.
        for (let i = 0; i < icons.length; i++) {
            icons[i].remove();
        }
        return clone.textContent?.trim() || '';
    }
    _setHighlighted(isHighlighted) {
        // We need to mark this for check for the case where the content is coming from a
        // `esnMenuContent` whose change detection tree is at the declaration position,
        // not the insertion position. See #23175.
        // @breaking-change 12.0.0 Remove null check for `_changeDetectorRef`.
        this._highlighted = isHighlighted;
        this._changeDetectorRef?.markForCheck();
    }
    _setTriggersSubmenu(triggersSubmenu) {
        // @breaking-change 12.0.0 Remove null check for `_changeDetectorRef`.
        this._triggersSubmenu = triggersSubmenu;
        this._changeDetectorRef?.markForCheck();
    }
    _hasFocus() {
        return this._document && this._document.activeElement === this._getHostElement();
    }
}
EsnMenuItem.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnMenuItem, deps: [{ token: i0.ElementRef }, { token: DOCUMENT }, { token: i1.FocusMonitor }, { token: ESN_MENU_PANEL, optional: true }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
EsnMenuItem.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnMenuItem, selector: "[esn-menu-item]", inputs: { disabled: "disabled", disableRipple: "disableRipple", role: "role" }, host: { listeners: { "click": "_checkDisabled($event)", "mouseenter": "_handleMouseEnter()" }, properties: { "attr.role": "role", "class.esn-mdc-menu-item-highlighted": "_highlighted", "class.esn-mdc-menu-item-submenu-trigger": "_triggersSubmenu", "attr.tabindex": "_getTabIndex()", "attr.aria-disabled": "disabled", "attr.disabled": "disabled || null" }, classAttribute: "esn-mdc-menu-item esn-mdc-focus-indicator mdc-list-item" }, exportAs: ["esnMenuItem"], usesInheritance: true, ngImport: i0, template: "<ng-content select=\"esn-icon, [esnMenuItemIcon]\"></ng-content>\r\n<span class=\"mdc-list-item__primary-text\"><ng-content></ng-content></span>\r\n<div class=\"esn-mdc-menu-ripple\" matRipple\r\n     [matRippleDisabled]=\"disableRipple || disabled\"\r\n     [matRippleTrigger]=\"_getHostElement()\">\r\n</div>\r\n<svg\r\n  *ngIf=\"_triggersSubmenu\"\r\n  class=\"esn-mdc-menu-submenu-icon\"\r\n  viewBox=\"0 0 5 10\"\r\n  focusable=\"false\"><polygon points=\"0,0 5,5 0,10\"/></svg>\r\n", dependencies: [{ kind: "directive", type: i2.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnMenuItem, decorators: [{
            type: Component,
            args: [{ selector: '[esn-menu-item]', exportAs: 'esnMenuItem', inputs: ['disabled', 'disableRipple'], host: {
                        '[attr.role]': 'role',
                        'class': 'esn-mdc-menu-item esn-mdc-focus-indicator mdc-list-item',
                        '[class.esn-mdc-menu-item-highlighted]': '_highlighted',
                        '[class.esn-mdc-menu-item-submenu-trigger]': '_triggersSubmenu',
                        '[attr.tabindex]': '_getTabIndex()',
                        '[attr.aria-disabled]': 'disabled',
                        '[attr.disabled]': 'disabled || null',
                        '(click)': '_checkDisabled($event)',
                        '(mouseenter)': '_handleMouseEnter()',
                    }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-content select=\"esn-icon, [esnMenuItemIcon]\"></ng-content>\r\n<span class=\"mdc-list-item__primary-text\"><ng-content></ng-content></span>\r\n<div class=\"esn-mdc-menu-ripple\" matRipple\r\n     [matRippleDisabled]=\"disableRipple || disabled\"\r\n     [matRippleTrigger]=\"_getHostElement()\">\r\n</div>\r\n<svg\r\n  *ngIf=\"_triggersSubmenu\"\r\n  class=\"esn-mdc-menu-submenu-icon\"\r\n  viewBox=\"0 0 5 10\"\r\n  focusable=\"false\"><polygon points=\"0,0 5,5 0,10\"/></svg>\r\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i1.FocusMonitor }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [ESN_MENU_PANEL]
                }, {
                    type: Optional
                }] }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { role: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvbWVudS9tZW51LWl0ZW0udHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9tZW51L21lbnUtaXRlbS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUdULGlCQUFpQixFQUNqQixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssR0FHTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBR0wsYUFBYSxFQUNiLGtCQUFrQixHQUNuQixNQUFNLHdCQUF3QixDQUFDO0FBRWhDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBZSxjQUFjLEVBQUMsTUFBTSxjQUFjLENBQUM7Ozs7O0FBRTFELGtEQUFrRDtBQUNsRCxvQkFBb0I7QUFDcEIsTUFBTSxnQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQyxhQUFhLENBQUM7Q0FBUSxDQUFDLENBQUMsQ0FBQztBQUVyRTs7R0FFRztBQW9CSCxNQUFNLE9BQU8sV0FDWCxTQUFRLGdCQUFnQjtJQXNDeEIsWUFDVSxXQUFvQyxFQUNsQixTQUFlLEVBQ2pDLGFBQTRCLEVBQ08sV0FBdUMsRUFDMUUsa0JBQXNDO1FBRTlDLEtBQUssRUFBRSxDQUFDO1FBTkEsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ2xCLGNBQVMsR0FBVCxTQUFTLENBQU07UUFDakMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDTyxnQkFBVyxHQUFYLFdBQVcsQ0FBNEI7UUFDMUUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQXhDaEQsbUNBQW1DO1FBQzFCLFNBQUksR0FBc0QsVUFBVSxDQUFDO1FBRTlFLHVEQUF1RDtRQUM5QyxhQUFRLEdBQXlCLElBQUksT0FBTyxFQUFlLENBQUM7UUFFckUsdURBQXVEO1FBQzlDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBZSxDQUFDO1FBRS9DLDRDQUE0QztRQUM1QyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUU5Qiw4REFBOEQ7UUFDOUQscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBOEJoQyxXQUFXLEVBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELDZCQUE2QjtJQUM3QixLQUFLLENBQUMsTUFBb0IsRUFBRSxPQUFzQjtRQUNoRCxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksTUFBTSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDdEU7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdkM7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixtRkFBbUY7WUFDbkYsaUZBQWlGO1lBQ2pGLDhCQUE4QjtZQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3JEO1FBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFO1lBQ25ELElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25DO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxrQ0FBa0M7SUFDbEMsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDcEMsQ0FBQztJQUVELG9DQUFvQztJQUNwQyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztJQUN4QyxDQUFDO0lBRUQsOERBQThEO0lBQzlELGNBQWMsQ0FBQyxLQUFZO1FBQ3pCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVELGlDQUFpQztJQUNqQyxpQkFBaUI7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsdUZBQXVGO0lBQ3ZGLFFBQVE7UUFDTixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFnQixDQUFDO1FBQzVFLDBEQUEwRDtRQUMxRCxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUVoRSxzREFBc0Q7UUFDdEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ25CO1FBRUQsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsZUFBZSxDQUFDLGFBQXNCO1FBQ3BDLGlGQUFpRjtRQUNqRiwrRUFBK0U7UUFDL0UsMENBQTBDO1FBQzFDLHNFQUFzRTtRQUN0RSxJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQztRQUNsQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELG1CQUFtQixDQUFDLGVBQXdCO1FBQzFDLHNFQUFzRTtRQUN0RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZUFBZSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbkYsQ0FBQzs7eUdBeklVLFdBQVcsNENBeUNaLFFBQVEseUNBRVIsY0FBYzs2RkEzQ2IsV0FBVywwbUJDekR4Qix5ZUFXQTs0RkQ4Q2EsV0FBVztrQkFuQnZCLFNBQVM7K0JBQ0UsaUJBQWlCLFlBQ2pCLGFBQWEsVUFDZixDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUMsUUFDL0I7d0JBQ0osYUFBYSxFQUFFLE1BQU07d0JBQ3JCLE9BQU8sRUFBRSx5REFBeUQ7d0JBQ2xFLHVDQUF1QyxFQUFFLGNBQWM7d0JBQ3ZELDJDQUEyQyxFQUFFLGtCQUFrQjt3QkFDL0QsaUJBQWlCLEVBQUUsZ0JBQWdCO3dCQUNuQyxzQkFBc0IsRUFBRSxVQUFVO3dCQUNsQyxpQkFBaUIsRUFBRSxrQkFBa0I7d0JBQ3JDLFNBQVMsRUFBRSx3QkFBd0I7d0JBQ25DLGNBQWMsRUFBRSxxQkFBcUI7cUJBQ3RDLG1CQUNnQix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJOzswQkE0Q2xDLE1BQU07MkJBQUMsUUFBUTs7MEJBRWYsTUFBTTsyQkFBQyxjQUFjOzswQkFBRyxRQUFROzRFQXRDMUIsSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIE9uRGVzdHJveSxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBJbmplY3QsXHJcbiAgT3B0aW9uYWwsXHJcbiAgSW5wdXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDYW5EaXNhYmxlLFxyXG4gIENhbkRpc2FibGVSaXBwbGUsXHJcbiAgbWl4aW5EaXNhYmxlZCxcclxuICBtaXhpbkRpc2FibGVSaXBwbGUsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7Rm9jdXNhYmxlT3B0aW9uLCBGb2N1c01vbml0b3IsIEZvY3VzT3JpZ2lufSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7RXNuTWVudVBhbmVsLCBFU05fTUVOVV9QQU5FTH0gZnJvbSAnLi9tZW51LXBhbmVsJztcclxuXHJcbi8vIEJvaWxlcnBsYXRlIGZvciBhcHBseWluZyBtaXhpbnMgdG8gRXNuTWVudUl0ZW0uXHJcbi8qKiBAZG9jcy1wcml2YXRlICovXHJcbmNvbnN0IF9Fc25NZW51SXRlbUJhc2UgPSBtaXhpbkRpc2FibGVSaXBwbGUobWl4aW5EaXNhYmxlZChjbGFzcyB7fSkpO1xyXG5cclxuLyoqXHJcbiAqIFNpbmdsZSBpdGVtIGluc2lkZSBvZiBhIGBlc24tbWVudWAuIFByb3ZpZGVzIHRoZSBtZW51IGl0ZW0gc3R5bGluZyBhbmQgYWNjZXNzaWJpbGl0eSB0cmVhdG1lbnQuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tlc24tbWVudS1pdGVtXScsXHJcbiAgZXhwb3J0QXM6ICdlc25NZW51SXRlbScsXHJcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ2Rpc2FibGVSaXBwbGUnXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2F0dHIucm9sZV0nOiAncm9sZScsXHJcbiAgICAnY2xhc3MnOiAnZXNuLW1kYy1tZW51LWl0ZW0gZXNuLW1kYy1mb2N1cy1pbmRpY2F0b3IgbWRjLWxpc3QtaXRlbScsXHJcbiAgICAnW2NsYXNzLmVzbi1tZGMtbWVudS1pdGVtLWhpZ2hsaWdodGVkXSc6ICdfaGlnaGxpZ2h0ZWQnLFxyXG4gICAgJ1tjbGFzcy5lc24tbWRjLW1lbnUtaXRlbS1zdWJtZW51LXRyaWdnZXJdJzogJ190cmlnZ2Vyc1N1Ym1lbnUnLFxyXG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICdfZ2V0VGFiSW5kZXgoKScsXHJcbiAgICAnW2F0dHIuYXJpYS1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxyXG4gICAgJ1thdHRyLmRpc2FibGVkXSc6ICdkaXNhYmxlZCB8fCBudWxsJyxcclxuICAgICcoY2xpY2spJzogJ19jaGVja0Rpc2FibGVkKCRldmVudCknLFxyXG4gICAgJyhtb3VzZWVudGVyKSc6ICdfaGFuZGxlTW91c2VFbnRlcigpJyxcclxuICB9LFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGVVcmw6ICdtZW51LWl0ZW0uaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25NZW51SXRlbVxyXG4gIGV4dGVuZHMgX0Vzbk1lbnVJdGVtQmFzZVxyXG4gIGltcGxlbWVudHMgRm9jdXNhYmxlT3B0aW9uLCBDYW5EaXNhYmxlLCBDYW5EaXNhYmxlUmlwcGxlLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3lcclxue1xyXG4gIC8qKiBBUklBIHJvbGUgZm9yIHRoZSBtZW51IGl0ZW0uICovXHJcbiAgQElucHV0KCkgcm9sZTogJ21lbnVpdGVtJyB8ICdtZW51aXRlbXJhZGlvJyB8ICdtZW51aXRlbWNoZWNrYm94JyA9ICdtZW51aXRlbSc7XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHRoZSBtZW51IGl0ZW0gaXMgaG92ZXJlZC4gKi9cclxuICByZWFkb25seSBfaG92ZXJlZDogU3ViamVjdDxFc25NZW51SXRlbT4gPSBuZXcgU3ViamVjdDxFc25NZW51SXRlbT4oKTtcclxuXHJcbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gdGhlIG1lbnUgaXRlbSBpcyBmb2N1c2VkLiAqL1xyXG4gIHJlYWRvbmx5IF9mb2N1c2VkID0gbmV3IFN1YmplY3Q8RXNuTWVudUl0ZW0+KCk7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBtZW51IGl0ZW0gaXMgaGlnaGxpZ2h0ZWQuICovXHJcbiAgX2hpZ2hsaWdodGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBtZW51IGl0ZW0gYWN0cyBhcyBhIHRyaWdnZXIgZm9yIGEgc3ViLW1lbnUuICovXHJcbiAgX3RyaWdnZXJzU3VibWVudTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgZG9jdW1lbnQ6IGFueSxcclxuICAgIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxyXG4gICAgcGFyZW50TWVudTogRXNuTWVudVBhbmVsPEVzbk1lbnVJdGVtPiB8IHVuZGVmaW5lZCxcclxuICAgIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICApO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCBgZG9jdW1lbnRgLCBgY2hhbmdlRGV0ZWN0b3JSZWZgIGFuZCBgZm9jdXNNb25pdG9yYCB0byBiZWNvbWUgcmVxdWlyZWQuXHJcbiAgICogQGJyZWFraW5nLWNoYW5nZSAxMi4wLjBcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgZG9jdW1lbnQ/OiBhbnksXHJcbiAgICBmb2N1c01vbml0b3I/OiBGb2N1c01vbml0b3IsXHJcbiAgICBwYXJlbnRNZW51PzogRXNuTWVudVBhbmVsPEVzbk1lbnVJdGVtPixcclxuICAgIGNoYW5nZURldGVjdG9yUmVmPzogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50PzogYW55LFxyXG4gICAgcHJpdmF0ZSBfZm9jdXNNb25pdG9yPzogRm9jdXNNb25pdG9yLFxyXG4gICAgQEluamVjdChFU05fTUVOVV9QQU5FTCkgQE9wdGlvbmFsKCkgcHVibGljIF9wYXJlbnRNZW51PzogRXNuTWVudVBhbmVsPEVzbk1lbnVJdGVtPixcclxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmPzogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgX3BhcmVudE1lbnU/LmFkZEl0ZW0/Lih0aGlzKTtcclxuICB9XHJcblxyXG4gIC8qKiBGb2N1c2VzIHRoZSBtZW51IGl0ZW0uICovXHJcbiAgZm9jdXMob3JpZ2luPzogRm9jdXNPcmlnaW4sIG9wdGlvbnM/OiBGb2N1c09wdGlvbnMpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9mb2N1c01vbml0b3IgJiYgb3JpZ2luKSB7XHJcbiAgICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLl9nZXRIb3N0RWxlbWVudCgpLCBvcmlnaW4sIG9wdGlvbnMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKS5mb2N1cyhvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9mb2N1c2VkLm5leHQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5fZm9jdXNNb25pdG9yKSB7XHJcbiAgICAgIC8vIFN0YXJ0IG1vbml0b3JpbmcgdGhlIGVsZW1lbnQgc28gaXQgZ2V0cyB0aGUgYXBwcm9wcmlhdGUgZm9jdXNlZCBjbGFzc2VzLiBXZSB3YW50XHJcbiAgICAgIC8vIHRvIHNob3cgdGhlIGZvY3VzIHN0eWxlIGZvciBtZW51IGl0ZW1zIG9ubHkgd2hlbiB0aGUgZm9jdXMgd2FzIG5vdCBjYXVzZWQgYnkgYVxyXG4gICAgICAvLyBtb3VzZSBvciB0b3VjaCBpbnRlcmFjdGlvbi5cclxuICAgICAgdGhpcy5fZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5fZWxlbWVudFJlZiwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5fZm9jdXNNb25pdG9yKSB7XHJcbiAgICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLl9lbGVtZW50UmVmKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fcGFyZW50TWVudSAmJiB0aGlzLl9wYXJlbnRNZW51LnJlbW92ZUl0ZW0pIHtcclxuICAgICAgdGhpcy5fcGFyZW50TWVudS5yZW1vdmVJdGVtKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2hvdmVyZWQuY29tcGxldGUoKTtcclxuICAgIHRoaXMuX2ZvY3VzZWQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIC8qKiBVc2VkIHRvIHNldCB0aGUgYHRhYmluZGV4YC4gKi9cclxuICBfZ2V0VGFiSW5kZXgoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmRpc2FibGVkID8gJy0xJyA6ICcwJztcclxuICB9XHJcblxyXG4gIC8qKiBSZXR1cm5zIHRoZSBob3N0IERPTSBlbGVtZW50LiAqL1xyXG4gIF9nZXRIb3N0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqIFByZXZlbnRzIHRoZSBkZWZhdWx0IGVsZW1lbnQgYWN0aW9ucyBpZiBpdCBpcyBkaXNhYmxlZC4gKi9cclxuICBfY2hlY2tEaXNhYmxlZChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEVtaXRzIHRvIHRoZSBob3ZlciBzdHJlYW0uICovXHJcbiAgX2hhbmRsZU1vdXNlRW50ZXIoKSB7XHJcbiAgICB0aGlzLl9ob3ZlcmVkLm5leHQodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKiogR2V0cyB0aGUgbGFiZWwgdG8gYmUgdXNlZCB3aGVuIGRldGVybWluaW5nIHdoZXRoZXIgdGhlIG9wdGlvbiBzaG91bGQgYmUgZm9jdXNlZC4gKi9cclxuICBnZXRMYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgY2xvbmUgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgLy8gVE9ETyBjaGFuZ2UgdGhlIGVzbi1pY29uIGJ5IGVzbi1pY29uIHdoZW4gaXQgaXMgcmVhZHkgIVxyXG4gICAgY29uc3QgaWNvbnMgPSBjbG9uZS5xdWVyeVNlbGVjdG9yQWxsKCdlc24taWNvbiwgLmVzbi1idG4taWNvbicpO1xyXG5cclxuICAgIC8vIFN0cmlwIGF3YXkgaWNvbnMgc28gdGhleSBkb24ndCBzaG93IHVwIGluIHRoZSB0ZXh0LlxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpY29ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpY29uc1tpXS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2xvbmUudGV4dENvbnRlbnQ/LnRyaW0oKSB8fCAnJztcclxuICB9XHJcblxyXG4gIF9zZXRIaWdobGlnaHRlZChpc0hpZ2hsaWdodGVkOiBib29sZWFuKSB7XHJcbiAgICAvLyBXZSBuZWVkIHRvIG1hcmsgdGhpcyBmb3IgY2hlY2sgZm9yIHRoZSBjYXNlIHdoZXJlIHRoZSBjb250ZW50IGlzIGNvbWluZyBmcm9tIGFcclxuICAgIC8vIGBlc25NZW51Q29udGVudGAgd2hvc2UgY2hhbmdlIGRldGVjdGlvbiB0cmVlIGlzIGF0IHRoZSBkZWNsYXJhdGlvbiBwb3NpdGlvbixcclxuICAgIC8vIG5vdCB0aGUgaW5zZXJ0aW9uIHBvc2l0aW9uLiBTZWUgIzIzMTc1LlxyXG4gICAgLy8gQGJyZWFraW5nLWNoYW5nZSAxMi4wLjAgUmVtb3ZlIG51bGwgY2hlY2sgZm9yIGBfY2hhbmdlRGV0ZWN0b3JSZWZgLlxyXG4gICAgdGhpcy5faGlnaGxpZ2h0ZWQgPSBpc0hpZ2hsaWdodGVkO1xyXG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWY/Lm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgX3NldFRyaWdnZXJzU3VibWVudSh0cmlnZ2Vyc1N1Ym1lbnU6IGJvb2xlYW4pIHtcclxuICAgIC8vIEBicmVha2luZy1jaGFuZ2UgMTIuMC4wIFJlbW92ZSBudWxsIGNoZWNrIGZvciBgX2NoYW5nZURldGVjdG9yUmVmYC5cclxuICAgIHRoaXMuX3RyaWdnZXJzU3VibWVudSA9IHRyaWdnZXJzU3VibWVudTtcclxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmPy5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIF9oYXNGb2N1cygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kb2N1bWVudCAmJiB0aGlzLl9kb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLl9nZXRIb3N0RWxlbWVudCgpO1xyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGVudCBzZWxlY3Q9XCJlc24taWNvbiwgW2Vzbk1lbnVJdGVtSWNvbl1cIj48L25nLWNvbnRlbnQ+XHJcbjxzcGFuIGNsYXNzPVwibWRjLWxpc3QtaXRlbV9fcHJpbWFyeS10ZXh0XCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj5cclxuPGRpdiBjbGFzcz1cImVzbi1tZGMtbWVudS1yaXBwbGVcIiBtYXRSaXBwbGVcclxuICAgICBbbWF0UmlwcGxlRGlzYWJsZWRdPVwiZGlzYWJsZVJpcHBsZSB8fCBkaXNhYmxlZFwiXHJcbiAgICAgW21hdFJpcHBsZVRyaWdnZXJdPVwiX2dldEhvc3RFbGVtZW50KClcIj5cclxuPC9kaXY+XHJcbjxzdmdcclxuICAqbmdJZj1cIl90cmlnZ2Vyc1N1Ym1lbnVcIlxyXG4gIGNsYXNzPVwiZXNuLW1kYy1tZW51LXN1Ym1lbnUtaWNvblwiXHJcbiAgdmlld0JveD1cIjAgMCA1IDEwXCJcclxuICBmb2N1c2FibGU9XCJmYWxzZVwiPjxwb2x5Z29uIHBvaW50cz1cIjAsMCA1LDUgMCwxMFwiLz48L3N2Zz5cclxuIl19