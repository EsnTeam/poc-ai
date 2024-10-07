import { ConfirmationDialogComponent } from "../legacy/confirmation-dialog.component";
import { ConfirmationDialogDataModel } from "../models/confirmationDialogDataModel";
import { Observable } from "rxjs";
import { EsnDialogRef } from "../../dialog/dialogRef";
import { EsnDialog } from "../../dialog/dialog.service";
import { ResponsiveService } from '../../../utils/services/responsive/responsive.service';
import * as i0 from "@angular/core";
export declare class ConfirmationDialogService {
    private dialog;
    private responsiveService;
    isMobile$: import("rxjs").BehaviorSubject<boolean>;
    constructor(dialog: EsnDialog, responsiveService: ResponsiveService);
    show(data: ConfirmationDialogDataModel): EsnDialogRef<ConfirmationDialogComponent>;
    setLoading(esnDialogRef: EsnDialogRef<ConfirmationDialogComponent>, loading: boolean): void;
    onDecision(esnDialogRef: EsnDialogRef<ConfirmationDialogComponent>): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmationDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConfirmationDialogService>;
}
