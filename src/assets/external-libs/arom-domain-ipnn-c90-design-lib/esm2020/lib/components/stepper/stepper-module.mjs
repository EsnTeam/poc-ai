/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { PortalModule } from '@angular/cdk/portal';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorStateMatcher, MatCommonModule, MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { EsnStepHeader } from './step-header';
import { EsnStepLabel } from './step-label';
import { EsnStep, EsnStepper } from './stepper';
import { EsnStepperNext, EsnStepperPrevious } from './stepper-button';
import { EsnStepperIcon } from './stepper-icon';
import { ESN_STEPPER_INTL_PROVIDER } from './stepper-intl';
import { EsnStepContent } from './step-content';
import { EsnIconModule } from "../icon/icon.module";
import * as i0 from "@angular/core";
export class EsnStepperModule {
}
EsnStepperModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnStepperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EsnStepperModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: EsnStepperModule, declarations: [EsnStep,
        EsnStepLabel,
        EsnStepper,
        EsnStepperNext,
        EsnStepperPrevious,
        EsnStepHeader,
        EsnStepperIcon,
        EsnStepContent], imports: [MatCommonModule,
        CommonModule,
        PortalModule,
        CdkStepperModule,
        MatIconModule,
        MatRippleModule,
        EsnIconModule], exports: [MatCommonModule,
        EsnStep,
        EsnStepLabel,
        EsnStepper,
        EsnStepperNext,
        EsnStepperPrevious,
        EsnStepHeader,
        EsnStepperIcon,
        EsnStepContent] });
EsnStepperModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnStepperModule, providers: [ESN_STEPPER_INTL_PROVIDER, ErrorStateMatcher], imports: [MatCommonModule,
        CommonModule,
        PortalModule,
        CdkStepperModule,
        MatIconModule,
        MatRippleModule,
        EsnIconModule, MatCommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnStepperModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        MatCommonModule,
                        CommonModule,
                        PortalModule,
                        CdkStepperModule,
                        MatIconModule,
                        MatRippleModule,
                        EsnIconModule,
                    ],
                    exports: [
                        MatCommonModule,
                        EsnStep,
                        EsnStepLabel,
                        EsnStepper,
                        EsnStepperNext,
                        EsnStepperPrevious,
                        EsnStepHeader,
                        EsnStepperIcon,
                        EsnStepContent,
                    ],
                    declarations: [
                        EsnStep,
                        EsnStepLabel,
                        EsnStepper,
                        EsnStepperNext,
                        EsnStepperPrevious,
                        EsnStepHeader,
                        EsnStepperIcon,
                        EsnStepContent,
                    ],
                    providers: [ESN_STEPPER_INTL_PROVIDER, ErrorStateMatcher],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9zdGVwcGVyL3N0ZXBwZXItbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzNGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDOUMsT0FBTyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ3BFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHFCQUFxQixDQUFDOztBQW1DbEQsTUFBTSxPQUFPLGdCQUFnQjs7OEdBQWhCLGdCQUFnQjsrR0FBaEIsZ0JBQWdCLGlCQVh6QixPQUFPO1FBQ1AsWUFBWTtRQUNaLFVBQVU7UUFDVixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixjQUFjO1FBQ2QsY0FBYyxhQTNCZCxlQUFlO1FBQ2YsWUFBWTtRQUNaLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLGVBQWU7UUFDZixhQUFhLGFBR2IsZUFBZTtRQUNmLE9BQU87UUFDUCxZQUFZO1FBQ1osVUFBVTtRQUNWLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGNBQWM7UUFDZCxjQUFjOytHQWNMLGdCQUFnQixhQUZoQixDQUFDLHlCQUF5QixFQUFFLGlCQUFpQixDQUFDLFlBN0J2RCxlQUFlO1FBQ2YsWUFBWTtRQUNaLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLGVBQWU7UUFDZixhQUFhLEVBR2IsZUFBZTs0RkFzQk4sZ0JBQWdCO2tCQWpDNUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsZUFBZTt3QkFDZixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsYUFBYTtxQkFDZDtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsZUFBZTt3QkFDZixPQUFPO3dCQUNQLFlBQVk7d0JBQ1osVUFBVTt3QkFDVixjQUFjO3dCQUNkLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGNBQWM7cUJBQ2Y7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLE9BQU87d0JBQ1AsWUFBWTt3QkFDWixVQUFVO3dCQUNWLGNBQWM7d0JBQ2Qsa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsY0FBYztxQkFDZjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxpQkFBaUIsQ0FBQztpQkFDMUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4gKi9cclxuXHJcbmltcG9ydCB7UG9ydGFsTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHtDZGtTdGVwcGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvc3RlcHBlcic7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtFcnJvclN0YXRlTWF0Y2hlciwgTWF0Q29tbW9uTW9kdWxlLCBNYXRSaXBwbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQge0VzblN0ZXBIZWFkZXJ9IGZyb20gJy4vc3RlcC1oZWFkZXInO1xyXG5pbXBvcnQge0VzblN0ZXBMYWJlbH0gZnJvbSAnLi9zdGVwLWxhYmVsJztcclxuaW1wb3J0IHtFc25TdGVwLCBFc25TdGVwcGVyfSBmcm9tICcuL3N0ZXBwZXInO1xyXG5pbXBvcnQge0VzblN0ZXBwZXJOZXh0LCBFc25TdGVwcGVyUHJldmlvdXN9IGZyb20gJy4vc3RlcHBlci1idXR0b24nO1xyXG5pbXBvcnQge0VzblN0ZXBwZXJJY29ufSBmcm9tICcuL3N0ZXBwZXItaWNvbic7XHJcbmltcG9ydCB7RVNOX1NURVBQRVJfSU5UTF9QUk9WSURFUn0gZnJvbSAnLi9zdGVwcGVyLWludGwnO1xyXG5pbXBvcnQge0VzblN0ZXBDb250ZW50fSBmcm9tICcuL3N0ZXAtY29udGVudCc7XHJcbmltcG9ydCB7RXNuSWNvbk1vZHVsZX0gZnJvbSBcIi4uL2ljb24vaWNvbi5tb2R1bGVcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTWF0Q29tbW9uTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgUG9ydGFsTW9kdWxlLFxyXG4gICAgQ2RrU3RlcHBlck1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBNYXRSaXBwbGVNb2R1bGUsXHJcbiAgICBFc25JY29uTW9kdWxlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTWF0Q29tbW9uTW9kdWxlLFxyXG4gICAgRXNuU3RlcCxcclxuICAgIEVzblN0ZXBMYWJlbCxcclxuICAgIEVzblN0ZXBwZXIsXHJcbiAgICBFc25TdGVwcGVyTmV4dCxcclxuICAgIEVzblN0ZXBwZXJQcmV2aW91cyxcclxuICAgIEVzblN0ZXBIZWFkZXIsXHJcbiAgICBFc25TdGVwcGVySWNvbixcclxuICAgIEVzblN0ZXBDb250ZW50LFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBFc25TdGVwLFxyXG4gICAgRXNuU3RlcExhYmVsLFxyXG4gICAgRXNuU3RlcHBlcixcclxuICAgIEVzblN0ZXBwZXJOZXh0LFxyXG4gICAgRXNuU3RlcHBlclByZXZpb3VzLFxyXG4gICAgRXNuU3RlcEhlYWRlcixcclxuICAgIEVzblN0ZXBwZXJJY29uLFxyXG4gICAgRXNuU3RlcENvbnRlbnQsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtFU05fU1RFUFBFUl9JTlRMX1BST1ZJREVSLCBFcnJvclN0YXRlTWF0Y2hlcl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25TdGVwcGVyTW9kdWxlIHt9XHJcbiJdfQ==