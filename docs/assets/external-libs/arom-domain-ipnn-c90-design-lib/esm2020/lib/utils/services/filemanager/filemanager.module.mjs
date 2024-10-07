import { NgModule } from '@angular/core';
import { EsnFilemanagerController } from './filemanagerController.service';
import { EsnGlobalConfigurationModule } from '../public-api';
import { EsnBlobRetreiverService, EsnNoBlobRetreiverService } from './blob-retreiver';
import { EsnDocumentSenderService } from './document-sender.service';
import { EsnUploadStateService } from './upload-state.service';
import { ESN_FILE_CHUNK_MAX_SIZE, FILE_MANAGER_PROVIDER } from './filemanager-configuration';
import * as i0 from "@angular/core";
export class EsnFilemanagerModule {
}
EsnFilemanagerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnFilemanagerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EsnFilemanagerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: EsnFilemanagerModule, imports: [EsnGlobalConfigurationModule] });
EsnFilemanagerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnFilemanagerModule, providers: [
        EsnFilemanagerController,
        EsnDocumentSenderService,
        EsnUploadStateService,
        { provide: FILE_MANAGER_PROVIDER, useValue: 'UNSET' },
        { provide: ESN_FILE_CHUNK_MAX_SIZE, useValue: 1 * 1024 * 1024 },
        { provide: EsnBlobRetreiverService, useClass: EsnNoBlobRetreiverService }
    ], imports: [EsnGlobalConfigurationModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnFilemanagerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [EsnGlobalConfigurationModule],
                    exports: [],
                    providers: [
                        EsnFilemanagerController,
                        EsnDocumentSenderService,
                        EsnUploadStateService,
                        { provide: FILE_MANAGER_PROVIDER, useValue: 'UNSET' },
                        { provide: ESN_FILE_CHUNK_MAX_SIZE, useValue: 1 * 1024 * 1024 },
                        { provide: EsnBlobRetreiverService, useClass: EsnNoBlobRetreiverService }
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZW1hbmFnZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL3V0aWxzL3NlcnZpY2VzL2ZpbGVtYW5hZ2VyL2ZpbGVtYW5hZ2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN0RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFnQjdGLE1BQU0sT0FBTyxvQkFBb0I7O2tIQUFwQixvQkFBb0I7bUhBQXBCLG9CQUFvQixZQVhyQiw0QkFBNEI7bUhBVzNCLG9CQUFvQixhQVRwQjtRQUNULHdCQUF3QjtRQUN4Qix3QkFBd0I7UUFDeEIscUJBQXFCO1FBQ3JCLEVBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUM7UUFDbkQsRUFBQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxFQUFFO1FBQy9ELEVBQUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFFBQVEsRUFBRSx5QkFBeUIsRUFBQztLQUN4RSxZQVRTLDRCQUE0Qjs0RkFXM0Isb0JBQW9CO2tCQWJoQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztvQkFDdkMsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsU0FBUyxFQUFFO3dCQUNULHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3dCQUN4QixxQkFBcUI7d0JBQ3JCLEVBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUM7d0JBQ25ELEVBQUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFFBQVEsRUFBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBRTt3QkFDL0QsRUFBQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLHlCQUF5QixFQUFDO3FCQUN4RTtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVzbkZpbGVtYW5hZ2VyQ29udHJvbGxlciB9IGZyb20gJy4vZmlsZW1hbmFnZXJDb250cm9sbGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFc25HbG9iYWxDb25maWd1cmF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vcHVibGljLWFwaSc7XHJcbmltcG9ydCB7IEVzbkJsb2JSZXRyZWl2ZXJTZXJ2aWNlLCBFc25Ob0Jsb2JSZXRyZWl2ZXJTZXJ2aWNlIH0gZnJvbSAnLi9ibG9iLXJldHJlaXZlcic7XHJcbmltcG9ydCB7IEVzbkRvY3VtZW50U2VuZGVyU2VydmljZSB9IGZyb20gJy4vZG9jdW1lbnQtc2VuZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFc25VcGxvYWRTdGF0ZVNlcnZpY2UgfSBmcm9tICcuL3VwbG9hZC1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRVNOX0ZJTEVfQ0hVTktfTUFYX1NJWkUsIEZJTEVfTUFOQUdFUl9QUk9WSURFUiB9IGZyb20gJy4vZmlsZW1hbmFnZXItY29uZmlndXJhdGlvbic7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtdLFxyXG4gIGltcG9ydHM6IFtFc25HbG9iYWxDb25maWd1cmF0aW9uTW9kdWxlXSxcclxuICBleHBvcnRzOiBbXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEVzbkZpbGVtYW5hZ2VyQ29udHJvbGxlcixcclxuICAgIEVzbkRvY3VtZW50U2VuZGVyU2VydmljZSwgXHJcbiAgICBFc25VcGxvYWRTdGF0ZVNlcnZpY2UsXHJcbiAgICB7cHJvdmlkZTogRklMRV9NQU5BR0VSX1BST1ZJREVSLCB1c2VWYWx1ZTogJ1VOU0VUJ30sXHJcbiAgICB7cHJvdmlkZTogRVNOX0ZJTEVfQ0hVTktfTUFYX1NJWkUsIHVzZVZhbHVlOiAgMSAqIDEwMjQgKiAxMDI0IH0sLy8gMSBNbyBcclxuICAgIHtwcm92aWRlOiBFc25CbG9iUmV0cmVpdmVyU2VydmljZSwgdXNlQ2xhc3M6IEVzbk5vQmxvYlJldHJlaXZlclNlcnZpY2V9XHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzbkZpbGVtYW5hZ2VyTW9kdWxlIHt9XHJcblxyXG5cclxuIl19