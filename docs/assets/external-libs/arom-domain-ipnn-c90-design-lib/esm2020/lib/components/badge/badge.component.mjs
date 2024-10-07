import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
const DEFAULT_SIZE = 'md';
const DEFAULT_TYPE = 'flat';
const DEFAULT_SHADE = undefined;
const DEFAULT_COLOR = 'primary';
export class EsnBadge {
    constructor() {
        this.size = DEFAULT_SIZE;
        this.type = DEFAULT_TYPE;
        this.color = DEFAULT_COLOR;
        this.shade = DEFAULT_SHADE;
        this.round = true;
        this.disabled = false;
        this.bicolor = false;
    }
}
EsnBadge.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnBadge, deps: [], target: i0.ɵɵFactoryTarget.Component });
EsnBadge.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnBadge, selector: "esn-badge", inputs: { size: "size", type: "type", color: "color", shade: "shade", round: "round", disabled: "disabled", bicolor: "bicolor" }, host: { properties: { "class.esn-badge-sm": "size === 'sm'", "class.esn-badge-md": "size === 'md'", "class.esn-badge-lg": "size === 'lg'", "class.esn-badge-primary": "color === 'primary'", "class.esn-badge-accent": "color === 'accent'", "class.esn-badge-success": "color === 'success'", "class.esn-badge-error": "color === 'error'", "class.esn-badge-warning": "color === 'warning'", "class.esn-badge-neutral": "color === 'neutral'", "class.esn-badge-info": "color === 'info'", "class.esn-badge-purple": "color === 'purple'", "class.esn-badge-light": "type === 'light'", "class.esn-badge-stroked": "type === 'stroked'", "class.esn-badge-flat": "type === 'flat'", "class.esn-badge-lighter": "shade === 'lighter'", "class.esn-badge-darker": "shade === 'darker'", "class.esn-btn-disabled": "disabled || null", "class.esn-badge-round": "round || null", "class.esn-badge-bicolor": "bicolor || null" }, classAttribute: "esn-badge" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [":host.esn-badge{display:inline-flex;white-space:nowrap;align-items:center;padding:0 .75rem;line-height:1rem!important}:host.esn-badge ::ng-deep .esn-icon:not(.esn-icon-suffix){margin-right:.75rem}:host.esn-badge ::ng-deep .esn-icon.esn-icon-suffix{margin-left:.75rem}:host.esn-badge-sm{font-size:.75rem;line-height:1.125rem;font-weight:500;height:1.5rem}:host.esn-badge-md{font-size:.875rem;line-height:1.25rem;font-weight:500;height:1.75rem}:host.esn-badge-lg{font-size:.875rem;line-height:1.25rem;font-weight:500;height:2rem}:host.esn-badge-round{border-radius:50px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnBadge, decorators: [{
            type: Component,
            args: [{ selector: 'esn-badge', template: '<ng-content></ng-content>', host: {
                        class: 'esn-badge',
                        '[class.esn-badge-sm]': `size === 'sm'`,
                        '[class.esn-badge-md]': `size === 'md'`,
                        '[class.esn-badge-lg]': `size === 'lg'`,
                        '[class.esn-badge-primary]': `color === 'primary'`,
                        '[class.esn-badge-accent]': `color === 'accent'`,
                        '[class.esn-badge-success]': `color === 'success'`,
                        '[class.esn-badge-error]': `color === 'error'`,
                        '[class.esn-badge-warning]': `color === 'warning'`,
                        '[class.esn-badge-neutral]': `color === 'neutral'`,
                        '[class.esn-badge-info]': `color === 'info'`,
                        '[class.esn-badge-purple]': `color === 'purple'`,
                        '[class.esn-badge-light]': `type === 'light'`,
                        '[class.esn-badge-stroked]': `type === 'stroked'`,
                        '[class.esn-badge-flat]': `type === 'flat'`,
                        '[class.esn-badge-lighter]': `shade === 'lighter'`,
                        '[class.esn-badge-darker]': `shade === 'darker'`,
                        '[class.esn-btn-disabled]': `disabled || null`,
                        '[class.esn-badge-round]': `round || null`,
                        '[class.esn-badge-bicolor]': `bicolor || null`,
                    }, styles: [":host.esn-badge{display:inline-flex;white-space:nowrap;align-items:center;padding:0 .75rem;line-height:1rem!important}:host.esn-badge ::ng-deep .esn-icon:not(.esn-icon-suffix){margin-right:.75rem}:host.esn-badge ::ng-deep .esn-icon.esn-icon-suffix{margin-left:.75rem}:host.esn-badge-sm{font-size:.75rem;line-height:1.125rem;font-weight:500;height:1.5rem}:host.esn-badge-md{font-size:.875rem;line-height:1.25rem;font-weight:500;height:1.75rem}:host.esn-badge-lg{font-size:.875rem;line-height:1.25rem;font-weight:500;height:2rem}:host.esn-badge-round{border-radius:50px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { size: [{
                type: Input
            }], type: [{
                type: Input
            }], color: [{
                type: Input
            }], shade: [{
                type: Input
            }], round: [{
                type: Input
            }], disabled: [{
                type: Input
            }], bicolor: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYmFkZ2UvYmFkZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQWdCakQsTUFBTSxZQUFZLEdBQWlCLElBQUksQ0FBQztBQUN4QyxNQUFNLFlBQVksR0FBaUIsTUFBTSxDQUFDO0FBQzFDLE1BQU0sYUFBYSxHQUFrQixTQUFTLENBQUM7QUFDL0MsTUFBTSxhQUFhLEdBQWtCLFNBQVMsQ0FBQztBQTZCL0MsTUFBTSxPQUFPLFFBQVE7SUFTbkI7UUFSUyxTQUFJLEdBQWlCLFlBQVksQ0FBQztRQUNsQyxTQUFJLEdBQWlCLFlBQVksQ0FBQztRQUNsQyxVQUFLLEdBQWtCLGFBQWEsQ0FBQztRQUNyQyxVQUFLLEdBQWtCLGFBQWEsQ0FBQztRQUNyQyxVQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsWUFBTyxHQUFZLEtBQUssQ0FBQztJQUVuQixDQUFDOztzR0FUTCxRQUFROzBGQUFSLFFBQVEsa2xDQXpCVCwyQkFBMkI7NEZBeUIxQixRQUFRO2tCQTNCcEIsU0FBUzsrQkFDRSxXQUFXLFlBQ1gsMkJBQTJCLFFBRS9CO3dCQUNKLEtBQUssRUFBRSxXQUFXO3dCQUNsQixzQkFBc0IsRUFBRSxlQUFlO3dCQUN2QyxzQkFBc0IsRUFBRSxlQUFlO3dCQUN2QyxzQkFBc0IsRUFBRSxlQUFlO3dCQUN2QywyQkFBMkIsRUFBRSxxQkFBcUI7d0JBQ2xELDBCQUEwQixFQUFFLG9CQUFvQjt3QkFDaEQsMkJBQTJCLEVBQUUscUJBQXFCO3dCQUNsRCx5QkFBeUIsRUFBRSxtQkFBbUI7d0JBQzlDLDJCQUEyQixFQUFFLHFCQUFxQjt3QkFDbEQsMkJBQTJCLEVBQUUscUJBQXFCO3dCQUNsRCx3QkFBd0IsRUFBRSxrQkFBa0I7d0JBQzVDLDBCQUEwQixFQUFFLG9CQUFvQjt3QkFDaEQseUJBQXlCLEVBQUUsa0JBQWtCO3dCQUM3QywyQkFBMkIsRUFBRSxvQkFBb0I7d0JBQ2pELHdCQUF3QixFQUFFLGlCQUFpQjt3QkFDM0MsMkJBQTJCLEVBQUUscUJBQXFCO3dCQUNsRCwwQkFBMEIsRUFBRSxvQkFBb0I7d0JBQ2hELDBCQUEwQixFQUFFLGtCQUFrQjt3QkFDOUMseUJBQXlCLEVBQUUsZUFBZTt3QkFDMUMsMkJBQTJCLEVBQUUsaUJBQWlCO3FCQUMvQzswRUFHUSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IHR5cGUgRXNuQmFkZ2VTaXplID0gJ3NtJyB8ICdtZCcgfCAnbGcnIHwgdW5kZWZpbmVkO1xyXG5leHBvcnQgdHlwZSBFc25CYWRnZVR5cGUgPSAnZmxhdCcgfCAnc3Ryb2tlZCcgfCAnbGlnaHQnIHwgdW5kZWZpbmVkO1xyXG5leHBvcnQgdHlwZSBFc25CYWRnZVNoYWRlID0gJ2xpZ2h0ZXInIHwgJ2RhcmtlcicgfCB1bmRlZmluZWQ7XHJcbmV4cG9ydCB0eXBlIEVzbkJhZGdlQ29sb3IgPVxyXG4gIHwgJ3ByaW1hcnknXHJcbiAgfCAnYWNjZW50J1xyXG4gIHwgJ2luZm8nXHJcbiAgfCAnd2FybmluZydcclxuICB8ICdzdWNjZXNzJ1xyXG4gIHwgJ2Vycm9yJ1xyXG4gIHwgJ25ldXRyYWwnXHJcbiAgfCAncHVycGxlJ1xyXG4gIHwgdW5kZWZpbmVkO1xyXG5cclxuY29uc3QgREVGQVVMVF9TSVpFOiBFc25CYWRnZVNpemUgPSAnbWQnO1xyXG5jb25zdCBERUZBVUxUX1RZUEU6IEVzbkJhZGdlVHlwZSA9ICdmbGF0JztcclxuY29uc3QgREVGQVVMVF9TSEFERTogRXNuQmFkZ2VTaGFkZSA9IHVuZGVmaW5lZDtcclxuY29uc3QgREVGQVVMVF9DT0xPUjogRXNuQmFkZ2VDb2xvciA9ICdwcmltYXJ5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZXNuLWJhZGdlJyxcclxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxyXG4gIHN0eWxlVXJsczogWycuL2JhZGdlLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdlc24tYmFkZ2UnLFxyXG4gICAgJ1tjbGFzcy5lc24tYmFkZ2Utc21dJzogYHNpemUgPT09ICdzbSdgLFxyXG4gICAgJ1tjbGFzcy5lc24tYmFkZ2UtbWRdJzogYHNpemUgPT09ICdtZCdgLFxyXG4gICAgJ1tjbGFzcy5lc24tYmFkZ2UtbGddJzogYHNpemUgPT09ICdsZydgLFxyXG4gICAgJ1tjbGFzcy5lc24tYmFkZ2UtcHJpbWFyeV0nOiBgY29sb3IgPT09ICdwcmltYXJ5J2AsXHJcbiAgICAnW2NsYXNzLmVzbi1iYWRnZS1hY2NlbnRdJzogYGNvbG9yID09PSAnYWNjZW50J2AsXHJcbiAgICAnW2NsYXNzLmVzbi1iYWRnZS1zdWNjZXNzXSc6IGBjb2xvciA9PT0gJ3N1Y2Nlc3MnYCxcclxuICAgICdbY2xhc3MuZXNuLWJhZGdlLWVycm9yXSc6IGBjb2xvciA9PT0gJ2Vycm9yJ2AsXHJcbiAgICAnW2NsYXNzLmVzbi1iYWRnZS13YXJuaW5nXSc6IGBjb2xvciA9PT0gJ3dhcm5pbmcnYCxcclxuICAgICdbY2xhc3MuZXNuLWJhZGdlLW5ldXRyYWxdJzogYGNvbG9yID09PSAnbmV1dHJhbCdgLFxyXG4gICAgJ1tjbGFzcy5lc24tYmFkZ2UtaW5mb10nOiBgY29sb3IgPT09ICdpbmZvJ2AsXHJcbiAgICAnW2NsYXNzLmVzbi1iYWRnZS1wdXJwbGVdJzogYGNvbG9yID09PSAncHVycGxlJ2AsXHJcbiAgICAnW2NsYXNzLmVzbi1iYWRnZS1saWdodF0nOiBgdHlwZSA9PT0gJ2xpZ2h0J2AsXHJcbiAgICAnW2NsYXNzLmVzbi1iYWRnZS1zdHJva2VkXSc6IGB0eXBlID09PSAnc3Ryb2tlZCdgLFxyXG4gICAgJ1tjbGFzcy5lc24tYmFkZ2UtZmxhdF0nOiBgdHlwZSA9PT0gJ2ZsYXQnYCxcclxuICAgICdbY2xhc3MuZXNuLWJhZGdlLWxpZ2h0ZXJdJzogYHNoYWRlID09PSAnbGlnaHRlcidgLFxyXG4gICAgJ1tjbGFzcy5lc24tYmFkZ2UtZGFya2VyXSc6IGBzaGFkZSA9PT0gJ2RhcmtlcidgLFxyXG4gICAgJ1tjbGFzcy5lc24tYnRuLWRpc2FibGVkXSc6IGBkaXNhYmxlZCB8fCBudWxsYCxcclxuICAgICdbY2xhc3MuZXNuLWJhZGdlLXJvdW5kXSc6IGByb3VuZCB8fCBudWxsYCxcclxuICAgICdbY2xhc3MuZXNuLWJhZGdlLWJpY29sb3JdJzogYGJpY29sb3IgfHwgbnVsbGAsXHJcbiAgfSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzbkJhZGdlIHtcclxuICBASW5wdXQoKSBzaXplOiBFc25CYWRnZVNpemUgPSBERUZBVUxUX1NJWkU7XHJcbiAgQElucHV0KCkgdHlwZTogRXNuQmFkZ2VUeXBlID0gREVGQVVMVF9UWVBFO1xyXG4gIEBJbnB1dCgpIGNvbG9yOiBFc25CYWRnZUNvbG9yID0gREVGQVVMVF9DT0xPUjtcclxuICBASW5wdXQoKSBzaGFkZTogRXNuQmFkZ2VTaGFkZSA9IERFRkFVTFRfU0hBREU7XHJcbiAgQElucHV0KCkgcm91bmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYmljb2xvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIl19