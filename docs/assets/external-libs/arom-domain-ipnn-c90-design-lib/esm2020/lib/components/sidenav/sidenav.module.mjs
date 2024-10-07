import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatDrawer, MatDrawerContainer, MatDrawerContent } from './drawer';
import { EsnSidenav, EsnSidenavContainer, EsnSidenavContent } from './sidenav.component';
import { EsnSidenavButton, EsnSidenavFooter, EsnSidenavHeader, EsnSidenavSection } from './sidenav-content';
import { EsnButtonModule } from '../button/button.module';
import { RouterModule } from '@angular/router';
// import { MatDrawer, MatDrawerContainer, MatDrawerContent } from './drawer';
import { LayoutModule } from '@angular/cdk/layout';
import { ObserversModule } from '@angular/cdk/observers';
import { EsnIconsRegistry } from '../icon/icons-registry';
import { CloseIcon } from '../icon/icons';
import { EsnIconModule } from '../icon/icon.module';
import * as i0 from "@angular/core";
import * as i1 from "../icon/icons-registry";
export class EsnSidenavModule {
    constructor(esnIconsRegistry) {
        this.esnIconsRegistry = esnIconsRegistry;
        this.esnIconsRegistry.registerIcons([CloseIcon]);
    }
}
EsnSidenavModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSidenavModule, deps: [{ token: i1.EsnIconsRegistry }], target: i0.ɵɵFactoryTarget.NgModule });
EsnSidenavModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: EsnSidenavModule, declarations: [EsnSidenav,
        EsnSidenavContainer,
        EsnSidenavContent,
        EsnSidenavButton,
        EsnSidenavFooter,
        EsnSidenavSection,
        EsnSidenavHeader], imports: [CommonModule,
        MatSidenavModule,
        EsnButtonModule,
        RouterModule,
        LayoutModule,
        ObserversModule,
        EsnIconModule], exports: [EsnSidenav,
        EsnSidenavContainer,
        EsnSidenavContent,
        EsnSidenavButton,
        EsnSidenavFooter,
        EsnSidenavSection,
        EsnSidenavHeader] });
EsnSidenavModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSidenavModule, providers: [EsnIconsRegistry], imports: [CommonModule,
        MatSidenavModule,
        EsnButtonModule,
        RouterModule,
        LayoutModule,
        ObserversModule,
        EsnIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSidenavModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        EsnSidenav,
                        EsnSidenavContainer,
                        EsnSidenavContent,
                        EsnSidenavButton,
                        EsnSidenavFooter,
                        EsnSidenavSection,
                        EsnSidenavHeader
                    ],
                    imports: [
                        CommonModule,
                        MatSidenavModule,
                        EsnButtonModule,
                        RouterModule,
                        LayoutModule,
                        ObserversModule,
                        EsnIconModule,
                    ],
                    providers: [EsnIconsRegistry],
                    exports: [
                        EsnSidenav,
                        EsnSidenavContainer,
                        EsnSidenavContent,
                        EsnSidenavButton,
                        EsnSidenavFooter,
                        EsnSidenavSection,
                        EsnSidenavHeader
                    ],
                }]
        }], ctorParameters: function () { return [{ type: i1.EsnIconsRegistry }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRy9DLE9BQU8sRUFBbUQsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5Ryw4RUFBOEU7QUFDOUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzVHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsOEVBQThFO0FBQzlFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQWdDcEQsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixZQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs4R0FIVSxnQkFBZ0I7K0dBQWhCLGdCQUFnQixpQkE1QnpCLFVBQVU7UUFDVixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGdCQUFnQixhQUdoQixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixZQUFZO1FBQ1osWUFBWTtRQUNaLGVBQWU7UUFDZixhQUFhLGFBSWIsVUFBVTtRQUNWLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsZ0JBQWdCOytHQUdQLGdCQUFnQixhQVhoQixDQUFDLGdCQUFnQixDQUFDLFlBUjNCLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZTtRQUNmLGFBQWE7NEZBYUosZ0JBQWdCO2tCQS9CNUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBRVosVUFBVTt3QkFDVixtQkFBbUI7d0JBQ25CLGlCQUFpQjt3QkFDakIsZ0JBQWdCO3dCQUNoQixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLGVBQWU7d0JBQ2YsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsYUFBYTtxQkFDZDtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDN0IsT0FBTyxFQUFFO3dCQUNQLFVBQVU7d0JBQ1YsbUJBQW1CO3dCQUNuQixpQkFBaUI7d0JBQ2pCLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLGdCQUFnQjtxQkFDakI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDZGtTY3JvbGxhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XHJcbmltcG9ydCB7IE1hdENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREcmF3ZXIsIE1hdERyYXdlckNvbnRhaW5lciwgTWF0RHJhd2VyQ29udGVudCwgTWF0U2lkZW5hdk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xyXG4vLyBpbXBvcnQgeyBNYXREcmF3ZXIsIE1hdERyYXdlckNvbnRhaW5lciwgTWF0RHJhd2VyQ29udGVudCB9IGZyb20gJy4vZHJhd2VyJztcclxuaW1wb3J0IHsgRXNuU2lkZW5hdiwgRXNuU2lkZW5hdkNvbnRhaW5lciwgRXNuU2lkZW5hdkNvbnRlbnQgfSBmcm9tICcuL3NpZGVuYXYuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXNuU2lkZW5hdkJ1dHRvbiwgRXNuU2lkZW5hdkZvb3RlciwgRXNuU2lkZW5hdkhlYWRlciwgRXNuU2lkZW5hdlNlY3Rpb24gfSBmcm9tICcuL3NpZGVuYXYtY29udGVudCc7XHJcbmltcG9ydCB7IEVzbkJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbi9idXR0b24ubW9kdWxlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuLy8gaW1wb3J0IHsgTWF0RHJhd2VyLCBNYXREcmF3ZXJDb250YWluZXIsIE1hdERyYXdlckNvbnRlbnQgfSBmcm9tICcuL2RyYXdlcic7XHJcbmltcG9ydCB7TGF5b3V0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcclxuaW1wb3J0IHsgT2JzZXJ2ZXJzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XHJcbmltcG9ydCB7IEVzbkljb25zUmVnaXN0cnkgfSBmcm9tICcuLi9pY29uL2ljb25zLXJlZ2lzdHJ5JztcclxuaW1wb3J0IHsgQ2xvc2VJY29uIH0gZnJvbSAnLi4vaWNvbi9pY29ucyc7XHJcbmltcG9ydCB7IEVzbkljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2ljb24ubW9kdWxlJztcclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuXHJcbiAgICBFc25TaWRlbmF2LFxyXG4gICAgRXNuU2lkZW5hdkNvbnRhaW5lcixcclxuICAgIEVzblNpZGVuYXZDb250ZW50LFxyXG4gICAgRXNuU2lkZW5hdkJ1dHRvbixcclxuICAgIEVzblNpZGVuYXZGb290ZXIsXHJcbiAgICBFc25TaWRlbmF2U2VjdGlvbixcclxuICAgIEVzblNpZGVuYXZIZWFkZXJcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1hdFNpZGVuYXZNb2R1bGUsXHJcbiAgICBFc25CdXR0b25Nb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICBMYXlvdXRNb2R1bGUsXHJcbiAgICBPYnNlcnZlcnNNb2R1bGUsXHJcbiAgICBFc25JY29uTW9kdWxlLFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbRXNuSWNvbnNSZWdpc3RyeV0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRXNuU2lkZW5hdixcclxuICAgIEVzblNpZGVuYXZDb250YWluZXIsXHJcbiAgICBFc25TaWRlbmF2Q29udGVudCxcclxuICAgIEVzblNpZGVuYXZCdXR0b24sXHJcbiAgICBFc25TaWRlbmF2Rm9vdGVyLFxyXG4gICAgRXNuU2lkZW5hdlNlY3Rpb24sXHJcbiAgICBFc25TaWRlbmF2SGVhZGVyXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzblNpZGVuYXZNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXNuSWNvbnNSZWdpc3RyeTogRXNuSWNvbnNSZWdpc3RyeSkge1xyXG4gICAgdGhpcy5lc25JY29uc1JlZ2lzdHJ5LnJlZ2lzdGVySWNvbnMoW0Nsb3NlSWNvbl0pO1xyXG4gIH1cclxufVxyXG4iXX0=