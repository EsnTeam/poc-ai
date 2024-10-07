import { NgModule } from '@angular/core';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { EsnMenu } from "./menu";
import { EsnMenuContent } from "./menu-content";
import { EsnMenuItem } from "./menu-item";
import { ESN_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER, EsnMenuTrigger } from "./menu-trigger";
import { MatCommonModule, MatRippleModule } from "@angular/material/core";
import { OverlayModule } from "@angular/cdk/overlay";
import { CdkScrollableModule } from "@angular/cdk/scrolling";
import * as i0 from "@angular/core";
export class EsnMenuModule {
}
EsnMenuModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EsnMenuModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: EsnMenuModule, declarations: [EsnMenu, EsnMenuItem, EsnMenuContent, EsnMenuTrigger], imports: [MatRippleModule, MatCommonModule, CommonModule, OverlayModule, NgClass, NgIf], exports: [CdkScrollableModule,
        EsnMenu,
        MatCommonModule,
        EsnMenuItem,
        EsnMenuContent,
        EsnMenuTrigger] });
EsnMenuModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnMenuModule, providers: [ESN_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [MatRippleModule, MatCommonModule, CommonModule, OverlayModule, CdkScrollableModule,
        MatCommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnMenuModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [EsnMenu, EsnMenuItem, EsnMenuContent, EsnMenuTrigger],
                    imports: [MatRippleModule, MatCommonModule, CommonModule, OverlayModule, NgClass, NgIf],
                    exports: [
                        CdkScrollableModule,
                        EsnMenu,
                        MatCommonModule,
                        EsnMenuItem,
                        EsnMenuContent,
                        EsnMenuTrigger
                    ],
                    providers: [ESN_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9tZW51L21lbnUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUMvQixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUMseUNBQXlDLEVBQUUsY0FBYyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekYsT0FBTyxFQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7O0FBYTNELE1BQU0sT0FBTyxhQUFhOzsyR0FBYixhQUFhOzRHQUFiLGFBQWEsaUJBVlQsT0FBTyxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsY0FBYyxhQUN6RCxlQUFlLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLElBQUksYUFFcEYsbUJBQW1CO1FBQ25CLE9BQU87UUFDUCxlQUFlO1FBQ2YsV0FBVztRQUNYLGNBQWM7UUFDZCxjQUFjOzRHQUVMLGFBQWEsYUFEYixDQUFDLHlDQUF5QyxDQUFDLFlBUjVDLGVBQWUsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFFckUsbUJBQW1CO1FBRW5CLGVBQWU7NEZBS04sYUFBYTtrQkFYekIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUM7b0JBQ3BFLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDO29CQUN2RixPQUFPLEVBQUU7d0JBQ1AsbUJBQW1CO3dCQUNuQixPQUFPO3dCQUNQLGVBQWU7d0JBQ2YsV0FBVzt3QkFDWCxjQUFjO3dCQUNkLGNBQWM7cUJBQUM7b0JBQ2pCLFNBQVMsRUFBRSxDQUFDLHlDQUF5QyxDQUFDO2lCQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGUsIE5nQ2xhc3MsIE5nSWZ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7RXNuTWVudX0gZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQge0Vzbk1lbnVDb250ZW50fSBmcm9tIFwiLi9tZW51LWNvbnRlbnRcIjtcclxuaW1wb3J0IHtFc25NZW51SXRlbX0gZnJvbSBcIi4vbWVudS1pdGVtXCI7XHJcbmltcG9ydCB7RVNOX01FTlVfU0NST0xMX1NUUkFURUdZX0ZBQ1RPUllfUFJPVklERVIsIEVzbk1lbnVUcmlnZ2VyfSBmcm9tIFwiLi9tZW51LXRyaWdnZXJcIjtcclxuaW1wb3J0IHtNYXRDb21tb25Nb2R1bGUsIE1hdFJpcHBsZU1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmVcIjtcclxuaW1wb3J0IHtPdmVybGF5TW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL292ZXJsYXlcIjtcclxuaW1wb3J0IHtDZGtTY3JvbGxhYmxlTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL3Njcm9sbGluZ1wiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtFc25NZW51LCBFc25NZW51SXRlbSwgRXNuTWVudUNvbnRlbnQsIEVzbk1lbnVUcmlnZ2VyXSxcclxuICBpbXBvcnRzOiBbTWF0UmlwcGxlTW9kdWxlLCBNYXRDb21tb25Nb2R1bGUsIENvbW1vbk1vZHVsZSwgT3ZlcmxheU1vZHVsZSwgTmdDbGFzcywgTmdJZl0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQ2RrU2Nyb2xsYWJsZU1vZHVsZSxcclxuICAgIEVzbk1lbnUsXHJcbiAgICBNYXRDb21tb25Nb2R1bGUsXHJcbiAgICBFc25NZW51SXRlbSxcclxuICAgIEVzbk1lbnVDb250ZW50LFxyXG4gICAgRXNuTWVudVRyaWdnZXJdLFxyXG4gIHByb3ZpZGVyczogW0VTTl9NRU5VX1NDUk9MTF9TVFJBVEVHWV9GQUNUT1JZX1BST1ZJREVSXSx9KVxyXG5leHBvcnQgY2xhc3MgRXNuTWVudU1vZHVsZSB7IH1cclxuIl19