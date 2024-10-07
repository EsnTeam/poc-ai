import { Injectable } from '@angular/core';
import { EsnUtils } from '../../utils';
import * as i0 from "@angular/core";
import * as i1 from "../global-configuration";
export class EsnElementDatabaseService {
    constructor(idbService) {
        this.idbService = idbService;
    }
    async getAllElements() {
        return await this._fetchOrCreateElements(10);
    }
    async getElementById(id) {
        const elements = await this._fetchOrCreateElements(10);
        return elements.find((req) => req[this.idName] === id);
    }
    async getFirstThatExists(ids) {
        const elements = await this._fetchOrCreateElements(10);
        let el;
        for (let id of ids) {
            el = elements.find((req) => req[this.idName] === id);
            if (el) {
                return el;
            }
        }
        return el;
    }
    async getElements(ids) {
        const elements = await this._fetchOrCreateElements(10);
        return ids.map((id) => elements.find((req) => req[this.idName] === id));
    }
    async saveElement(element) {
        !!this.elements || (await this._fetchElements());
        this._updateOrAdd(EsnUtils.cloneDeep(element));
        return await this._save();
    }
    async deleteElementById(id) {
        !!this.elements || (await this._fetchElements());
        this._delete(id);
        console.log('delete ' + id);
        await this._save();
    }
    async saveElements(elements) {
        !!this.elements || (await this._fetchElements());
        elements.forEach((req) => this._updateOrAdd(req));
        await this._save();
    }
    async _fetchElements() {
        this.elements = await this._fetchOrCreateElements(10);
    }
    async _save() {
        return await this._saveOrRetry(50);
    }
    _updateOrAdd(element) {
        const index = this.elements.findIndex((req) => req[this.idName] === element[this.idName]);
        if (index > -1) {
            this.elements.splice(index, 1, element);
        }
        else {
            this.elements.push(element);
        }
    }
    _delete(id) {
        const index = this.elements.findIndex((req) => req[this.idName] === id);
        if (index > -1) {
            this.elements.splice(index, 1);
        }
    }
    async _fetchOrCreateElements(retries) {
        if (retries < 0) {
            throw 'Failed to fetch elements';
        }
        const value = await this.idbService.getValueByKey(this.storeName, 'all', false);
        if (value !== undefined) {
            return value;
        }
        await this.idbService.setValueByKey(this.storeName, 'all', [], false);
        await EsnUtils.sleep(200);
        return await this._fetchOrCreateElements(retries - 1);
    }
    async _saveOrRetry(retries) {
        if (retries < 0) {
            throw 'Failed to save elements';
        }
        const value = await this.idbService.setValueByKey(this.storeName, 'all', this.elements, false);
        if (value === 'all') {
            return value;
        }
        await EsnUtils.sleep(200);
        return await this._saveOrRetry(retries - 1);
    }
}
EsnElementDatabaseService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnElementDatabaseService, deps: [{ token: i1.EsnDatabaseService }], target: i0.ɵɵFactoryTarget.Injectable });
EsnElementDatabaseService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnElementDatabaseService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnElementDatabaseService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.EsnDatabaseService }]; } });
export class EsnInMemoryDraftDbService extends EsnElementDatabaseService {
    constructor(inMemoryDbService) {
        super(inMemoryDbService);
        this.inMemoryDbService = inMemoryDbService;
        this.storeName = 'inMemoryDraft';
        this.idName = 'externalUuid';
    }
}
EsnInMemoryDraftDbService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnInMemoryDraftDbService, deps: [{ token: i1.EsnInMemoryDatabaseService }], target: i0.ɵɵFactoryTarget.Injectable });
EsnInMemoryDraftDbService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnInMemoryDraftDbService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnInMemoryDraftDbService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.EsnInMemoryDatabaseService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1kYXRhYmFzZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL3V0aWxzL3NlcnZpY2VzL2RyYWZ0cy9lbGVtZW50LWRhdGFiYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7QUFJdkMsTUFBTSxPQUFnQix5QkFBeUI7SUFPN0MsWUFDUyxVQUE4QjtRQUE5QixlQUFVLEdBQVYsVUFBVSxDQUFvQjtJQUNwQyxDQUFDO0lBRUcsS0FBSyxDQUFDLGNBQWM7UUFDekIsT0FBTyxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0sS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFVO1FBQ3BDLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sUUFBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU0sS0FBSyxDQUFDLGtCQUFrQixDQUFDLEdBQWE7UUFDM0MsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkQsSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLElBQUksRUFBRSxJQUFJLEdBQUcsRUFBRTtZQUNsQixFQUFFLEdBQUcsUUFBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFD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QUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7O3VIQWpIbUIseUJBQXlCOzJIQUF6Qix5QkFBeUI7NEZBQXpCLHlCQUF5QjtrQkFEOUMsVUFBVTs7QUF1SFgsTUFBTSxPQUFPLHlCQUEwQixTQUFRLHlCQUF5QjtJQUd0RSxZQUFtQixpQkFBNkM7UUFDOUQsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFEUCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTRCO1FBRnZELGNBQVMsR0FBVyxlQUFlLENBQUM7UUFDcEMsV0FBTSxHQUFXLGNBQWMsQ0FBQztJQUd6QyxDQUFDOzt1SEFMVSx5QkFBeUI7MkhBQXpCLHlCQUF5Qjs0RkFBekIseUJBQXlCO2tCQURyQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFc25VdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0IHsgRXNuRGF0YWJhc2VTZXJ2aWNlLCBFc25Jbk1lbW9yeURhdGFiYXNlU2VydmljZSB9IGZyb20gJy4uL2dsb2JhbC1jb25maWd1cmF0aW9uJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVzbkVsZW1lbnREYXRhYmFzZVNlcnZpY2Uge1xyXG4gIHB1YmxpYyBlbGVtZW50cz86IGFueVtdO1xyXG5cclxuICAvLyBUbyBvdmVycmlkZVxyXG4gIHB1YmxpYyBzdG9yZU5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgaWROYW1lOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGlkYlNlcnZpY2U6IEVzbkRhdGFiYXNlU2VydmljZSxcclxuICApIHt9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBnZXRBbGxFbGVtZW50cygpOiBQcm9taXNlPGFueVtdPiB7XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5fZmV0Y2hPckNyZWF0ZUVsZW1lbnRzKDEwKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBnZXRFbGVtZW50QnlJZChpZDogc3RyaW5nKTogUHJvbWlzZTxhbnkgfCB1bmRlZmluZWQ+IHtcclxuICAgIGNvbnN0IGVsZW1lbnRzID0gYXdhaXQgdGhpcy5fZmV0Y2hPckNyZWF0ZUVsZW1lbnRzKDEwKTtcclxuICAgIHJldHVybiBlbGVtZW50cyEuZmluZCgocmVxOiBhbnkpID0+IHJlcVt0aGlzLmlkTmFtZV0gPT09IGlkKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBnZXRGaXJzdFRoYXRFeGlzdHMoaWRzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55IHwgdW5kZWZpbmVkPiB7XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IGF3YWl0IHRoaXMuX2ZldGNoT3JDcmVhdGVFbGVtZW50cygxMCk7XHJcbiAgICBsZXQgZWw7XHJcbiAgICBmb3IgKGxldCBpZCBvZiBpZHMpIHtcclxuICAgICAgZWwgPSBlbGVtZW50cyEuZmluZCgocmVxOiBhbnkpID0+IHJlcVt0aGlzLmlkTmFtZV0gPT09IGlkKTtcclxuICAgICAgaWYgKGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZ2V0RWxlbWVudHMoaWRzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55IHwgdW5kZWZpbmVkPiB7XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IGF3YWl0IHRoaXMuX2ZldGNoT3JDcmVhdGVFbGVtZW50cygxMCk7XHJcbiAgICByZXR1cm4gaWRzLm1hcCgoaWQpID0+XHJcbiAgICAgIGVsZW1lbnRzIS5maW5kKChyZXE6IGFueSkgPT4gcmVxW3RoaXMuaWROYW1lXSA9PT0gaWQpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHNhdmVFbGVtZW50KGVsZW1lbnQ6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAhIXRoaXMuZWxlbWVudHMgfHwgKGF3YWl0IHRoaXMuX2ZldGNoRWxlbWVudHMoKSk7XHJcbiAgICB0aGlzLl91cGRhdGVPckFkZChFc25VdGlscy5jbG9uZURlZXAoZWxlbWVudCkpO1xyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuX3NhdmUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBkZWxldGVFbGVtZW50QnlJZChpZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAhIXRoaXMuZWxlbWVudHMgfHwgKGF3YWl0IHRoaXMuX2ZldGNoRWxlbWVudHMoKSk7XHJcbiAgICB0aGlzLl9kZWxldGUoaWQpO1xyXG4gICAgY29uc29sZS5sb2coJ2RlbGV0ZSAnICsgaWQpO1xyXG4gICAgYXdhaXQgdGhpcy5fc2F2ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHNhdmVFbGVtZW50cyhlbGVtZW50czogYW55W10pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICEhdGhpcy5lbGVtZW50cyB8fCAoYXdhaXQgdGhpcy5fZmV0Y2hFbGVtZW50cygpKTtcclxuICAgIGVsZW1lbnRzLmZvckVhY2goKHJlcSkgPT4gdGhpcy5fdXBkYXRlT3JBZGQocmVxKSk7XHJcbiAgICBhd2FpdCB0aGlzLl9zYXZlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgX2ZldGNoRWxlbWVudHMoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnRzID0gYXdhaXQgdGhpcy5fZmV0Y2hPckNyZWF0ZUVsZW1lbnRzKDEwKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBfc2F2ZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuX3NhdmVPclJldHJ5KDUwKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBfdXBkYXRlT3JBZGQoZWxlbWVudDogYW55KSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZWxlbWVudHMhLmZpbmRJbmRleChcclxuICAgICAgKHJlcSkgPT4gcmVxW3RoaXMuaWROYW1lXSA9PT0gZWxlbWVudFt0aGlzLmlkTmFtZV1cclxuICAgICk7XHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICB0aGlzLmVsZW1lbnRzIS5zcGxpY2UoaW5kZXgsIDEsIGVsZW1lbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbGVtZW50cyEucHVzaChlbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBfZGVsZXRlKGlkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5lbGVtZW50cyEuZmluZEluZGV4KChyZXEpID0+IHJlcVt0aGlzLmlkTmFtZV0gPT09IGlkKTtcclxuICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudHMhLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgX2ZldGNoT3JDcmVhdGVFbGVtZW50cyhyZXRyaWVzOiBudW1iZXIpOiBQcm9taXNlPGFueVtdPiB7XHJcbiAgICBpZiAocmV0cmllcyA8IDApIHtcclxuICAgICAgdGhyb3cgJ0ZhaWxlZCB0byBmZXRjaCBlbGVtZW50cyc7XHJcbiAgICB9XHJcbiAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHRoaXMuaWRiU2VydmljZS5nZXRWYWx1ZUJ5S2V5KHRoaXMuc3RvcmVOYW1lLCAnYWxsJywgZmFsc2UpO1xyXG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgdGhpcy5pZGJTZXJ2aWNlLnNldFZhbHVlQnlLZXkodGhpcy5zdG9yZU5hbWUsICdhbGwnLCBbXSwgZmFsc2UpO1xyXG4gICAgYXdhaXQgRXNuVXRpbHMuc2xlZXAoMjAwKTtcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLl9mZXRjaE9yQ3JlYXRlRWxlbWVudHMocmV0cmllcyAtIDEpO1xyXG4gIH1cclxuICBcclxuXHJcbiAgcHVibGljIGFzeW5jIF9zYXZlT3JSZXRyeShyZXRyaWVzOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgaWYgKHJldHJpZXMgPCAwKSB7XHJcbiAgICAgIHRocm93ICdGYWlsZWQgdG8gc2F2ZSBlbGVtZW50cyc7XHJcbiAgICB9XHJcbiAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHRoaXMuaWRiU2VydmljZS5zZXRWYWx1ZUJ5S2V5KFxyXG4gICAgICB0aGlzLnN0b3JlTmFtZSxcclxuICAgICAgJ2FsbCcsXHJcbiAgICAgIHRoaXMuZWxlbWVudHMsXHJcbiAgICAgIGZhbHNlXHJcbiAgICApO1xyXG4gICAgaWYgKHZhbHVlID09PSAnYWxsJykge1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBhd2FpdCBFc25VdGlscy5zbGVlcCgyMDApO1xyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuX3NhdmVPclJldHJ5KHJldHJpZXMgLSAxKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFc25Jbk1lbW9yeURyYWZ0RGJTZXJ2aWNlIGV4dGVuZHMgRXNuRWxlbWVudERhdGFiYXNlU2VydmljZSB7XHJcbiAgb3ZlcnJpZGUgc3RvcmVOYW1lOiBzdHJpbmcgPSAnaW5NZW1vcnlEcmFmdCc7XHJcbiAgb3ZlcnJpZGUgaWROYW1lOiBzdHJpbmcgPSAnZXh0ZXJuYWxVdWlkJztcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5NZW1vcnlEYlNlcnZpY2U6IEVzbkluTWVtb3J5RGF0YWJhc2VTZXJ2aWNlKXtcclxuICAgIHN1cGVyKGluTWVtb3J5RGJTZXJ2aWNlKVxyXG4gIH1cclxufSJdfQ==