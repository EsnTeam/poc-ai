import { OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { UploadItem } from './model/uploadState';
import * as i0 from "@angular/core";
export declare class EsnUploadStateService implements OnInit {
    documentsUploadProgress$: BehaviorSubject<number | null>;
    uploadOngoing$: BehaviorSubject<boolean | null>;
    displayUpload$: BehaviorSubject<boolean | null>;
    constructor();
    ngOnInit(): void;
    getDisplayUpload(): import("rxjs").Observable<boolean | null>;
    getUploadOngoing(): import("rxjs").Observable<boolean | null>;
    updateUploadProgress(uploadItems: UploadItem[]): void;
    uploadStarts(displayUpload: Boolean): void;
    uploadEnds(hideUpload: Boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnUploadStateService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnUploadStateService>;
}
