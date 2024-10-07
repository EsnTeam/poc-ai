import { EsnIconsRegistry } from '../icon/icons-registry';
import * as i0 from "@angular/core";
import * as i1 from "./file-size.pipe";
import * as i2 from "./file-input.component";
import * as i3 from "./file-list/file-item/file-item.component";
import * as i4 from "./file-list/file-list.component";
import * as i5 from "./file-selector/file-selector.component";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/forms";
import * as i8 from "@angular/common";
import * as i9 from "../loader/loader.module";
import * as i10 from "../tooltip/tooltip.module";
import * as i11 from "../icon/icon.module";
import * as i12 from "../button/button.module";
import * as i13 from "@angular/material/progress-bar";
export declare class EsnFileInputModule {
    private esnIconsRegistry;
    constructor(esnIconsRegistry: EsnIconsRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnFileInputModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<EsnFileInputModule, [typeof i1.FileSizePipe, typeof i2.EsnFileInput, typeof i3.EsnFileItem, typeof i4.EsnFileList, typeof i5.EsnFileSelector], [typeof i6.MatFormFieldModule, typeof i7.ReactiveFormsModule, typeof i7.FormsModule, typeof i8.CommonModule, typeof i9.EsnLoaderModule, typeof i10.EsnTooltipModule, typeof i11.EsnIconModule, typeof i12.EsnButtonModule, typeof i13.MatProgressBarModule], [typeof i1.FileSizePipe, typeof i2.EsnFileInput, typeof i3.EsnFileItem, typeof i4.EsnFileList, typeof i5.EsnFileSelector]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<EsnFileInputModule>;
}
