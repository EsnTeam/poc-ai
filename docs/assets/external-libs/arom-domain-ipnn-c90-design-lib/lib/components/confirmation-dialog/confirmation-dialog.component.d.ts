import { EventEmitter } from '@angular/core';
import { EsnDialogRef } from "../dialog/dialogRef";
import { ConfirmationDialogDataModel } from "./models/confirmationDialogDataModel";
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class EsnConfirmationDialogComponent {
    private dialogRef;
    data: ConfirmationDialogDataModel;
    sanitizer: DomSanitizer;
    decision: EventEmitter<any>;
    thirdButtonClick: EventEmitter<void>;
    loading: boolean;
    constructor(dialogRef: EsnDialogRef<EsnConfirmationDialogComponent>, data: ConfirmationDialogDataModel, sanitizer: DomSanitizer);
    confirm(): void;
    cancel(): void;
    thirdButtonClicked(): void;
    get htmlTemplate(): string | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnConfirmationDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnConfirmationDialogComponent, "esn-confirmation-dialog", never, {}, {}, never, never, false, never>;
}
