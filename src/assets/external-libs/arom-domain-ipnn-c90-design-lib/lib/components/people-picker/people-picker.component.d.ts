import { TemplateRef } from '@angular/core';
import { EsnAutocompleteSelectImplementationBase } from '../autocomplete-select/base/autocomplete-select-base.component';
import { EdfApplicationUser } from '../../utils/model/edfApplicationUser';
import * as i0 from "@angular/core";
export declare class EsnPeoplePicker extends EsnAutocompleteSelectImplementationBase<EdfApplicationUser> {
    filterFunc: (u: EdfApplicationUser) => boolean;
    idField: keyof EdfApplicationUser;
    label: string;
    optionDisabledTooltip: string;
    optionTemplate?: TemplateRef<any>;
    chipTemplate?: TemplateRef<any>;
    singleElemTemplate?: TemplateRef<any>;
    noResultsLabel: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnPeoplePicker, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnPeoplePicker, "esn-people-picker", never, { "filterFunc": "filterFunc"; "idField": "idField"; "label": "label"; "optionDisabledTooltip": "optionDisabledTooltip"; "optionTemplate": "optionTemplate"; "chipTemplate": "chipTemplate"; "singleElemTemplate": "singleElemTemplate"; "noResultsLabel": "noResultsLabel"; }, {}, never, never, false, never>;
}
