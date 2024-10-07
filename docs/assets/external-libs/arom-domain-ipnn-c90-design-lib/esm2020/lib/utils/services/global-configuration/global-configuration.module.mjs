import { NgModule } from '@angular/core';
import { ESN_ENVIRONMENT_CONFIG } from './environment';
import { EsnNotificationService, ESN_GLOBAL_CONFIGURATION_DEFAULT_NOTIFICATION_SERVICE } from './notifications';
import { EsnGlobalConfiguration } from './global-configuration.service';
import * as i0 from "@angular/core";
export class EsnGlobalConfigurationModule {
}
EsnGlobalConfigurationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnGlobalConfigurationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EsnGlobalConfigurationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: EsnGlobalConfigurationModule });
EsnGlobalConfigurationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnGlobalConfigurationModule, providers: [
        EsnGlobalConfiguration,
        {
            provide: EsnNotificationService,
            useClass: ESN_GLOBAL_CONFIGURATION_DEFAULT_NOTIFICATION_SERVICE,
        },
        { provide: ESN_ENVIRONMENT_CONFIG, useValue: { not_set: true } }
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnGlobalConfigurationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [],
                    exports: [],
                    providers: [
                        EsnGlobalConfiguration,
                        {
                            provide: EsnNotificationService,
                            useClass: ESN_GLOBAL_CONFIGURATION_DEFAULT_NOTIFICATION_SERVICE,
                        },
                        { provide: ESN_ENVIRONMENT_CONFIG, useValue: { not_set: true } }
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWNvbmZpZ3VyYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL3V0aWxzL3NlcnZpY2VzL2dsb2JhbC1jb25maWd1cmF0aW9uL2dsb2JhbC1jb25maWd1cmF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUscURBQXFELEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoSCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFnQnhFLE1BQU0sT0FBTyw0QkFBNEI7OzBIQUE1Qiw0QkFBNEI7MkhBQTVCLDRCQUE0QjsySEFBNUIsNEJBQTRCLGFBVDVCO1FBQ1Qsc0JBQXNCO1FBQ3RCO1lBQ0UsT0FBTyxFQUFFLHNCQUFzQjtZQUMvQixRQUFRLEVBQUUscURBQXFEO1NBQ2hFO1FBQ0QsRUFBRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxFQUFFO0tBQy9EOzRGQUVVLDRCQUE0QjtrQkFieEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsU0FBUyxFQUFFO3dCQUNULHNCQUFzQjt3QkFDdEI7NEJBQ0UsT0FBTyxFQUFFLHNCQUFzQjs0QkFDL0IsUUFBUSxFQUFFLHFEQUFxRDt5QkFDaEU7d0JBQ0QsRUFBRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxFQUFFO3FCQUMvRDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVTTl9FTlZJUk9OTUVOVF9DT05GSUcgfSBmcm9tICcuL2Vudmlyb25tZW50JztcclxuaW1wb3J0IHsgRXNuTm90aWZpY2F0aW9uU2VydmljZSwgRVNOX0dMT0JBTF9DT05GSUdVUkFUSU9OX0RFRkFVTFRfTk9USUZJQ0FUSU9OX1NFUlZJQ0UgfSBmcm9tICcuL25vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgeyBFc25HbG9iYWxDb25maWd1cmF0aW9uIH0gZnJvbSAnLi9nbG9iYWwtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW10sXHJcbiAgaW1wb3J0czogW10sXHJcbiAgZXhwb3J0czogW10sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBFc25HbG9iYWxDb25maWd1cmF0aW9uLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBFc25Ob3RpZmljYXRpb25TZXJ2aWNlLFxyXG4gICAgICB1c2VDbGFzczogRVNOX0dMT0JBTF9DT05GSUdVUkFUSU9OX0RFRkFVTFRfTk9USUZJQ0FUSU9OX1NFUlZJQ0UsXHJcbiAgICB9LFxyXG4gICAgeyBwcm92aWRlOiBFU05fRU5WSVJPTk1FTlRfQ09ORklHLCB1c2VWYWx1ZToge25vdF9zZXQ6IHRydWV9IH1cclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuR2xvYmFsQ29uZmlndXJhdGlvbk1vZHVsZSB7fVxyXG4iXX0=