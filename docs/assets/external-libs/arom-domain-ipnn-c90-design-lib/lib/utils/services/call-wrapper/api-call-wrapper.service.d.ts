import { Observable } from 'rxjs';
import { ApiCallWrapper, ApiCallWrapperOptions } from '../../public-api';
import { EsnApiCallWrapperNotificationService } from './api-call-wrapper-notifications';
import { EsnUploadStateService } from '../filemanager/upload-state.service';
import * as i0 from "@angular/core";
export declare class EsnApiCallWrapper {
    notificationService: EsnApiCallWrapperNotificationService;
    uploadStateService: EsnUploadStateService;
    constructor(notificationService: EsnApiCallWrapperNotificationService, uploadStateService: EsnUploadStateService);
    makeApiCall(apiCall: Observable<any>, options?: ApiCallWrapperOptions): Promise<ApiCallWrapper>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnApiCallWrapper, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnApiCallWrapper>;
}
