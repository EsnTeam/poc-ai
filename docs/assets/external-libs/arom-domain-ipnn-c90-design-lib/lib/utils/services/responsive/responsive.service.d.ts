import { BreakpointObserver } from "@angular/cdk/layout";
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
export declare class ResponsiveService {
    private breakpointObserver;
    private onChangeSub;
    isMobile$: BehaviorSubject<boolean>;
    isSmallMobile$: BehaviorSubject<boolean>;
    isLargeTablet$: BehaviorSubject<boolean>;
    isSmallTablet$: BehaviorSubject<boolean>;
    constructor(breakpointObserver: BreakpointObserver);
    static ɵfac: i0.ɵɵFactoryDeclaration<ResponsiveService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ResponsiveService>;
}
