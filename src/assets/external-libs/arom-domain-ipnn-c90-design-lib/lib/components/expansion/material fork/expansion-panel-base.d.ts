/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from '@angular/core';
import { CdkAccordionItem } from '@angular/cdk/accordion';
/**
 * Base interface for a `EsnExpansionPanel`.
 * @docs-private
 */
export interface EsnExpansionPanelBase extends CdkAccordionItem {
    /** Whether the toggle indicator should be hidden. */
    hideToggle: boolean;
}
/**
 * Token used to provide a `EsnExpansionPanel` to `EsnExpansionPanelContent`.
 * Used to avoid circular imports between `EsnExpansionPanel` and `EsnExpansionPanelContent`.
 */
export declare const ESN_EXPANSION_PANEL: InjectionToken<EsnExpansionPanelBase>;
