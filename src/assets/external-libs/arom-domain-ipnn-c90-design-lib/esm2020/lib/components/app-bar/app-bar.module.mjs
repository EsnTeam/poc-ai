import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EsnAppBar } from './app-bar.component';
import { EsnButtonModule } from '../button/button.module';
import { EsnIconModule } from '../icon/icon.module';
import { EsnBadgeModule } from '../badge/badge.module';
import { EsnPersonAvatarModule } from '../person-avatar/person-avatar.module';
import { EsnMenuModule } from '../menu/menu.module';
import { EsnTooltipModule } from '../tooltip';
import * as i0 from "@angular/core";
import * as i1 from "../icon/icons-registry";
export class EsnAppBarModule {
    constructor(esnIconsRegistry) {
        this.esnIconsRegistry = esnIconsRegistry;
        //TODO: register missing icons once we have them
        this.esnIconsRegistry.registerIcons([]);
    }
}
EsnAppBarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAppBarModule, deps: [{ token: i1.EsnIconsRegistry }], target: i0.ɵɵFactoryTarget.NgModule });
EsnAppBarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: EsnAppBarModule, declarations: [EsnAppBar], imports: [CommonModule,
        EsnButtonModule,
        EsnIconModule,
        EsnBadgeModule,
        EsnPersonAvatarModule,
        EsnMenuModule,
        EsnTooltipModule], exports: [EsnAppBar] });
EsnAppBarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAppBarModule, imports: [CommonModule,
        EsnButtonModule,
        EsnIconModule,
        EsnBadgeModule,
        EsnPersonAvatarModule,
        EsnMenuModule,
        EsnTooltipModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAppBarModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        EsnButtonModule,
                        EsnIconModule,
                        EsnBadgeModule,
                        EsnPersonAvatarModule,
                        EsnMenuModule,
                        EsnTooltipModule,
                    ],
                    declarations: [EsnAppBar],
                    exports: [EsnAppBar],
                    providers: []
                }]
        }], ctorParameters: function () { return [{ type: i1.EsnIconsRegistry }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9hcHAtYmFyL2FwcC1iYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXBELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sWUFBWSxDQUFDOzs7QUFpQjlDLE1BQU0sT0FBTyxlQUFlO0lBQzFCLFlBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ3BELGdEQUFnRDtRQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7OzZHQUpVLGVBQWU7OEdBQWYsZUFBZSxpQkFMWCxTQUFTLGFBUnRCLFlBQVk7UUFDWixlQUFlO1FBQ2YsYUFBYTtRQUNiLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsYUFBYTtRQUNiLGdCQUFnQixhQUdSLFNBQVM7OEdBSVIsZUFBZSxZQWJ4QixZQUFZO1FBQ1osZUFBZTtRQUNmLGFBQWE7UUFDYixjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLGFBQWE7UUFDYixnQkFBZ0I7NEZBT1AsZUFBZTtrQkFmM0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxxQkFBcUI7d0JBQ3JCLGFBQWE7d0JBQ2IsZ0JBQWdCO3FCQUNqQjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ3pCLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDcEIsU0FBUyxFQUFDLEVBQ1Q7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFc25BcHBCYXIgfSBmcm9tICcuL2FwcC1iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXNuQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBFc25JY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pY29uLm1vZHVsZSc7XHJcbmltcG9ydCB7IEVzbkljb25zUmVnaXN0cnkgfSBmcm9tICcuLi9pY29uL2ljb25zLXJlZ2lzdHJ5JztcclxuaW1wb3J0IHsgRXNuQmFkZ2VNb2R1bGUgfSBmcm9tICcuLi9iYWRnZS9iYWRnZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBFc25QZXJzb25BdmF0YXJNb2R1bGUgfSBmcm9tICcuLi9wZXJzb24tYXZhdGFyL3BlcnNvbi1hdmF0YXIubW9kdWxlJztcclxuaW1wb3J0IHsgRXNuTWVudU1vZHVsZSB9IGZyb20gJy4uL21lbnUvbWVudS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBFc25Ub29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vdG9vbHRpcCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEVzbkJ1dHRvbk1vZHVsZSxcclxuICAgIEVzbkljb25Nb2R1bGUsXHJcbiAgICBFc25CYWRnZU1vZHVsZSxcclxuICAgIEVzblBlcnNvbkF2YXRhck1vZHVsZSxcclxuICAgIEVzbk1lbnVNb2R1bGUsXHJcbiAgICBFc25Ub29sdGlwTW9kdWxlLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbRXNuQXBwQmFyXSxcclxuICBleHBvcnRzOiBbRXNuQXBwQmFyXSxcclxuICBwcm92aWRlcnM6W1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVzbkFwcEJhck1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlc25JY29uc1JlZ2lzdHJ5OiBFc25JY29uc1JlZ2lzdHJ5KSB7XHJcbiAgICAvL1RPRE86IHJlZ2lzdGVyIG1pc3NpbmcgaWNvbnMgb25jZSB3ZSBoYXZlIHRoZW1cclxuICAgIHRoaXMuZXNuSWNvbnNSZWdpc3RyeS5yZWdpc3Rlckljb25zKFtdKTtcclxuICB9XHJcbn1cclxuIl19