import { Injectable } from '@angular/core';
import { EsnApiUtils } from '../../utils/utils/apiUtils';
import { EsnFileConverter } from '../../utils/utils/public-api';
import * as i0 from "@angular/core";
import * as i1 from "./file-input-notification.service";
export class EsnFileInputRemoteFMService {
}
export class EsnFileInputLocalDBFilesService {
}
export class EsnFileInputNoLocalDBFilesService {
    async doesBlobExist(uuid) {
        return Promise.resolve(false);
    }
    getBlob(uuid) {
        throw 'Method EsnFileInputNoLocalDBFilesService.getBlob should never be called';
    }
}
export class EsnFileInputNoRemoteFMService {
    filesDownload(uuid) {
        throw `Please provide an implementation for EsnFileInputRemoteFMService to be able to download files`;
    }
}
export class EsnDocumentRetrievalService {
}
export class EsnLocalOrRemoteDocumentRetrievalService {
    constructor(filesManagerController, filesService, notifService) {
        this.filesManagerController = filesManagerController;
        this.filesService = filesService;
        this.notifService = notifService;
    }
    async documentDownload(document) {
        if (document.metadata.uuid) {
            if (document.metadata.size === 0) {
                EsnFileConverter.saveFile(new Blob([]), document.metadata.filename || 'doc', document.metadata.contentType || '');
                return;
            }
            if (!!document.metadata.externalUuid &&
                await this.filesService.doesBlobExist(document.metadata.externalUuid)) {
                this.dowloadFromLocalBase(document);
            }
            else {
                this.dowloadFromRemote(document);
            }
        }
    }
    async dowloadFromLocalBase(document) {
        const blobItem = await this.filesService.getBlob(document.metadata.externalUuid);
        const blob = await EsnFileConverter.base64ToBlob(blobItem.blobString);
        EsnFileConverter.saveFile(blob, document.metadata.filename || 'doc', document.metadata.contentType || '');
    }
    dowloadFromRemote(document) {
        this.filesManagerController
            .filesDownload(document.metadata.uuid)
            .subscribe((data) => {
            EsnFileConverter.saveFile(data, document.metadata.filename || 'doc', document.metadata.contentType || '');
        }, (error) => {
            this.notifService.showNotif('error', 'Impossible de récupérer le document', EsnApiUtils.getErrorMessage(error, 'téléchargement').message);
        });
    }
}
EsnLocalOrRemoteDocumentRetrievalService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnLocalOrRemoteDocumentRetrievalService, deps: [{ token: EsnFileInputRemoteFMService }, { token: EsnFileInputLocalDBFilesService }, { token: i1.EsnFileInputNotificationService }], target: i0.ɵɵFactoryTarget.Injectable });
EsnLocalOrRemoteDocumentRetrievalService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnLocalOrRemoteDocumentRetrievalService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnLocalOrRemoteDocumentRetrievalService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: EsnFileInputRemoteFMService }, { type: EsnFileInputLocalDBFilesService }, { type: i1.EsnFileInputNotificationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQtcmV0cmlldmFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9maWxlLWlucHV0L2RvY3VtZW50LXJldHJpZXZhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7QUFHaEUsTUFBTSxPQUFnQiwyQkFBMkI7Q0FFaEQ7QUFFRCxNQUFNLE9BQWdCLCtCQUErQjtDQUdwRDtBQUVELE1BQU0sT0FBTyxpQ0FBaUM7SUFHckMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFZO1FBQ3JDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ00sT0FBTyxDQUFDLElBQVk7UUFDekIsTUFBTSx5RUFBeUUsQ0FBQztJQUNsRixDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sNkJBQTZCO0lBR2pDLGFBQWEsQ0FBQyxJQUFZO1FBQy9CLE1BQU0sK0ZBQStGLENBQUM7SUFDeEcsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFnQiwyQkFBMkI7Q0FFaEQ7QUFHRCxNQUFNLE9BQU8sd0NBQXdDO0lBR25ELFlBQ1Msc0JBQW1ELEVBQ25ELFlBQTZDLEVBQzdDLFlBQTZDO1FBRjdDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBNkI7UUFDbkQsaUJBQVksR0FBWixZQUFZLENBQWlDO1FBQzdDLGlCQUFZLEdBQVosWUFBWSxDQUFpQztJQUNuRCxDQUFDO0lBRUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFFBQXNCO1FBQ2xELElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDMUIsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBQ2hDLGdCQUFnQixDQUFDLFFBQVEsQ0FDdkIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQ1osUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUksS0FBSyxFQUNuQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQ3BDLENBQUM7Z0JBQ0YsT0FBTzthQUNSO1lBQ0QsSUFDRSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZO2dCQUNoQyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBYSxDQUFDLEVBQ3RFO2dCQUNBLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNyQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbEM7U0FDRjtJQUNILENBQUM7SUFFTSxLQUFLLENBQUMsb0JBQW9CLENBQUMsUUFBc0I7UUFDdEQsTUFBTSxRQUFRLEdBQWEsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FDeEQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFhLENBQ2hDLENBQUM7UUFDRixNQUFNLElBQUksR0FBRyxNQUFNLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEUsZ0JBQWdCLENBQUMsUUFBUSxDQUN2QixJQUFJLEVBQ0osUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUksS0FBSyxFQUNuQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQ3BDLENBQUM7SUFDSixDQUFDO0lBRU0saUJBQWlCLENBQUMsUUFBc0I7UUFDN0MsSUFBSSxDQUFDLHNCQUFzQjthQUN4QixhQUFhLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFLLENBQUM7YUFDdEMsU0FBUyxDQUNSLENBQUMsSUFBVSxFQUFFLEVBQUU7WUFDYixnQkFBZ0IsQ0FBQyxRQUFRLENBQ3ZCLElBQUksRUFDSixRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxLQUFLLEVBQ25DLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FDcEMsQ0FBQztRQUNKLENBQUMsRUFDRCxDQUFDLEtBQXVCLEVBQUUsRUFBRTtZQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FDekIsT0FBTyxFQUNQLHFDQUFxQyxFQUNyQyxXQUFXLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FDN0QsQ0FBQztRQUNKLENBQUMsQ0FDRixDQUFDO0lBQ04sQ0FBQzs7c0lBN0RVLHdDQUF3QzswSUFBeEMsd0NBQXdDOzRGQUF4Qyx3Q0FBd0M7a0JBRHBELFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQXBpUmVzcG9uc2UgfSBmcm9tICcuLi8uLi91dGlscy9tb2RlbC9hcGknO1xyXG5pbXBvcnQgeyBCbG9iSXRlbSwgRG9jdW1lbnRJdGVtIH0gZnJvbSAnLi4vLi4vdXRpbHMvbW9kZWwvZG9jdW1lbnRzJztcclxuaW1wb3J0IHsgRXNuQXBpVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy91dGlscy9hcGlVdGlscyc7XHJcbmltcG9ydCB7IEVzbkZpbGVDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi91dGlscy91dGlscy9wdWJsaWMtYXBpJztcclxuaW1wb3J0IHsgRXNuRmlsZUlucHV0Tm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vZmlsZS1pbnB1dC1ub3RpZmljYXRpb24uc2VydmljZSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRXNuRmlsZUlucHV0UmVtb3RlRk1TZXJ2aWNlIHtcclxuICBwdWJsaWMgYWJzdHJhY3QgZmlsZXNEb3dubG9hZCh1dWlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEJsb2I+O1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRXNuRmlsZUlucHV0TG9jYWxEQkZpbGVzU2VydmljZSB7XHJcbiAgcHVibGljIGFic3RyYWN0IGRvZXNCbG9iRXhpc3QodXVpZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPjtcclxuICBwdWJsaWMgYWJzdHJhY3QgZ2V0QmxvYih1dWlkOiBzdHJpbmcpOiBQcm9taXNlPEJsb2JJdGVtPjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVzbkZpbGVJbnB1dE5vTG9jYWxEQkZpbGVzU2VydmljZVxyXG4gIGltcGxlbWVudHMgRXNuRmlsZUlucHV0TG9jYWxEQkZpbGVzU2VydmljZVxyXG57XHJcbiAgcHVibGljIGFzeW5jIGRvZXNCbG9iRXhpc3QodXVpZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcclxuICB9XHJcbiAgcHVibGljIGdldEJsb2IodXVpZDogc3RyaW5nKTogUHJvbWlzZTxCbG9iSXRlbT4ge1xyXG4gICAgdGhyb3cgJ01ldGhvZCBFc25GaWxlSW5wdXROb0xvY2FsREJGaWxlc1NlcnZpY2UuZ2V0QmxvYiBzaG91bGQgbmV2ZXIgYmUgY2FsbGVkJztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFc25GaWxlSW5wdXROb1JlbW90ZUZNU2VydmljZVxyXG4gIGltcGxlbWVudHMgRXNuRmlsZUlucHV0UmVtb3RlRk1TZXJ2aWNlXHJcbntcclxuICBwdWJsaWMgZmlsZXNEb3dubG9hZCh1dWlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEJsb2I+IHtcclxuICAgIHRocm93IGBQbGVhc2UgcHJvdmlkZSBhbiBpbXBsZW1lbnRhdGlvbiBmb3IgRXNuRmlsZUlucHV0UmVtb3RlRk1TZXJ2aWNlIHRvIGJlIGFibGUgdG8gZG93bmxvYWQgZmlsZXNgO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVzbkRvY3VtZW50UmV0cmlldmFsU2VydmljZSB7XHJcbiAgcHVibGljIGFic3RyYWN0IGRvY3VtZW50RG93bmxvYWQoZG9jdW1lbnQ6IERvY3VtZW50SXRlbSk6IHZvaWQ7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEVzbkxvY2FsT3JSZW1vdGVEb2N1bWVudFJldHJpZXZhbFNlcnZpY2VcclxuICBpbXBsZW1lbnRzIEVzbkRvY3VtZW50UmV0cmlldmFsU2VydmljZVxyXG57XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZmlsZXNNYW5hZ2VyQ29udHJvbGxlcjogRXNuRmlsZUlucHV0UmVtb3RlRk1TZXJ2aWNlLFxyXG4gICAgcHVibGljIGZpbGVzU2VydmljZTogRXNuRmlsZUlucHV0TG9jYWxEQkZpbGVzU2VydmljZSxcclxuICAgIHB1YmxpYyBub3RpZlNlcnZpY2U6IEVzbkZpbGVJbnB1dE5vdGlmaWNhdGlvblNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBkb2N1bWVudERvd25sb2FkKGRvY3VtZW50OiBEb2N1bWVudEl0ZW0pIHtcclxuICAgIGlmIChkb2N1bWVudC5tZXRhZGF0YS51dWlkKSB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5tZXRhZGF0YS5zaXplID09PSAwKSB7XHJcbiAgICAgICAgRXNuRmlsZUNvbnZlcnRlci5zYXZlRmlsZShcclxuICAgICAgICAgIG5ldyBCbG9iKFtdKSxcclxuICAgICAgICAgIGRvY3VtZW50Lm1ldGFkYXRhLmZpbGVuYW1lIHx8ICdkb2MnLFxyXG4gICAgICAgICAgZG9jdW1lbnQubWV0YWRhdGEuY29udGVudFR5cGUgfHwgJydcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgISFkb2N1bWVudC5tZXRhZGF0YS5leHRlcm5hbFV1aWQgJiYgXHJcbiAgICAgICAgYXdhaXQgdGhpcy5maWxlc1NlcnZpY2UuZG9lc0Jsb2JFeGlzdChkb2N1bWVudC5tZXRhZGF0YS5leHRlcm5hbFV1aWQhKVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmRvd2xvYWRGcm9tTG9jYWxCYXNlKGRvY3VtZW50KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRvd2xvYWRGcm9tUmVtb3RlKGRvY3VtZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGRvd2xvYWRGcm9tTG9jYWxCYXNlKGRvY3VtZW50OiBEb2N1bWVudEl0ZW0pIHtcclxuICAgIGNvbnN0IGJsb2JJdGVtOiBCbG9iSXRlbSA9IGF3YWl0IHRoaXMuZmlsZXNTZXJ2aWNlLmdldEJsb2IoXHJcbiAgICAgIGRvY3VtZW50Lm1ldGFkYXRhLmV4dGVybmFsVXVpZCFcclxuICAgICk7XHJcbiAgICBjb25zdCBibG9iID0gYXdhaXQgRXNuRmlsZUNvbnZlcnRlci5iYXNlNjRUb0Jsb2IoYmxvYkl0ZW0uYmxvYlN0cmluZyk7XHJcbiAgICBFc25GaWxlQ29udmVydGVyLnNhdmVGaWxlKFxyXG4gICAgICBibG9iLFxyXG4gICAgICBkb2N1bWVudC5tZXRhZGF0YS5maWxlbmFtZSB8fCAnZG9jJyxcclxuICAgICAgZG9jdW1lbnQubWV0YWRhdGEuY29udGVudFR5cGUgfHwgJydcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZG93bG9hZEZyb21SZW1vdGUoZG9jdW1lbnQ6IERvY3VtZW50SXRlbSkge1xyXG4gICAgdGhpcy5maWxlc01hbmFnZXJDb250cm9sbGVyXHJcbiAgICAgIC5maWxlc0Rvd25sb2FkKGRvY3VtZW50Lm1ldGFkYXRhLnV1aWQhKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgIChkYXRhOiBCbG9iKSA9PiB7XHJcbiAgICAgICAgICBFc25GaWxlQ29udmVydGVyLnNhdmVGaWxlKFxyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBkb2N1bWVudC5tZXRhZGF0YS5maWxlbmFtZSB8fCAnZG9jJyxcclxuICAgICAgICAgICAgZG9jdW1lbnQubWV0YWRhdGEuY29udGVudFR5cGUgfHwgJydcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyb3I6IEFwaVJlc3BvbnNlPGFueT4pID0+IHtcclxuICAgICAgICAgIHRoaXMubm90aWZTZXJ2aWNlLnNob3dOb3RpZihcclxuICAgICAgICAgICAgJ2Vycm9yJyxcclxuICAgICAgICAgICAgJ0ltcG9zc2libGUgZGUgcsOpY3Vww6lyZXIgbGUgZG9jdW1lbnQnLFxyXG4gICAgICAgICAgICBFc25BcGlVdGlscy5nZXRFcnJvck1lc3NhZ2UoZXJyb3IsICd0w6lsw6ljaGFyZ2VtZW50JykubWVzc2FnZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==