import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class EsnIconsRegistry {
    constructor() {
        this.registry = new Map();
    }
    registerIcons(icons) {
        icons.forEach((icon) => this.registry.set(icon.name, icon.data));
    }
    getIcon(name) {
        if (!this.registry.has(name)) {
            console.warn(`Icon name ${name} not found, did you add it to the registry ?`);
        }
        return this.registry.get(name);
    }
}
EsnIconsRegistry.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnIconsRegistry, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
EsnIconsRegistry.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnIconsRegistry });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnIconsRegistry, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbnMtcmVnaXN0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9pY29uL2ljb25zLXJlZ2lzdHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSTNDLE1BQU0sT0FBTyxnQkFBZ0I7SUFEN0I7UUFFVSxhQUFRLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7S0FlOUM7SUFiUSxhQUFhLENBQUMsS0FBbUI7UUFDdEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVNLE9BQU8sQ0FBQyxJQUFZO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QixPQUFPLENBQUMsSUFBSSxDQUNWLGFBQWEsSUFBSSw4Q0FBOEMsQ0FDaEUsQ0FBQztTQUNIO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs4R0FmVSxnQkFBZ0I7a0hBQWhCLGdCQUFnQjs0RkFBaEIsZ0JBQWdCO2tCQUQ1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFc25JY29uT2JqLCBFc25JY29uTmFtZSB9IGZyb20gJy4vaWNvbnMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRXNuSWNvbnNSZWdpc3RyeSB7XHJcbiAgcHJpdmF0ZSByZWdpc3RyeSA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XHJcblxyXG4gIHB1YmxpYyByZWdpc3Rlckljb25zKGljb25zOiBFc25JY29uT2JqW10pOiB2b2lkIHtcclxuICAgIGljb25zLmZvckVhY2goKGljb246IEVzbkljb25PYmopID0+IHRoaXMucmVnaXN0cnkuc2V0KGljb24ubmFtZSwgaWNvbi5kYXRhKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0SWNvbihuYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKCF0aGlzLnJlZ2lzdHJ5LmhhcyhuYW1lKSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgYEljb24gbmFtZSAke25hbWV9IG5vdCBmb3VuZCwgZGlkIHlvdSBhZGQgaXQgdG8gdGhlIHJlZ2lzdHJ5ID9gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVnaXN0cnkuZ2V0KG5hbWUpO1xyXG4gIH1cclxufVxyXG4iXX0=