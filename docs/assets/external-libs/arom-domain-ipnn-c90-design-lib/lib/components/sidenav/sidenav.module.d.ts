import { EsnIconsRegistry } from '../icon/icons-registry';
import * as i0 from "@angular/core";
import * as i1 from "./sidenav.component";
import * as i2 from "./sidenav-content";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/sidenav";
import * as i5 from "../button/button.module";
import * as i6 from "@angular/router";
import * as i7 from "@angular/cdk/layout";
import * as i8 from "@angular/cdk/observers";
import * as i9 from "../icon/icon.module";
export declare class EsnSidenavModule {
    private esnIconsRegistry;
    constructor(esnIconsRegistry: EsnIconsRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnSidenavModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<EsnSidenavModule, [typeof i1.EsnSidenav, typeof i1.EsnSidenavContainer, typeof i1.EsnSidenavContent, typeof i2.EsnSidenavButton, typeof i2.EsnSidenavFooter, typeof i2.EsnSidenavSection, typeof i2.EsnSidenavHeader], [typeof i3.CommonModule, typeof i4.MatSidenavModule, typeof i5.EsnButtonModule, typeof i6.RouterModule, typeof i7.LayoutModule, typeof i8.ObserversModule, typeof i9.EsnIconModule], [typeof i1.EsnSidenav, typeof i1.EsnSidenavContainer, typeof i1.EsnSidenavContent, typeof i2.EsnSidenavButton, typeof i2.EsnSidenavFooter, typeof i2.EsnSidenavSection, typeof i2.EsnSidenavHeader]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<EsnSidenavModule>;
}
