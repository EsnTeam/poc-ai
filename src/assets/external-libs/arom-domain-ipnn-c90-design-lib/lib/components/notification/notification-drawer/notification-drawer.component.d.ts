import { AfterViewInit, OnInit, ElementRef } from '@angular/core';
import { EsnNotificationDrawerService } from './notification-drawer.service';
import { EsnNotificationsService } from '../notifications.service';
import { BehaviorSubject } from 'rxjs';
import { EsnNotificationProcessingService } from '../notification-processing.service';
import * as i0 from "@angular/core";
export declare class EsnNotificationDrawer implements OnInit, AfterViewInit {
    drawerService: EsnNotificationDrawerService;
    notificationsService: EsnNotificationsService;
    processingService: EsnNotificationProcessingService;
    elementRef: ElementRef;
    totalUnread: number;
    totalNbNotifs: number;
    displayed: 'displayed' | 'not-displayed';
    refreshAll$: BehaviorSubject<boolean>;
    refreshUnread$: BehaviorSubject<boolean>;
    markAllAsRead$: BehaviorSubject<boolean>;
    scrollElementAll: HTMLElement;
    scrollElementUnread: HTMLElement;
    activeIndex: number;
    constructor(drawerService: EsnNotificationDrawerService, notificationsService: EsnNotificationsService, processingService: EsnNotificationProcessingService, elementRef: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    updateScrollElms(): void;
    closeDrawer(): void;
    tabChanged(e: any): void;
    refreshActiveTab(): void;
    goToNotificationPage(): void;
    markAllAsRead(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnNotificationDrawer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnNotificationDrawer, "esn-notification-drawer", never, { "totalUnread": "totalUnread"; }, {}, never, never, false, never>;
}
