import { ChangeDetectionStrategy, Component, ContentChildren, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MAT_OPTGROUP } from "@angular/material/core";
import { EsnOption } from "../option/option.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/core";
export class EsnOptionGroup {
    constructor(cdr) {
        this.cdr = cdr;
        this.disabled = false;
    }
    get viewValue() {
        return this.optTempVar;
    }
    ngAfterViewChecked() {
        if (!this.options || !this.options?.length) {
            this.options = this.optionsList.map(x => {
                return { value: x.value, viewValue: x.viewValue, disabled: x.disabled };
            });
            this.cdr.detectChanges();
        }
    }
}
EsnOptionGroup.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnOptionGroup, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
EsnOptionGroup.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnOptionGroup, selector: "esn-optgroup", inputs: { label: "label", disabled: "disabled" }, providers: [{ provide: MAT_OPTGROUP, useExisting: EsnOptionGroup }], queries: [{ propertyName: "optionsList", predicate: EsnOption, descendants: true }], viewQueries: [{ propertyName: "optTempVar", first: true, predicate: TemplateRef, descendants: true }], ngImport: i0, template: "<ng-template>\r\n    <mat-option *ngFor=\"let opt of options\" [value]=\"opt.value\" [disabled]=\"opt.disabled\">\r\n      <ng-container [ngTemplateOutlet]=\"opt.viewValue\" [ngTemplateOutletContext]=\"{}\"></ng-container>\r\n    </mat-option>\r\n</ng-template>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2.MatOption, selector: "mat-option", exportAs: ["matOption"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnOptionGroup, decorators: [{
            type: Component,
            args: [{ selector: 'esn-optgroup', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [{ provide: MAT_OPTGROUP, useExisting: EsnOptionGroup }], template: "<ng-template>\r\n    <mat-option *ngFor=\"let opt of options\" [value]=\"opt.value\" [disabled]=\"opt.disabled\">\r\n      <ng-container [ngTemplateOutlet]=\"opt.viewValue\" [ngTemplateOutletContext]=\"{}\"></ng-container>\r\n    </mat-option>\r\n</ng-template>\r\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { optTempVar: [{
                type: ViewChild,
                args: [TemplateRef]
            }], optionsList: [{
                type: ContentChildren,
                args: [EsnOption, { descendants: true }]
            }], label: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL3NlbGVjdC9vcHRpb24tZ3JvdXAvb3B0aW9uLWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL3NlbGVjdC9vcHRpb24tZ3JvdXAvb3B0aW9uLWdyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFVSx1QkFBdUIsRUFDdEMsU0FBUyxFQUNULGVBQWUsRUFDZixLQUFLLEVBRUwsV0FBVyxFQUNYLFNBQVMsRUFBRSxpQkFBaUIsRUFDN0IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3BELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQVdyRCxNQUFNLE9BQU8sY0FBYztJQWF6QixZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVJqQyxhQUFRLEdBQUcsS0FBSyxDQUFDO0lBUW1CLENBQUM7SUFOOUMsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFNRCxrQkFBa0I7UUFDaEIsSUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRTtZQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN0QyxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMxRSxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs0R0F0QlUsY0FBYztnR0FBZCxjQUFjLHlGQUZkLENBQUMsRUFBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUMsQ0FBQyxzREFJOUMsU0FBUyw0RkFEakIsV0FBVyxnREN2QnhCLDJRQUtBOzRGRGlCYSxjQUFjO2tCQVIxQixTQUFTOytCQUNFLGNBQWMsaUJBR1QsaUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTSxhQUNwQyxDQUFDLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLGdCQUFnQixFQUFDLENBQUM7d0dBR3pDLFVBQVU7c0JBQWpDLFNBQVM7dUJBQUMsV0FBVztnQkFDNkIsV0FBVztzQkFBM0QsZUFBZTt1QkFBQyxTQUFTLEVBQUUsRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFDO2dCQUV4QyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcclxuICBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBJbnB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01BVF9PUFRHUk9VUH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmVcIjtcclxuaW1wb3J0IHtFc25PcHRpb259IGZyb20gXCIuLi9vcHRpb24vb3B0aW9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1Byb2plY3Rpb25SZWZNb2RlbH0gZnJvbSBcIi4uL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Vzbi1vcHRncm91cCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL29wdGlvbi1ncm91cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vb3B0aW9uLWdyb3VwLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogTUFUX09QVEdST1VQLCB1c2VFeGlzdGluZzogRXNuT3B0aW9uR3JvdXB9XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuT3B0aW9uR3JvdXAgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2Vke1xyXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIG9wdFRlbXBWYXI6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICBAQ29udGVudENoaWxkcmVuKEVzbk9wdGlvbiwge2Rlc2NlbmRhbnRzOiB0cnVlfSkgb3B0aW9uc0xpc3Q6IFF1ZXJ5TGlzdDxFc25PcHRpb24+O1xyXG5cclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gIGdldCB2aWV3VmFsdWUoKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRUZW1wVmFyO1xyXG4gIH1cclxuXHJcbiAgb3B0aW9uczogUHJvamVjdGlvblJlZk1vZGVsW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgaWYoIXRoaXMub3B0aW9ucyB8fCAhdGhpcy5vcHRpb25zPy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zTGlzdC5tYXAoeCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHgudmFsdWUsIHZpZXdWYWx1ZTogeC52aWV3VmFsdWUsIGRpc2FibGVkOiB4LmRpc2FibGVkIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxuZy10ZW1wbGF0ZT5cclxuICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBvcHQgb2Ygb3B0aW9uc1wiIFt2YWx1ZV09XCJvcHQudmFsdWVcIiBbZGlzYWJsZWRdPVwib3B0LmRpc2FibGVkXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwib3B0LnZpZXdWYWx1ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7fVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9tYXQtb3B0aW9uPlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=