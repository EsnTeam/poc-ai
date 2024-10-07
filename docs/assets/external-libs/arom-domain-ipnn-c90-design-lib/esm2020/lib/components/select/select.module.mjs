import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsnSelect } from './select/select.component';
import { EsnOption } from './option/option.component';
import { MatSelectModule } from "@angular/material/select";
import { EsnSelectTrigger } from './select-trigger/select-trigger.component';
import { ReactiveFormsModule } from "@angular/forms";
import { EsnOptionGroup } from './option-group/option-group.component';
import { OverlayModule } from "@angular/cdk/overlay";
import * as i0 from "@angular/core";
export class EsnSelectModule {
}
EsnSelectModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EsnSelectModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: EsnSelectModule, declarations: [EsnSelect,
        EsnOption,
        EsnSelectTrigger,
        EsnOptionGroup], imports: [CommonModule,
        MatSelectModule,
        ReactiveFormsModule,
        OverlayModule], exports: [EsnSelect,
        EsnOption,
        EsnOptionGroup,
        EsnSelectTrigger] });
EsnSelectModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSelectModule, imports: [CommonModule,
        MatSelectModule,
        ReactiveFormsModule,
        OverlayModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSelectModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        EsnSelect,
                        EsnOption,
                        EsnSelectTrigger,
                        EsnOptionGroup
                    ],
                    imports: [
                        CommonModule,
                        MatSelectModule,
                        ReactiveFormsModule,
                        OverlayModule
                    ],
                    exports: [
                        EsnSelect,
                        EsnOption,
                        EsnOptionGroup,
                        EsnSelectTrigger
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7O0FBd0JuRCxNQUFNLE9BQU8sZUFBZTs7NkdBQWYsZUFBZTs4R0FBZixlQUFlLGlCQWxCeEIsU0FBUztRQUNULFNBQVM7UUFDVCxnQkFBZ0I7UUFDaEIsY0FBYyxhQUdkLFlBQVk7UUFDWixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGFBQWEsYUFHYixTQUFTO1FBQ1QsU0FBUztRQUNULGNBQWM7UUFDZCxnQkFBZ0I7OEdBR1AsZUFBZSxZQVp4QixZQUFZO1FBQ1osZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixhQUFhOzRGQVNKLGVBQWU7a0JBcEIzQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixTQUFTO3dCQUNULFNBQVM7d0JBQ1QsZ0JBQWdCO3dCQUNoQixjQUFjO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQixhQUFhO3FCQUNkO29CQUNELE9BQU8sRUFBRTt3QkFDUCxTQUFTO3dCQUNULFNBQVM7d0JBQ1QsY0FBYzt3QkFDZCxnQkFBZ0I7cUJBQ2pCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRXNuU2VsZWN0IH0gZnJvbSAnLi9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVzbk9wdGlvbiB9IGZyb20gJy4vb3B0aW9uL29wdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NlbGVjdFwiO1xyXG5pbXBvcnQgeyBFc25TZWxlY3RUcmlnZ2VyIH0gZnJvbSAnLi9zZWxlY3QtdHJpZ2dlci9zZWxlY3QtdHJpZ2dlci5jb21wb25lbnQnO1xyXG5pbXBvcnQge1JlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBFc25PcHRpb25Hcm91cCB9IGZyb20gJy4vb3B0aW9uLWdyb3VwL29wdGlvbi1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQge092ZXJsYXlNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jZGsvb3ZlcmxheVwiO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRXNuU2VsZWN0LFxyXG4gICAgRXNuT3B0aW9uLFxyXG4gICAgRXNuU2VsZWN0VHJpZ2dlcixcclxuICAgIEVzbk9wdGlvbkdyb3VwXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNYXRTZWxlY3RNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgT3ZlcmxheU1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRXNuU2VsZWN0LFxyXG4gICAgRXNuT3B0aW9uLFxyXG4gICAgRXNuT3B0aW9uR3JvdXAsXHJcbiAgICBFc25TZWxlY3RUcmlnZ2VyXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzblNlbGVjdE1vZHVsZSB7IH1cclxuIl19