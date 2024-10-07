import { NativeDateAdapter } from '@angular/material/core';
import * as i0 from "@angular/core";
export declare class EsnDateAdapter extends NativeDateAdapter {
    getFirstDayOfWeek(): number;
    parse(value: any): Date | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnDateAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnDateAdapter>;
}
