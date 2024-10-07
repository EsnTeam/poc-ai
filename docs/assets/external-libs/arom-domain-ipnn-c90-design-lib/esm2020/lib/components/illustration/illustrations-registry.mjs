import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class EsnIllustrationsRegistry {
    constructor() {
        this.registry = new Map();
    }
    registerIllustrations(illustrations) {
        illustrations.forEach((illustration) => this.registry.set(illustration.name, illustration.data));
    }
    getIllustration(name) {
        if (!this.registry.has(name)) {
            console.warn(`Illustration name ${name} not found, did you add it to the registry ?`);
        }
        return this.registry.get(name);
    }
}
EsnIllustrationsRegistry.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnIllustrationsRegistry, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
EsnIllustrationsRegistry.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnIllustrationsRegistry });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnIllustrationsRegistry, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWxsdXN0cmF0aW9ucy1yZWdpc3RyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2lsbHVzdHJhdGlvbi9pbGx1c3RyYXRpb25zLXJlZ2lzdHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSTNDLE1BQU0sT0FBTyx3QkFBd0I7SUFEckM7UUFFVSxhQUFRLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7S0FlOUM7SUFiUSxxQkFBcUIsQ0FBQyxhQUFtQztRQUM5RCxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBZ0MsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2SCxDQUFDO0lBRU0sZUFBZSxDQUFDLElBQVk7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxJQUFJLENBQ1YscUJBQXFCLElBQUksOENBQThDLENBQ3hFLENBQUM7U0FDSDtRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7c0hBZlUsd0JBQXdCOzBIQUF4Qix3QkFBd0I7NEZBQXhCLHdCQUF3QjtrQkFEcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRXNuSWxsdXN0cmF0aW9uT2JqIH0gZnJvbSAnLi9pbGx1c3RyYXRpb25zJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEVzbklsbHVzdHJhdGlvbnNSZWdpc3RyeSB7XHJcbiAgcHJpdmF0ZSByZWdpc3RyeSA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XHJcblxyXG4gIHB1YmxpYyByZWdpc3RlcklsbHVzdHJhdGlvbnMoaWxsdXN0cmF0aW9uczogRXNuSWxsdXN0cmF0aW9uT2JqW10pOiB2b2lkIHtcclxuICAgIGlsbHVzdHJhdGlvbnMuZm9yRWFjaCgoaWxsdXN0cmF0aW9uOiBFc25JbGx1c3RyYXRpb25PYmopID0+IHRoaXMucmVnaXN0cnkuc2V0KGlsbHVzdHJhdGlvbi5uYW1lLCBpbGx1c3RyYXRpb24uZGF0YSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldElsbHVzdHJhdGlvbihuYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKCF0aGlzLnJlZ2lzdHJ5LmhhcyhuYW1lKSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgYElsbHVzdHJhdGlvbiBuYW1lICR7bmFtZX0gbm90IGZvdW5kLCBkaWQgeW91IGFkZCBpdCB0byB0aGUgcmVnaXN0cnkgP2BcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZWdpc3RyeS5nZXQobmFtZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==