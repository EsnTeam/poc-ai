import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EsnFileInput } from './file-input.component';
import { FileSizePipe } from './file-size.pipe';
import { EsnFileInputConfig, EsnFileInputDefaultConfig } from './fileInputConfig';
import { EsnDocumentRetrievalService, EsnFileInputLocalDBFilesService, EsnFileInputNoLocalDBFilesService, EsnFileInputRemoteFMService, EsnLocalOrRemoteDocumentRetrievalService } from './document-retrieval.service';
import { EsnFileInputNotificationService, ESN_FILE_SELECTOR_DEFAULT_NOTIFICATION_SERVICE } from './file-input-notification.service';
import { EsnFileItem } from './file-list/file-item/file-item.component';
import { EsnLoaderModule } from '../loader/loader.module';
import { EsnTooltipModule } from '../tooltip/tooltip.module';
import { EsnFileList } from './file-list/file-list.component';
import { EsnFileSelector } from './file-selector/file-selector.component';
import { EsnIconModule } from '../icon/icon.module';
import { EsnIconsRegistry } from '../icon/icons-registry';
import { DeleteIcon, DownloadIcon, FileIcon } from '../icon/icons';
import { EsnButtonModule } from '../button/button.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { EsnFilemanagerController } from '../../utils/services/filemanager/filemanagerController.service';
import * as i0 from "@angular/core";
import * as i1 from "../icon/icons-registry";
export class EsnFileInputModule {
    constructor(esnIconsRegistry) {
        this.esnIconsRegistry = esnIconsRegistry;
        this.esnIconsRegistry.registerIcons([DeleteIcon, FileIcon, DownloadIcon]);
    }
}
EsnFileInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnFileInputModule, deps: [{ token: i1.EsnIconsRegistry }], target: i0.ɵɵFactoryTarget.NgModule });
EsnFileInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: EsnFileInputModule, declarations: [FileSizePipe, EsnFileInput, EsnFileItem, EsnFileList, EsnFileSelector], imports: [MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        EsnLoaderModule,
        EsnTooltipModule,
        EsnIconModule,
        EsnButtonModule,
        MatProgressBarModule], exports: [FileSizePipe, EsnFileInput, EsnFileItem, EsnFileList, EsnFileSelector] });
EsnFileInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnFileInputModule, providers: [
        EsnIconsRegistry,
        FileSizePipe,
        { provide: EsnFileInputConfig, useClass: EsnFileInputDefaultConfig },
        { provide: EsnFileInputNotificationService, useClass: ESN_FILE_SELECTOR_DEFAULT_NOTIFICATION_SERVICE },
        { provide: EsnDocumentRetrievalService, useClass: EsnLocalOrRemoteDocumentRetrievalService },
        { provide: EsnFileInputLocalDBFilesService, useClass: EsnFileInputNoLocalDBFilesService },
        {
            provide: EsnFileInputRemoteFMService,
            useClass: EsnFilemanagerController,
        },
    ], imports: [MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        EsnLoaderModule,
        EsnTooltipModule,
        EsnIconModule,
        EsnButtonModule,
        MatProgressBarModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnFileInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FileSizePipe, EsnFileInput, EsnFileItem, EsnFileList, EsnFileSelector],
                    imports: [
                        MatFormFieldModule,
                        ReactiveFormsModule,
                        FormsModule,
                        CommonModule,
                        EsnLoaderModule,
                        EsnTooltipModule,
                        EsnIconModule,
                        EsnButtonModule,
                        MatProgressBarModule
                    ],
                    exports: [FileSizePipe, EsnFileInput, EsnFileItem, EsnFileList, EsnFileSelector],
                    providers: [
                        EsnIconsRegistry,
                        FileSizePipe,
                        { provide: EsnFileInputConfig, useClass: EsnFileInputDefaultConfig },
                        { provide: EsnFileInputNotificationService, useClass: ESN_FILE_SELECTOR_DEFAULT_NOTIFICATION_SERVICE },
                        { provide: EsnDocumentRetrievalService, useClass: EsnLocalOrRemoteDocumentRetrievalService },
                        { provide: EsnFileInputLocalDBFilesService, useClass: EsnFileInputNoLocalDBFilesService },
                        {
                            provide: EsnFileInputRemoteFMService,
                            useClass: EsnFilemanagerController,
                        },
                    ],
                }]
        }], ctorParameters: function () { return [{ type: i1.EsnIconsRegistry }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pbnB1dC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9maWxlLWlucHV0L2ZpbGUtaW5wdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSwrQkFBK0IsRUFBRSxpQ0FBaUMsRUFBaUMsMkJBQTJCLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNyUCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsOENBQThDLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwSSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUNBQXlDLENBQUM7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b20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgRXNuRmlsZUlucHV0IH0gZnJvbSAnLi9maWxlLWlucHV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZpbGVTaXplUGlwZSB9IGZyb20gJy4vZmlsZS1zaXplLnBpcGUnO1xyXG5pbXBvcnQgeyBFc25GaWxlSW5wdXRDb25maWcsIEVzbkZpbGVJbnB1dERlZmF1bHRDb25maWcgfSBmcm9tICcuL2ZpbGVJbnB1dENvbmZpZyc7XHJcbmltcG9ydCB7IEVzbkRvY3VtZW50UmV0cmlldmFsU2VydmljZSwgRXNuRmlsZUlucHV0TG9jYWxEQkZpbGVzU2VydmljZSwgRXNuRmlsZUlucHV0Tm9Mb2NhbERCRmlsZXNTZXJ2aWNlLCBFc25GaWxlSW5wdXROb1JlbW90ZUZNU2VydmljZSwgRXNuRmlsZUlucHV0UmVtb3RlRk1TZXJ2aWNlLCBFc25Mb2NhbE9yUmVtb3RlRG9jdW1lbnRSZXRyaWV2YWxTZXJ2aWNlIH0gZnJvbSAnLi9kb2N1bWVudC1yZXRyaWV2YWwuc2VydmljZSc7XHJcbmltcG9ydCB7IEVzbkZpbGVJbnB1dE5vdGlmaWNhdGlvblNlcnZpY2UsIEVTTl9GSUxFX1NFTEVDVE9SX0RFRkFVTFRfTk9USUZJQ0FUSU9OX1NFUlZJQ0UgfSBmcm9tICcuL2ZpbGUtaW5wdXQtbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFc25GaWxlSXRlbSB9IGZyb20gJy4vZmlsZS1saXN0L2ZpbGUtaXRlbS9maWxlLWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXNuTG9hZGVyTW9kdWxlIH0gZnJvbSAnLi4vbG9hZGVyL2xvYWRlci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBFc25Ub29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vdG9vbHRpcC90b29sdGlwLm1vZHVsZSc7XHJcbmltcG9ydCB7IEVzbkZpbGVMaXN0IH0gZnJvbSAnLi9maWxlLWxpc3QvZmlsZS1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVzbkZpbGVTZWxlY3RvciB9IGZyb20gJy4vZmlsZS1zZWxlY3Rvci9maWxlLXNlbGVjdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVzbkljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2ljb24ubW9kdWxlJztcclxuaW1wb3J0IHsgRXNuSWNvbnNSZWdpc3RyeSB9IGZyb20gJy4uL2ljb24vaWNvbnMtcmVnaXN0cnknO1xyXG5pbXBvcnQgeyBEZWxldGVJY29uLCBEb3dubG9hZEljb24sIEZpbGVJY29uIH0gZnJvbSAnLi4vaWNvbi9pY29ucyc7XHJcbmltcG9ydCB7IEVzbkJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbi9idXR0b24ubW9kdWxlJztcclxuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQgeyBFc25GaWxlbWFuYWdlckNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi91dGlscy9zZXJ2aWNlcy9maWxlbWFuYWdlci9maWxlbWFuYWdlckNvbnRyb2xsZXIuc2VydmljZSc7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtGaWxlU2l6ZVBpcGUsIEVzbkZpbGVJbnB1dCwgRXNuRmlsZUl0ZW0sIEVzbkZpbGVMaXN0LCBFc25GaWxlU2VsZWN0b3JdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEVzbkxvYWRlck1vZHVsZSxcclxuICAgIEVzblRvb2x0aXBNb2R1bGUsXHJcbiAgICBFc25JY29uTW9kdWxlLFxyXG4gICAgRXNuQnV0dG9uTW9kdWxlLFxyXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtGaWxlU2l6ZVBpcGUsIEVzbkZpbGVJbnB1dCwgRXNuRmlsZUl0ZW0sIEVzbkZpbGVMaXN0LCBFc25GaWxlU2VsZWN0b3JdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgRXNuSWNvbnNSZWdpc3RyeSxcclxuICAgIEZpbGVTaXplUGlwZSxcclxuICAgIHtwcm92aWRlOiBFc25GaWxlSW5wdXRDb25maWcsIHVzZUNsYXNzOiBFc25GaWxlSW5wdXREZWZhdWx0Q29uZmlnfSxcclxuICAgIHtwcm92aWRlOiBFc25GaWxlSW5wdXROb3RpZmljYXRpb25TZXJ2aWNlLCB1c2VDbGFzczogRVNOX0ZJTEVfU0VMRUNUT1JfREVGQVVMVF9OT1RJRklDQVRJT05fU0VSVklDRX0sXHJcbiAgICB7cHJvdmlkZTogRXNuRG9jdW1lbnRSZXRyaWV2YWxTZXJ2aWNlLCB1c2VDbGFzczogRXNuTG9jYWxPclJlbW90ZURvY3VtZW50UmV0cmlldmFsU2VydmljZX0sXHJcbiAgICB7cHJvdmlkZTogRXNuRmlsZUlucHV0TG9jYWxEQkZpbGVzU2VydmljZSwgdXNlQ2xhc3M6IEVzbkZpbGVJbnB1dE5vTG9jYWxEQkZpbGVzU2VydmljZX0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEVzbkZpbGVJbnB1dFJlbW90ZUZNU2VydmljZSxcclxuICAgICAgdXNlQ2xhc3M6IEVzbkZpbGVtYW5hZ2VyQ29udHJvbGxlcixcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzbkZpbGVJbnB1dE1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlc25JY29uc1JlZ2lzdHJ5OiBFc25JY29uc1JlZ2lzdHJ5KSB7XHJcbiAgICB0aGlzLmVzbkljb25zUmVnaXN0cnkucmVnaXN0ZXJJY29ucyhbRGVsZXRlSWNvbiwgRmlsZUljb24sIERvd25sb2FkSWNvbl0pO1xyXG4gIH1cclxufVxyXG4iXX0=