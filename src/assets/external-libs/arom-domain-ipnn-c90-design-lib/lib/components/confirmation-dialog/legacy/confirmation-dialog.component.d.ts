import { EventEmitter } from '@angular/core';
import { ConfirmationDialogDataModel } from "../models/confirmationDialogDataModel";
import { EsnDialogRef } from "../../dialog/dialogRef";
import * as i0 from "@angular/core";
export declare class ConfirmationDialogComponent {
    private dialogRef;
    data: ConfirmationDialogDataModel;
    decision: EventEmitter<any>;
    thirdButtonClick: EventEmitter<void>;
    loading: boolean;
    constructor(dialogRef: EsnDialogRef<ConfirmationDialogComponent>, data: ConfirmationDialogDataModel);
    confirm(): void;
    cancel(): void;
    thirdButtonClicked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmationDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConfirmationDialogComponent, "lib-confirmation-dialog", never, {}, {}, never, never, false, never>;
}
