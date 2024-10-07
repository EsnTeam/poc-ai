/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from '@angular/core';
import { CdkAccordion } from '@angular/cdk/accordion';
/** EsnAccordion's display modes. */
export declare type EsnAccordionDisplayMode = 'default' | 'flat';
/** EsnAccordion's toggle positions. */
export declare type EsnAccordionTogglePosition = 'before' | 'after';
/**
 * Base interface for a `EsnAccordion`.
 * @docs-private
 */
export interface EsnAccordionBase extends CdkAccordion {
    /** Whether the expansion indicator should be hidden. */
    hideToggle: boolean;
    /** Display mode used for all expansion panels in the accordion. */
    displayMode: EsnAccordionDisplayMode;
    /** The position of the expansion indicator. */
    togglePosition: EsnAccordionTogglePosition;
    /** Handles keyboard events coming in from the panel headers. */
    _handleHeaderKeydown: (event: KeyboardEvent) => void;
    /** Handles focus events on the panel headers. */
    _handleHeaderFocus: (header: any) => void;
}
/**
 * Token used to provide a `EsnAccordion` to `EsnExpansionPanel`.
 * Used primarily to avoid circular imports between `EsnAccordion` and `EsnExpansionPanel`.
 */
export declare const ESN_ACCORDION: InjectionToken<EsnAccordionBase>;
