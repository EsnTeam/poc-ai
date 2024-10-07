import { OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { EsnDialog } from '../dialog/dialog.service';
import * as i0 from "@angular/core";
export declare class EsnDialogEntry implements OnInit {
    dialog: EsnDialog;
    activatedRoute: ActivatedRoute;
    private viewContainerRef;
    templateRef: TemplateRef<any>;
    data: Data;
    constructor(dialog: EsnDialog, activatedRoute: ActivatedRoute, viewContainerRef: ViewContainerRef);
    onPopState(): void;
    ngOnInit(): void;
    openDialog(data: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnDialogEntry, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnDialogEntry, "esn-dialog-entry", never, {}, {}, never, never, false, never>;
}
