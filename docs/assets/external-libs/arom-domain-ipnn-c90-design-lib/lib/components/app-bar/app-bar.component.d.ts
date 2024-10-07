import { OnDestroy, OnInit } from '@angular/core';
import { EdfApplicationUser } from '../../utils/public-api';
import { EsnMenu } from '../menu/menu';
import { EsnNotificationsService } from '../notification/notifications.service';
import { EsnNotificationDrawerService } from '../notification/notification-drawer/notification-drawer.service';
import * as i0 from "@angular/core";
export declare class EsnAppBar implements OnInit, OnDestroy {
    notifService: EsnNotificationsService;
    notifDrawerService: EsnNotificationDrawerService;
    user: EdfApplicationUser;
    userMenu?: EsnMenu;
    avatarTooltip: string;
    nbNotViewed: number;
    nbNotRead: number;
    notificationShaking: boolean;
    interval: any;
    constructor(notifService: EsnNotificationsService, notifDrawerService: EsnNotificationDrawerService);
    ngOnInit(): void;
    onNotificationsClick(): void;
    _initiateNotificationsSubscriptions(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnAppBar, [{ optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnAppBar, "esn-app-bar", never, { "user": "user"; "userMenu": "userMenu"; "avatarTooltip": "avatarTooltip"; }, {}, never, never, false, never>;
}
