import { ApiCallWrapper, EsnApiCallWrapper } from '../../utils/public-api';
import { EsnNotificationsController } from './notifications-controller.service';
import { BehaviorSubject } from 'rxjs';
import { EsnNotificationProcessingService } from './notification-processing.service';
import * as i0 from "@angular/core";
export declare class EsnNotificationsService {
    callWrapper: EsnApiCallWrapper;
    controller: EsnNotificationsController;
    tags: string;
    processingService: EsnNotificationProcessingService;
    nbUnread$: BehaviorSubject<number>;
    nbNotViewed$: BehaviorSubject<number>;
    nbTotal$: BehaviorSubject<number>;
    lastReceivedSendDate: Date;
    constructor(callWrapper: EsnApiCallWrapper, controller: EsnNotificationsController, tags: string, processingService: EsnNotificationProcessingService);
    getNotificationTags(): string;
    setUnread(nbUnread: number): void;
    getUnread(): import("rxjs").Observable<number>;
    setNotViewed(nbNotViewed: number): void;
    getNotViewed(): import("rxjs").Observable<number>;
    setTotal(nbTotal: number): void;
    getTotal(): import("rxjs").Observable<number>;
    markAllAsRead(): Promise<void>;
    markAllAsViewed(): Promise<void>;
    markAsRead(notificationId: string): Promise<void>;
    refreshUnreadAndNotViewed(): Promise<void>;
    getNotifications(page?: number, size?: number, tags?: string, read?: boolean, dateBefore?: Date, dateAfter?: Date, criticality?: string): Promise<ApiCallWrapper>;
    getCount(tags: string): Promise<ApiCallWrapper>;
    updateLastReveivedSendDate(date: string | Date): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnNotificationsService, [null, null, null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnNotificationsService>;
}
