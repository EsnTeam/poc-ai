import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { EsnTabLink, EsnTabNav, MatTabNavPanel, } from './tab-nav-bar/tab-nav-bar';
import { MatRippleModule } from '@angular/material/core';
import { EsnTabGroup } from './tab-group/tab-group';
import { EsnTab } from './tab-group/tab';
import { MatTabBody, MatTabBodyPortal } from './tab-group/tab-body';
import { MatTabHeader } from './tab-group/tab-header';
import { MatTabLabelWrapper } from './tab-group/tab-label-wrapper';
import { A11yModule } from '@angular/cdk/a11y';
import { EsnTabLabel } from './tab-group/tab-label';
import { MatTabContent } from './tab-group/tab-content';
import { PortalModule } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
export class EsnTabsModule {
}
EsnTabsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnTabsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EsnTabsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: EsnTabsModule, declarations: [EsnTabNav,
        EsnTabLink,
        EsnTabGroup,
        EsnTab,
        EsnTabLabel,
        // Not exported
        MatTabBody,
        MatTabHeader,
        MatTabLabelWrapper,
        MatTabContent,
        MatTabBodyPortal,
        MatTabNavPanel], imports: [MatTabsModule,
        CommonModule,
        MatRippleModule,
        A11yModule,
        PortalModule], exports: [EsnTabNav, EsnTabLink, EsnTabGroup, EsnTab, EsnTabLabel] });
EsnTabsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnTabsModule, imports: [MatTabsModule,
        CommonModule,
        MatRippleModule,
        A11yModule,
        PortalModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnTabsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        EsnTabNav,
                        EsnTabLink,
                        EsnTabGroup,
                        EsnTab,
                        EsnTabLabel,
                        // Not exported
                        MatTabBody,
                        MatTabHeader,
                        MatTabLabelWrapper,
                        MatTabContent,
                        MatTabBodyPortal,
                        MatTabNavPanel,
                    ],
                    imports: [
                        MatTabsModule,
                        CommonModule,
                        MatRippleModule,
                        A11yModule,
                        PortalModule,
                    ],
                    exports: [EsnTabNav, EsnTabLink, EsnTabGroup, EsnTab, EsnTabLabel],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy90YWJzL3RhYnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFDVCxjQUFjLEdBQ2YsTUFBTSwyQkFBMkIsQ0FBQztBQUNuQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUEwQm5ELE1BQU0sT0FBTyxhQUFhOzsyR0FBYixhQUFhOzRHQUFiLGFBQWEsaUJBdkJ0QixTQUFTO1FBQ1QsVUFBVTtRQUNWLFdBQVc7UUFDWCxNQUFNO1FBQ04sV0FBVztRQUVYLGVBQWU7UUFDZixVQUFVO1FBQ1YsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGNBQWMsYUFHZCxhQUFhO1FBQ2IsWUFBWTtRQUNaLGVBQWU7UUFDZixVQUFVO1FBQ1YsWUFBWSxhQUVKLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxXQUFXOzRHQUV0RCxhQUFhLFlBUnRCLGFBQWE7UUFDYixZQUFZO1FBQ1osZUFBZTtRQUNmLFVBQVU7UUFDVixZQUFZOzRGQUlILGFBQWE7a0JBekJ6QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixTQUFTO3dCQUNULFVBQVU7d0JBQ1YsV0FBVzt3QkFDWCxNQUFNO3dCQUNOLFdBQVc7d0JBRVgsZUFBZTt3QkFDZixVQUFVO3dCQUNWLFlBQVk7d0JBQ1osa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsY0FBYztxQkFDZjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsYUFBYTt3QkFDYixZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsVUFBVTt3QkFDVixZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUM7aUJBQ25FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTWF0VGFic01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMnO1xyXG5pbXBvcnQge1xyXG4gIEVzblRhYkxpbmssXHJcbiAgRXNuVGFiTmF2LFxyXG4gIE1hdFRhYk5hdlBhbmVsLFxyXG59IGZyb20gJy4vdGFiLW5hdi1iYXIvdGFiLW5hdi1iYXInO1xyXG5pbXBvcnQgeyBNYXRSaXBwbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgRXNuVGFiR3JvdXAgfSBmcm9tICcuL3RhYi1ncm91cC90YWItZ3JvdXAnO1xyXG5pbXBvcnQgeyBFc25UYWIgfSBmcm9tICcuL3RhYi1ncm91cC90YWInO1xyXG5pbXBvcnQgeyBNYXRUYWJCb2R5LCBNYXRUYWJCb2R5UG9ydGFsIH0gZnJvbSAnLi90YWItZ3JvdXAvdGFiLWJvZHknO1xyXG5pbXBvcnQgeyBNYXRUYWJIZWFkZXIgfSBmcm9tICcuL3RhYi1ncm91cC90YWItaGVhZGVyJztcclxuaW1wb3J0IHsgTWF0VGFiTGFiZWxXcmFwcGVyIH0gZnJvbSAnLi90YWItZ3JvdXAvdGFiLWxhYmVsLXdyYXBwZXInO1xyXG5pbXBvcnQgeyBBMTF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBFc25UYWJMYWJlbCB9IGZyb20gJy4vdGFiLWdyb3VwL3RhYi1sYWJlbCc7XHJcbmltcG9ydCB7IE1hdFRhYkNvbnRlbnQgfSBmcm9tICcuL3RhYi1ncm91cC90YWItY29udGVudCc7XHJcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRXNuVGFiTmF2LFxyXG4gICAgRXNuVGFiTGluayxcclxuICAgIEVzblRhYkdyb3VwLFxyXG4gICAgRXNuVGFiLFxyXG4gICAgRXNuVGFiTGFiZWwsXHJcblxyXG4gICAgLy8gTm90IGV4cG9ydGVkXHJcbiAgICBNYXRUYWJCb2R5LFxyXG4gICAgTWF0VGFiSGVhZGVyLFxyXG4gICAgTWF0VGFiTGFiZWxXcmFwcGVyLFxyXG4gICAgTWF0VGFiQ29udGVudCxcclxuICAgIE1hdFRhYkJvZHlQb3J0YWwsXHJcbiAgICBNYXRUYWJOYXZQYW5lbCxcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIE1hdFRhYnNNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNYXRSaXBwbGVNb2R1bGUsXHJcbiAgICBBMTF5TW9kdWxlLFxyXG4gICAgUG9ydGFsTW9kdWxlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW0VzblRhYk5hdiwgRXNuVGFiTGluaywgRXNuVGFiR3JvdXAsIEVzblRhYiwgRXNuVGFiTGFiZWxdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuVGFic01vZHVsZSB7fVxyXG4iXX0=