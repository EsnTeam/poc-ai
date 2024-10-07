import { CdkCell, CdkCellDef, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkHeaderCell, CdkHeaderCellDef } from '@angular/cdk/table';
import * as i0 from "@angular/core";
/**
 * Cell definition for the esn-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
export declare class EsnCellDef extends CdkCellDef {
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnCellDef, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EsnCellDef, "[esnCellDef]", never, {}, {}, never, never, false, never>;
}
/**
 * Header cell definition for the esn-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
export declare class EsnHeaderCellDef extends CdkHeaderCellDef {
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnHeaderCellDef, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EsnHeaderCellDef, "[esnHeaderCellDef]", never, {}, {}, never, never, false, never>;
}
/**
 * Footer cell definition for the mat-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
export declare class EsnFooterCellDef extends CdkFooterCellDef {
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnFooterCellDef, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EsnFooterCellDef, "[esnFooterCellDef]", never, {}, {}, never, never, false, never>;
}
/**
 * Column definition for the esn-table.
 * Defines a set of cells available for a table column.
 */
export declare class EsnColumnDef extends CdkColumnDef {
    /** Unique name for this column. */
    get name(): string;
    set name(name: string);
    /**
     * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
     * In the future, this will only add "mat-column-" and columnCssClassName
     * will change from type string[] to string.
     * @docs-private
     */
    protected _updateColumnCssClassName(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnColumnDef, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EsnColumnDef, "[esnColumnDef]", never, { "sticky": "sticky"; "name": "esnColumnDef"; }, {}, never, never, false, never>;
}
/** Header cell template container that adds the right classes and role. */
export declare class EsnHeaderCell extends CdkHeaderCell {
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnHeaderCell, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EsnHeaderCell, "esn-header-cell, th[esn-header-cell]", never, {}, {}, never, never, false, never>;
}
/** Footer cell template container that adds the right classes and role. */
export declare class EsnFooterCell extends CdkFooterCell {
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnFooterCell, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EsnFooterCell, "esn-footer-cell, td[esn-footer-cell]", never, {}, {}, never, never, false, never>;
}
/** Cell template container that adds the right classes and role. */
export declare class EsnCell extends CdkCell {
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnCell, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EsnCell, "esn-cell, td[esn-cell]", never, {}, {}, never, never, false, never>;
}
