import { EventEmitter } from '@angular/core';
import { EsnNotificationModel } from './model/notification';
import { EsnNotificationProcessingService } from './notification-processing.service';
import * as i0 from "@angular/core";
export declare class EsnNotification {
    processingService: EsnNotificationProcessingService;
    notification: EsnNotificationModel;
    actionClick: EventEmitter<null>;
    constructor(processingService: EsnNotificationProcessingService);
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnNotification, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnNotification, "esn-notification", never, { "notification": "notification"; }, { "actionClick": "actionClick"; }, never, never, false, never>;
}
