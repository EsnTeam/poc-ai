/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken, TemplateRef, ViewContainerRef } from '@angular/core';
import { CdkPortal } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
/**
 * Injection token that can be used to reference instances of `MatTabLabel`. It serves as
 * alternative token to the actual `MatTabLabel` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
export declare const MAT_TAB_LABEL: InjectionToken<EsnTabLabel>;
/**
 * Used to provide a tab label to a tab without causing a circular dependency.
 * @docs-private
 */
export declare const MAT_TAB: InjectionToken<any>;
/** Used to flag tab labels for use with the portal directive */
export declare class EsnTabLabel extends CdkPortal {
    _closestTab: any;
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef, _closestTab: any);
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnTabLabel, [null, null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EsnTabLabel, "[esn-tab-label], [esnTabLabel]", never, {}, {}, never, never, false, never>;
}
