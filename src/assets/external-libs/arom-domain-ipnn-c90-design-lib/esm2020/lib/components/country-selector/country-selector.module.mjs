import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountrySelectorComponent } from './country-selector.component';
import { EsnSelectModule } from '../select/select.module';
import { EsnDividerModule } from '../divider/divider.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EsnCountryModule } from '../../utils/services/country/country.module';
import { EsnFlagModule } from '../esn-flag/esn-flag.module';
import { EsnAutocompleteSelectModule } from '../autocomplete-select/autocomplete-select.module';
import { EsnIconModule } from '../icon/icon.module';
import * as i0 from "@angular/core";
export class EsnCountrySelectorModule {
}
EsnCountrySelectorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnCountrySelectorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EsnCountrySelectorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: EsnCountrySelectorModule, declarations: [CountrySelectorComponent], imports: [CommonModule, ReactiveFormsModule, EsnSelectModule, EsnDividerModule, EsnCountryModule, EsnFlagModule, EsnAutocompleteSelectModule, EsnIconModule], exports: [CountrySelectorComponent] });
EsnCountrySelectorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnCountrySelectorModule, imports: [CommonModule, ReactiveFormsModule, EsnSelectModule, EsnDividerModule, EsnCountryModule, EsnFlagModule, EsnAutocompleteSelectModule, EsnIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnCountrySelectorModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CountrySelectorComponent
                    ],
                    imports: [
                        CommonModule, ReactiveFormsModule, EsnSelectModule, EsnDividerModule, EsnCountryModule, EsnFlagModule, EsnAutocompleteSelectModule, EsnIconModule
                    ],
                    exports: [
                        CountrySelectorComponent
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS1zZWxlY3Rvci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9jb3VudHJ5LXNlbGVjdG9yL2NvdW50cnktc2VsZWN0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDaEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQWVwRCxNQUFNLE9BQU8sd0JBQXdCOztzSEFBeEIsd0JBQXdCO3VIQUF4Qix3QkFBd0IsaUJBVGpDLHdCQUF3QixhQUd4QixZQUFZLEVBQUUsbUJBQW1CLEVBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSwyQkFBMkIsRUFBRSxhQUFhLGFBR2hKLHdCQUF3Qjt1SEFHZix3QkFBd0IsWUFOakMsWUFBWSxFQUFFLG1CQUFtQixFQUFDLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsMkJBQTJCLEVBQUUsYUFBYTs0RkFNdkksd0JBQXdCO2tCQVhwQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWix3QkFBd0I7cUJBQ3pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZLEVBQUUsbUJBQW1CLEVBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSwyQkFBMkIsRUFBRSxhQUFhO3FCQUNqSjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asd0JBQXdCO3FCQUN6QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENvdW50cnlTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vY291bnRyeS1zZWxlY3Rvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFc25TZWxlY3RNb2R1bGUgfSBmcm9tICcuLi9zZWxlY3Qvc2VsZWN0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IEVzbkRpdmlkZXJNb2R1bGUgfSBmcm9tICcuLi9kaXZpZGVyL2RpdmlkZXIubW9kdWxlJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRXNuQ291bnRyeU1vZHVsZSB9IGZyb20gJy4uLy4uL3V0aWxzL3NlcnZpY2VzL2NvdW50cnkvY291bnRyeS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBFc25GbGFnTW9kdWxlIH0gZnJvbSAnLi4vZXNuLWZsYWcvZXNuLWZsYWcubW9kdWxlJztcclxuaW1wb3J0IHsgRXNuQXV0b2NvbXBsZXRlU2VsZWN0TW9kdWxlIH0gZnJvbSAnLi4vYXV0b2NvbXBsZXRlLXNlbGVjdC9hdXRvY29tcGxldGUtc2VsZWN0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IEVzbkljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2ljb24ubW9kdWxlJztcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIENvdW50cnlTZWxlY3RvckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLEVzblNlbGVjdE1vZHVsZSwgRXNuRGl2aWRlck1vZHVsZSwgRXNuQ291bnRyeU1vZHVsZSwgRXNuRmxhZ01vZHVsZSwgRXNuQXV0b2NvbXBsZXRlU2VsZWN0TW9kdWxlLCBFc25JY29uTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBDb3VudHJ5U2VsZWN0b3JDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuQ291bnRyeVNlbGVjdG9yTW9kdWxlIHsgfVxyXG4iXX0=