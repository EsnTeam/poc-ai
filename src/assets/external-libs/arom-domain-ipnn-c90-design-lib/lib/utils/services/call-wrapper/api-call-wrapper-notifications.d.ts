import { ToasterService } from "../../../components/toaster/public-api";
import { EsnGlobalConfiguration } from "../public-api";
import * as i0 from "@angular/core";
export declare type EsnApiCallWrapperNotifType = 'info' | 'error' | 'success';
export declare abstract class EsnApiCallWrapperNotificationService {
    abstract showNotif(type: EsnApiCallWrapperNotifType, title: string, message?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnApiCallWrapperNotificationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnApiCallWrapperNotificationService>;
}
export declare class ApiCallWrapperToasterNotificationService implements EsnApiCallWrapperNotificationService {
    toasterService: ToasterService;
    constructor(toasterService: ToasterService);
    showNotif(type: EsnApiCallWrapperNotifType, title: string, message: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApiCallWrapperToasterNotificationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ApiCallWrapperToasterNotificationService>;
}
export declare class ApiCallWrapperConsoleNotificationService implements EsnApiCallWrapperNotificationService {
    showNotif(type: EsnApiCallWrapperNotifType, title: string, message: string): void;
}
export declare class ApiCallWrapperGlobalConfigNotificationService implements EsnApiCallWrapperNotificationService {
    globalConf: EsnGlobalConfiguration;
    constructor(globalConf: EsnGlobalConfiguration);
    showNotif(type: EsnApiCallWrapperNotifType, title: string, message: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApiCallWrapperGlobalConfigNotificationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ApiCallWrapperGlobalConfigNotificationService>;
}
export declare const ESN_API_CALL_WRAPPER_DEFAULT_NOTIFICATION_SERVICE: typeof ApiCallWrapperGlobalConfigNotificationService;
