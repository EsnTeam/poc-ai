import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsnTooltipModule } from '../tooltip/tooltip.module';
import { EsnBadgeModule } from '../badge/badge.module';
import { EsnIconsRegistry } from '../icon/icons-registry';
import { CloseIcon } from '../icon/icons';
import { EsnIconModule } from '../icon/icon.module';
import { EsnPeoplePicker } from '../people-picker/people-picker.component';
import { EsnPersonAvatarModule } from '../person-avatar/person-avatar.module';
import { EsnAutocompleteSelectModule } from '../autocomplete-select/autocomplete-select.module';
import { ReactiveFormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../icon/icons-registry";
export class EsnPeoplePickerModule {
    constructor(esnIconsRegistry) {
        this.esnIconsRegistry = esnIconsRegistry;
        this.esnIconsRegistry.registerIcons([CloseIcon]);
    }
}
EsnPeoplePickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnPeoplePickerModule, deps: [{ token: i1.EsnIconsRegistry }], target: i0.ɵɵFactoryTarget.NgModule });
EsnPeoplePickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: EsnPeoplePickerModule, declarations: [EsnPeoplePicker], imports: [CommonModule,
        ReactiveFormsModule,
        EsnAutocompleteSelectModule,
        EsnTooltipModule,
        EsnBadgeModule,
        EsnIconModule,
        EsnPersonAvatarModule,
        EsnTooltipModule], exports: [EsnPeoplePicker] });
EsnPeoplePickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnPeoplePickerModule, providers: [EsnIconsRegistry], imports: [CommonModule,
        ReactiveFormsModule,
        EsnAutocompleteSelectModule,
        EsnTooltipModule,
        EsnBadgeModule,
        EsnIconModule,
        EsnPersonAvatarModule,
        EsnTooltipModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnPeoplePickerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        EsnPeoplePicker,
                    ],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        EsnAutocompleteSelectModule,
                        EsnTooltipModule,
                        EsnBadgeModule,
                        EsnIconModule,
                        EsnPersonAvatarModule,
                        EsnTooltipModule,
                    ],
                    providers: [EsnIconsRegistry],
                    exports: [
                        EsnPeoplePicker,
                    ],
                }]
        }], ctorParameters: function () { return [{ type: i1.EsnIconsRegistry }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVvcGxlLXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9wZW9wbGUtcGlja2VyL3Blb3BsZS1waWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDaEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQXNCckQsTUFBTSxPQUFPLHFCQUFxQjtJQUNoQyxZQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDOzttSEFIVSxxQkFBcUI7b0hBQXJCLHFCQUFxQixpQkFsQjlCLGVBQWUsYUFHZixZQUFZO1FBQ1osbUJBQW1CO1FBRW5CLDJCQUEyQjtRQUMzQixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGFBQWE7UUFDYixxQkFBcUI7UUFDckIsZ0JBQWdCLGFBSWhCLGVBQWU7b0hBR04scUJBQXFCLGFBTHJCLENBQUMsZ0JBQWdCLENBQUMsWUFWM0IsWUFBWTtRQUNaLG1CQUFtQjtRQUVuQiwyQkFBMkI7UUFDM0IsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxhQUFhO1FBQ2IscUJBQXFCO1FBQ3JCLGdCQUFnQjs0RkFPUCxxQkFBcUI7a0JBcEJqQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixlQUFlO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixtQkFBbUI7d0JBRW5CLDJCQUEyQjt3QkFDM0IsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLGFBQWE7d0JBQ2IscUJBQXFCO3dCQUNyQixnQkFBZ0I7cUJBQ2pCO29CQUNELFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUM3QixPQUFPLEVBQUU7d0JBQ1AsZUFBZTtxQkFDaEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBFc25Ub29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vdG9vbHRpcC90b29sdGlwLm1vZHVsZSc7XHJcbmltcG9ydCB7IEVzbkJhZGdlTW9kdWxlIH0gZnJvbSAnLi4vYmFkZ2UvYmFkZ2UubW9kdWxlJztcclxuaW1wb3J0IHsgRXNuSWNvbnNSZWdpc3RyeSB9IGZyb20gJy4uL2ljb24vaWNvbnMtcmVnaXN0cnknO1xyXG5pbXBvcnQgeyBDbG9zZUljb24gfSBmcm9tICcuLi9pY29uL2ljb25zJztcclxuaW1wb3J0IHsgRXNuSWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vaWNvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBFc25QZW9wbGVQaWNrZXIgfSBmcm9tICcuLi9wZW9wbGUtcGlja2VyL3Blb3BsZS1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXNuUGVyc29uQXZhdGFyTW9kdWxlIH0gZnJvbSAnLi4vcGVyc29uLWF2YXRhci9wZXJzb24tYXZhdGFyLm1vZHVsZSc7XHJcbmltcG9ydCB7IEVzbkF1dG9jb21wbGV0ZVNlbGVjdE1vZHVsZSB9IGZyb20gJy4uL2F1dG9jb21wbGV0ZS1zZWxlY3QvYXV0b2NvbXBsZXRlLXNlbGVjdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEVzblBlb3BsZVBpY2tlcixcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBcclxuICAgIEVzbkF1dG9jb21wbGV0ZVNlbGVjdE1vZHVsZSxcclxuICAgIEVzblRvb2x0aXBNb2R1bGUsXHJcbiAgICBFc25CYWRnZU1vZHVsZSxcclxuICAgIEVzbkljb25Nb2R1bGUsXHJcbiAgICBFc25QZXJzb25BdmF0YXJNb2R1bGUsXHJcbiAgICBFc25Ub29sdGlwTW9kdWxlLFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbRXNuSWNvbnNSZWdpc3RyeV0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRXNuUGVvcGxlUGlja2VyLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25QZW9wbGVQaWNrZXJNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXNuSWNvbnNSZWdpc3RyeTogRXNuSWNvbnNSZWdpc3RyeSkge1xyXG4gICAgdGhpcy5lc25JY29uc1JlZ2lzdHJ5LnJlZ2lzdGVySWNvbnMoW0Nsb3NlSWNvbl0pO1xyXG4gIH1cclxufVxyXG4iXX0=