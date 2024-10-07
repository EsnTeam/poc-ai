import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { catchError, filter } from 'rxjs/operators';
import { TEMP_PREFIX } from './model/draft-elements';
import { EsnUtils } from '../../utils';
import { Injectable } from '@angular/core';
import { EsnDraftUtils } from '.';
import * as i0 from "@angular/core";
import * as i1 from "../filemanager";
import * as i2 from "./element-database.service";
import * as i3 from "@angular/router";
export class EsnDraftService {
    constructor(filesService, dbService, router) {
        this.filesService = filesService;
        this.dbService = dbService;
        this.router = router;
        this.initialDocumentsUuids = [];
        this.elementDoesntExist = false;
        this.initialized = false;
        this.goBackSubject$ = new BehaviorSubject(false);
        this.initialElement$ = new BehaviorSubject(undefined);
        this.forms = {};
        this.initForm();
    }
    initForm() {
        // To Overidde
        throw `Implementation of abstractDraftService must override method 'initForm'`;
    }
    populateFormFromElement() {
        // To override
        throw `Implementation of abstractDraftService must override method 'populateFormFromElement'`;
    }
    updateElementFromForm() {
        // To override
        throw `Implementation of abstractDraftService must override method 'updateElementFromForm'`;
    }
    getDocumentsUuids(element) {
        //To override
        throw `Implementation of abstractDraftService must override method 'getDocumentsUuids'`;
    }
    postElementsWithFiles(el) {
        // To override
        throw `Implementation of abstractDraftService must override method 'postElementsWithFiles'`;
    }
    async init(uuid) {
        this._resetData();
        await this.initFormFromDb(uuid);
    }
    async initFormFromDb(uuid) {
        console.log('this.initFormFromDb');
        const [tmpElement, element] = await this.dbService.getElements([
            TEMP_PREFIX + uuid,
            uuid,
        ]);
        if (!element) {
            this.elementDoesntExist = true;
            return;
        }
        this.initialElement = EsnUtils.cloneDeep(element);
        this.initialElement$.next(this.initialElement);
        element.initialCreation = false;
        this.initialDocumentsUuids = this.getDocumentsUuids(element);
        if (!tmpElement) {
            this.element = element;
            this.element.externalUuid = TEMP_PREFIX + this.element.externalUuid;
            await this.dbService.saveElement(this.element);
        }
        else {
            this.element = tmpElement;
        }
        this.populateFormFromElement();
        this.initialized = true;
    }
    async updateAndSave(step) {
        if (!!step) {
            this.element.currentPage = step;
        }
        this.updateElementFromForm();
        await this.dbService.saveElement(this.element);
    }
    goBack() {
        this.goBackSubject$.next(true);
    }
    getGoBack() {
        return this.goBackSubject$.pipe(filter((x) => x));
    }
    async saveChanges(step) {
        if (!this.element) {
            return;
        }
        await this.updateAndSave(step);
        this.element.externalUuid = this.element.externalUuid.replace(TEMP_PREFIX, '');
        this.element.lastUpdate = new Date();
        await this.dbService.saveElement(this.element);
        await this.dbService.deleteElementById(TEMP_PREFIX + this.element.externalUuid);
        await this.filesService.deleteBlobs(this.initialDocumentsUuids.filter((uuid) => !this.getDocumentsUuids(this.element).includes(uuid)));
        this._resetData();
    }
    async discardChanges() {
        if (!this.element) {
            return;
        }
        if (this.initialElement?.initialCreation) {
            await this.dbService.deleteElementById(this.initialElement.externalUuid);
        }
        else {
            await this.updateAndSave();
        }
        await this.dbService.deleteElementById(this.element.externalUuid);
        await this.filesService.deleteBlobs(this.getDocumentsUuids(this.element).filter((uuid) => !this.initialDocumentsUuids.includes(uuid)));
        this._resetData();
    }
    noChangesMade() {
        this.updateElementFromForm();
        return _.isEqual(_.omit(EsnUtils.pruneEmpty(this.element), [
            'externalUuid',
            'lastUpdate',
            'initialCreation',
        ]), _.omit(EsnUtils.pruneEmpty(this.initialElement), [
            'externalUuid',
            'lastUpdate',
            'initialCreation',
        ]));
    }
    async sendElementToServer() {
        this.updateElementFromForm();
        const element = EsnUtils.cloneDeep(this.element);
        element.externalUuid = element.externalUuid.replace(TEMP_PREFIX, '');
        return new Promise((resolve) => {
            this.postElementsWithFiles(element)
                .pipe(catchError((error) => {
                resolve(false);
                throw error;
            }))
                .subscribe(async (res) => {
                console.log(res);
                await this.deleteWithFiles(this.element);
                if (this.initialElement) {
                    await this.deleteWithFiles(this.initialElement);
                }
                resolve(this.elementIdName ? res.content[this.elementIdName] : true);
            });
        });
    }
    async deleteWithFiles(element) {
        await this.filesService.deleteBlobs(this.getDocumentsUuids(element));
        return this.dbService.deleteElementById(element.externalUuid);
    }
    getFirstIncompleteStep() {
        for (const step of Object.keys(this.forms)) {
            if (!this.forms[step].valid) {
                console.log('first incomplete step: ' + step);
                return step;
            }
        }
        return null;
    }
    _resetData() {
        this.initForm();
        this.initialDocumentsUuids = [];
        this.initialElement = undefined;
        this.elementDoesntExist = false;
        this.element = undefined;
        this.initialized = false;
    }
    async createDraft(additionalFields = {}) {
        const element = await this.initElementInDb(additionalFields);
        this.router.navigate([`${this.creationBasePath}/create/${element.externalUuid}`]);
    }
    openDraft(draftUuid) {
        this.router.navigate([`${this.creationBasePath}/create/${draftUuid}`]);
    }
    async initElementInDb(additionalFields = {}) {
        const element = EsnDraftUtils.initDraftElement(additionalFields);
        await this.dbService.saveElement(element);
        return element;
    }
}
EsnDraftService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDraftService, deps: [{ token: i1.EsnBlobRetreiverService }, { token: i2.EsnElementDatabaseService }, { token: i3.Router }], target: i0.ɵɵFactoryTarget.Injectable });
EsnDraftService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDraftService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDraftService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.EsnBlobRetreiverService }, { type: i2.EsnElementDatabaseService }, { type: i3.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi91dGlscy9zZXJ2aWNlcy9kcmFmdHMvZHJhZnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEQsT0FBTyxFQUFtQixXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUd0RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEdBQUcsQ0FBQzs7Ozs7QUFJbEMsTUFBTSxPQUFnQixlQUFlO0lBaUJuQyxZQUNTLFlBQXFDLEVBQ3JDLFNBQW9DLEVBQ3BDLE1BQWM7UUFGZCxpQkFBWSxHQUFaLFlBQVksQ0FBeUI7UUFDckMsY0FBUyxHQUFULFNBQVMsQ0FBMkI7UUFDcEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWxCaEIsMEJBQXFCLEdBQWEsRUFBRSxDQUFDO1FBRXJDLHVCQUFrQixHQUFZLEtBQUssQ0FBQztRQUNwQyxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixtQkFBYyxHQUNuQixJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUMvQixvQkFBZSxHQUFtQyxJQUFJLGVBQWUsQ0FBZ0IsU0FBUyxDQUFDLENBQUM7UUFjckcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENB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LENBQUMscUJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVNLEtBQUssQ0FBQyxXQUFXLENBQUMsbUJBQThDLEVBQUU7UUFDdkUsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsV0FBVyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFTSxTQUFTLENBQUMsU0FBaUI7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsV0FBVyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVNLEtBQUssQ0FBQyxlQUFlLENBQUMsbUJBQThDLEVBQUU7UUFDM0UsTUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDakUsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs2R0FuT21CLGVBQWU7aUhBQWYsZUFBZTs0RkFBZixlQUFlO2tCQURwQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IERyYWZ0VG1wRWxlbWVudCwgVEVNUF9QUkVGSVggfSBmcm9tICcuL21vZGVsL2RyYWZ0LWVsZW1lbnRzJztcclxuaW1wb3J0IHsgRXNuQmxvYlJldHJlaXZlclNlcnZpY2UgfSBmcm9tICcuLi9maWxlbWFuYWdlcic7XHJcbmltcG9ydCB7IEVzbkVsZW1lbnREYXRhYmFzZVNlcnZpY2UgfSBmcm9tICcuL2VsZW1lbnQtZGF0YWJhc2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEVzblV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVzbkRyYWZ0VXRpbHMgfSBmcm9tICcuJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVzbkRyYWZ0U2VydmljZTxUIGV4dGVuZHMgRHJhZnRUbXBFbGVtZW50PiB7XHJcbiAgcHVibGljIGZvcm1zOiB7IFtrZXk6IHN0cmluZ106IEZvcm1Hcm91cCB9O1xyXG4gIHB1YmxpYyBpbml0aWFsRG9jdW1lbnRzVXVpZHM6IHN0cmluZ1tdID0gW107XHJcbiAgcHVibGljIGluaXRpYWxFbGVtZW50PzogVDtcclxuICBwdWJsaWMgZWxlbWVudERvZXNudEV4aXN0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGdvQmFja1N1YmplY3QkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPVxyXG4gICAgbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgcHVibGljIGluaXRpYWxFbGVtZW50JDogQmVoYXZpb3JTdWJqZWN0PFQgfCB1bmRlZmluZWQ+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxUIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG4gIGVsZW1lbnQ/OiBUO1xyXG5cclxuICAvLyBQcm9wcyB0byBvdmVycmlkZVxyXG4gIC8vIHB1YmxpYyBwb3N0RWxlbWVudHNXaXRoRmlsZXM6IChlbDogVCkgPT4gT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIHB1YmxpYyBlbGVtZW50SWROYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIGNyZWF0aW9uQmFzZVBhdGg6IHN0cmluZztcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGZpbGVzU2VydmljZTogRXNuQmxvYlJldHJlaXZlclNlcnZpY2UsXHJcbiAgICBwdWJsaWMgZGJTZXJ2aWNlOiBFc25FbGVtZW50RGF0YWJhc2VTZXJ2aWNlLFxyXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyXHJcbiAgKSB7XHJcbiAgICB0aGlzLmZvcm1zID0ge307XHJcbiAgICB0aGlzLmluaXRGb3JtKCk7XHJcbiAgfVxyXG5cclxuICBpbml0Rm9ybSgpIHtcclxuICAgIC8vIFRvIE92ZXJpZGRlXHJcbiAgICB0aHJvdyBgSW1wbGVtZW50YXRpb24gb2YgYWJzdHJhY3REcmFmdFNlcnZpY2UgbXVzdCBvdmVycmlkZSBtZXRob2QgJ2luaXRGb3JtJ2A7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcG9wdWxhdGVGb3JtRnJvbUVsZW1lbnQoKSB7XHJcbiAgICAvLyBUbyBvdmVycmlkZVxyXG4gICAgdGhyb3cgYEltcGxlbWVudGF0aW9uIG9mIGFic3RyYWN0RHJhZnRTZXJ2aWNlIG11c3Qgb3ZlcnJpZGUgbWV0aG9kICdwb3B1bGF0ZUZvcm1Gcm9tRWxlbWVudCdgO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRWxlbWVudEZyb21Gb3JtKCkge1xyXG4gICAgLy8gVG8gb3ZlcnJpZGVcclxuICAgIHRocm93IGBJbXBsZW1lbnRhdGlvbiBvZiBhYnN0cmFjdERyYWZ0U2VydmljZSBtdXN0IG92ZXJyaWRlIG1ldGhvZCAndXBkYXRlRWxlbWVudEZyb21Gb3JtJ2A7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RG9jdW1lbnRzVXVpZHMoZWxlbWVudDogVCk6IHN0cmluZ1tdIHtcclxuICAgIC8vVG8gb3ZlcnJpZGVcclxuICAgIHRocm93IGBJbXBsZW1lbnRhdGlvbiBvZiBhYnN0cmFjdERyYWZ0U2VydmljZSBtdXN0IG92ZXJyaWRlIG1ldGhvZCAnZ2V0RG9jdW1lbnRzVXVpZHMnYDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwb3N0RWxlbWVudHNXaXRoRmlsZXMoZWw6IFQpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgLy8gVG8gb3ZlcnJpZGVcclxuICAgIHRocm93IGBJbXBsZW1lbnRhdGlvbiBvZiBhYnN0cmFjdERyYWZ0U2VydmljZSBtdXN0IG92ZXJyaWRlIG1ldGhvZCAncG9zdEVsZW1lbnRzV2l0aEZpbGVzJ2A7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHB1YmxpYyBhc3luYyBpbml0KHV1aWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5fcmVzZXREYXRhKCk7XHJcbiAgICBhd2FpdCB0aGlzLmluaXRGb3JtRnJvbURiKHV1aWQpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgaW5pdEZvcm1Gcm9tRGIodXVpZDogc3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZygndGhpcy5pbml0Rm9ybUZyb21EYicpO1xyXG4gICAgY29uc3QgW3RtcEVsZW1lbnQsIGVsZW1lbnRdID0gYXdhaXQgdGhpcy5kYlNlcnZpY2UuZ2V0RWxlbWVudHMoW1xyXG4gICAgICBURU1QX1BSRUZJWCArIHV1aWQsXHJcbiAgICAgIHV1aWQsXHJcbiAgICBdKTtcclxuICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnREb2VzbnRFeGlzdCA9IHRydWU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuaW5pdGlhbEVsZW1lbnQgPSBFc25VdGlscy5jbG9uZURlZXAoZWxlbWVudCk7XHJcbiAgICB0aGlzLmluaXRpYWxFbGVtZW50JC5uZXh0KHRoaXMuaW5pdGlhbEVsZW1lbnQpO1xyXG4gICAgZWxlbWVudC5pbml0aWFsQ3JlYXRpb24gPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmluaXRpYWxEb2N1bWVudHNVdWlkcyA9IHRoaXMuZ2V0RG9jdW1lbnRzVXVpZHMoZWxlbWVudCk7XHJcblxyXG4gICAgaWYgKCF0bXBFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuZWxlbWVudCEuZXh0ZXJuYWxVdWlkID0gVEVNUF9QUkVGSVggKyB0aGlzLmVsZW1lbnQhLmV4dGVybmFsVXVpZDtcclxuICAgICAgYXdhaXQgdGhpcy5kYlNlcnZpY2Uuc2F2ZUVsZW1lbnQodGhpcy5lbGVtZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRtcEVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wb3B1bGF0ZUZvcm1Gcm9tRWxlbWVudCgpO1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHVwZGF0ZUFuZFNhdmUoc3RlcD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKCEhc3RlcCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQhLmN1cnJlbnRQYWdlID0gc3RlcDtcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlRWxlbWVudEZyb21Gb3JtKCk7XHJcbiAgICBhd2FpdCB0aGlzLmRiU2VydmljZS5zYXZlRWxlbWVudCh0aGlzLmVsZW1lbnQhKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnb0JhY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmdvQmFja1N1YmplY3QkLm5leHQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0R29CYWNrKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ29CYWNrU3ViamVjdCQucGlwZShmaWx0ZXIoKHgpID0+IHgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBzYXZlQ2hhbmdlcyhzdGVwPzogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZUFuZFNhdmUoc3RlcCk7XHJcbiAgICB0aGlzLmVsZW1lbnQuZXh0ZXJuYWxVdWlkID0gdGhpcy5lbGVtZW50IS5leHRlcm5hbFV1aWQhLnJlcGxhY2UoXHJcbiAgICAgIFRFTVBfUFJFRklYLFxyXG4gICAgICAnJ1xyXG4gICAgKTtcclxuICAgIHRoaXMuZWxlbWVudC5sYXN0VXBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGF3YWl0IHRoaXMuZGJTZXJ2aWNlLnNhdmVFbGVtZW50KHRoaXMuZWxlbWVudCEpO1xyXG4gICAgYXdhaXQgdGhpcy5kYlNlcnZpY2UuZGVsZXRlRWxlbWVudEJ5SWQoXHJcbiAgICAgIFRFTVBfUFJFRklYICsgdGhpcy5lbGVtZW50LmV4dGVybmFsVXVpZFxyXG4gICAgKTtcclxuXHJcbiAgICBhd2FpdCB0aGlzLmZpbGVzU2VydmljZS5kZWxldGVCbG9icyhcclxuICAgICAgdGhpcy5pbml0aWFsRG9jdW1lbnRzVXVpZHMuZmlsdGVyKFxyXG4gICAgICAgICh1dWlkKSA9PiAhdGhpcy5nZXREb2N1bWVudHNVdWlkcyh0aGlzLmVsZW1lbnQhKS5pbmNsdWRlcyh1dWlkKVxyXG4gICAgICApXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuX3Jlc2V0RGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGRpc2NhcmRDaGFuZ2VzKCkge1xyXG4gICAgaWYgKCF0aGlzLmVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaW5pdGlhbEVsZW1lbnQ/LmluaXRpYWxDcmVhdGlvbikge1xyXG4gICAgICBhd2FpdCB0aGlzLmRiU2VydmljZS5kZWxldGVFbGVtZW50QnlJZCh0aGlzLmluaXRpYWxFbGVtZW50LmV4dGVybmFsVXVpZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhd2FpdCB0aGlzLnVwZGF0ZUFuZFNhdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCB0aGlzLmRiU2VydmljZS5kZWxldGVFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnQuZXh0ZXJuYWxVdWlkKTtcclxuXHJcbiAgICBhd2FpdCB0aGlzLmZpbGVzU2VydmljZS5kZWxldGVCbG9icyhcclxuICAgICAgdGhpcy5nZXREb2N1bWVudHNVdWlkcyh0aGlzLmVsZW1lbnQpLmZpbHRlcihcclxuICAgICAgICAodXVpZCkgPT4gIXRoaXMuaW5pdGlhbERvY3VtZW50c1V1aWRzLmluY2x1ZGVzKHV1aWQpXHJcbiAgICAgIClcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5fcmVzZXREYXRhKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbm9DaGFuZ2VzTWFkZSgpIHtcclxuICAgIHRoaXMudXBkYXRlRWxlbWVudEZyb21Gb3JtKCk7XHJcblxyXG4gICAgcmV0dXJuIF8uaXNFcXVhbChcclxuICAgICAgXy5vbWl0KEVzblV0aWxzLnBydW5lRW1wdHkodGhpcy5lbGVtZW50KSwgW1xyXG4gICAgICAgICdleHRlcm5hbFV1aWQnLFxyXG4gICAgICAgICdsYXN0VXBkYXRlJyxcclxuICAgICAgICAnaW5pdGlhbENyZWF0aW9uJyxcclxuICAgICAgXSksXHJcbiAgICAgIF8ub21pdChFc25VdGlscy5wcnVuZUVtcHR5KHRoaXMuaW5pdGlhbEVsZW1lbnQpLCBbXHJcbiAgICAgICAgJ2V4dGVybmFsVXVpZCcsXHJcbiAgICAgICAgJ2xhc3RVcGRhdGUnLFxyXG4gICAgICAgICdpbml0aWFsQ3JlYXRpb24nLFxyXG4gICAgICBdKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBzZW5kRWxlbWVudFRvU2VydmVyKCk6IFByb21pc2U8c3RyaW5nIHwgYm9vbGVhbj4ge1xyXG4gICAgdGhpcy51cGRhdGVFbGVtZW50RnJvbUZvcm0oKTtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBFc25VdGlscy5jbG9uZURlZXAodGhpcy5lbGVtZW50KTtcclxuICAgIGVsZW1lbnQuZXh0ZXJuYWxVdWlkID0gZWxlbWVudC5leHRlcm5hbFV1aWQucmVwbGFjZShURU1QX1BSRUZJWCwgJycpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICB0aGlzLnBvc3RFbGVtZW50c1dpdGhGaWxlcyhlbGVtZW50KVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZShhc3luYyAocmVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgYXdhaXQgdGhpcy5kZWxldGVXaXRoRmlsZXModGhpcy5lbGVtZW50ISk7XHJcbiAgICAgICAgICBpZiAodGhpcy5pbml0aWFsRWxlbWVudCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmRlbGV0ZVdpdGhGaWxlcyh0aGlzLmluaXRpYWxFbGVtZW50KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlc29sdmUodGhpcy5lbGVtZW50SWROYW1lID8gcmVzLmNvbnRlbnRbdGhpcy5lbGVtZW50SWROYW1lXSA6IHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBkZWxldGVXaXRoRmlsZXMoZWxlbWVudDogVCkge1xyXG4gICAgYXdhaXQgdGhpcy5maWxlc1NlcnZpY2UuZGVsZXRlQmxvYnModGhpcy5nZXREb2N1bWVudHNVdWlkcyhlbGVtZW50KSk7XHJcbiAgICByZXR1cm4gdGhpcy5kYlNlcnZpY2UuZGVsZXRlRWxlbWVudEJ5SWQoZWxlbWVudC5leHRlcm5hbFV1aWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEZpcnN0SW5jb21wbGV0ZVN0ZXAoKTogc3RyaW5nIHwgbnVsbCB7XHJcblxyXG4gICAgZm9yIChjb25zdCBzdGVwIG9mIE9iamVjdC5rZXlzKHRoaXMuZm9ybXMpKSB7XHJcbiAgICAgIGlmICghdGhpcy5mb3Jtc1tzdGVwXS52YWxpZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmaXJzdCBpbmNvbXBsZXRlIHN0ZXA6ICcgKyBzdGVwKTtcclxuICAgICAgICByZXR1cm4gc3RlcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBfcmVzZXREYXRhKCkge1xyXG4gICAgdGhpcy5pbml0Rm9ybSgpO1xyXG4gICAgdGhpcy5pbml0aWFsRG9jdW1lbnRzVXVpZHMgPSBbXTtcclxuICAgIHRoaXMuaW5pdGlhbEVsZW1lbnQgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmVsZW1lbnREb2VzbnRFeGlzdCA9IGZhbHNlO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGNyZWF0ZURyYWZ0KGFkZGl0aW9uYWxGaWVsZHM6IHtba2V5IGluIHN0cmluZ106IHN0cmluZ30gPSB7fSkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGF3YWl0IHRoaXMuaW5pdEVsZW1lbnRJbkRiKGFkZGl0aW9uYWxGaWVsZHMpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2Ake3RoaXMuY3JlYXRpb25CYXNlUGF0aH0vY3JlYXRlLyR7ZWxlbWVudC5leHRlcm5hbFV1aWR9YF0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9wZW5EcmFmdChkcmFmdFV1aWQ6IHN0cmluZyl7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYCR7dGhpcy5jcmVhdGlvbkJhc2VQYXRofS9jcmVhdGUvJHtkcmFmdFV1aWR9YF0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGluaXRFbGVtZW50SW5EYihhZGRpdGlvbmFsRmllbGRzOiB7W2tleSBpbiBzdHJpbmddOiBzdHJpbmd9ID0ge30pe1xyXG4gICAgY29uc3QgZWxlbWVudCA9IEVzbkRyYWZ0VXRpbHMuaW5pdERyYWZ0RWxlbWVudChhZGRpdGlvbmFsRmllbGRzKTtcclxuICAgIGF3YWl0IHRoaXMuZGJTZXJ2aWNlLnNhdmVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19