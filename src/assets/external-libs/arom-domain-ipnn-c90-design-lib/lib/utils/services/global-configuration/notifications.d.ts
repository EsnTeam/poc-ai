import { ToasterService } from "../../../components/toaster/public-api";
import * as i0 from "@angular/core";
export declare type EsnNotificationType = 'info' | 'error' | 'success';
export declare abstract class EsnNotificationService {
    abstract showNotif(type: EsnNotificationType, title: string, message?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnNotificationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnNotificationService>;
}
export declare class EsnToasterNotificationService implements EsnNotificationService {
    toasterService: ToasterService;
    constructor(toasterService: ToasterService);
    showNotif(type: EsnNotificationType, title: string, message: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnToasterNotificationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnToasterNotificationService>;
}
export declare class EsnConsoleNotificationService implements EsnNotificationService {
    showNotif(type: EsnNotificationType, title: string, message: string): void;
}
export declare const ESN_GLOBAL_CONFIGURATION_DEFAULT_NOTIFICATION_SERVICE: typeof EsnToasterNotificationService;
