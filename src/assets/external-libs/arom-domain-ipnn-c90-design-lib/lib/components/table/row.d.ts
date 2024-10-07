/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CdkFooterRow, CdkFooterRowDef, CdkHeaderRow, CdkHeaderRowDef, CdkRow, CdkRowDef, CdkNoDataRow } from '@angular/cdk/table';
import * as i0 from "@angular/core";
/**
 * Header row definition for the esn-table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
export declare class EsnHeaderRowDef extends CdkHeaderRowDef {
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnHeaderRowDef, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EsnHeaderRowDef, "[esnHeaderRowDef]", never, { "columns": "esnHeaderRowDef"; "sticky": "esnHeaderRowDefSticky"; }, {}, never, never, false, never>;
}
/**
 * Footer row definition for the esn-table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
export declare class EsnFooterRowDef extends CdkFooterRowDef {
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnFooterRowDef, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EsnFooterRowDef, "[esnFooterRowDef]", never, { "columns": "esnFooterRowDef"; "sticky": "esnFooterRowDefSticky"; }, {}, never, never, false, never>;
}
/**
 * Data row definition for the esn-table.
 * Captures the data row's template and other properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
export declare class EsnRowDef<T> extends CdkRowDef<T> {
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnRowDef<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EsnRowDef<any>, "[esnRowDef]", never, { "columns": "esnRowDefColumns"; "when": "esnRowDefWhen"; }, {}, never, never, false, never>;
}
/** Header template container that contains the cell outlet. Adds the right class and role. */
export declare class EsnHeaderRow extends CdkHeaderRow {
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnHeaderRow, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnHeaderRow, "esn-header-row, tr[esn-header-row]", ["esnHeaderRow"], {}, {}, never, never, false, never>;
}
/** Footer template container that contains the cell outlet. Adds the right class and role. */
export declare class EsnFooterRow extends CdkFooterRow {
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnFooterRow, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnFooterRow, "esn-footer-row, tr[esn-footer-row]", ["esnFooterRow"], {}, {}, never, never, false, never>;
}
/** Data row template container that contains the cell outlet. Adds the right class and role. */
export declare class EsnRow extends CdkRow {
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnRow, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnRow, "esn-row, tr[esn-row]", ["esnRow"], {}, {}, never, never, false, never>;
}
/** Row that can be used to display a message when no data is shown in the table. */
export declare class EsnNoDataRow extends CdkNoDataRow {
    _contentClassName: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnNoDataRow, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EsnNoDataRow, "ng-template[esnNoDataRow]", never, {}, {}, never, never, false, never>;
}
