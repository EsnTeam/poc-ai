/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { QueryList, AfterContentInit, OnDestroy } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { CdkAccordion } from '@angular/cdk/accordion';
import { EsnAccordionBase, EsnAccordionDisplayMode, EsnAccordionTogglePosition } from './accordion-base';
import { EsnExpansionPanelHeader } from './expansion-panel-header';
import * as i0 from "@angular/core";
/**
 * Directive for a Esnerial Design Accordion.
 */
export declare class EsnAccordion extends CdkAccordion implements EsnAccordionBase, AfterContentInit, OnDestroy {
    private _keyManager;
    /** Headers belonging to this accordion. */
    private _ownHeaders;
    /** All headers inside the accordion. Includes headers inside nested accordions. */
    _headers: QueryList<EsnExpansionPanelHeader>;
    /** Whether the expansion indicator should be hidden. */
    get hideToggle(): boolean;
    set hideToggle(show: BooleanInput);
    private _hideToggle;
    /**
     * Display mode used for all expansion panels in the accordion. Currently two display
     * modes exist:
     *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
     *     panel at a different elevation from the rest of the accordion.
     *  flat - no spacing is placed around expanded panels, showing all panels at the same
     *     elevation.
     */
    displayMode: EsnAccordionDisplayMode;
    /** The position of the expansion indicator. */
    togglePosition: EsnAccordionTogglePosition;
    ngAfterContentInit(): void;
    /** Handles keyboard events coming in from the panel headers. */
    _handleHeaderKeydown(event: KeyboardEvent): void;
    _handleHeaderFocus(header: EsnExpansionPanelHeader): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnAccordion, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EsnAccordion, "esn-accordion", ["esnAccordion"], { "multi": "multi"; "hideToggle": "hideToggle"; "displayMode": "displayMode"; "togglePosition": "togglePosition"; }, {}, ["_headers"], never, false, never>;
}
