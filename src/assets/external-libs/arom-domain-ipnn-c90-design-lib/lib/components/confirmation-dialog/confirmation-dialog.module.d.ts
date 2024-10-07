import { EsnIconsRegistry } from '../icon';
import * as i0 from "@angular/core";
import * as i1 from "./legacy/confirmation-dialog.component";
import * as i2 from "./confirmation-dialog.component";
import * as i3 from "@angular/common";
import * as i4 from "../dialog/dialog.module";
import * as i5 from "../loader/loader.module";
import * as i6 from "../button/button.module";
import * as i7 from "../icon/icon.module";
export declare class ConfirmationDialogModule {
    private esnIconsRegistry;
    constructor(esnIconsRegistry: EsnIconsRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmationDialogModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ConfirmationDialogModule, [typeof i1.ConfirmationDialogComponent, typeof i2.EsnConfirmationDialogComponent], [typeof i3.CommonModule, typeof i4.EsnDialogModule, typeof i5.EsnLoaderModule, typeof i6.EsnButtonModule, typeof i7.EsnIconModule], [typeof i1.ConfirmationDialogComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ConfirmationDialogModule>;
}
