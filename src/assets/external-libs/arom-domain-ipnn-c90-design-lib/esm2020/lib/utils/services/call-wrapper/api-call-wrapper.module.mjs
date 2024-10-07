import { NgModule } from '@angular/core';
import { EsnApiCallWrapperNotificationService, ESN_API_CALL_WRAPPER_DEFAULT_NOTIFICATION_SERVICE, } from './api-call-wrapper-notifications';
import { EsnApiCallWrapper } from './api-call-wrapper.service';
import * as i0 from "@angular/core";
export class EsnApiCallWrapperModule {
}
EsnApiCallWrapperModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnApiCallWrapperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EsnApiCallWrapperModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: EsnApiCallWrapperModule });
EsnApiCallWrapperModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnApiCallWrapperModule, providers: [
        EsnApiCallWrapper,
        {
            provide: EsnApiCallWrapperNotificationService,
            useClass: ESN_API_CALL_WRAPPER_DEFAULT_NOTIFICATION_SERVICE,
        },
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnApiCallWrapperModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [],
                    exports: [],
                    providers: [
                        EsnApiCallWrapper,
                        {
                            provide: EsnApiCallWrapperNotificationService,
                            useClass: ESN_API_CALL_WRAPPER_DEFAULT_NOTIFICATION_SERVICE,
                        },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWNhbGwtd3JhcHBlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvdXRpbHMvc2VydmljZXMvY2FsbC13cmFwcGVyL2FwaS1jYWxsLXdyYXBwZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUNMLG9DQUFvQyxFQUNwQyxpREFBaUQsR0FDbEQsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFjL0QsTUFBTSxPQUFPLHVCQUF1Qjs7cUhBQXZCLHVCQUF1QjtzSEFBdkIsdUJBQXVCO3NIQUF2Qix1QkFBdUIsYUFSdkI7UUFDVCxpQkFBaUI7UUFDakI7WUFDRSxPQUFPLEVBQUUsb0NBQW9DO1lBQzdDLFFBQVEsRUFBRSxpREFBaUQ7U0FDNUQ7S0FDRjs0RkFFVSx1QkFBdUI7a0JBWm5DLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO29CQUNYLE9BQU8sRUFBRSxFQUFFO29CQUNYLFNBQVMsRUFBRTt3QkFDVCxpQkFBaUI7d0JBQ2pCOzRCQUNFLE9BQU8sRUFBRSxvQ0FBb0M7NEJBQzdDLFFBQVEsRUFBRSxpREFBaUQ7eUJBQzVEO3FCQUNGO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBFc25BcGlDYWxsV3JhcHBlck5vdGlmaWNhdGlvblNlcnZpY2UsXHJcbiAgRVNOX0FQSV9DQUxMX1dSQVBQRVJfREVGQVVMVF9OT1RJRklDQVRJT05fU0VSVklDRSxcclxufSBmcm9tICcuL2FwaS1jYWxsLXdyYXBwZXItbm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCB7IEVzbkFwaUNhbGxXcmFwcGVyIH0gZnJvbSAnLi9hcGktY2FsbC13cmFwcGVyLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtdLFxyXG4gIGltcG9ydHM6IFtdLFxyXG4gIGV4cG9ydHM6IFtdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgRXNuQXBpQ2FsbFdyYXBwZXIsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEVzbkFwaUNhbGxXcmFwcGVyTm90aWZpY2F0aW9uU2VydmljZSxcclxuICAgICAgdXNlQ2xhc3M6IEVTTl9BUElfQ0FMTF9XUkFQUEVSX0RFRkFVTFRfTk9USUZJQ0FUSU9OX1NFUlZJQ0UsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25BcGlDYWxsV3JhcHBlck1vZHVsZSB7fVxyXG4iXX0=