import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export var EsnAsyncDataSourceType;
(function (EsnAsyncDataSourceType) {
    EsnAsyncDataSourceType["PROMISE"] = "PROMISE";
    EsnAsyncDataSourceType["OBSERVABLE"] = "OBSERVABLE";
})(EsnAsyncDataSourceType || (EsnAsyncDataSourceType = {}));
export class EsnAsyncDataSourceAdapter {
    constructor() {
        this.callReturnType = EsnAsyncDataSourceType.PROMISE;
        this.debounceTime = 150;
    }
    getResults(resp) {
        return [];
    }
    getTotalNbResults(resp) {
        return 0;
    }
    // Gets the error from a successful call to the function
    getError(resp) {
        return null;
    }
    // Gets the error thrown when a call fails
    processError(err) {
        return err;
    }
}
export class EsnAsyncDatasourceCallWrapperAdapter extends EsnAsyncDataSourceAdapter {
    getResults(resp) {
        return resp.resp?.results || [];
    }
    getTotalNbResults(resp) {
        return resp.resp?.totalNumberOfResults || 0;
    }
    getError(resp) {
        return resp.error;
    }
    processError(err) {
        return { message: 'Une erreur est survenue.' };
    }
}
EsnAsyncDatasourceCallWrapperAdapter.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAsyncDatasourceCallWrapperAdapter, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
EsnAsyncDatasourceCallWrapperAdapter.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAsyncDatasourceCallWrapperAdapter });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAsyncDatasourceCallWrapperAdapter, decorators: [{
            type: Injectable
        }] });
export class EsnAsyncDatasourceApiResponseAdapter extends EsnAsyncDataSourceAdapter {
    constructor() {
        super(...arguments);
        this.callReturnType = EsnAsyncDataSourceType.OBSERVABLE;
    }
    getResults(resp) {
        return resp.content.results;
    }
    getTotalNbResults(resp) {
        return resp.content.totalNumberOfResults;
    }
    processError(err) {
        // Maybe transform the error like the apiCallWrapper does here ?
        return err;
    }
}
EsnAsyncDatasourceApiResponseAdapter.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAsyncDatasourceApiResponseAdapter, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
EsnAsyncDatasourceApiResponseAdapter.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAsyncDatasourceApiResponseAdapter });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAsyncDatasourceApiResponseAdapter, decorators: [{
            type: Injectable
        }] });
export const ESN_ASYNC_DATASOURCE_DEFAULT_ADAPTER = EsnAsyncDatasourceCallWrapperAdapter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNuQXN5bmNUYWJsZUFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS9hc3luYy10YWJsZS9lc25Bc3luY1RhYmxlQWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQyxNQUFNLENBQU4sSUFBWSxzQkFHWDtBQUhELFdBQVksc0JBQXNCO0lBQ2hDLDZDQUFtQixDQUFBO0lBQ25CLG1EQUF5QixDQUFBO0FBQzNCLENBQUMsRUFIVyxzQkFBc0IsS0FBdEIsc0JBQXNCLFFBR2pDO0FBRUQsTUFBTSxPQUFnQix5QkFBeUI7SUFBL0M7UUFDRSxtQkFBYyxHQUEyQixzQkFBc0IsQ0FBQyxPQUFPLENBQUM7UUFDeEUsaUJBQVksR0FBVyxHQUFHLENBQUM7SUFtQjdCLENBQUM7SUFqQkMsVUFBVSxDQUFDLElBQVM7UUFDbEIsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsaUJBQWlCLENBQUMsSUFBUztRQUN6QixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCx3REFBd0Q7SUFDeEQsUUFBUSxDQUFDLElBQVM7UUFDaEIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsMENBQTBDO0lBQzFDLFlBQVksQ0FBQyxHQUFRO1FBQ25CLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztDQUNGO0FBR0QsTUFBTSxPQUFPLG9DQUFxQyxTQUFRLHlCQUF5QjtJQUN4RSxVQUFVLENBQUMsSUFBUztRQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRVEsaUJBQWlCLENBQUMsSUFBUztRQUNsQyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFUSxRQUFRLENBQUMsSUFBUztRQUN6QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVRLFlBQVksQ0FBQyxHQUFRO1FBQzVCLE9BQU8sRUFBRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsQ0FBQztJQUNqRCxDQUFDOztrSUFmVSxvQ0FBb0M7c0lBQXBDLG9DQUFvQzs0RkFBcEMsb0NBQW9DO2tCQURoRCxVQUFVOztBQW9CWCxNQUFNLE9BQU8sb0NBQXFDLFNBQVEseUJBQXlCO0lBRG5GOztRQUVXLG1CQUFjLEdBQUcsc0JBQXNCLENBQUMsVUFBVSxDQUFDO0tBYzdEO0lBWlUsVUFBVSxDQUFDLElBQVM7UUFDM0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUM5QixDQUFDO0lBRVEsaUJBQWlCLENBQUMsSUFBUztRQUNsQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUM7SUFDM0MsQ0FBQztJQUVRLFlBQVksQ0FBQyxHQUFRO1FBQzVCLGdFQUFnRTtRQUNoRSxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O2tJQWRVLG9DQUFvQztzSUFBcEMsb0NBQW9DOzRGQUFwQyxvQ0FBb0M7a0JBRGhELFVBQVU7O0FBa0JYLE1BQU0sQ0FBQyxNQUFNLG9DQUFvQyxHQUMvQyxvQ0FBb0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBlbnVtIEVzbkFzeW5jRGF0YVNvdXJjZVR5cGUge1xyXG4gIFBST01JU0UgPSAnUFJPTUlTRScsXHJcbiAgT0JTRVJWQUJMRSA9ICdPQlNFUlZBQkxFJyxcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVzbkFzeW5jRGF0YVNvdXJjZUFkYXB0ZXIge1xyXG4gIGNhbGxSZXR1cm5UeXBlOiBFc25Bc3luY0RhdGFTb3VyY2VUeXBlID0gRXNuQXN5bmNEYXRhU291cmNlVHlwZS5QUk9NSVNFO1xyXG4gIGRlYm91bmNlVGltZTogbnVtYmVyID0gMTUwO1xyXG5cclxuICBnZXRSZXN1bHRzKHJlc3A6IGFueSk6IGFueVtdIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIGdldFRvdGFsTmJSZXN1bHRzKHJlc3A6IGFueSkge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICAvLyBHZXRzIHRoZSBlcnJvciBmcm9tIGEgc3VjY2Vzc2Z1bCBjYWxsIHRvIHRoZSBmdW5jdGlvblxyXG4gIGdldEVycm9yKHJlc3A6IGFueSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyBHZXRzIHRoZSBlcnJvciB0aHJvd24gd2hlbiBhIGNhbGwgZmFpbHNcclxuICBwcm9jZXNzRXJyb3IoZXJyOiBhbnkpIHtcclxuICAgIHJldHVybiBlcnI7XHJcbiAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFc25Bc3luY0RhdGFzb3VyY2VDYWxsV3JhcHBlckFkYXB0ZXIgZXh0ZW5kcyBFc25Bc3luY0RhdGFTb3VyY2VBZGFwdGVyIHtcclxuICBvdmVycmlkZSBnZXRSZXN1bHRzKHJlc3A6IGFueSkge1xyXG4gICAgcmV0dXJuIHJlc3AucmVzcD8ucmVzdWx0cyB8fCBbXTtcclxuICB9XHJcblxyXG4gIG92ZXJyaWRlIGdldFRvdGFsTmJSZXN1bHRzKHJlc3A6IGFueSkge1xyXG4gICAgcmV0dXJuIHJlc3AucmVzcD8udG90YWxOdW1iZXJPZlJlc3VsdHMgfHwgMDtcclxuICB9XHJcblxyXG4gIG92ZXJyaWRlIGdldEVycm9yKHJlc3A6IGFueSkge1xyXG4gICAgcmV0dXJuIHJlc3AuZXJyb3I7XHJcbiAgfVxyXG5cclxuICBvdmVycmlkZSBwcm9jZXNzRXJyb3IoZXJyOiBhbnkpIHtcclxuICAgIHJldHVybiB7IG1lc3NhZ2U6ICdVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZS4nIH07XHJcbiAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFc25Bc3luY0RhdGFzb3VyY2VBcGlSZXNwb25zZUFkYXB0ZXIgZXh0ZW5kcyBFc25Bc3luY0RhdGFTb3VyY2VBZGFwdGVyIHtcclxuICBvdmVycmlkZSBjYWxsUmV0dXJuVHlwZSA9IEVzbkFzeW5jRGF0YVNvdXJjZVR5cGUuT0JTRVJWQUJMRTtcclxuXHJcbiAgb3ZlcnJpZGUgZ2V0UmVzdWx0cyhyZXNwOiBhbnkpIHtcclxuICAgIHJldHVybiByZXNwLmNvbnRlbnQucmVzdWx0cztcclxuICB9XHJcblxyXG4gIG92ZXJyaWRlIGdldFRvdGFsTmJSZXN1bHRzKHJlc3A6IGFueSkge1xyXG4gICAgcmV0dXJuIHJlc3AuY29udGVudC50b3RhbE51bWJlck9mUmVzdWx0cztcclxuICB9XHJcblxyXG4gIG92ZXJyaWRlIHByb2Nlc3NFcnJvcihlcnI6IGFueSkge1xyXG4gICAgLy8gTWF5YmUgdHJhbnNmb3JtIHRoZSBlcnJvciBsaWtlIHRoZSBhcGlDYWxsV3JhcHBlciBkb2VzIGhlcmUgP1xyXG4gICAgcmV0dXJuIGVycjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFU05fQVNZTkNfREFUQVNPVVJDRV9ERUZBVUxUX0FEQVBURVIgPVxyXG4gIEVzbkFzeW5jRGF0YXNvdXJjZUNhbGxXcmFwcGVyQWRhcHRlcjtcclxuIl19