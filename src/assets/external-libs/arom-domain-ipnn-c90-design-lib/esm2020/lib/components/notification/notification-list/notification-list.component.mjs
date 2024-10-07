import { Component, Input, } from '@angular/core';
import { EsnUtils, } from '../../../utils/public-api';
import { BehaviorSubject, Subscription, filter } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../notifications.service";
import * as i2 from "@angular/common";
import * as i3 from "../../infinite-scroll/infinite-scroll.component";
import * as i4 from "../../async-content-wrapper/async-content-wrapper.component";
import * as i5 from "../../divider/divider.component";
import * as i6 from "../notification.component";
export class EsnNotificationList {
    constructor(notificationsService) {
        this.notificationsService = notificationsService;
        this.refreshSubject$ = new BehaviorSubject(false);
        this.notifications = [];
        this.loading = true;
        this.searchText = '';
        this.totalNumberOfResults = 0;
        this.refreshElementsSubject = new BehaviorSubject(null);
        this.initialized = false;
        this.refreshId = '';
        this.subs = new Subscription();
    }
    ngOnInit() {
        this.callFunc = (a, b) => this.retreiveElms(a, b);
        this.subs.add(this.refreshSubject$
            .pipe(filter((x) => x))
            .subscribe(() => this.onRefresh()));
        this.subs.add(this.markAllAsReadSubject$
            .pipe(filter((x) => x))
            .subscribe(() => this.notifications.map((n) => (n.isRead = true))));
    }
    async retreiveElms(page, size) {
        this.loading = true;
        const id = this.refreshId;
        const callWrapper = await this.notificationsService.getNotifications(page, size, this.notificationsService.getNotificationTags(), !!this.unread ? false : undefined, this.dateBefore, this.dateAfter, this.criticality);
        if (this.refreshId != id) {
            return;
        }
        this.errorDisplay = callWrapper.error;
        if (!!callWrapper.resp) {
            const response = callWrapper.resp;
            this.loading = false;
            this.totalNumberOfResults = response.totalNumberOfResults;
            if (!this.unread) {
                this.notificationsService.setTotal(response.totalNumberOfResults);
            }
            if (!!response.results?.length) {
                this.notificationsService.updateLastReveivedSendDate(response.results[0].sendDate);
                if (page == 0) {
                    this.notificationsService.markAllAsViewed();
                }
            }
            return response.results;
        }
        this.loading = false;
        this.totalNumberOfResults = 0;
        return [];
    }
    onElmsUpdated(elms) {
        this.notifications = elms;
    }
    onRefresh() {
        this.refreshId = EsnUtils.generateRandomUuid();
        this.initialized = true;
        this.refreshElementsSubject.next(null);
    }
    onNotificationClick(notification) {
        if (!notification.isRead) {
            this.notificationsService.markAsRead(notification.notificationId);
            notification.isRead = true;
        }
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
EsnNotificationList.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnNotificationList, deps: [{ token: i1.EsnNotificationsService }], target: i0.ɵɵFactoryTarget.Component });
EsnNotificationList.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnNotificationList, selector: "esn-notification-list", inputs: { refreshSubject$: "refreshSubject$", scrollElement: "scrollElement", markAllAsReadSubject$: "markAllAsReadSubject$", unread: "unread", dateBefore: "dateBefore", dateAfter: "dateAfter", criticality: "criticality" }, host: { classAttribute: "esn-notification-list" }, ngImport: i0, template: "<esn-infinite-scroll\r\n  *ngIf=\"initialized\"\r\n  (elmsUpdated)=\"onElmsUpdated($event)\"\r\n  [callFunc]=\"callFunc!\"\r\n  [pageSize]=\"10\"\r\n  [refreshElementsSubject]=\"refreshElementsSubject\"\r\n  [scrollElement]=\"scrollElement\"\r\n  [totalNumberOfResults]=\"totalNumberOfResults\"\r\n>\r\n  <esn-async-content-wrapper\r\n    (errorActionClick)=\"onRefresh()\"\r\n    emptyStateText=\"Aucune notification\"\r\n    [errorDisplay]=\"errorDisplay\"\r\n    errorText=\"Impossible de r\u00E9cup\u00E9rer les notifications\"\r\n    [isEmpty]=\"!(notifications || []).length\"\r\n    [isLoading]=\"loading && !(notifications || []).length\"\r\n  >\r\n    <ng-container *ngFor=\"let notification of notifications\">\r\n      <esn-notification [notification]=\"notification\" (actionClick)=\"onNotificationClick(notification)\"></esn-notification>\r\n      <esn-divider></esn-divider>\r\n    </ng-container>\r\n  </esn-async-content-wrapper>\r\n</esn-infinite-scroll>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.EsnInfiniteScroll, selector: "esn-infinite-scroll", inputs: ["callFunc", "totalNumberOfResults", "scrollElement", "refreshElementsSubject", "pageSize", "showLoaderOnRefresh"], outputs: ["elmsUpdated"] }, { kind: "component", type: i4.EsnAsyncContentWrapper, selector: "esn-async-content-wrapper", inputs: ["isLoading", "errorDisplay", "isEmpty", "emptyStateText", "errorText", "errorActionText"], outputs: ["errorActionClick", "contentDisplayed"] }, { kind: "component", type: i5.EsnDivider, selector: "esn-divider", inputs: ["vertical", "inset"] }, { kind: "component", type: i6.EsnNotification, selector: "esn-notification", inputs: ["notification"], outputs: ["actionClick"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnNotificationList, decorators: [{
            type: Component,
            args: [{ selector: 'esn-notification-list', host: {
                        class: 'esn-notification-list',
                    }, template: "<esn-infinite-scroll\r\n  *ngIf=\"initialized\"\r\n  (elmsUpdated)=\"onElmsUpdated($event)\"\r\n  [callFunc]=\"callFunc!\"\r\n  [pageSize]=\"10\"\r\n  [refreshElementsSubject]=\"refreshElementsSubject\"\r\n  [scrollElement]=\"scrollElement\"\r\n  [totalNumberOfResults]=\"totalNumberOfResults\"\r\n>\r\n  <esn-async-content-wrapper\r\n    (errorActionClick)=\"onRefresh()\"\r\n    emptyStateText=\"Aucune notification\"\r\n    [errorDisplay]=\"errorDisplay\"\r\n    errorText=\"Impossible de r\u00E9cup\u00E9rer les notifications\"\r\n    [isEmpty]=\"!(notifications || []).length\"\r\n    [isLoading]=\"loading && !(notifications || []).length\"\r\n  >\r\n    <ng-container *ngFor=\"let notification of notifications\">\r\n      <esn-notification [notification]=\"notification\" (actionClick)=\"onNotificationClick(notification)\"></esn-notification>\r\n      <esn-divider></esn-divider>\r\n    </ng-container>\r\n  </esn-async-content-wrapper>\r\n</esn-infinite-scroll>\r\n" }]
        }], ctorParameters: function () { return [{ type: i1.EsnNotificationsService }]; }, propDecorators: { refreshSubject$: [{
                type: Input
            }], scrollElement: [{
                type: Input
            }], markAllAsReadSubject$: [{
                type: Input
            }], unread: [{
                type: Input
            }], dateBefore: [{
                type: Input
            }], dateAfter: [{
                type: Input
            }], criticality: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi1saXN0L25vdGlmaWNhdGlvbi1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24tbGlzdC9ub3RpZmljYXRpb24tbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUdULEtBQUssR0FJTixNQUFNLGVBQWUsQ0FBQztBQVV2QixPQUFPLEVBR0wsUUFBUSxHQUVULE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFPLE1BQU0sTUFBTSxDQUFDOzs7Ozs7OztBQVdsRSxNQUFNLE9BQU8sbUJBQW1CO0lBd0I5QixZQUNTLG9CQUE2QztRQUE3Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXlCO1FBeEI3QyxvQkFBZSxHQUN0QixJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQU8vQixrQkFBYSxHQUEyQixFQUFFLENBQUM7UUFDM0MsWUFBTyxHQUFHLElBQUksQ0FBQztRQUVmLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIseUJBQW9CLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLDJCQUFzQixHQUMzQixJQUFJLGVBQWUsQ0FBTyxJQUFJLENBQUMsQ0FBQztRQUszQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLFNBQUks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LFNBQVM7UUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLG1CQUFtQixDQUFDLFlBQWtDO1FBQzNELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2xFLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzFCLENBQUM7O2lIQXpHVSxtQkFBbUI7cUdBQW5CLG1CQUFtQixnVkNwQ2hDLGk5QkF1QkE7NEZEYWEsbUJBQW1CO2tCQVIvQixTQUFTOytCQUNFLHVCQUF1QixRQUczQjt3QkFDSixLQUFLLEVBQUUsdUJBQXVCO3FCQUMvQjs4R0FHUSxlQUFlO3NCQUF2QixLQUFLO2dCQUVHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0cscUJBQXFCO3NCQUE3QixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBhbmltYXRlLFxyXG4gIHN0YXRlLFxyXG4gIHN0eWxlLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgdHJpZ2dlcixcclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgRXNuTm90aWZpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICcuLi9ub3RpZmljYXRpb25zLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFc25Ob3RpZmljYXRpb25Nb2RlbCB9IGZyb20gJy4uL21vZGVsL25vdGlmaWNhdGlvbic7XHJcbmltcG9ydCB7XHJcbiAgQXBpQ2FsbFdyYXBwZXIsXHJcbiAgQXBpRXJyb3JEaXNwbGF5LFxyXG4gIEVzblV0aWxzLFxyXG4gIExpc3RXcmFwcGVyRHRvLFxyXG59IGZyb20gJy4uLy4uLy4uL3V0aWxzL3B1YmxpYy1hcGknO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YnNjcmlwdGlvbiwgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTk9USUZJQ0FUSU9OX1RBR1MgfSBmcm9tICcuLi9ub3RpZmljYXRpb24tY29uZmlndXJhdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Vzbi1ub3RpZmljYXRpb24tbGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25vdGlmaWNhdGlvbi1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ub3RpZmljYXRpb24tbGlzdC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnZXNuLW5vdGlmaWNhdGlvbi1saXN0JyxcclxuICB9LFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuTm90aWZpY2F0aW9uTGlzdCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSByZWZyZXNoU3ViamVjdCQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9XHJcbiAgICBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuICBASW5wdXQoKSBzY3JvbGxFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBASW5wdXQoKSBtYXJrQWxsQXNSZWFkU3ViamVjdCQ6IEJlaGF2aW9yU3ViamVjdDxhbnk+O1xyXG4gIEBJbnB1dCgpIHVucmVhZD86IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZGF0ZUJlZm9yZT86IERhdGU7XHJcbiAgQElucHV0KCkgZGF0ZUFmdGVyPzogRGF0ZTtcclxuICBASW5wdXQoKSBjcml0aWNhbGl0eT86IHN0cmluZztcclxuICBwdWJsaWMgbm90aWZpY2F0aW9uczogRXNuTm90aWZpY2F0aW9uTW9kZWxbXSA9IFtdO1xyXG4gIHB1YmxpYyBsb2FkaW5nID0gdHJ1ZTtcclxuICBwdWJsaWMgZXJyb3JEaXNwbGF5PzogQXBpRXJyb3JEaXNwbGF5O1xyXG4gIHB1YmxpYyBzZWFyY2hUZXh0ID0gJyc7XHJcbiAgcHVibGljIHRvdGFsTnVtYmVyT2ZSZXN1bHRzID0gMDtcclxuICBwdWJsaWMgcmVmcmVzaEVsZW1lbnRzU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PG51bGw+ID1cclxuICAgIG5ldyBCZWhhdmlvclN1YmplY3Q8bnVsbD4obnVsbCk7XHJcbiAgcHVibGljIGNhbGxGdW5jPzogKFxyXG4gICAgcGFnZTogbnVtYmVyLFxyXG4gICAgcGFnZVNpemU6IG51bWJlclxyXG4gICkgPT4gUHJvbWlzZTxFc25Ob3RpZmljYXRpb25Nb2RlbFtdPjtcclxuICBwdWJsaWMgaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgcmVmcmVzaElkOiBzdHJpbmcgPSAnJztcclxuICBwdWJsaWMgc3ViczogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBub3RpZmljYXRpb25zU2VydmljZTogRXNuTm90aWZpY2F0aW9uc1NlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jYWxsRnVuYyA9IChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gdGhpcy5yZXRyZWl2ZUVsbXMoYSwgYik7XHJcbiAgICB0aGlzLnN1YnMuYWRkKFxyXG4gICAgICB0aGlzLnJlZnJlc2hTdWJqZWN0JFxyXG4gICAgICAgIC5waXBlKGZpbHRlcigoeDogYm9vbGVhbikgPT4geCkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUmVmcmVzaCgpKVxyXG4gICAgKTtcclxuICAgIHRoaXMuc3Vicy5hZGQoXHJcbiAgICAgIHRoaXMubWFya0FsbEFzUmVhZFN1YmplY3QkXHJcbiAgICAgICAgLnBpcGUoZmlsdGVyKCh4OiBib29sZWFuKSA9PiB4KSlcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMubm90aWZpY2F0aW9ucy5tYXAoKG4pID0+IChuLmlzUmVhZCA9IHRydWUpKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgcmV0cmVpdmVFbG1zKHBhZ2U6IG51bWJlciwgc2l6ZTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICBjb25zdCBpZCA9IHRoaXMucmVmcmVzaElkO1xyXG4gICAgY29uc3QgY2FsbFdyYXBwZXI6IEFwaUNhbGxXcmFwcGVyID1cclxuICAgICAgYXdhaXQgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5nZXROb3RpZmljYXRpb25zKFxyXG4gICAgICAgIHBhZ2UsXHJcbiAgICAgICAgc2l6ZSxcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmdldE5vdGlmaWNhdGlvblRhZ3MoKSxcclxuICAgICAgICAhIXRoaXMudW5yZWFkID8gZmFsc2UgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgdGhpcy5kYXRlQmVmb3JlLFxyXG4gICAgICAgIHRoaXMuZGF0ZUFmdGVyLFxyXG4gICAgICAgIHRoaXMuY3JpdGljYWxpdHlcclxuICAgICAgKTtcclxuICAgIGlmICh0aGlzLnJlZnJlc2hJZCAhPSBpZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lcnJvckRpc3BsYXkgPSBjYWxsV3JhcHBlci5lcnJvcjtcclxuICAgIGlmICghIWNhbGxXcmFwcGVyLnJlc3ApIHtcclxuICAgICAgY29uc3QgcmVzcG9uc2U6IExpc3RXcmFwcGVyRHRvPEVzbk5vdGlmaWNhdGlvbk1vZGVsPiA9IGNhbGxXcmFwcGVyLnJlc3A7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnRvdGFsTnVtYmVyT2ZSZXN1bHRzID0gcmVzcG9uc2UudG90YWxOdW1iZXJPZlJlc3VsdHMhO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLnVucmVhZCkge1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2Uuc2V0VG90YWwocmVzcG9uc2UudG90YWxOdW1iZXJPZlJlc3VsdHMhKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCEhcmVzcG9uc2UucmVzdWx0cz8ubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS51cGRhdGVMYXN0UmV2ZWl2ZWRTZW5kRGF0ZShcclxuICAgICAgICAgIHJlc3BvbnNlLnJlc3VsdHNbMF0uc2VuZERhdGUhXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKHBhZ2UgPT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5tYXJrQWxsQXNWaWV3ZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXNwb25zZS5yZXN1bHRzO1xyXG4gICAgfVxyXG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLnRvdGFsTnVtYmVyT2ZSZXN1bHRzID0gMDtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkVsbXNVcGRhdGVkKGVsbXM6IEVzbk5vdGlmaWNhdGlvbk1vZGVsW10pIHtcclxuICAgIHRoaXMubm90aWZpY2F0aW9ucyA9IGVsbXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25SZWZyZXNoKCkge1xyXG4gICAgdGhpcy5yZWZyZXNoSWQgPSBFc25VdGlscy5nZW5lcmF0ZVJhbmRvbVV1aWQoKTtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5yZWZyZXNoRWxlbWVudHNTdWJqZWN0Lm5leHQobnVsbCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25Ob3RpZmljYXRpb25DbGljayhub3RpZmljYXRpb246IEVzbk5vdGlmaWNhdGlvbk1vZGVsKSB7XHJcbiAgICBpZiAoIW5vdGlmaWNhdGlvbi5pc1JlYWQpIHtcclxuICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5tYXJrQXNSZWFkKG5vdGlmaWNhdGlvbi5ub3RpZmljYXRpb25JZCk7XHJcbiAgICAgIG5vdGlmaWNhdGlvbi5pc1JlYWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnN1YnMudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIiwiPGVzbi1pbmZpbml0ZS1zY3JvbGxcclxuICAqbmdJZj1cImluaXRpYWxpemVkXCJcclxuICAoZWxtc1VwZGF0ZWQpPVwib25FbG1zVXBkYXRlZCgkZXZlbnQpXCJcclxuICBbY2FsbEZ1bmNdPVwiY2FsbEZ1bmMhXCJcclxuICBbcGFnZVNpemVdPVwiMTBcIlxyXG4gIFtyZWZyZXNoRWxlbWVudHNTdWJqZWN0XT1cInJlZnJlc2hFbGVtZW50c1N1YmplY3RcIlxyXG4gIFtzY3JvbGxFbGVtZW50XT1cInNjcm9sbEVsZW1lbnRcIlxyXG4gIFt0b3RhbE51bWJlck9mUmVzdWx0c109XCJ0b3RhbE51bWJlck9mUmVzdWx0c1wiXHJcbj5cclxuICA8ZXNuLWFzeW5jLWNvbnRlbnQtd3JhcHBlclxyXG4gICAgKGVycm9yQWN0aW9uQ2xpY2spPVwib25SZWZyZXNoKClcIlxyXG4gICAgZW1wdHlTdGF0ZVRleHQ9XCJBdWN1bmUgbm90aWZpY2F0aW9uXCJcclxuICAgIFtlcnJvckRpc3BsYXldPVwiZXJyb3JEaXNwbGF5XCJcclxuICAgIGVycm9yVGV4dD1cIkltcG9zc2libGUgZGUgcsOpY3Vww6lyZXIgbGVzIG5vdGlmaWNhdGlvbnNcIlxyXG4gICAgW2lzRW1wdHldPVwiIShub3RpZmljYXRpb25zIHx8IFtdKS5sZW5ndGhcIlxyXG4gICAgW2lzTG9hZGluZ109XCJsb2FkaW5nICYmICEobm90aWZpY2F0aW9ucyB8fCBbXSkubGVuZ3RoXCJcclxuICA+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBub3RpZmljYXRpb24gb2Ygbm90aWZpY2F0aW9uc1wiPlxyXG4gICAgICA8ZXNuLW5vdGlmaWNhdGlvbiBbbm90aWZpY2F0aW9uXT1cIm5vdGlmaWNhdGlvblwiIChhY3Rpb25DbGljayk9XCJvbk5vdGlmaWNhdGlvbkNsaWNrKG5vdGlmaWNhdGlvbilcIj48L2Vzbi1ub3RpZmljYXRpb24+XHJcbiAgICAgIDxlc24tZGl2aWRlcj48L2Vzbi1kaXZpZGVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9lc24tYXN5bmMtY29udGVudC13cmFwcGVyPlxyXG48L2Vzbi1pbmZpbml0ZS1zY3JvbGw+XHJcbiJdfQ==