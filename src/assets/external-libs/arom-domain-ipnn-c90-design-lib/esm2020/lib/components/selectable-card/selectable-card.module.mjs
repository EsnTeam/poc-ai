import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EsnSelectableCardGroup } from './selectable-card-group';
import { EsnSelectableCard, EsnSelectableCardIllustration, EsnSelectableCardText, } from './selectable-card/selectable-card';
import { EsnIconModule } from '../icon/icon.module';
import * as i0 from "@angular/core";
export class EsnSelectableCardModule {
}
EsnSelectableCardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSelectableCardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EsnSelectableCardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: EsnSelectableCardModule, declarations: [EsnSelectableCard,
        EsnSelectableCardGroup,
        EsnSelectableCardText,
        EsnSelectableCardIllustration], imports: [CommonModule, EsnIconModule], exports: [EsnSelectableCard,
        EsnSelectableCardGroup,
        EsnSelectableCardText,
        EsnSelectableCardIllustration] });
EsnSelectableCardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSelectableCardModule, imports: [CommonModule, EsnIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSelectableCardModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, EsnIconModule],
                    declarations: [
                        EsnSelectableCard,
                        EsnSelectableCardGroup,
                        EsnSelectableCardText,
                        EsnSelectableCardIllustration,
                    ],
                    exports: [
                        EsnSelectableCard,
                        EsnSelectableCardGroup,
                        EsnSelectableCardText,
                        EsnSelectableCardIllustration,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0YWJsZS1jYXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL3NlbGVjdGFibGUtY2FyZC9zZWxlY3RhYmxlLWNhcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pFLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsNkJBQTZCLEVBQzdCLHFCQUFxQixHQUN0QixNQUFNLG1DQUFtQyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFpQnBELE1BQU0sT0FBTyx1QkFBdUI7O3FIQUF2Qix1QkFBdUI7c0hBQXZCLHVCQUF1QixpQkFaaEMsaUJBQWlCO1FBQ2pCLHNCQUFzQjtRQUN0QixxQkFBcUI7UUFDckIsNkJBQTZCLGFBTHJCLFlBQVksRUFBRSxhQUFhLGFBUW5DLGlCQUFpQjtRQUNqQixzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLDZCQUE2QjtzSEFHcEIsdUJBQXVCLFlBZHhCLFlBQVksRUFBRSxhQUFhOzRGQWMxQix1QkFBdUI7a0JBZm5DLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztvQkFDdEMsWUFBWSxFQUFFO3dCQUNaLGlCQUFpQjt3QkFDakIsc0JBQXNCO3dCQUN0QixxQkFBcUI7d0JBQ3JCLDZCQUE2QjtxQkFDOUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGlCQUFpQjt3QkFDakIsc0JBQXNCO3dCQUN0QixxQkFBcUI7d0JBQ3JCLDZCQUE2QjtxQkFDOUI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFc25TZWxlY3RhYmxlQ2FyZEdyb3VwIH0gZnJvbSAnLi9zZWxlY3RhYmxlLWNhcmQtZ3JvdXAnO1xyXG5pbXBvcnQge1xyXG4gIEVzblNlbGVjdGFibGVDYXJkLFxyXG4gIEVzblNlbGVjdGFibGVDYXJkSWxsdXN0cmF0aW9uLFxyXG4gIEVzblNlbGVjdGFibGVDYXJkVGV4dCxcclxufSBmcm9tICcuL3NlbGVjdGFibGUtY2FyZC9zZWxlY3RhYmxlLWNhcmQnO1xyXG5pbXBvcnQgeyBFc25JY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pY29uLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEVzbkljb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRXNuU2VsZWN0YWJsZUNhcmQsXHJcbiAgICBFc25TZWxlY3RhYmxlQ2FyZEdyb3VwLFxyXG4gICAgRXNuU2VsZWN0YWJsZUNhcmRUZXh0LFxyXG4gICAgRXNuU2VsZWN0YWJsZUNhcmRJbGx1c3RyYXRpb24sXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBFc25TZWxlY3RhYmxlQ2FyZCxcclxuICAgIEVzblNlbGVjdGFibGVDYXJkR3JvdXAsXHJcbiAgICBFc25TZWxlY3RhYmxlQ2FyZFRleHQsXHJcbiAgICBFc25TZWxlY3RhYmxlQ2FyZElsbHVzdHJhdGlvbixcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuU2VsZWN0YWJsZUNhcmRNb2R1bGUge31cclxuIl19