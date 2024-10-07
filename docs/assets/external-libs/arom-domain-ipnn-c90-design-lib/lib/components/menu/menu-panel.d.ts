/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { EventEmitter, TemplateRef, InjectionToken } from '@angular/core';
import { MenuPositionX, MenuPositionY } from './menu-positions';
import { Direction } from '@angular/cdk/bidi';
import { FocusOrigin } from '@angular/cdk/a11y';
import { EsnMenuContent } from './menu-content';
/**
 * Injection token used to provide the parent menu to menu-specific components.
 * @docs-private
 */
export declare const ESN_MENU_PANEL: InjectionToken<EsnMenuPanel<any>>;
/**
 * Interface for a custom menu panel that can be used with `esnMenuTriggerFor`.
 * @docs-private
 */
export interface EsnMenuPanel<T = any> {
    xPosition: MenuPositionX;
    yPosition: MenuPositionY;
    overlapTrigger: boolean;
    templateRef: TemplateRef<any>;
    readonly close: EventEmitter<void | 'click' | 'keydown' | 'tab'>;
    parentMenu?: EsnMenuPanel | undefined;
    direction?: Direction;
    focusFirstItem: (origin?: FocusOrigin) => void;
    resetActiveItem: () => void;
    setPositionClasses?: (x: MenuPositionX, y: MenuPositionY) => void;
    setElevation?(depth: number): void;
    lazyContent?: EsnMenuContent;
    backdropClass?: string;
    overlayPanelClass?: string | string[];
    hasBackdrop?: boolean;
    readonly panelId?: string;
    /**
     * @deprecated To be removed.
     * @breaking-change 8.0.0
     */
    addItem?: (item: T) => void;
    /**
     * @deprecated To be removed.
     * @breaking-change 8.0.0
     */
    removeItem?: (item: T) => void;
}
