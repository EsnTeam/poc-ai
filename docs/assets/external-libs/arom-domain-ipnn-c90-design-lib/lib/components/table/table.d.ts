/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CdkTable } from '@angular/cdk/table';
import * as i0 from "@angular/core";
/**
 * Enables the recycle view repeater strategy, which reduces rendering latency. Not compatible with
 * tables that animate rows.
 */
export declare class EsnRecycleRows {
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnRecycleRows, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EsnRecycleRows, "esn-table[recycleRows], table[esn-table][recycleRows]", never, {}, {}, never, never, false, never>;
}
/**
 * Wrapper for the CdkTable with Material design styles.
 */
export declare class EsnTable<T> extends CdkTable<T> {
    /** Overrides the sticky CSS class set by the `CdkTable`. */
    protected stickyCssClass: string;
    /** Overrides the need to add position: sticky on every sticky cell element in `CdkTable`. */
    protected needsPositionStickyOnElement: boolean;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnTable<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnTable<any>, "esn-table, table[esn-table]", ["esnTable"], {}, {}, never, ["caption", "colgroup, col"], false, never>;
}
