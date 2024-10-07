import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsnTooltip } from './tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TooltipDirective } from './tooltip.directive';
import { OverlayModule } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
export class EsnTooltipModule {
}
EsnTooltipModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnTooltipModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EsnTooltipModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: EsnTooltipModule, declarations: [TooltipDirective], imports: [CommonModule, MatTooltipModule, OverlayModule], exports: [TooltipDirective] });
EsnTooltipModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnTooltipModule, providers: [EsnTooltip], imports: [CommonModule, MatTooltipModule, OverlayModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnTooltipModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TooltipDirective],
                    imports: [CommonModule, MatTooltipModule, OverlayModule],
                    exports: [TooltipDirective],
                    providers: [EsnTooltip],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdkMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQVFyRCxNQUFNLE9BQU8sZ0JBQWdCOzs4R0FBaEIsZ0JBQWdCOytHQUFoQixnQkFBZ0IsaUJBTFosZ0JBQWdCLGFBQ3JCLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLGFBQzdDLGdCQUFnQjsrR0FHZixnQkFBZ0IsYUFGaEIsQ0FBQyxVQUFVLENBQUMsWUFGYixZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYTs0RkFJNUMsZ0JBQWdCO2tCQU41QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUNoQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDO29CQUN4RCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDM0IsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO2lCQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEVzblRvb2x0aXAgfSBmcm9tICcuL3Rvb2x0aXAnO1xyXG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XHJcbmltcG9ydCB7IFRvb2x0aXBEaXJlY3RpdmUgfSBmcm9tICcuL3Rvb2x0aXAuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbVG9vbHRpcERpcmVjdGl2ZV0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTWF0VG9vbHRpcE1vZHVsZSwgT3ZlcmxheU1vZHVsZV0sXHJcbiAgZXhwb3J0czogW1Rvb2x0aXBEaXJlY3RpdmVdLFxyXG4gIHByb3ZpZGVyczogW0VzblRvb2x0aXBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuVG9vbHRpcE1vZHVsZSB7fVxyXG4iXX0=