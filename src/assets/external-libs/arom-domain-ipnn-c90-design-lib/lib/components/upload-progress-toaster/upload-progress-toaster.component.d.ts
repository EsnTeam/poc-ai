import { OnInit } from '@angular/core';
import { EsnUploadStateService } from '../../utils/services/filemanager/upload-state.service';
import * as i0 from "@angular/core";
export declare class EsnUploadProgressToasterComponent implements OnInit {
    uploadStateService: EsnUploadStateService;
    progress: number;
    displayed: 'displayed' | 'not-displayed';
    constructor(uploadStateService: EsnUploadStateService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnUploadProgressToasterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnUploadProgressToasterComponent, "esn-upload-progress-toaster", never, {}, {}, never, never, false, never>;
}
