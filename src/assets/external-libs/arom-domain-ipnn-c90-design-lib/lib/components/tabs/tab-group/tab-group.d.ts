import { BooleanInput } from "@angular/cdk/coercion";
import { QueryList, ElementRef, ChangeDetectorRef } from "@angular/core";
import { _MatTabGroupBase, MatTabsConfig, MatTab } from "@angular/material/tabs";
import * as i0 from "@angular/core";
interface MatTabGroupBaseHeader {
    _alignInkBarToSelectedTab(): void;
    updatePagination(): void;
    focusIndex: number;
}
export declare class EsnTabGroup extends _MatTabGroupBase {
    _allTabs: QueryList<MatTab>;
    _tabBodyWrapper: ElementRef;
    _tabHeader: MatTabGroupBaseHeader;
    /** Whether the ink bar should fit its width to the size of the tab label content. */
    get fitInkBarToContent(): boolean;
    set fitInkBarToContent(v: BooleanInput);
    private _fitInkBarToContent;
    /** Whether tabs should be stretched to fill the header. */
    get stretchTabs(): boolean;
    set stretchTabs(v: BooleanInput);
    private _stretchTabs;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, defaultConfig?: MatTabsConfig, animationMode?: string);
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnTabGroup, [null, null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnTabGroup, "esn-tab-group", ["esnTabGroup"], { "color": "color"; "disableRipple": "disableRipple"; "fitInkBarToContent": "fitInkBarToContent"; "stretchTabs": "mat-stretch-tabs"; }, {}, ["_allTabs"], never, false, never>;
}
export {};
