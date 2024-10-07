import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsnIconModule } from '../icon/icon.module';
import { EsnNotification } from './notification.component';
import { EsnDataModule } from '../data/data.module';
import { EsnButtonModule } from '../button/button.module';
import { EsnPersonAvatarModule } from '../person-avatar/person-avatar.module';
import { EsnNotificationAvatar } from './notification-avatar/notification-avatar.component';
import { CloseIcon, DotsVIcon } from '../icon/icons';
import { EsnNotificationDrawerService } from './notification-drawer/notification-drawer.service';
import { EsnNotificationDrawer } from './notification-drawer/notification-drawer.component';
import { EsnTabsModule } from '../tabs/tabs.module';
import { EsnApiCallWrapperModule, EsnGlobalConfigurationModule, TimeAgoPipe, } from '../../utils/public-api';
import { EsnNotificationsController } from './notifications-controller.service';
import { EsnNotificationsService } from './notifications.service';
import { EsnAsyncContentWrapperModule } from '../async-content-wrapper/async-content-wrapper.module';
import { EsnInfiniteScrollModule } from '../infinite-scroll/infinite-scroll.module';
import { EsnNotificationList } from './notification-list/notification-list.component';
import { NOTIFICATION_TAGS } from './notification-configuration';
import { EsnNotificationNoProcessingService, EsnNotificationProcessingService } from './notification-processing.service';
import { EsnBadgeModule } from '../badge/badge.module';
import { EsnDividerModule } from '../divider/divider.module';
import { EsnTooltipModule } from '../tooltip/tooltip.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { EsnNotificationCenter } from './notification-center/notification-center.component';
import { EsnInputModule } from '../input/input.module';
import { EsnSelectModule } from '../select/select.module';
import { EsnCheckboxModule } from '../checkbox/checkbox.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../icon/icons-registry";
export class EsnNotificationModule {
    constructor(esnIconsRegistry) {
        this.esnIconsRegistry = esnIconsRegistry;
        //TODO: register missing icons once we have them
        this.esnIconsRegistry.registerIcons([DotsVIcon, CloseIcon]);
    }
}
EsnNotificationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnNotificationModule, deps: [{ token: i1.EsnIconsRegistry }], target: i0.ɵɵFactoryTarget.NgModule });
EsnNotificationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: EsnNotificationModule, declarations: [TimeAgoPipe,
        EsnNotification,
        EsnNotificationDrawer,
        EsnNotificationAvatar,
        EsnNotificationList,
        EsnNotificationCenter], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        OverlayModule,
        EsnGlobalConfigurationModule,
        EsnApiCallWrapperModule,
        EsnDataModule,
        EsnButtonModule,
        EsnIconModule,
        EsnPersonAvatarModule,
        EsnTabsModule,
        EsnInfiniteScrollModule,
        EsnAsyncContentWrapperModule,
        EsnBadgeModule,
        EsnDividerModule,
        EsnTooltipModule,
        EsnInputModule,
        EsnSelectModule,
        EsnCheckboxModule], exports: [EsnNotification, EsnNotificationDrawer, EsnNotificationList, EsnNotificationCenter, TimeAgoPipe, EsnNotificationAvatar] });
EsnNotificationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnNotificationModule, providers: [
        TimeAgoPipe,
        EsnNotificationDrawerService,
        EsnNotificationsController,
        EsnNotificationsService,
        { provide: NOTIFICATION_TAGS, useValue: null },
        { provide: EsnNotificationProcessingService, useClass: EsnNotificationNoProcessingService }
    ], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        OverlayModule,
        EsnGlobalConfigurationModule,
        EsnApiCallWrapperModule,
        EsnDataModule,
        EsnButtonModule,
        EsnIconModule,
        EsnPersonAvatarModule,
        EsnTabsModule,
        EsnInfiniteScrollModule,
        EsnAsyncContentWrapperModule,
        EsnBadgeModule,
        EsnDividerModule,
        EsnTooltipModule,
        EsnInputModule,
        EsnSelectModule,
        EsnCheckboxModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnNotificationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TimeAgoPipe,
                        EsnNotification,
                        EsnNotificationDrawer,
                        EsnNotificationAvatar,
                        EsnNotificationList,
                        EsnNotificationCenter,
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        OverlayModule,
                        EsnGlobalConfigurationModule,
                        EsnApiCallWrapperModule,
                        EsnDataModule,
                        EsnButtonModule,
                        EsnIconModule,
                        EsnPersonAvatarModule,
                        EsnTabsModule,
                        EsnInfiniteScrollModule,
                        EsnAsyncContentWrapperModule,
                        EsnBadgeModule,
                        EsnDividerModule,
                        EsnTooltipModule,
                        EsnInputModule,
                        EsnSelectModule,
                        EsnCheckboxModule
                    ],
                    providers: [
                        TimeAgoPipe,
                        EsnNotificationDrawerService,
                        EsnNotificationsController,
                        EsnNotificationsService,
                        { provide: NOTIFICATION_TAGS, useValue: null },
                        { provide: EsnNotificationProcessingService, useClass: EsnNotificationNoProcessingService }
                    ],
                    exports: [EsnNotification, EsnNotificationDrawer, EsnNotificationList, EsnNotificationCenter, TimeAgoPipe, EsnNotificationAvatar],
                    entryComponents: [
                        // Needs to be added here because otherwise we can't
                        // dynamically render this component at runtime
                        EsnNotificationDrawer
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i1.EsnIconsRegistry }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUNMLHVCQUF1QixFQUN2Qiw0QkFBNEIsRUFDNUIsV0FBVyxHQUNaLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDaEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUJBQXlCLENBQUM7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d0JBQ2IsNEJBQTRCO3dCQUM1Qix1QkFBdUI7d0JBQ3ZCLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixhQUFhO3dCQUNiLHFCQUFxQjt3QkFDckIsYUFBYTt3QkFDYix1QkFBdUI7d0JBQ3ZCLDRCQUE0Qjt3QkFDNUIsY0FBYzt3QkFDZCxnQkFBZ0I7d0JBQ2hCLGdCQUFnQjt3QkFDaEIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGlCQUFpQjtxQkFFbEI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULFdBQVc7d0JBQ1gsNEJBQTRCO3dCQUM1QiwwQkFBMEI7d0JBQzFCLHVCQUF1Qjt3QkFDdkIsRUFBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQzt3QkFDNUMsRUFBQyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsUUFBUSxFQUFFLGtDQUFrQyxFQUFDO3FCQUMxRjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixDQUFDO29CQUNqSSxlQUFlLEVBQUU7d0JBQ2Ysb0RBQW9EO3dCQUNwRCwrQ0FBK0M7d0JBQy9DLHFCQUFxQjtxQkFDdEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBFc25JY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pY29uLm1vZHVsZSc7XHJcbmltcG9ydCB7IEVzbk5vdGlmaWNhdGlvbiB9IGZyb20gJy4vbm90aWZpY2F0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVzbkRhdGFNb2R1bGUgfSBmcm9tICcuLi9kYXRhL2RhdGEubW9kdWxlJztcclxuaW1wb3J0IHsgRXNuQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBFc25JY29uc1JlZ2lzdHJ5IH0gZnJvbSAnLi4vaWNvbi9pY29ucy1yZWdpc3RyeSc7XHJcbmltcG9ydCB7IEVzblBlcnNvbkF2YXRhck1vZHVsZSB9IGZyb20gJy4uL3BlcnNvbi1hdmF0YXIvcGVyc29uLWF2YXRhci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBFc25Ob3RpZmljYXRpb25BdmF0YXIgfSBmcm9tICcuL25vdGlmaWNhdGlvbi1hdmF0YXIvbm90aWZpY2F0aW9uLWF2YXRhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbG9zZUljb24sIERvdHNWSWNvbiB9IGZyb20gJy4uL2ljb24vaWNvbnMnO1xyXG5pbXBvcnQgeyBFc25Ob3RpZmljYXRpb25EcmF3ZXJTZXJ2aWNlIH0gZnJvbSAnLi9ub3RpZmljYXRpb24tZHJhd2VyL25vdGlmaWNhdGlvbi1kcmF3ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEVzbk5vdGlmaWNhdGlvbkRyYXdlciB9IGZyb20gJy4vbm90aWZpY2F0aW9uLWRyYXdlci9ub3RpZmljYXRpb24tZHJhd2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVzblRhYnNNb2R1bGUgfSBmcm9tICcuLi90YWJzL3RhYnMubW9kdWxlJztcclxuaW1wb3J0IHtcclxuICBFc25BcGlDYWxsV3JhcHBlck1vZHVsZSxcclxuICBFc25HbG9iYWxDb25maWd1cmF0aW9uTW9kdWxlLFxyXG4gIFRpbWVBZ29QaXBlLFxyXG59IGZyb20gJy4uLy4uL3V0aWxzL3B1YmxpYy1hcGknO1xyXG5pbXBvcnQgeyBFc25Ob3RpZmljYXRpb25zQ29udHJvbGxlciB9IGZyb20gJy4vbm90aWZpY2F0aW9ucy1jb250cm9sbGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFc25Ob3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJy4vbm90aWZpY2F0aW9ucy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXNuQXN5bmNDb250ZW50V3JhcHBlck1vZHVsZSB9IGZyb20gJy4uL2FzeW5jLWNvbnRlbnQtd3JhcHBlci9hc3luYy1jb250ZW50LXdyYXBwZXIubW9kdWxlJztcclxuaW1wb3J0IHsgRXNuSW5maW5pdGVTY3JvbGxNb2R1bGUgfSBmcm9tICcuLi9pbmZpbml0ZS1zY3JvbGwvaW5maW5pdGUtc2Nyb2xsLm1vZHVsZSc7XHJcbmltcG9ydCB7IEVzbk5vdGlmaWNhdGlvbkxpc3QgfSBmcm9tICcuL25vdGlmaWNhdGlvbi1saXN0L25vdGlmaWNhdGlvbi1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5PVElGSUNBVElPTl9UQUdTIH0gZnJvbSAnLi9ub3RpZmljYXRpb24tY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IEVzbk5vdGlmaWNhdGlvbk5vUHJvY2Vzc2luZ1NlcnZpY2UsIEVzbk5vdGlmaWNhdGlvblByb2Nlc3NpbmdTZXJ2aWNlIH0gZnJvbSAnLi9ub3RpZmljYXRpb24tcHJvY2Vzc2luZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXNuQmFkZ2VNb2R1bGUgfSBmcm9tICcuLi9iYWRnZS9iYWRnZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBFc25EaXZpZGVyTW9kdWxlIH0gZnJvbSAnLi4vZGl2aWRlci9kaXZpZGVyLm1vZHVsZSc7XHJcbmltcG9ydCB7IEVzblRvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi90b29sdGlwL3Rvb2x0aXAubW9kdWxlJztcclxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgRXNuTm90aWZpY2F0aW9uQ2VudGVyIH0gZnJvbSAnLi9ub3RpZmljYXRpb24tY2VudGVyL25vdGlmaWNhdGlvbi1jZW50ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXNuSW5wdXRNb2R1bGUgfSBmcm9tICcuLi9pbnB1dC9pbnB1dC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBFc25TZWxlY3RNb2R1bGUgfSBmcm9tICcuLi9zZWxlY3Qvc2VsZWN0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IEVzbkNoZWNrYm94TW9kdWxlIH0gZnJvbSAnLi4vY2hlY2tib3gvY2hlY2tib3gubW9kdWxlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFRpbWVBZ29QaXBlLFxyXG4gICAgRXNuTm90aWZpY2F0aW9uLFxyXG4gICAgRXNuTm90aWZpY2F0aW9uRHJhd2VyLFxyXG4gICAgRXNuTm90aWZpY2F0aW9uQXZhdGFyLFxyXG4gICAgRXNuTm90aWZpY2F0aW9uTGlzdCxcclxuICAgIEVzbk5vdGlmaWNhdGlvbkNlbnRlcixcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIE92ZXJsYXlNb2R1bGUsXHJcbiAgICBFc25HbG9iYWxDb25maWd1cmF0aW9uTW9kdWxlLFxyXG4gICAgRXNuQXBpQ2FsbFdyYXBwZXJNb2R1bGUsXHJcbiAgICBFc25EYXRhTW9kdWxlLFxyXG4gICAgRXNuQnV0dG9uTW9kdWxlLFxyXG4gICAgRXNuSWNvbk1vZHVsZSxcclxuICAgIEVzblBlcnNvbkF2YXRhck1vZHVsZSxcclxuICAgIEVzblRhYnNNb2R1bGUsXHJcbiAgICBFc25JbmZpbml0ZVNjcm9sbE1vZHVsZSxcclxuICAgIEVzbkFzeW5jQ29udGVudFdyYXBwZXJNb2R1bGUsXHJcbiAgICBFc25CYWRnZU1vZHVsZSxcclxuICAgIEVzbkRpdmlkZXJNb2R1bGUsXHJcbiAgICBFc25Ub29sdGlwTW9kdWxlLFxyXG4gICAgRXNuSW5wdXRNb2R1bGUsXHJcbiAgICBFc25TZWxlY3RNb2R1bGUsXHJcbiAgICBFc25DaGVja2JveE1vZHVsZVxyXG5cclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgVGltZUFnb1BpcGUsXHJcbiAgICBFc25Ob3RpZmljYXRpb25EcmF3ZXJTZXJ2aWNlLFxyXG4gICAgRXNuTm90aWZpY2F0aW9uc0NvbnRyb2xsZXIsXHJcbiAgICBFc25Ob3RpZmljYXRpb25zU2VydmljZSxcclxuICAgIHtwcm92aWRlOiBOT1RJRklDQVRJT05fVEFHUywgdXNlVmFsdWU6IG51bGx9LFxyXG4gICAge3Byb3ZpZGU6IEVzbk5vdGlmaWNhdGlvblByb2Nlc3NpbmdTZXJ2aWNlLCB1c2VDbGFzczogRXNuTm90aWZpY2F0aW9uTm9Qcm9jZXNzaW5nU2VydmljZX1cclxuICBdLFxyXG4gIGV4cG9ydHM6IFtFc25Ob3RpZmljYXRpb24sIEVzbk5vdGlmaWNhdGlvbkRyYXdlciwgRXNuTm90aWZpY2F0aW9uTGlzdCwgRXNuTm90aWZpY2F0aW9uQ2VudGVyLCBUaW1lQWdvUGlwZSwgRXNuTm90aWZpY2F0aW9uQXZhdGFyXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIC8vIE5lZWRzIHRvIGJlIGFkZGVkIGhlcmUgYmVjYXVzZSBvdGhlcndpc2Ugd2UgY2FuJ3RcclxuICAgIC8vIGR5bmFtaWNhbGx5IHJlbmRlciB0aGlzIGNvbXBvbmVudCBhdCBydW50aW1lXHJcbiAgICBFc25Ob3RpZmljYXRpb25EcmF3ZXJcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25Ob3RpZmljYXRpb25Nb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXNuSWNvbnNSZWdpc3RyeTogRXNuSWNvbnNSZWdpc3RyeSkge1xyXG4gICAgLy9UT0RPOiByZWdpc3RlciBtaXNzaW5nIGljb25zIG9uY2Ugd2UgaGF2ZSB0aGVtXHJcbiAgICB0aGlzLmVzbkljb25zUmVnaXN0cnkucmVnaXN0ZXJJY29ucyhbRG90c1ZJY29uLCBDbG9zZUljb25dKTtcclxuICB9XHJcbn1cclxuIl19