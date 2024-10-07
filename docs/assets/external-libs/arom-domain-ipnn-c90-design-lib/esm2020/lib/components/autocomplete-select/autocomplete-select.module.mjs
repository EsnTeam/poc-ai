import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EsnTooltipModule } from '../tooltip/tooltip.module';
import { EsnLoaderModule } from '../loader/loader.module';
import { MatChipsModule } from '@angular/material/chips';
import { EsnInputModule } from '../input/input.module';
import { EsnBadgeModule } from '../badge/badge.module';
import { EsnIconsRegistry } from '../icon/icons-registry';
import { CloseIcon } from '../icon/icons';
import { EsnIconModule } from '../icon/icon.module';
import { EsnAutocompleteSelectBase, EsnAutocompleteSelectImplementationBase, } from './base/autocomplete-select-base.component';
import { EsnAutocompleteSelect } from './default/autocomplete-select.component';
import * as i0 from "@angular/core";
import * as i1 from "../icon/icons-registry";
export class EsnAutocompleteSelectModule {
    constructor(esnIconsRegistry) {
        this.esnIconsRegistry = esnIconsRegistry;
        this.esnIconsRegistry.registerIcons([CloseIcon]);
    }
}
EsnAutocompleteSelectModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAutocompleteSelectModule, deps: [{ token: i1.EsnIconsRegistry }], target: i0.ɵɵFactoryTarget.NgModule });
EsnAutocompleteSelectModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: EsnAutocompleteSelectModule, declarations: [EsnAutocompleteSelectBase,
        EsnAutocompleteSelect,
        EsnAutocompleteSelectImplementationBase], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        EsnInputModule,
        MatFormFieldModule,
        MatChipsModule,
        EsnTooltipModule,
        EsnLoaderModule,
        EsnBadgeModule,
        EsnIconModule], exports: [EsnAutocompleteSelectBase,
        EsnAutocompleteSelect,
        EsnAutocompleteSelectImplementationBase] });
EsnAutocompleteSelectModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAutocompleteSelectModule, providers: [EsnIconsRegistry], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        EsnInputModule,
        MatFormFieldModule,
        MatChipsModule,
        EsnTooltipModule,
        EsnLoaderModule,
        EsnBadgeModule,
        EsnIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAutocompleteSelectModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        EsnAutocompleteSelectBase,
                        EsnAutocompleteSelect,
                        EsnAutocompleteSelectImplementationBase,
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatAutocompleteModule,
                        EsnInputModule,
                        MatFormFieldModule,
                        MatChipsModule,
                        EsnTooltipModule,
                        EsnLoaderModule,
                        EsnBadgeModule,
                        EsnIconModule,
                    ],
                    providers: [EsnIconsRegistry],
                    exports: [
                        EsnAutocompleteSelectBase,
                        EsnAutocompleteSelect,
                        EsnAutocompleteSelectImplementationBase,
                    ],
                }]
        }], ctorParameters: function () { return [{ type: i1.EsnIconsRegistry }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXNlbGVjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9hdXRvY29tcGxldGUtc2VsZWN0L2F1dG9jb21wbGV0ZS1zZWxlY3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXZFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUNMLHlCQUF5QixFQUN6Qix1Q0FBdUMsR0FDeEMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7O0FBNkJoRixNQUFNLE9BQU8sMkJBQTJCO0lBQ3RDLFlBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ3BELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O3lIQUhVLDJCQUEyQjswSEFBM0IsMkJBQTJCLGlCQXpCcEMseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQix1Q0FBdUMsYUFHdkMsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIscUJBQXFCO1FBQ3JCLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsY0FBYztRQUVkLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsY0FBYztRQUNkLGFBQWEsYUFJYix5QkFBeUI7UUFDekIscUJBQXFCO1FBQ3JCLHVDQUF1QzswSEFHOUIsMkJBQTJCLGFBUDNCLENBQUMsZ0JBQWdCLENBQUMsWUFiM0IsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIscUJBQXFCO1FBQ3JCLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsY0FBYztRQUVkLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsY0FBYztRQUNkLGFBQWE7NEZBU0osMkJBQTJCO2tCQTNCdkMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1oseUJBQXlCO3dCQUN6QixxQkFBcUI7d0JBQ3JCLHVDQUF1QztxQkFDeEM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLHFCQUFxQjt3QkFDckIsY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBRWQsZ0JBQWdCO3dCQUNoQixlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsYUFBYTtxQkFDZDtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDN0IsT0FBTyxFQUFFO3dCQUNQLHlCQUF5Qjt3QkFDekIscUJBQXFCO3dCQUNyQix1Q0FBdUM7cUJBQ3hDO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XHJcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEVzblRvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi90b29sdGlwL3Rvb2x0aXAubW9kdWxlJztcclxuaW1wb3J0IHsgRXNuTG9hZGVyTW9kdWxlIH0gZnJvbSAnLi4vbG9hZGVyL2xvYWRlci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNYXRDaGlwc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcclxuaW1wb3J0IHsgRXNuSW5wdXRNb2R1bGUgfSBmcm9tICcuLi9pbnB1dC9pbnB1dC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBFc25CYWRnZU1vZHVsZSB9IGZyb20gJy4uL2JhZGdlL2JhZGdlLm1vZHVsZSc7XHJcbmltcG9ydCB7IEVzbkljb25zUmVnaXN0cnkgfSBmcm9tICcuLi9pY29uL2ljb25zLXJlZ2lzdHJ5JztcclxuaW1wb3J0IHsgQ2xvc2VJY29uIH0gZnJvbSAnLi4vaWNvbi9pY29ucyc7XHJcbmltcG9ydCB7IEVzbkljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2ljb24ubW9kdWxlJztcclxuaW1wb3J0IHtcclxuICBFc25BdXRvY29tcGxldGVTZWxlY3RCYXNlLFxyXG4gIEVzbkF1dG9jb21wbGV0ZVNlbGVjdEltcGxlbWVudGF0aW9uQmFzZSxcclxufSBmcm9tICcuL2Jhc2UvYXV0b2NvbXBsZXRlLXNlbGVjdC1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVzbkF1dG9jb21wbGV0ZVNlbGVjdCB9IGZyb20gJy4vZGVmYXVsdC9hdXRvY29tcGxldGUtc2VsZWN0LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRXNuQXV0b2NvbXBsZXRlU2VsZWN0QmFzZSxcclxuICAgIEVzbkF1dG9jb21wbGV0ZVNlbGVjdCxcclxuICAgIEVzbkF1dG9jb21wbGV0ZVNlbGVjdEltcGxlbWVudGF0aW9uQmFzZSxcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcclxuICAgIEVzbklucHV0TW9kdWxlLFxyXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgTWF0Q2hpcHNNb2R1bGUsXHJcblxyXG4gICAgRXNuVG9vbHRpcE1vZHVsZSxcclxuICAgIEVzbkxvYWRlck1vZHVsZSxcclxuICAgIEVzbkJhZGdlTW9kdWxlLFxyXG4gICAgRXNuSWNvbk1vZHVsZSxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW0Vzbkljb25zUmVnaXN0cnldLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEVzbkF1dG9jb21wbGV0ZVNlbGVjdEJhc2UsXHJcbiAgICBFc25BdXRvY29tcGxldGVTZWxlY3QsXHJcbiAgICBFc25BdXRvY29tcGxldGVTZWxlY3RJbXBsZW1lbnRhdGlvbkJhc2UsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzbkF1dG9jb21wbGV0ZVNlbGVjdE1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlc25JY29uc1JlZ2lzdHJ5OiBFc25JY29uc1JlZ2lzdHJ5KSB7XHJcbiAgICB0aGlzLmVzbkljb25zUmVnaXN0cnkucmVnaXN0ZXJJY29ucyhbQ2xvc2VJY29uXSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==