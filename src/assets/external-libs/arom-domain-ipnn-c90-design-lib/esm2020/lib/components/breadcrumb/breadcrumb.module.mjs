import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsnBreadcrumb } from './breadcrumb.component';
import { RouterModule } from '@angular/router';
import { EsnButtonModule } from '../button/button.module';
import { EsnIconModule } from "../icon/icon.module";
import { EsnResponsiveModule } from '../../utils/services/responsive/responsive.module';
import * as i0 from "@angular/core";
export class EsnBreadcrumbModule {
}
EsnBreadcrumbModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnBreadcrumbModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EsnBreadcrumbModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: EsnBreadcrumbModule, declarations: [EsnBreadcrumb], imports: [CommonModule, RouterModule, EsnButtonModule, EsnIconModule, EsnResponsiveModule], exports: [EsnBreadcrumb] });
EsnBreadcrumbModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnBreadcrumbModule, imports: [CommonModule, RouterModule, EsnButtonModule, EsnIconModule, EsnResponsiveModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnBreadcrumbModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [EsnBreadcrumb],
                    imports: [CommonModule, RouterModule, EsnButtonModule, EsnIconModule, EsnResponsiveModule],
                    exports: [EsnBreadcrumb],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzFELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtREFBbUQsQ0FBQzs7QUFPeEYsTUFBTSxPQUFPLG1CQUFtQjs7aUhBQW5CLG1CQUFtQjtrSEFBbkIsbUJBQW1CLGlCQUpmLGFBQWEsYUFDaEIsWUFBWSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixhQUNqRixhQUFhO2tIQUVaLG1CQUFtQixZQUhsQixZQUFZLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsbUJBQW1COzRGQUdoRixtQkFBbUI7a0JBTC9CLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsYUFBYSxDQUFDO29CQUMzQixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsbUJBQW1CLENBQUM7b0JBQzVGLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztpQkFDekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBFc25CcmVhZGNydW1iIH0gZnJvbSAnLi9icmVhZGNydW1iLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEVzbkJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbi9idXR0b24ubW9kdWxlJztcclxuaW1wb3J0IHtFc25JY29uTW9kdWxlfSBmcm9tIFwiLi4vaWNvbi9pY29uLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBFc25SZXNwb25zaXZlTW9kdWxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2VydmljZXMvcmVzcG9uc2l2ZS9yZXNwb25zaXZlLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0VzbkJyZWFkY3J1bWJdLFxyXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlLCBFc25CdXR0b25Nb2R1bGUsIEVzbkljb25Nb2R1bGUsIEVzblJlc3BvbnNpdmVNb2R1bGVdLFxyXG4gIGV4cG9ydHM6IFtFc25CcmVhZGNydW1iXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzbkJyZWFkY3J1bWJNb2R1bGUge31cclxuIl19