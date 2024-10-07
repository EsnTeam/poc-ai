import { Injectable } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';
import * as i0 from "@angular/core";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvZGF0ZXBpY2tlci9kYXRlLWFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFHM0QsTUFBTSxPQUFPLGNBQWUsU0FBUSxpQkFBaUI7SUFDMUMsaUJBQWlCO1FBQ3hCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVRLEtBQUssQ0FBQyxLQUFVO1FBQ3ZCLE1BQU0sT0FBTyxHQUFHLFlBQVksQ0FBQztRQUM3QixNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQzFCLE9BQU8sSUFBSSxJQUFJLENBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ25FLENBQUM7YUFDSDtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7NEdBeEJVLGNBQWM7Z0hBQWQsY0FBYzs0RkFBZCxjQUFjO2tCQUQxQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXRpdmVEYXRlQWRhcHRlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRXNuRGF0ZUFkYXB0ZXIgZXh0ZW5kcyBOYXRpdmVEYXRlQWRhcHRlciB7XHJcbiAgb3ZlcnJpZGUgZ2V0Rmlyc3REYXlPZldlZWsoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAxO1xyXG4gIH1cclxuXHJcbiAgb3ZlcnJpZGUgcGFyc2UodmFsdWU6IGFueSk6IERhdGUgfCBudWxsIHtcclxuICAgIGNvbnN0IGRhdGVSZWcgPSAvXlswLTlcXC9dKyQvO1xyXG4gICAgY29uc3QgZGF0ZUFycmF5ID0gdmFsdWUubWF0Y2goL1xcZCsvZyk7XHJcblxyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0ZVJlZy50ZXN0KHZhbHVlKSkge1xyXG4gICAgICBpZiAoZGF0ZUFycmF5Lmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShcclxuICAgICAgICAgIERhdGUucGFyc2UoZGF0ZUFycmF5WzFdICsgJy8nICsgZGF0ZUFycmF5WzBdICsgJy8nICsgZGF0ZUFycmF5WzJdKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBuZXcgRGF0ZShEYXRlLnBhcnNlKHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==