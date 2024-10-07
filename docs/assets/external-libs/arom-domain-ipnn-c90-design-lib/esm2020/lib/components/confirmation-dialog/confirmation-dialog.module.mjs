import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationDialogComponent } from "./legacy/confirmation-dialog.component";
import { EsnDialogModule } from "../dialog/dialog.module";
import { EsnLoaderModule } from "../loader/loader.module";
import { EsnButtonModule } from "../button/button.module";
import { EsnConfirmationDialogComponent } from './confirmation-dialog.component';
import { CloseIcon, EsnIconModule, EsnIconsRegistry } from '../icon';
import * as i0 from "@angular/core";
import * as i1 from "../icon";
export class ConfirmationDialogModule {
    constructor(esnIconsRegistry) {
        this.esnIconsRegistry = esnIconsRegistry;
        this.esnIconsRegistry.registerIcons([CloseIcon]);
    }
}
ConfirmationDialogModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ConfirmationDialogModule, deps: [{ token: i1.EsnIconsRegistry }], target: i0.ɵɵFactoryTarget.NgModule });
ConfirmationDialogModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: ConfirmationDialogModule, declarations: [ConfirmationDialogComponent, EsnConfirmationDialogComponent], imports: [CommonModule,
        EsnDialogModule,
        EsnLoaderModule,
        EsnButtonModule,
        EsnIconModule], exports: [ConfirmationDialogComponent] });
ConfirmationDialogModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ConfirmationDialogModule, providers: [EsnIconsRegistry], imports: [CommonModule,
        EsnDialogModule,
        EsnLoaderModule,
        EsnButtonModule,
        EsnIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ConfirmationDialogModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ConfirmationDialogComponent, EsnConfirmationDialogComponent],
                    imports: [
                        CommonModule,
                        EsnDialogModule,
                        EsnLoaderModule,
                        EsnButtonModule,
                        EsnIconModule,
                    ],
                    exports: [ConfirmationDialogComponent],
                    providers: [EsnIconsRegistry]
                }]
        }], ctorParameters: function () { return [{ type: i1.EsnIconsRegistry }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLWRpYWxvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9jb25maXJtYXRpb24tZGlhbG9nL2NvbmZpcm1hdGlvbi1kaWFsb2cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sU0FBUyxDQUFDOzs7QUFjckUsTUFBTSxPQUFPLHdCQUF3QjtJQUNuQyxZQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDOztzSEFIVSx3QkFBd0I7dUhBQXhCLHdCQUF3QixpQkFYcEIsMkJBQTJCLEVBQUUsOEJBQThCLGFBRXhFLFlBQVk7UUFDWixlQUFlO1FBQ2YsZUFBZTtRQUNmLGVBQWU7UUFDZixhQUFhLGFBRUwsMkJBQTJCO3VIQUcxQix3QkFBd0IsYUFGeEIsQ0FBQyxnQkFBZ0IsQ0FBQyxZQVAzQixZQUFZO1FBQ1osZUFBZTtRQUNmLGVBQWU7UUFDZixlQUFlO1FBQ2YsYUFBYTs0RkFLSix3QkFBd0I7a0JBWnBDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsMkJBQTJCLEVBQUUsOEJBQThCLENBQUM7b0JBQzNFLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixlQUFlO3dCQUNmLGFBQWE7cUJBQ2Q7b0JBQ0QsT0FBTyxFQUFFLENBQUMsMkJBQTJCLENBQUM7b0JBQ3RDLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2lCQUM5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtDb25maXJtYXRpb25EaWFsb2dDb21wb25lbnR9IGZyb20gXCIuL2xlZ2FjeS9jb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0VzbkRpYWxvZ01vZHVsZX0gZnJvbSBcIi4uL2RpYWxvZy9kaWFsb2cubW9kdWxlXCI7XHJcbmltcG9ydCB7RXNuTG9hZGVyTW9kdWxlfSBmcm9tIFwiLi4vbG9hZGVyL2xvYWRlci5tb2R1bGVcIjtcclxuaW1wb3J0IHtFc25CdXR0b25Nb2R1bGV9IGZyb20gXCIuLi9idXR0b24vYnV0dG9uLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBFc25Db25maXJtYXRpb25EaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2xvc2VJY29uLCBFc25JY29uTW9kdWxlLCBFc25JY29uc1JlZ2lzdHJ5IH0gZnJvbSAnLi4vaWNvbic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0NvbmZpcm1hdGlvbkRpYWxvZ0NvbXBvbmVudCwgRXNuQ29uZmlybWF0aW9uRGlhbG9nQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBFc25EaWFsb2dNb2R1bGUsXHJcbiAgICBFc25Mb2FkZXJNb2R1bGUsXHJcbiAgICBFc25CdXR0b25Nb2R1bGUsXHJcbiAgICBFc25JY29uTW9kdWxlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW0NvbmZpcm1hdGlvbkRpYWxvZ0NvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbRXNuSWNvbnNSZWdpc3RyeV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvbkRpYWxvZ01vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlc25JY29uc1JlZ2lzdHJ5OiBFc25JY29uc1JlZ2lzdHJ5KSB7XHJcbiAgICB0aGlzLmVzbkljb25zUmVnaXN0cnkucmVnaXN0ZXJJY29ucyhbQ2xvc2VJY29uXSk7XHJcbiAgfVxyXG4gfVxyXG4iXX0=