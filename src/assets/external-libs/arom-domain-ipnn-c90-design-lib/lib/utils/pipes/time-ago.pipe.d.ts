import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TimeAgoPipe implements PipeTransform {
    transform(inputDate: Date | string | null | undefined): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeAgoPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TimeAgoPipe, "timeAgo", false>;
}
