import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NOTIFICATION_TAGS } from './notification-configuration';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/public-api";
import * as i2 from "./notifications-controller.service";
import * as i3 from "./notification-processing.service";
export class EsnNotificationsService {
    constructor(callWrapper, controller, tags, processingService) {
        this.callWrapper = callWrapper;
        this.controller = controller;
        this.tags = tags;
        this.processingService = processingService;
        this.nbUnread$ = new BehaviorSubject(0);
        this.nbNotViewed$ = new BehaviorSubject(0);
        this.nbTotal$ = new BehaviorSubject(0);
    }
    getNotificationTags() {
        try {
            return this.processingService.getNotificationTags();
        }
        catch (err) {
            return this.tags;
        }
    }
    setUnread(nbUnread) {
        this.nbUnread$.next(nbUnread);
    }
    getUnread() {
        return this.nbUnread$.asObservable();
    }
    setNotViewed(nbNotViewed) {
        this.nbNotViewed$.next(nbNotViewed);
    }
    getNotViewed() {
        return this.nbNotViewed$.asObservable();
    }
    setTotal(nbTotal) {
        this.nbTotal$.next(nbTotal);
    }
    getTotal() {
        return this.nbTotal$.asObservable();
    }
    async markAllAsRead() {
        if (!this.lastReceivedSendDate) {
            return;
        }
        await this.callWrapper.makeApiCall(this.controller.doActionOnNotification('READ', this.getNotificationTags(), this.lastReceivedSendDate.toISOString()));
        this.refreshUnreadAndNotViewed();
    }
    async markAllAsViewed() {
        if (!this.lastReceivedSendDate) {
            return;
        }
        await this.callWrapper.makeApiCall(this.controller.doActionOnNotification('VIEWED', this.getNotificationTags(), this.lastReceivedSendDate.toISOString()));
        this.refreshUnreadAndNotViewed();
    }
    async markAsRead(notificationId) {
        await this.callWrapper.makeApiCall(this.controller.markNotificationAsRead(notificationId));
        this.refreshUnreadAndNotViewed();
    }
    async refreshUnreadAndNotViewed() {
        const resp = await this.getCount(this.getNotificationTags());
        if (!resp.error) {
            this.nbUnread$.next(resp.resp.totalNumberOfNotRead);
            this.nbNotViewed$.next(resp.resp.totalNumberOfNotDisplayed);
        }
    }
    getNotifications(page, size, tags, read, dateBefore, dateAfter, criticality) {
        return this.callWrapper.makeApiCall(this.controller.getNotifications(page, size, tags, read, dateBefore, dateAfter, criticality), {
            callLabel: 'récupération des notifications',
            notifyError: false,
        });
    }
    getCount(tags) {
        return this.callWrapper.makeApiCall(this.controller.getCounters(tags), {
            notifyError: false,
        });
    }
    updateLastReveivedSendDate(date) {
        if (!this.lastReceivedSendDate ||
            this.lastReceivedSendDate.getTime() < new Date(date).getTime()) {
            this.lastReceivedSendDate = new Date(new Date(date).getTime() + 1);
        }
    }
}
EsnNotificationsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnNotificationsService, deps: [{ token: i1.EsnApiCallWrapper }, { token: i2.EsnNotificationsController }, { token: NOTIFICATION_TAGS }, { token: i3.EsnNotificationProcessingService, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
EsnNotificationsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnNotificationsService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnNotificationsService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.EsnApiCallWrapper }, { type: i2.EsnNotificationsController }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NOTIFICATION_TAGS]
                }] }, { type: i3.EsnNotificationProcessingService, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7QUFJakUsTUFBTSxPQUFPLHVCQUF1QjtJQU1sQyxZQUNTLFdBQThCLEVBQzlCLFVBQXNDLEVBQ1gsSUFBWSxFQUMzQixpQkFBbUQ7UUFIL0QsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQzlCLGVBQVUsR0FBVixVQUFVLENBQTRCO1FBQ1gsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUMzQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtDO1FBVGpFLGNBQVMsR0FBNEIsSUFBSSxlQUFlLENBQVMsQ0FBQyxDQUFDLENBQUM7UUFDcEUsaUJBQVksR0FBNEIsSUFBSSxlQUFlLENBQVMsQ0FBQyxDQUFDLENBQUM7UUFDdkUsYUFBUSxHQUE0QixJQUFJLGVBQWUsQ0FBUyxDQUFDLENBQUMsQ0FBQztJQVF2RSxDQUFDO0lBRUcsbUJBQW1CO1FBQ3hCLElBQUc7WUFDRCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQ3JEO1FBQUMsT0FBTSxHQUFHLEVBQUM7WUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEI7SUFDSCxDQUFDO0lBRU0sU0FBUyxDQUFDLFFBQWdCO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFB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Q0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDckUsV0FBVyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLDBCQUEwQixDQUFDLElBQW1CO1FBQ25ELElBQ0UsQ0FBQyxJQUFJLENBQUMsb0JBQW9CO1lBQzFCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFDOUQ7WUFDQSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDcEU7SUFDSCxDQUFDOztxSEEvSFUsdUJBQXVCLDZGQVN4QixpQkFBaUI7eUhBVGhCLHVCQUF1Qjs0RkFBdkIsdUJBQXVCO2tCQURuQyxVQUFVOzswQkFVTixNQUFNOzJCQUFDLGlCQUFpQjs7MEJBQ3hCLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFwaUNhbGxXcmFwcGVyLCBFc25BcGlDYWxsV3JhcHBlciB9IGZyb20gJy4uLy4uL3V0aWxzL3B1YmxpYy1hcGknO1xyXG5pbXBvcnQgeyBFc25Ob3RpZmljYXRpb25zQ29udHJvbGxlciB9IGZyb20gJy4vbm90aWZpY2F0aW9ucy1jb250cm9sbGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTk9USUZJQ0FUSU9OX1RBR1MgfSBmcm9tICcuL25vdGlmaWNhdGlvbi1jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgRXNuTm90aWZpY2F0aW9uUHJvY2Vzc2luZ1NlcnZpY2UgfSBmcm9tICcuL25vdGlmaWNhdGlvbi1wcm9jZXNzaW5nLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRXNuTm90aWZpY2F0aW9uc1NlcnZpY2Uge1xyXG4gIHB1YmxpYyBuYlVucmVhZCQ6IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KDApO1xyXG4gIHB1YmxpYyBuYk5vdFZpZXdlZCQ6IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KDApO1xyXG4gIHB1YmxpYyBuYlRvdGFsJDogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4oMCk7XHJcbiAgcHVibGljIGxhc3RSZWNlaXZlZFNlbmREYXRlOiBEYXRlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBjYWxsV3JhcHBlcjogRXNuQXBpQ2FsbFdyYXBwZXIsXHJcbiAgICBwdWJsaWMgY29udHJvbGxlcjogRXNuTm90aWZpY2F0aW9uc0NvbnRyb2xsZXIsXHJcbiAgICBASW5qZWN0KE5PVElGSUNBVElPTl9UQUdTKSBwdWJsaWMgdGFnczogc3RyaW5nLFxyXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHByb2Nlc3NpbmdTZXJ2aWNlOiBFc25Ob3RpZmljYXRpb25Qcm9jZXNzaW5nU2VydmljZSxcclxuICApIHt9XHJcblxyXG4gIHB1YmxpYyBnZXROb3RpZmljYXRpb25UYWdzKCl7XHJcbiAgICB0cnl7XHJcbiAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NpbmdTZXJ2aWNlLmdldE5vdGlmaWNhdGlvblRhZ3MoKTtcclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgcmV0dXJuIHRoaXMudGFncztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRVbnJlYWQobmJVbnJlYWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5uYlVucmVhZCQubmV4dChuYlVucmVhZCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VW5yZWFkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmJVbnJlYWQkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldE5vdFZpZXdlZChuYk5vdFZpZXdlZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm5iTm90Vmlld2VkJC5uZXh0KG5iTm90Vmlld2VkKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXROb3RWaWV3ZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYk5vdFZpZXdlZCQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0VG90YWwobmJUb3RhbDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm5iVG90YWwkLm5leHQobmJUb3RhbCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VG90YWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYlRvdGFsJC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBtYXJrQWxsQXNSZWFkKCkge1xyXG4gICAgaWYgKCF0aGlzLmxhc3RSZWNlaXZlZFNlbmREYXRlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGF3YWl0IHRoaXMuY2FsbFdyYXBwZXIubWFrZUFwaUNhbGwoXHJcbiAgICAgIHRoaXMuY29udHJvbGxlci5kb0FjdGlvbk9uTm90aWZpY2F0aW9uKFxyXG4gICAgICAgICdSRUFEJyxcclxuICAgICAgICB0aGlzLmdldE5vdGlmaWNhdGlvblRhZ3MoKSxcclxuICAgICAgICB0aGlzLmxhc3RSZWNlaXZlZFNlbmREYXRlLnRvSVNPU3RyaW5nKClcclxuICAgICAgKVxyXG4gICAgKTtcclxuICAgIHRoaXMucmVmcmVzaFVucmVhZEFuZE5vdFZpZXdlZCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIG1hcmtBbGxBc1ZpZXdlZCgpIHtcclxuICAgIGlmICghdGhpcy5sYXN0UmVjZWl2ZWRTZW5kRGF0ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBhd2FpdCB0aGlzLmNhbGxXcmFwcGVyLm1ha2VBcGlDYWxsKFxyXG4gICAgICB0aGlzLmNvbnRyb2xsZXIuZG9BY3Rpb25Pbk5vdGlmaWNhdGlvbihcclxuICAgICAgICAnVklFV0VEJyxcclxuICAgICAgICB0aGlzLmdldE5vdGlmaWNhdGlvblRhZ3MoKSxcclxuICAgICAgICB0aGlzLmxhc3RSZWNlaXZlZFNlbmREYXRlLnRvSVNPU3RyaW5nKClcclxuICAgICAgKVxyXG4gICAgKTtcclxuICAgIHRoaXMucmVmcmVzaFVucmVhZEFuZE5vdFZpZXdlZCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIG1hcmtBc1JlYWQobm90aWZpY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgYXdhaXQgdGhpcy5jYWxsV3JhcHBlci5tYWtlQXBpQ2FsbChcclxuICAgICAgdGhpcy5jb250cm9sbGVyLm1hcmtOb3RpZmljYXRpb25Bc1JlYWQobm90aWZpY2F0aW9uSWQpXHJcbiAgICApO1xyXG4gICAgdGhpcy5yZWZyZXNoVW5yZWFkQW5kTm90Vmlld2VkKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgcmVmcmVzaFVucmVhZEFuZE5vdFZpZXdlZCgpIHtcclxuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLmdldENvdW50KHRoaXMuZ2V0Tm90aWZpY2F0aW9uVGFncygpKTtcclxuICAgIGlmICghcmVzcC5lcnJvcikge1xyXG4gICAgICB0aGlzLm5iVW5yZWFkJC5uZXh0KHJlc3AucmVzcC50b3RhbE51bWJlck9mTm90UmVhZCk7XHJcbiAgICAgIHRoaXMubmJOb3RWaWV3ZWQkLm5leHQocmVzcC5yZXNwLnRvdGFsTnVtYmVyT2ZOb3REaXNwbGF5ZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE5vdGlmaWNhdGlvbnMoXHJcbiAgICBwYWdlPzogbnVtYmVyLFxyXG4gICAgc2l6ZT86IG51bWJlcixcclxuICAgIHRhZ3M/OiBzdHJpbmcsXHJcbiAgICByZWFkPzogYm9vbGVhbixcclxuICAgIGRhdGVCZWZvcmU/OiBEYXRlLFxyXG4gICAgZGF0ZUFmdGVyPzogRGF0ZSxcclxuICAgIGNyaXRpY2FsaXR5Pzogc3RyaW5nXHJcbiAgKTogUHJvbWlzZTxBcGlDYWxsV3JhcHBlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FsbFdyYXBwZXIubWFrZUFwaUNhbGwoXHJcbiAgICAgIHRoaXMuY29udHJvbGxlci5nZXROb3RpZmljYXRpb25zKFxyXG4gICAgICAgIHBhZ2UsXHJcbiAgICAgICAgc2l6ZSxcclxuICAgICAgICB0YWdzLFxyXG4gICAgICAgIHJlYWQsXHJcbiAgICAgICAgZGF0ZUJlZm9yZSxcclxuICAgICAgICBkYXRlQWZ0ZXIsXHJcbiAgICAgICAgY3JpdGljYWxpdHlcclxuICAgICAgKSxcclxuICAgICAge1xyXG4gICAgICAgIGNhbGxMYWJlbDogJ3LDqWN1cMOpcmF0aW9uIGRlcyBub3RpZmljYXRpb25zJyxcclxuICAgICAgICBub3RpZnlFcnJvcjogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q291bnQodGFnczogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jYWxsV3JhcHBlci5tYWtlQXBpQ2FsbCh0aGlzLmNvbnRyb2xsZXIuZ2V0Q291bnRlcnModGFncyksIHtcclxuICAgICAgbm90aWZ5RXJyb3I6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlTGFzdFJldmVpdmVkU2VuZERhdGUoZGF0ZTogc3RyaW5nIHwgRGF0ZSkge1xyXG4gICAgaWYgKFxyXG4gICAgICAhdGhpcy5sYXN0UmVjZWl2ZWRTZW5kRGF0ZSB8fFxyXG4gICAgICB0aGlzLmxhc3RSZWNlaXZlZFNlbmREYXRlLmdldFRpbWUoKSA8IG5ldyBEYXRlKGRhdGUpLmdldFRpbWUoKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMubGFzdFJlY2VpdmVkU2VuZERhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZShkYXRlKS5nZXRUaW1lKCkgKyAxKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19