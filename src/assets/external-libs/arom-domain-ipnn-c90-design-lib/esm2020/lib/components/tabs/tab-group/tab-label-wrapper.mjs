import { Directive } from "@angular/core";
import { _MatTabLabelWrapperBase } from "@angular/material/tabs";
import { mixinInkBarItem } from "../ink-bar";
import * as i0 from "@angular/core";
const _MatTabLabelWrapperBaseWithInkBarItem = mixinInkBarItem(_MatTabLabelWrapperBase);
export class MatTabLabelWrapper extends _MatTabLabelWrapperBaseWithInkBarItem {
}
MatTabLabelWrapper.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MatTabLabelWrapper, deps: null, target: i0.ɵɵFactoryTarget.Directive });
MatTabLabelWrapper.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: MatTabLabelWrapper, selector: "[matTabLabelWrapper]", inputs: { disabled: "disabled", fitInkBarToContent: "fitInkBarToContent" }, host: { properties: { "class.mat-mdc-tab-disabled": "disabled", "attr.aria-disabled": "!!disabled" } }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MatTabLabelWrapper, decorators: [{
            type: Directive,
            args: [{
                    selector: '[matTabLabelWrapper]',
                    inputs: ['disabled', 'fitInkBarToContent'],
                    host: {
                        '[class.mat-mdc-tab-disabled]': 'disabled',
                        '[attr.aria-disabled]': '!!disabled',
                    },
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWxhYmVsLXdyYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy90YWJzL3RhYi1ncm91cC90YWItbGFiZWwtd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sZUFBZSxDQUFDO0FBRXRELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2pFLE9BQU8sRUFBaUIsZUFBZSxFQUFFLE1BQU0sWUFBWSxDQUFDOztBQUc1RCxNQUFNLHFDQUFxQyxHQUFHLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBWXZGLE1BQU0sT0FBTyxrQkFDWCxTQUFRLHFDQUFxQzs7Z0hBRGxDLGtCQUFrQjtvR0FBbEIsa0JBQWtCOzRGQUFsQixrQkFBa0I7a0JBUjlCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLG9CQUFvQixDQUFDO29CQUMxQyxJQUFJLEVBQUU7d0JBQ0osOEJBQThCLEVBQUUsVUFBVTt3QkFDMUMsc0JBQXNCLEVBQUUsWUFBWTtxQkFDckM7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDYW5EaXNhYmxlLCBtaXhpbkRpc2FibGVkIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmVcIjtcclxuaW1wb3J0IHsgX01hdFRhYkxhYmVsV3JhcHBlckJhc2UgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdGFic1wiO1xyXG5pbXBvcnQgeyBNYXRJbmtCYXJJdGVtLCBtaXhpbklua0Jhckl0ZW0gfSBmcm9tIFwiLi4vaW5rLWJhclwiO1xyXG5cclxuXHJcbmNvbnN0IF9NYXRUYWJMYWJlbFdyYXBwZXJCYXNlV2l0aElua0Jhckl0ZW0gPSBtaXhpbklua0Jhckl0ZW0oX01hdFRhYkxhYmVsV3JhcHBlckJhc2UpO1xyXG5cclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1ttYXRUYWJMYWJlbFdyYXBwZXJdJyxcclxuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnZml0SW5rQmFyVG9Db250ZW50J10sXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5tYXQtbWRjLXRhYi1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxyXG4gICAgJ1thdHRyLmFyaWEtZGlzYWJsZWRdJzogJyEhZGlzYWJsZWQnLFxyXG4gIH0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRUYWJMYWJlbFdyYXBwZXJcclxuICBleHRlbmRzIF9NYXRUYWJMYWJlbFdyYXBwZXJCYXNlV2l0aElua0Jhckl0ZW1cclxuICBpbXBsZW1lbnRzIE1hdElua0Jhckl0ZW0ge31cclxuIl19