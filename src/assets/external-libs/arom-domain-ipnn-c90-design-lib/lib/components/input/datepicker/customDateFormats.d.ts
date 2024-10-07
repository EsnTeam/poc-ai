import { NgxMatDateFormats } from '@angular-material-components/datetime-picker';
import { NgxMatNativeDateAdapter } from '@angular-material-components/datetime-picker';
export declare const CUSTOM_DATE_FORMATS: NgxMatDateFormats;
export declare class CustomDateAdapter extends NgxMatNativeDateAdapter {
    getFirstDayOfWeek(): number;
    parse(value: any): Date;
}
