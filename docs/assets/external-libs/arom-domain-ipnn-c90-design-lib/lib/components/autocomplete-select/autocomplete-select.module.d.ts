import { EsnIconsRegistry } from '../icon/icons-registry';
import * as i0 from "@angular/core";
import * as i1 from "./base/autocomplete-select-base.component";
import * as i2 from "./default/autocomplete-select.component";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/autocomplete";
import * as i6 from "../input/input.module";
import * as i7 from "@angular/material/form-field";
import * as i8 from "@angular/material/chips";
import * as i9 from "../tooltip/tooltip.module";
import * as i10 from "../loader/loader.module";
import * as i11 from "../badge/badge.module";
import * as i12 from "../icon/icon.module";
export declare class EsnAutocompleteSelectModule {
    private esnIconsRegistry;
    constructor(esnIconsRegistry: EsnIconsRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnAutocompleteSelectModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<EsnAutocompleteSelectModule, [typeof i1.EsnAutocompleteSelectBase, typeof i2.EsnAutocompleteSelect, typeof i1.EsnAutocompleteSelectImplementationBase], [typeof i3.CommonModule, typeof i4.FormsModule, typeof i4.ReactiveFormsModule, typeof i5.MatAutocompleteModule, typeof i6.EsnInputModule, typeof i7.MatFormFieldModule, typeof i8.MatChipsModule, typeof i9.EsnTooltipModule, typeof i10.EsnLoaderModule, typeof i11.EsnBadgeModule, typeof i12.EsnIconModule], [typeof i1.EsnAutocompleteSelectBase, typeof i2.EsnAutocompleteSelect, typeof i1.EsnAutocompleteSelectImplementationBase]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<EsnAutocompleteSelectModule>;
}
