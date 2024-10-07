import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsnDatePicker, EsnDateRangePicker, EsnDateTimePicker, EsnInputText, EsnInputTextArea, EsnNumberInput, } from './input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule, MAT_DATE_LOCALE, } from '@angular/material/core';
import { EsnDateAdapter } from './datepicker/date-adapter';
import { MatButtonModule } from '@angular/material/button';
import { NGX_MAT_DATE_FORMATS, NgxMatDateAdapter, NgxMatDatetimePickerModule, NgxMatNativeDateModule, } from '@angular-material-components/datetime-picker';
import { MatIconModule } from '@angular/material/icon';
import { CUSTOM_DATE_FORMATS, CustomDateAdapter } from './datepicker/customDateFormats';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MinusIcon, PlusIcon, SearchIcon } from '../icon/icons';
import { EsnIconModule } from '../icon/icon.module';
import { EsnIconsRegistry } from '../icon/icons-registry';
import { ObserversModule } from '@angular/cdk/observers';
import * as i0 from "@angular/core";
import * as i1 from "../icon/icons-registry";
export class EsnInputModule {
    constructor(esnIconsRegistry) {
        this.esnIconsRegistry = esnIconsRegistry;
        this.esnIconsRegistry.registerIcons([SearchIcon, PlusIcon, MinusIcon]);
    }
}
EsnInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnInputModule, deps: [{ token: i1.EsnIconsRegistry }], target: i0.ɵɵFactoryTarget.NgModule });
EsnInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: EsnInputModule, declarations: [EsnInputText, EsnInputTextArea, EsnDatePicker, EsnDateTimePicker, EsnNumberInput, EsnDateRangePicker], imports: [MatFormFieldModule,
        FormsModule,
        CommonModule,
        MatInputModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatAutocompleteModule,
        MatChipsModule,
        MatButtonModule,
        NgxMatDatetimePickerModule,
        NgxMatNativeDateModule,
        MatIconModule,
        EsnIconModule,
        ObserversModule], exports: [EsnInputText, EsnInputTextArea, EsnDatePicker, EsnDateTimePicker, EsnNumberInput, EsnDateRangePicker] });
EsnInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnInputModule, providers: [
        EsnIconsRegistry,
        { provide: NGX_MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
        { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
        { provide: DateAdapter, useClass: EsnDateAdapter },
        { provide: NgxMatDateAdapter, useClass: CustomDateAdapter },
    ], imports: [MatFormFieldModule,
        FormsModule,
        CommonModule,
        MatInputModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatAutocompleteModule,
        MatChipsModule,
        MatButtonModule,
        NgxMatDatetimePickerModule,
        NgxMatNativeDateModule,
        MatIconModule,
        EsnIconModule,
        ObserversModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [EsnInputText, EsnInputTextArea, EsnDatePicker, EsnDateTimePicker, EsnNumberInput, EsnDateRangePicker],
                    imports: [
                        MatFormFieldModule,
                        FormsModule,
                        CommonModule,
                        MatInputModule,
                        ReactiveFormsModule,
                        MatDatepickerModule,
                        MatNativeDateModule,
                        MatAutocompleteModule,
                        MatChipsModule,
                        MatButtonModule,
                        NgxMatDatetimePickerModule,
                        NgxMatNativeDateModule,
                        MatIconModule,
                        EsnIconModule,
                        ObserversModule
                    ],
                    exports: [EsnInputText, EsnInputTextArea, EsnDatePicker, EsnDateTimePicker, EsnNumberInput, EsnDateRangePicker],
                    providers: [
                        EsnIconsRegistry,
                        { provide: NGX_MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
                        { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
                        { provide: DateAdapter, useClass: EsnDateAdapter },
                        { provide: NgxMatDateAdapter, useClass: CustomDateAdapter },
                    ],
                }]
        }], ctorParameters: function () { return [{ type: i1.EsnIconsRegistry }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixZQUFZLEVBQ1osZ0JBQWdCLEVBQ2hCLGNBQWMsR0FFZixNQUFNLFNBQVMsQ0FBQztBQUNqQixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFDTCxXQUFXLEVBQ1gsbUJBQW1CLEVBQ25CLGVBQWUsR0FDaEIsTUFBTSx3QkFBd0IsQ0FBQztBQUNoQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTNELE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLDBCQUEwQixFQUMxQixzQkFBc0IsR0FDdkIsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7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O3dCQUNsRCxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUM7cUJBQzNEO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBFc25EYXRlUGlja2VyLFxyXG4gIEVzbkRhdGVSYW5nZVBpY2tlcixcclxuICBFc25EYXRlVGltZVBpY2tlcixcclxuICBFc25JbnB1dFRleHQsXHJcbiAgRXNuSW5wdXRUZXh0QXJlYSxcclxuICBFc25OdW1iZXJJbnB1dCxcclxuICBfRXNuSW5wdXRCYXNlLFxyXG59IGZyb20gJy4vaW5wdXQnO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNYXREYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XHJcbmltcG9ydCB7XHJcbiAgRGF0ZUFkYXB0ZXIsXHJcbiAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcclxuICBNQVRfREFURV9MT0NBTEUsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7IEVzbkRhdGVBZGFwdGVyIH0gZnJvbSAnLi9kYXRlcGlja2VyL2RhdGUtYWRhcHRlcic7XHJcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcblxyXG5pbXBvcnQge1xyXG4gIE5HWF9NQVRfREFURV9GT1JNQVRTLFxyXG4gIE5neE1hdERhdGVBZGFwdGVyLFxyXG4gIE5neE1hdERhdGV0aW1lUGlja2VyTW9kdWxlLFxyXG4gIE5neE1hdE5hdGl2ZURhdGVNb2R1bGUsXHJcbn0gZnJvbSAnQGFuZ3VsYXItbWF0ZXJpYWwtY29tcG9uZW50cy9kYXRldGltZS1waWNrZXInO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcblxyXG5pbXBvcnQgeyBDVVNUT01fREFURV9GT1JNQVRTLCBDdXN0b21EYXRlQWRhcHRlciB9IGZyb20gJy4vZGF0ZXBpY2tlci9jdXN0b21EYXRlRm9ybWF0cyc7XHJcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XHJcbmltcG9ydCB7IE1hdENoaXBzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xyXG5pbXBvcnQgeyBNaW51c0ljb24sIFBsdXNJY29uLCBTZWFyY2hJY29uIH0gZnJvbSAnLi4vaWNvbi9pY29ucyc7XHJcbmltcG9ydCB7IEVzbkljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2ljb24ubW9kdWxlJztcclxuaW1wb3J0IHsgRXNuSWNvbnNSZWdpc3RyeSB9IGZyb20gJy4uL2ljb24vaWNvbnMtcmVnaXN0cnknO1xyXG5pbXBvcnQgeyBPYnNlcnZlcnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0VzbklucHV0VGV4dCwgRXNuSW5wdXRUZXh0QXJlYSwgRXNuRGF0ZVBpY2tlciwgRXNuRGF0ZVRpbWVQaWNrZXIsIEVzbk51bWJlcklucHV0LCBFc25EYXRlUmFuZ2VQaWNrZXJdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXHJcbiAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXHJcbiAgICBNYXRDaGlwc01vZHVsZSxcclxuXHJcbiAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICBOZ3hNYXREYXRldGltZVBpY2tlck1vZHVsZSxcclxuICAgIE5neE1hdE5hdGl2ZURhdGVNb2R1bGUsXHJcbiAgICBNYXRJY29uTW9kdWxlLFxyXG4gIFxyXG4gICAgRXNuSWNvbk1vZHVsZSxcclxuICAgIE9ic2VydmVyc01vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW0VzbklucHV0VGV4dCwgRXNuSW5wdXRUZXh0QXJlYSwgRXNuRGF0ZVBpY2tlciwgRXNuRGF0ZVRpbWVQaWNrZXIsIEVzbk51bWJlcklucHV0LCBFc25EYXRlUmFuZ2VQaWNrZXJdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgRXNuSWNvbnNSZWdpc3RyeSxcclxuICAgIHsgcHJvdmlkZTogTkdYX01BVF9EQVRFX0ZPUk1BVFMsIHVzZVZhbHVlOiBDVVNUT01fREFURV9GT1JNQVRTIH0sXHJcbiAgICB7IHByb3ZpZGU6IE1BVF9EQVRFX0xPQ0FMRSwgdXNlVmFsdWU6ICdmci1GUicgfSxcclxuICAgIHsgcHJvdmlkZTogRGF0ZUFkYXB0ZXIsIHVzZUNsYXNzOiBFc25EYXRlQWRhcHRlciB9LFxyXG4gICAgeyBwcm92aWRlOiBOZ3hNYXREYXRlQWRhcHRlciwgdXNlQ2xhc3M6IEN1c3RvbURhdGVBZGFwdGVyfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuSW5wdXRNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXNuSWNvbnNSZWdpc3RyeTogRXNuSWNvbnNSZWdpc3RyeSkge1xyXG4gICAgdGhpcy5lc25JY29uc1JlZ2lzdHJ5LnJlZ2lzdGVySWNvbnMoW1NlYXJjaEljb24sIFBsdXNJY29uLCBNaW51c0ljb25dKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19