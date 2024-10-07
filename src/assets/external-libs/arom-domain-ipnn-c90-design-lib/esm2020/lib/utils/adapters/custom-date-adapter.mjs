import { Injectable, InjectionToken, LOCALE_ID, inject } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';
import * as i0 from "@angular/core";
/** InjectionToken for datepicker that can be used to override default locale code. */
export const ESN_DATE_LOCALE = new InjectionToken('ESN_DATE_LOCALE', {
    providedIn: 'root',
    factory: ESN_DATE_LOCALE_FACTORY,
});
export function ESN_DATE_LOCALE_FACTORY() {
    return inject(LOCALE_ID);
}
export class EsnDateAdapter extends NativeDateAdapter {
    getFirstDayOfWeek() {
        return 1;
    }
    parse(value) {
        const dateReg = /^[0-9\/]+$/;
        const dateArray = value.match(/\d+/g);
        if (!value) {
            return null;
        }
        if (dateReg.test(value)) {
            if (dateArray.length === 3) {
                return new Date(Date.parse(dateArray[1] + '/' + dateArray[0] + '/' + dateArray[2]));
            }
            else {
                return null;
            }
        }
        else {
            return new Date(Date.parse(value));
        }
    }
}
EsnDateAdapter.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDateAdapter, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
EsnDateAdapter.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDateAdapter });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDateAdapter, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWRhdGUtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi91dGlscy9hZGFwdGVycy9jdXN0b20tZGF0ZS1hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTNELHNGQUFzRjtBQUN0RixNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsSUFBSSxjQUFjLENBQUssaUJBQWlCLEVBQUU7SUFDdkUsVUFBVSxFQUFFLE1BQU07SUFDbEIsT0FBTyxFQUFFLHVCQUF1QjtDQUNqQyxDQUFDLENBQUM7QUFFSCxNQUFNLFVBQVUsdUJBQXVCO0lBQ3JDLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFHRCxNQUFNLE9BQU8sY0FBZSxTQUFRLGlCQUFpQjtJQUMxQyxpQkFBaUI7UUFDeEIsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRVEsS0FBSyxDQUFDLEtBQVU7UUFDdkIsTUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDO1FBQzdCLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxJQUFJLElBQUksQ0FDYixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDbkUsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjthQUFNO1lBQ0wsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs0R0F4QlUsY0FBYztnSEFBZCxjQUFjOzRGQUFkLGNBQWM7a0JBRDFCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgTE9DQUxFX0lELCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF0aXZlRGF0ZUFkYXB0ZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuXHJcbi8qKiBJbmplY3Rpb25Ub2tlbiBmb3IgZGF0ZXBpY2tlciB0aGF0IGNhbiBiZSB1c2VkIHRvIG92ZXJyaWRlIGRlZmF1bHQgbG9jYWxlIGNvZGUuICovXHJcbmV4cG9ydCBjb25zdCBFU05fREFURV9MT0NBTEUgPSBuZXcgSW5qZWN0aW9uVG9rZW48e30+KCdFU05fREFURV9MT0NBTEUnLCB7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG4gIGZhY3Rvcnk6IEVTTl9EQVRFX0xPQ0FMRV9GQUNUT1JZLFxyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBFU05fREFURV9MT0NBTEVfRkFDVE9SWSgpOiB7fSB7XHJcbiAgcmV0dXJuIGluamVjdChMT0NBTEVfSUQpO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFc25EYXRlQWRhcHRlciBleHRlbmRzIE5hdGl2ZURhdGVBZGFwdGVyIHtcclxuICBvdmVycmlkZSBnZXRGaXJzdERheU9mV2VlaygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIDE7XHJcbiAgfVxyXG5cclxuICBvdmVycmlkZSBwYXJzZSh2YWx1ZTogYW55KTogRGF0ZSB8IG51bGwge1xyXG4gICAgY29uc3QgZGF0ZVJlZyA9IC9eWzAtOVxcL10rJC87XHJcbiAgICBjb25zdCBkYXRlQXJyYXkgPSB2YWx1ZS5tYXRjaCgvXFxkKy9nKTtcclxuXHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRlUmVnLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgIGlmIChkYXRlQXJyYXkubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKFxyXG4gICAgICAgICAgRGF0ZS5wYXJzZShkYXRlQXJyYXlbMV0gKyAnLycgKyBkYXRlQXJyYXlbMF0gKyAnLycgKyBkYXRlQXJyYXlbMl0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlKERhdGUucGFyc2UodmFsdWUpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19