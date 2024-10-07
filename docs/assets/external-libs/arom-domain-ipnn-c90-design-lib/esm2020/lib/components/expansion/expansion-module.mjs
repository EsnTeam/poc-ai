/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { EsnAccordion } from './material fork/accordion';
import { EsnExpansionPanel, EsnExpansionPanelActionRow } from './material fork/expansion-panel';
import { EsnExpansionPanelContent } from './material fork/expansion-panel-content';
import { EsnExpansionPanelHeader, EsnExpansionPanelTitle, EsnExpansionPanelDescription } from './material fork/expansion-panel-header';
import * as i0 from "@angular/core";
export class EsnExpansionModule {
}
EsnExpansionModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnExpansionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EsnExpansionModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: EsnExpansionModule, declarations: [EsnAccordion,
        EsnExpansionPanel,
        EsnExpansionPanelActionRow,
        EsnExpansionPanelHeader,
        EsnExpansionPanelTitle,
        EsnExpansionPanelDescription,
        EsnExpansionPanelContent], imports: [CommonModule, MatCommonModule, CdkAccordionModule, PortalModule], exports: [EsnAccordion,
        EsnExpansionPanel,
        EsnExpansionPanelActionRow,
        EsnExpansionPanelHeader,
        EsnExpansionPanelTitle,
        EsnExpansionPanelDescription,
        EsnExpansionPanelContent] });
EsnExpansionModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnExpansionModule, imports: [CommonModule, MatCommonModule, CdkAccordionModule, PortalModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnExpansionModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, MatCommonModule, CdkAccordionModule, PortalModule],
                    exports: [
                        EsnAccordion,
                        EsnExpansionPanel,
                        EsnExpansionPanelActionRow,
                        EsnExpansionPanelHeader,
                        EsnExpansionPanelTitle,
                        EsnExpansionPanelDescription,
                        EsnExpansionPanelContent,
                    ],
                    declarations: [
                        EsnAccordion,
                        EsnExpansionPanel,
                        EsnExpansionPanelActionRow,
                        EsnExpansionPanelHeader,
                        EsnExpansionPanelTitle,
                        EsnExpansionPanelDescription,
                        EsnExpansionPanelContent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2V4cGFuc2lvbi9leHBhbnNpb24tbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxzQkFBc0IsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOztBQXdCdkksTUFBTSxPQUFPLGtCQUFrQjs7Z0hBQWxCLGtCQUFrQjtpSEFBbEIsa0JBQWtCLGlCQVQzQixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLDBCQUEwQjtRQUMxQix1QkFBdUI7UUFDdkIsc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUM1Qix3QkFBd0IsYUFqQmhCLFlBQVksRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxhQUV2RSxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLDBCQUEwQjtRQUMxQix1QkFBdUI7UUFDdkIsc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUM1Qix3QkFBd0I7aUhBWWYsa0JBQWtCLFlBcEJuQixZQUFZLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLFlBQVk7NEZBb0I5RCxrQkFBa0I7a0JBckI5QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDO29CQUMxRSxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixpQkFBaUI7d0JBQ2pCLDBCQUEwQjt3QkFDMUIsdUJBQXVCO3dCQUN2QixzQkFBc0I7d0JBQ3RCLDRCQUE0Qjt3QkFDNUIsd0JBQXdCO3FCQUN6QjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osWUFBWTt3QkFDWixpQkFBaUI7d0JBQ2pCLDBCQUEwQjt3QkFDMUIsdUJBQXVCO3dCQUN2QixzQkFBc0I7d0JBQ3RCLDRCQUE0Qjt3QkFDNUIsd0JBQXdCO3FCQUN6QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtDZGtBY2NvcmRpb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hY2NvcmRpb24nO1xyXG5pbXBvcnQge1BvcnRhbE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYXRDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5pbXBvcnQgeyBFc25BY2NvcmRpb24gfSBmcm9tICcuL21hdGVyaWFsIGZvcmsvYWNjb3JkaW9uJztcclxuaW1wb3J0IHsgRXNuRXhwYW5zaW9uUGFuZWwsIEVzbkV4cGFuc2lvblBhbmVsQWN0aW9uUm93IH0gZnJvbSAnLi9tYXRlcmlhbCBmb3JrL2V4cGFuc2lvbi1wYW5lbCc7XHJcbmltcG9ydCB7IEVzbkV4cGFuc2lvblBhbmVsQ29udGVudCB9IGZyb20gJy4vbWF0ZXJpYWwgZm9yay9leHBhbnNpb24tcGFuZWwtY29udGVudCc7XHJcbmltcG9ydCB7IEVzbkV4cGFuc2lvblBhbmVsSGVhZGVyLCBFc25FeHBhbnNpb25QYW5lbFRpdGxlLCBFc25FeHBhbnNpb25QYW5lbERlc2NyaXB0aW9uIH0gZnJvbSAnLi9tYXRlcmlhbCBmb3JrL2V4cGFuc2lvbi1wYW5lbC1oZWFkZXInO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTWF0Q29tbW9uTW9kdWxlLCBDZGtBY2NvcmRpb25Nb2R1bGUsIFBvcnRhbE1vZHVsZV0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRXNuQWNjb3JkaW9uLFxyXG4gICAgRXNuRXhwYW5zaW9uUGFuZWwsXHJcbiAgICBFc25FeHBhbnNpb25QYW5lbEFjdGlvblJvdyxcclxuICAgIEVzbkV4cGFuc2lvblBhbmVsSGVhZGVyLFxyXG4gICAgRXNuRXhwYW5zaW9uUGFuZWxUaXRsZSxcclxuICAgIEVzbkV4cGFuc2lvblBhbmVsRGVzY3JpcHRpb24sXHJcbiAgICBFc25FeHBhbnNpb25QYW5lbENvbnRlbnQsXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEVzbkFjY29yZGlvbixcclxuICAgIEVzbkV4cGFuc2lvblBhbmVsLFxyXG4gICAgRXNuRXhwYW5zaW9uUGFuZWxBY3Rpb25Sb3csXHJcbiAgICBFc25FeHBhbnNpb25QYW5lbEhlYWRlcixcclxuICAgIEVzbkV4cGFuc2lvblBhbmVsVGl0bGUsXHJcbiAgICBFc25FeHBhbnNpb25QYW5lbERlc2NyaXB0aW9uLFxyXG4gICAgRXNuRXhwYW5zaW9uUGFuZWxDb250ZW50LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25FeHBhbnNpb25Nb2R1bGUge31cclxuIl19