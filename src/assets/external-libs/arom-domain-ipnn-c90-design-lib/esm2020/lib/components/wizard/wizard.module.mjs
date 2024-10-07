import { NgModule } from '@angular/core';
import { EsnWizard } from './wizard.component';
import { EsnButtonModule } from '../button';
import { EsnStepperModule } from '../stepper';
import { EsnIconModule } from '../icon';
import { EsnDialogModule } from '../dialog';
import { EsnProgressBarModule } from '../progress-bar';
import { RouterModule } from '@angular/router';
import { EsnLoaderModule } from '../loader';
import { EsnErrorStateModule } from '../error-state';
import { ConfirmationDialogModule } from '../confirmation-dialog';
import { CommonModule } from '@angular/common';
import { EsnDialogEntryModule } from '../dialog-entry/dialog-entry.module';
import * as i0 from "@angular/core";
export class EsnWizardModule {
}
EsnWizardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnWizardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EsnWizardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: EsnWizardModule, declarations: [EsnWizard], imports: [CommonModule,
        RouterModule,
        EsnButtonModule,
        EsnStepperModule,
        EsnIconModule,
        EsnDialogModule,
        EsnProgressBarModule,
        EsnLoaderModule,
        EsnErrorStateModule,
        ConfirmationDialogModule,
        EsnDialogEntryModule], exports: [EsnWizard] });
EsnWizardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnWizardModule, imports: [CommonModule,
        RouterModule,
        EsnButtonModule,
        EsnStepperModule,
        EsnIconModule,
        EsnDialogModule,
        EsnProgressBarModule,
        EsnLoaderModule,
        EsnErrorStateModule,
        ConfirmationDialogModule,
        EsnDialogEntryModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnWizardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [EsnWizard],
                    imports: [
                        CommonModule,
                        RouterModule,
                        EsnButtonModule,
                        EsnStepperModule,
                        EsnIconModule,
                        EsnDialogModule,
                        EsnProgressBarModule,
                        EsnLoaderModule,
                        EsnErrorStateModule,
                        ConfirmationDialogModule,
                        EsnDialogEntryModule
                    ],
                    exports: [EsnWizard],
                    providers: [
                    // EsnGlobalConfiguration,
                    // {
                    //   provide: EsnNotificationService,
                    //   useClass: ESN_GLOBAL_CONFIGURATION_DEFAULT_NOTIFICATION_SERVICE,
                    // },
                    // { provide: ESN_ENVIRONMENT_CONFIG, useValue: {not_set: true} }
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL3dpemFyZC93aXphcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDeEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM1QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM1QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7O0FBMkIzRSxNQUFNLE9BQU8sZUFBZTs7NkdBQWYsZUFBZTs4R0FBZixlQUFlLGlCQXhCWCxTQUFTLGFBRXRCLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsZUFBZTtRQUNmLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLHdCQUF3QjtRQUN4QixvQkFBb0IsYUFFWixTQUFTOzhHQVVSLGVBQWUsWUF0QnhCLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsZUFBZTtRQUNmLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLHdCQUF3QjtRQUN4QixvQkFBb0I7NEZBWVgsZUFBZTtrQkF6QjNCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUN6QixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixhQUFhO3dCQUNiLGVBQWU7d0JBQ2Ysb0JBQW9CO3dCQUNwQixlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIsd0JBQXdCO3dCQUN4QixvQkFBb0I7cUJBQ3JCO29CQUNELE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDcEIsU0FBUyxFQUFFO29CQUNULDBCQUEwQjtvQkFDMUIsSUFBSTtvQkFDSixxQ0FBcUM7b0JBQ3JDLHFFQUFxRTtvQkFDckUsS0FBSztvQkFDTCxpRUFBaUU7cUJBQ2xFO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRXNuV2l6YXJkIH0gZnJvbSAnLi93aXphcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXNuQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uJztcclxuaW1wb3J0IHsgRXNuU3RlcHBlck1vZHVsZSB9IGZyb20gJy4uL3N0ZXBwZXInO1xyXG5pbXBvcnQgeyBFc25JY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbic7XHJcbmltcG9ydCB7IEVzbkRpYWxvZ01vZHVsZSB9IGZyb20gJy4uL2RpYWxvZyc7XHJcbmltcG9ydCB7IEVzblByb2dyZXNzQmFyTW9kdWxlIH0gZnJvbSAnLi4vcHJvZ3Jlc3MtYmFyJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRXNuTG9hZGVyTW9kdWxlIH0gZnJvbSAnLi4vbG9hZGVyJztcclxuaW1wb3J0IHsgRXNuRXJyb3JTdGF0ZU1vZHVsZSB9IGZyb20gJy4uL2Vycm9yLXN0YXRlJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uRGlhbG9nTW9kdWxlIH0gZnJvbSAnLi4vY29uZmlybWF0aW9uLWRpYWxvZyc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEVzbkRpYWxvZ0VudHJ5TW9kdWxlIH0gZnJvbSAnLi4vZGlhbG9nLWVudHJ5L2RpYWxvZy1lbnRyeS5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtFc25XaXphcmRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICAgIEVzbkJ1dHRvbk1vZHVsZSxcclxuICAgIEVzblN0ZXBwZXJNb2R1bGUsXHJcbiAgICBFc25JY29uTW9kdWxlLFxyXG4gICAgRXNuRGlhbG9nTW9kdWxlLFxyXG4gICAgRXNuUHJvZ3Jlc3NCYXJNb2R1bGUsXHJcbiAgICBFc25Mb2FkZXJNb2R1bGUsXHJcbiAgICBFc25FcnJvclN0YXRlTW9kdWxlLFxyXG4gICAgQ29uZmlybWF0aW9uRGlhbG9nTW9kdWxlLFxyXG4gICAgRXNuRGlhbG9nRW50cnlNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtFc25XaXphcmRdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgLy8gRXNuR2xvYmFsQ29uZmlndXJhdGlvbixcclxuICAgIC8vIHtcclxuICAgIC8vICAgcHJvdmlkZTogRXNuTm90aWZpY2F0aW9uU2VydmljZSxcclxuICAgIC8vICAgdXNlQ2xhc3M6IEVTTl9HTE9CQUxfQ09ORklHVVJBVElPTl9ERUZBVUxUX05PVElGSUNBVElPTl9TRVJWSUNFLFxyXG4gICAgLy8gfSxcclxuICAgIC8vIHsgcHJvdmlkZTogRVNOX0VOVklST05NRU5UX0NPTkZJRywgdXNlVmFsdWU6IHtub3Rfc2V0OiB0cnVlfSB9XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzbldpemFyZE1vZHVsZSB7fVxyXG4iXX0=