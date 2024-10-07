import { OnChanges, SimpleChanges } from '@angular/core';
import { EsnNotificationCategoryTypeEnum, EsnNotificationCriticalityEnum, EsnNotificationModel, EsnNotificationViewType } from '../model/notification';
import * as i0 from "@angular/core";
export declare class EsnNotificationAvatar implements OnChanges {
    notification: EsnNotificationModel;
    slots: {
        [key in EsnNotificationViewType]?: number;
    };
    categoryTypeIconMap: {
        [key in EsnNotificationCategoryTypeEnum]: string;
    };
    criticalityTypeIconMap: {
        [key in EsnNotificationCriticalityEnum]: string;
    };
    ngOnChanges(changes: SimpleChanges): void;
    readSlots(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnNotificationAvatar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnNotificationAvatar, "esn-notification-avatar", never, { "notification": "notification"; }, {}, never, never, false, never>;
}
