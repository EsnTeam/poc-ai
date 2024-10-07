import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { debounceTime, filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class EsnUploadStateService {
    constructor() {
        this.documentsUploadProgress$ = new BehaviorSubject(null);
        this.uploadOngoing$ = new BehaviorSubject(null);
        this.displayUpload$ = new BehaviorSubject(null);
    }
    ngOnInit() {
        this.uploadOngoing$
            .pipe(filter((x) => !!x))
            .subscribe(() => this.documentsUploadProgress$.next(null));
    }
    getDisplayUpload() {
        return this.displayUpload$.pipe(debounceTime(500));
    }
    getUploadOngoing() {
        return this.uploadOngoing$.pipe(debounceTime(500));
    }
    updateUploadProgress(uploadItems) {
        const uploads = uploadItems.reduce((acc, curr) => ({
            total: acc.total + curr.nbChunksTotal,
            remaining: acc.remaining + curr.nbChunksRemaining,
        }), { total: 0, remaining: 0 });
        this.documentsUploadProgress$.next(Math.floor(!uploads.remaining
            ? 100
            : ((uploads.total - uploads.remaining) * 100) / uploads.total));
    }
    uploadStarts(displayUpload) {
        this.uploadOngoing$.next(true);
        if (displayUpload) {
            this.displayUpload$.next(true);
        }
    }
    uploadEnds(hideUpload) {
        this.uploadOngoing$.next(false);
        if (hideUpload) {
            this.displayUpload$.next(false);
        }
    }
}
EsnUploadStateService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnUploadStateService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
EsnUploadStateService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnUploadStateService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnUploadStateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvdXRpbHMvc2VydmljZXMvZmlsZW1hbmFnZXIvdXBsb2FkLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFNdEQsTUFBTSxPQUFPLHFCQUFxQjtJQWFoQztRQVpPLDZCQUF3QixHQUM3QixJQUFJLGVBQWUsQ0FBZ0IsSUFBSSxDQUFDLENBQUM7UUFFcEMsbUJBQWMsR0FBb0MsSUFBSSxlQUFlLENBRTFFLElBQUksQ0FBQyxDQUFDO1FBRUQsbUJBQWMsR0FBb0MsSUFBSSxlQUFlLENBRTFFLElBQUksQ0FBQyxDQUFDO0lBR08sQ0FBQztJQUVoQixRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWM7YUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3hCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVNLGdCQUFnQjtRQUNyQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSxnQkFBZ0I7UUFDckIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0sb0JBQW9CLENBQUMsV0FBeUI7UUFDbkQsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FDaEMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2QsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWE7WUFDckMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQjtTQUNsRCxDQUFDLEVBQ0YsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FDM0IsQ0FBQztRQUVGLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQ2hDLElBQUksQ0FBQyxLQUFLLENBQ1IsQ0FBQyxPQUFPLENBQUMsU0FBUztZQUNoQixDQUFDLENBQUMsR0FBRztZQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FDaEUsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVNLFlBQVksQ0FBQyxhQUFzQjtRQUN4QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFHLGFBQWEsRUFBQztZQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVNLFVBQVUsQ0FBQyxVQUFtQjtRQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFHLFVBQVUsRUFBQztZQUNaLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7bUhBM0RVLHFCQUFxQjt1SEFBckIscUJBQXFCLGNBRnBCLE1BQU07NEZBRVAscUJBQXFCO2tCQUhqQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzL2ludGVybmFsL0JlaGF2aW9yU3ViamVjdCc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBVcGxvYWRJdGVtIH0gZnJvbSAnLi9tb2RlbC91cGxvYWRTdGF0ZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuVXBsb2FkU3RhdGVTZXJ2aWNlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgZG9jdW1lbnRzVXBsb2FkUHJvZ3Jlc3MkOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyIHwgbnVsbD4gPVxyXG4gICAgbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXIgfCBudWxsPihudWxsKTtcclxuXHJcbiAgcHVibGljIHVwbG9hZE9uZ29pbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbiB8IG51bGw+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxcclxuICAgIGJvb2xlYW4gfCBudWxsXHJcbiAgPihudWxsKTtcclxuXHJcbiAgcHVibGljIGRpc3BsYXlVcGxvYWQkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbiB8IG51bGw+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxcclxuICBib29sZWFuIHwgbnVsbFxyXG4gID4obnVsbCk7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGxvYWRPbmdvaW5nJFxyXG4gICAgICAucGlwZShmaWx0ZXIoKHgpID0+ICEheCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5kb2N1bWVudHNVcGxvYWRQcm9ncmVzcyQubmV4dChudWxsKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RGlzcGxheVVwbG9hZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmRpc3BsYXlVcGxvYWQkLnBpcGUoZGVib3VuY2VUaW1lKDUwMCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFVwbG9hZE9uZ29pbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy51cGxvYWRPbmdvaW5nJC5waXBlKGRlYm91bmNlVGltZSg1MDApKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVVcGxvYWRQcm9ncmVzcyh1cGxvYWRJdGVtczogVXBsb2FkSXRlbVtdKSB7XHJcbiAgICBjb25zdCB1cGxvYWRzID0gdXBsb2FkSXRlbXMucmVkdWNlKFxyXG4gICAgICAoYWNjLCBjdXJyKSA9PiAoe1xyXG4gICAgICAgIHRvdGFsOiBhY2MudG90YWwgKyBjdXJyLm5iQ2h1bmtzVG90YWwsXHJcbiAgICAgICAgcmVtYWluaW5nOiBhY2MucmVtYWluaW5nICsgY3Vyci5uYkNodW5rc1JlbWFpbmluZyxcclxuICAgICAgfSksXHJcbiAgICAgIHsgdG90YWw6IDAsIHJlbWFpbmluZzogMCB9XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuZG9jdW1lbnRzVXBsb2FkUHJvZ3Jlc3MkLm5leHQoXHJcbiAgICAgIE1hdGguZmxvb3IoXHJcbiAgICAgICAgIXVwbG9hZHMucmVtYWluaW5nXHJcbiAgICAgICAgICA/IDEwMFxyXG4gICAgICAgICAgOiAoKHVwbG9hZHMudG90YWwgLSB1cGxvYWRzLnJlbWFpbmluZykgKiAxMDApIC8gdXBsb2Fkcy50b3RhbFxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwbG9hZFN0YXJ0cyhkaXNwbGF5VXBsb2FkOiBCb29sZWFuKSB7XHJcbiAgICB0aGlzLnVwbG9hZE9uZ29pbmckLm5leHQodHJ1ZSk7XHJcbiAgICBpZihkaXNwbGF5VXBsb2FkKXtcclxuICAgICAgdGhpcy5kaXNwbGF5VXBsb2FkJC5uZXh0KHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwbG9hZEVuZHMoaGlkZVVwbG9hZDogQm9vbGVhbikge1xyXG4gICAgdGhpcy51cGxvYWRPbmdvaW5nJC5uZXh0KGZhbHNlKTtcclxuICAgIGlmKGhpZGVVcGxvYWQpe1xyXG4gICAgICB0aGlzLmRpc3BsYXlVcGxvYWQkLm5leHQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=