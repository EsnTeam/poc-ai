import { InjectionToken } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';
import * as i0 from "@angular/core";
/** InjectionToken for datepicker that can be used to override default locale code. */
export declare const ESN_DATE_LOCALE: InjectionToken<{}>;
export declare function ESN_DATE_LOCALE_FACTORY(): {};
export declare class EsnDateAdapter extends NativeDateAdapter {
    getFirstDayOfWeek(): number;
    parse(value: any): Date | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnDateAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnDateAdapter>;
}
