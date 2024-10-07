import { TemplateRef } from '@angular/core';
import { EsnAutocompleteSelectImplementationBase } from '../base/autocomplete-select-base.component';
import * as i0 from "@angular/core";
export declare class EsnAutocompleteSelect extends EsnAutocompleteSelectImplementationBase<any> {
    optionTextFn?: (elm: any) => string;
    chipTextFn?: (elm: any) => string;
    optionTemplate?: TemplateRef<any>;
    chipTemplate?: TemplateRef<any>;
    singleElemTemplate?: TemplateRef<any>;
    minChars: number;
    hint: string;
    noResultsLabel: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnAutocompleteSelect, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnAutocompleteSelect, "esn-autocomplete-select", never, { "optionTextFn": "optionTextFn"; "chipTextFn": "chipTextFn"; "optionTemplate": "optionTemplate"; "chipTemplate": "chipTemplate"; "singleElemTemplate": "singleElemTemplate"; "minChars": "minChars"; "hint": "hint"; "noResultsLabel": "noResultsLabel"; }, {}, never, never, false, never>;
}
