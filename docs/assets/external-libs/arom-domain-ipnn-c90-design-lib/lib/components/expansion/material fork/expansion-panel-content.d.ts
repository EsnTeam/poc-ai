/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { TemplateRef } from '@angular/core';
import { EsnExpansionPanelBase } from './expansion-panel-base';
import * as i0 from "@angular/core";
/**
 * Expansion panel content that will be rendered lazily
 * after the panel is opened for the first time.
 */
export declare class EsnExpansionPanelContent {
    _template: TemplateRef<any>;
    _expansionPanel?: EsnExpansionPanelBase | undefined;
    constructor(_template: TemplateRef<any>, _expansionPanel?: EsnExpansionPanelBase | undefined);
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnExpansionPanelContent, [null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EsnExpansionPanelContent, "ng-template[esnExpansionPanelContent]", never, {}, {}, never, never, false, never>;
}
