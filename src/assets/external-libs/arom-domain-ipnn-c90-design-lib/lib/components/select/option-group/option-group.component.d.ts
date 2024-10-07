import { AfterViewChecked, ChangeDetectorRef, QueryList, TemplateRef } from '@angular/core';
import { EsnOption } from "../option/option.component";
import { ProjectionRefModel } from "../select/select.component";
import * as i0 from "@angular/core";
export declare class EsnOptionGroup implements AfterViewChecked {
    private cdr;
    optTempVar: TemplateRef<any>;
    optionsList: QueryList<EsnOption>;
    label: string;
    disabled: boolean;
    get viewValue(): TemplateRef<any>;
    options: ProjectionRefModel[];
    constructor(cdr: ChangeDetectorRef);
    ngAfterViewChecked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnOptionGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnOptionGroup, "esn-optgroup", never, { "label": "label"; "disabled": "disabled"; }, {}, ["optionsList"], never, false, never>;
}
