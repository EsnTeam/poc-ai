import { Injectable } from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";
import { EsnUtils } from "../../utils/utils";
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/layout";
export class ResponsiveService {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.onChangeSub = new Subscription();
        this.isMobile$ = new BehaviorSubject(false);
        this.isSmallMobile$ = new BehaviorSubject(false);
        this.isLargeTablet$ = new BehaviorSubject(false);
        this.isSmallTablet$ = new BehaviorSubject(false);
        // Mobile
        this.onChangeSub.add(this.breakpointObserver.observe([
            `(max-width: ${EsnUtils.BREAKPOINTS.mobile})`
        ]).subscribe((result) => {
            this.isMobile$.next(result.matches);
        }));
        // Small Mobile 
        this.onChangeSub.add(this.breakpointObserver.observe([
            `(max-width: ${EsnUtils.BREAKPOINTS.smallMobile})`
        ]).subscribe((result) => {
            this.isSmallMobile$.next(result.matches);
        }));
        // Large tablet 
        this.onChangeSub.add(this.breakpointObserver.observe([
            `(max-width: ${EsnUtils.BREAKPOINTS.tabletLarge})`
        ]).subscribe((result) => {
            this.isLargeTablet$.next(result.matches);
        }));
        // Small tablet 
        this.onChangeSub.add(this.breakpointObserver.observe([
            `(max-width: ${EsnUtils.BREAKPOINTS.tabletSmall})`
        ]).subscribe((result) => {
            this.isSmallTablet$.next(result.matches);
        }));
    }
}
ResponsiveService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ResponsiveService, deps: [{ token: i1.BreakpointObserver }], target: i0.ɵɵFactoryTarget.Injectable });
ResponsiveService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ResponsiveService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ResponsiveService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.BreakpointObserver }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL3V0aWxzL3NlcnZpY2VzL3Jlc3BvbnNpdmUvcmVzcG9uc2l2ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBVyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7QUFHN0MsTUFBTSxPQUFPLGlCQUFpQjtJQU0xQixZQUFvQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUxsRCxnQkFBVyxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hELGNBQVMsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDaEUsbUJBQWMsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDckUsbUJBQWMsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDckUsbUJBQWMsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7UUFHNUUsU0FBUztRQUNULElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDakQsZUFBZSxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRztTQUM5QyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBdUIsRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRU4sZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDakQsZUFBZSxRQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRztTQUNuRCxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBdUIsRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRU4sZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDL0MsZUFBZSxRQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRztTQUNuRCxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBdUIsRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRVIsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDN0MsZUFBZSxRQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRztTQUNuRCxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBdUIsRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7K0dBbkNRLGlCQUFpQjttSEFBakIsaUJBQWlCOzRGQUFqQixpQkFBaUI7a0JBRDdCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCcmVha3BvaW50T2JzZXJ2ZXIsIEJyZWFrcG9pbnRTdGF0ZSB9IGZyb20gXCJAYW5ndWxhci9jZGsvbGF5b3V0XCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEVzblV0aWxzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSZXNwb25zaXZlU2VydmljZSB7XHJcbiAgICBwcml2YXRlIG9uQ2hhbmdlU3ViOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcbiAgICBwdWJsaWMgaXNNb2JpbGUkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKVxyXG4gICAgcHVibGljIGlzU21hbGxNb2JpbGUkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKVxyXG4gICAgcHVibGljIGlzTGFyZ2VUYWJsZXQkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKVxyXG4gICAgcHVibGljIGlzU21hbGxUYWJsZXQkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKVxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBicmVha3BvaW50T2JzZXJ2ZXI6IEJyZWFrcG9pbnRPYnNlcnZlcil7XHJcbiAgICAgICAgXHJcbiAgICAvLyBNb2JpbGVcclxuICAgIHRoaXMub25DaGFuZ2VTdWIuYWRkKHRoaXMuYnJlYWtwb2ludE9ic2VydmVyLm9ic2VydmUoW1xyXG4gICAgICAgIGAobWF4LXdpZHRoOiAke0VzblV0aWxzLkJSRUFLUE9JTlRTLm1vYmlsZX0pYFxyXG4gICAgICBdKS5zdWJzY3JpYmUoKHJlc3VsdDogQnJlYWtwb2ludFN0YXRlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc01vYmlsZSQubmV4dChyZXN1bHQubWF0Y2hlcyk7XHJcbiAgICAgIH0pKTtcclxuXHJcbiAgICAvLyBTbWFsbCBNb2JpbGUgXHJcbiAgICB0aGlzLm9uQ2hhbmdlU3ViLmFkZCh0aGlzLmJyZWFrcG9pbnRPYnNlcnZlci5vYnNlcnZlKFtcclxuICAgICAgICBgKG1heC13aWR0aDogJHtFc25VdGlscy5CUkVBS1BPSU5UUy5zbWFsbE1vYmlsZX0pYFxyXG4gICAgICBdKS5zdWJzY3JpYmUoKHJlc3VsdDogQnJlYWtwb2ludFN0YXRlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc1NtYWxsTW9iaWxlJC5uZXh0KHJlc3VsdC5tYXRjaGVzKTtcclxuICAgICAgfSkpO1xyXG5cclxuICAgIC8vIExhcmdlIHRhYmxldCBcclxuICAgIHRoaXMub25DaGFuZ2VTdWIuYWRkKHRoaXMuYnJlYWtwb2ludE9ic2VydmVyLm9ic2VydmUoW1xyXG4gICAgICAgICAgYChtYXgtd2lkdGg6ICR7RXNuVXRpbHMuQlJFQUtQT0lOVFMudGFibGV0TGFyZ2V9KWBcclxuICAgICAgICBdKS5zdWJzY3JpYmUoKHJlc3VsdDogQnJlYWtwb2ludFN0YXRlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmlzTGFyZ2VUYWJsZXQkLm5leHQocmVzdWx0Lm1hdGNoZXMpO1xyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAvLyBTbWFsbCB0YWJsZXQgXHJcbiAgICB0aGlzLm9uQ2hhbmdlU3ViLmFkZCh0aGlzLmJyZWFrcG9pbnRPYnNlcnZlci5vYnNlcnZlKFtcclxuICAgICAgICAgICAgYChtYXgtd2lkdGg6ICR7RXNuVXRpbHMuQlJFQUtQT0lOVFMudGFibGV0U21hbGx9KWBcclxuICAgICAgICAgIF0pLnN1YnNjcmliZSgocmVzdWx0OiBCcmVha3BvaW50U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc1NtYWxsVGFibGV0JC5uZXh0KHJlc3VsdC5tYXRjaGVzKTtcclxuICAgICAgICAgIH0pKTtcclxuICAgIH0gICAgXHJcbn0iXX0=