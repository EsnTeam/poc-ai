import { ToasterService } from "../toaster/toaster.service";
import { EsnGlobalConfiguration, EsnNotificationType } from "../../utils/public-api";
import * as i0 from "@angular/core";
export declare abstract class EsnFileInputNotificationService {
    abstract showNotif(type: EsnNotificationType, title: string, message: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnFileInputNotificationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnFileInputNotificationService>;
}
export declare class FileInputToasterNotificationService implements EsnFileInputNotificationService {
    toasterService: ToasterService;
    constructor(toasterService: ToasterService);
    showNotif(type: EsnNotificationType, title: string, message: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileInputToasterNotificationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FileInputToasterNotificationService>;
}
export declare class FileInputConsoleNotificationService implements EsnFileInputNotificationService {
    showNotif(type: EsnNotificationType, title: string, message: string): void;
}
export declare class EsnFileInputGlobalConfigNotificationService implements EsnFileInputNotificationService {
    globalConf: EsnGlobalConfiguration;
    constructor(globalConf: EsnGlobalConfiguration);
    showNotif(type: EsnNotificationType, title: string, message: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnFileInputGlobalConfigNotificationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnFileInputGlobalConfigNotificationService>;
}
export declare const ESN_FILE_SELECTOR_DEFAULT_NOTIFICATION_SERVICE: typeof FileInputToasterNotificationService;
