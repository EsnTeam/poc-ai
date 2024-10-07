import { AbstractControl, NgControl } from "@angular/forms";
export declare class EsnUtils {
    static BREAKPOINTS: any;
    static isString(s: any): boolean;
    static cloneDeep(obj: any): any;
    static assignErrors(ctrl1: AbstractControl, ctrl2: NgControl): void;
    static generateRandomUuid(): string;
    static sleep(ms: number): Promise<unknown>;
    static hashCode: (str: string) => number;
    static capitalize(str: string): string;
    static isBrowserSupported(): boolean;
    static pruneEmpty(obj: any): any;
}
