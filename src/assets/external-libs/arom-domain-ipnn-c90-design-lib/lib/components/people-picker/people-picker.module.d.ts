import { EsnIconsRegistry } from '../icon/icons-registry';
import * as i0 from "@angular/core";
import * as i1 from "./people-picker.component";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "../autocomplete-select/autocomplete-select.module";
import * as i5 from "../tooltip/tooltip.module";
import * as i6 from "../badge/badge.module";
import * as i7 from "../icon/icon.module";
import * as i8 from "../person-avatar/person-avatar.module";
export declare class EsnPeoplePickerModule {
    private esnIconsRegistry;
    constructor(esnIconsRegistry: EsnIconsRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnPeoplePickerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<EsnPeoplePickerModule, [typeof i1.EsnPeoplePicker], [typeof i2.CommonModule, typeof i3.ReactiveFormsModule, typeof i4.EsnAutocompleteSelectModule, typeof i5.EsnTooltipModule, typeof i6.EsnBadgeModule, typeof i7.EsnIconModule, typeof i8.EsnPersonAvatarModule, typeof i5.EsnTooltipModule], [typeof i1.EsnPeoplePicker]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<EsnPeoplePickerModule>;
}
