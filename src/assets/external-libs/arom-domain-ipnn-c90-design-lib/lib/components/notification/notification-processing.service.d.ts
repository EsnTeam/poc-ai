import { EsnNotificationModel } from './model/notification';
import * as i0 from "@angular/core";
export declare abstract class EsnNotificationProcessingService {
    abstract onNotificationClicked(notification: EsnNotificationModel): void;
    abstract goToNotificationPage(): void;
    abstract getNotificationTags(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnNotificationProcessingService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnNotificationProcessingService>;
}
export declare class EsnNotificationNoProcessingService implements EsnNotificationProcessingService {
    onNotificationClicked(notification: EsnNotificationModel): void;
    goToNotificationPage(): void;
    getNotificationTags(): string;
}
