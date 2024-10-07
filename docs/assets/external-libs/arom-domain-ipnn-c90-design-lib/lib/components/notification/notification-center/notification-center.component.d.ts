import { OnInit, ElementRef } from '@angular/core';
import { EsnNotificationsService } from '../notifications.service';
import { BehaviorSubject } from 'rxjs';
import { EsnNotificationProcessingService } from '../notification-processing.service';
import { EsnNotificationCriticalityEnum } from '../model/notification';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class EsnNotificationCenter implements OnInit {
    notificationsService: EsnNotificationsService;
    processingService: EsnNotificationProcessingService;
    elementRef: ElementRef;
    scrollElement: HTMLElement;
    form: FormGroup;
    totalUnread: number;
    totalNbNotifs: number;
    refresh$: BehaviorSubject<boolean>;
    markAllAsRead$: BehaviorSubject<boolean>;
    criticalities: EsnNotificationCriticalityEnum[];
    criticalityLabels: {
        URGENT: string;
        IMPORTANT: string;
        NONE: string;
    };
    constructor(notificationsService: EsnNotificationsService, processingService: EsnNotificationProcessingService, elementRef: ElementRef, fb: FormBuilder);
    ngOnInit(): void;
    get dateAtEndOfDay(): any;
    markAllAsRead(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnNotificationCenter, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnNotificationCenter, "esn-notification-center", never, { "scrollElement": "scrollElement"; }, {}, never, never, false, never>;
}
