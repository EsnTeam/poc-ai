import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../utils/services/responsive/responsive.service";
import * as i3 from "@angular/common";
import * as i4 from "../button/button.component";
import * as i5 from "../icon/icon.component";
const PATH_VAR_REGEXP = new RegExp('/:[^(/)]*/');
export class EsnBreadcrumb {
    constructor(router, responsiveService) {
        this.router = router;
        this.responsiveService = responsiveService;
        this.isMobile$ = this.responsiveService.isMobile$;
        this.links = [];
    }
    ngOnInit() {
        this._refreshBreadCrumb();
        this.router.events
            .pipe(filter((x) => x instanceof NavigationEnd))
            .subscribe(() => {
            this._refreshBreadCrumb();
        });
    }
    _refreshBreadCrumb() {
        const currentRoot = this.router.routerState.snapshot.root;
        const url = currentRoot['_routerState'].url;
        const routeObjs = this._getPathObjs(currentRoot, url);
        this.links = this._convertToLinkElements(routeObjs, url);
    }
    _getPathObjs(currentRoot, url) {
        const resp = [];
        console.log({ url });
        let routeObj = currentRoot._routerState._root.children[0]?.value?.routeConfig;
        if (!routeObj) {
            return [];
        }
        resp.push(routeObj);
        if (!!routeObj.path) {
            url = url.replace('/' + routeObj.path, '');
        }
        let routeObjs = this._getChilds(routeObj);
        // Counter just in case
        let counter = 0;
        const maxNbSteps = 200;
        while (!!routeObjs && !!routeObj && counter < maxNbSteps) {
            console.log({ url });
            routeObj = this._findNextRouteObj(url, routeObjs);
            if (!routeObj) {
                break;
            }
            if (!!routeObj.path) {
                url = url.replace('/' + routeObj.path, '');
            }
            resp.push(routeObj);
            routeObjs = this._getChilds(routeObj);
            counter += 1;
        }
        if (counter > maxNbSteps - 1) {
            console.warn('Infinite loop while decomposing path in EsnBreadcrumb.');
        }
        console.log({ resp });
        return resp;
    }
    _findNextRouteObj(url, routeObjs) {
        return routeObjs.find((ro) => {
            const pathRegExp = this._getRegexpFromPath('/' + ro.path);
            const exactPathRegExp = this._getRegexpFromPath('^/' + ro.path + '$');
            return ro.pathMatch == 'full'
                ? url.match(exactPathRegExp)
                : url.match(pathRegExp);
        });
    }
    _getChilds(routeObj) {
        return routeObj.children || routeObj._loadedRoutes;
    }
    _convertToLinkElements(routeObjects, url) {
        return routeObjects
            .filter((ro) => !!ro.data?.esnBreadcrumb)
            .map((ro) => {
            const bc = ro.data.esnBreadcrumb;
            this._controlBreadcrumb(bc);
            return {
                path: '',
                label: bc.label,
                url: bc.url || this._computeRouteObjectPath(ro, routeObjects, url),
                icon: bc.icon,
            };
        });
    }
    _controlBreadcrumb(esnBreadcrumb) {
        const allowedProps = ['label', 'url', 'icon'];
        const props = Object.getOwnPropertyNames(esnBreadcrumb);
        props
            .filter((p) => !allowedProps.includes(p))
            .forEach((p) => console.warn(`Property '${p}' is not allowed in esnBreadcrumb.`));
        if (!props.includes('label') && !props.includes('icon')) {
            console.warn(`Property 'icon' or 'label' should be specified in esnBreadcrumb.`);
        }
    }
    _computeRouteObjectPath(routeObj, allRouteObjs, fullUrl) {
        const roIndex = allRouteObjs.findIndex((ro) => ro === routeObj);
        let path = '';
        for (let i = 0; i < roIndex + 1; i++) {
            if (allRouteObjs[i].path) {
                path += '/' + allRouteObjs[i].path;
            }
        }
        const nbSegments = path.split('/').length;
        const computedPath = fullUrl.split('/').splice(0, nbSegments).join('/');
        return computedPath;
    }
    _getRegexpFromPath(path) {
        let cleanedPath = path.replace('**', '*');
        const pathRegExp = cleanedPath.replace(PATH_VAR_REGEXP, '/[^(/)]*/');
        return new RegExp(pathRegExp);
    }
    goToPath(path) {
        this.router.navigate([path]);
    }
    goBack() {
        if (this.links.length > 1) {
            this.goToPath(this.links[this.links.length - 2].url);
        }
        else {
            this.goToPath('/gdd/home');
        }
    }
}
EsnBreadcrumb.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnBreadcrumb, deps: [{ token: i1.Router }, { token: i2.ResponsiveService }], target: i0.ɵɵFactoryTarget.Component });
EsnBreadcrumb.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnBreadcrumb, selector: "esn-breadcrumb", ngImport: i0, template: "<div *ngIf=\"links.length > 1\" class=\"esn-breadcrumb\">\r\n  <esn-button\r\n    type=\"link\"\r\n    color=\"primary\"\r\n    size=\"md\"\r\n    (click)=\"goBack()\"\r\n  >\r\n    <esn-icon [name]=\"'arrow-left'\"></esn-icon>\r\n    Retour\r\n  </esn-button>\r\n\r\n  <span class=\"esn-breadcrumb__seperator\">|</span>\r\n\r\n  <ng-container *ngFor=\"let link of links | slice:0:((isMobile$ | async)?1:links.length); let i = index\">\r\n    <esn-icon *ngIf=\"i > 0\" [name]=\"'chevron-right'\" class=\"esn-breadcrumb__seperator\"></esn-icon>\r\n\r\n    <esn-button\r\n      *ngIf=\"!!link.icon\"\r\n      [iconOnly]=\"true\"\r\n      type=\"link\"\r\n      color=\"neutral\"\r\n      size=\"md\"\r\n      (click)=\"i === links.length - 1 || goToPath(link.url)\"\r\n    >\r\n      <esn-icon class=\"icon-link \" [name]=\"link.icon\"></esn-icon>\r\n    </esn-button>\r\n\r\n    <esn-button\r\n      type=\"link\"\r\n      color=\"neutral\"\r\n      size=\"md\"\r\n      *ngIf=\"!link.icon\"\r\n      (click)=\"i === links.length - 1 || goToPath(link.url)\"\r\n      class=\"esn-breadcrumb__link\"\r\n      [disabled]=\"i === links.length - 1\"\r\n      >{{ link.label }}</esn-button\r\n    >\r\n\r\n  </ng-container>\r\n</div>\r\n", styles: [":host{display:block;margin-bottom:2rem}.esn-breadcrumb{display:flex;align-items:center}.esn-breadcrumb__seperator:first-of-type{margin:0 .25rem}.esn-breadcrumb .icon-link{cursor:pointer}\n"], dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i4.EsnButton, selector: "esn-button", inputs: ["type", "size", "disabled", "round", "iconOnly", "color"], outputs: ["click"] }, { kind: "component", type: i5.EsnIcon, selector: "esn-icon", inputs: ["name", "boxed", "size"] }, { kind: "pipe", type: i3.AsyncPipe, name: "async" }, { kind: "pipe", type: i3.SlicePipe, name: "slice" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnBreadcrumb, decorators: [{
            type: Component,
            args: [{ selector: 'esn-breadcrumb', template: "<div *ngIf=\"links.length > 1\" class=\"esn-breadcrumb\">\r\n  <esn-button\r\n    type=\"link\"\r\n    color=\"primary\"\r\n    size=\"md\"\r\n    (click)=\"goBack()\"\r\n  >\r\n    <esn-icon [name]=\"'arrow-left'\"></esn-icon>\r\n    Retour\r\n  </esn-button>\r\n\r\n  <span class=\"esn-breadcrumb__seperator\">|</span>\r\n\r\n  <ng-container *ngFor=\"let link of links | slice:0:((isMobile$ | async)?1:links.length); let i = index\">\r\n    <esn-icon *ngIf=\"i > 0\" [name]=\"'chevron-right'\" class=\"esn-breadcrumb__seperator\"></esn-icon>\r\n\r\n    <esn-button\r\n      *ngIf=\"!!link.icon\"\r\n      [iconOnly]=\"true\"\r\n      type=\"link\"\r\n      color=\"neutral\"\r\n      size=\"md\"\r\n      (click)=\"i === links.length - 1 || goToPath(link.url)\"\r\n    >\r\n      <esn-icon class=\"icon-link \" [name]=\"link.icon\"></esn-icon>\r\n    </esn-button>\r\n\r\n    <esn-button\r\n      type=\"link\"\r\n      color=\"neutral\"\r\n      size=\"md\"\r\n      *ngIf=\"!link.icon\"\r\n      (click)=\"i === links.length - 1 || goToPath(link.url)\"\r\n      class=\"esn-breadcrumb__link\"\r\n      [disabled]=\"i === links.length - 1\"\r\n      >{{ link.label }}</esn-button\r\n    >\r\n\r\n  </ng-container>\r\n</div>\r\n", styles: [":host{display:block;margin-bottom:2rem}.esn-breadcrumb{display:flex;align-items:center}.esn-breadcrumb__seperator:first-of-type{margin:0 .25rem}.esn-breadcrumb .icon-link{cursor:pointer}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i2.ResponsiveService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztBQUl4QyxNQUFNLGVBQWUsR0FBVyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQU96RCxNQUFNLE9BQU8sYUFBYTtJQUl4QixZQUFtQixNQUFjLEVBQ3ZCLGlCQUFvQztRQUQzQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3ZCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFKdkMsY0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7UUFDN0MsVUFBSyxHQUFnQixFQUFFLENBQUM7SUFJMUIsQ0FBQztJQUVOLFFBQVE7UUFDTixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUUxQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFlBQVksYUFBYSxDQUFDLENBQUM7YUFDL0MsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxrQkFB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SUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUMsTUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDckUsT0FBTyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sUUFBUSxDQUFDLElBQVk7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSxNQUFNO1FBQ1gsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUksQ0FBQyxDQUFDO1NBQ3ZEO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7MkdBeklVLGFBQWE7K0ZBQWIsYUFBYSxzRENiMUIsZ3RDQXdDQTs0RkQzQmEsYUFBYTtrQkFMekIsU0FBUzsrQkFDRSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFBhdGhMaW5rcyB9IGZyb20gJy4vbW9kZWwnO1xyXG5pbXBvcnQgeyBSZXNwb25zaXZlU2VydmljZSB9IGZyb20gJy4uLy4uL3V0aWxzL3NlcnZpY2VzL3Jlc3BvbnNpdmUvcmVzcG9uc2l2ZS5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IFBBVEhfVkFSX1JFR0VYUDogUmVnRXhwID0gbmV3IFJlZ0V4cCgnLzpbXigvKV0qLycpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlc24tYnJlYWRjcnVtYicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzbkJyZWFkY3J1bWIgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBpc01vYmlsZSQgPSB0aGlzLnJlc3BvbnNpdmVTZXJ2aWNlLmlzTW9iaWxlJDtcclxuICBwdWJsaWMgbGlua3M6IFBhdGhMaW5rc1tdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlciwgXHJcbiAgICBwcml2YXRlIHJlc3BvbnNpdmVTZXJ2aWNlOiBSZXNwb25zaXZlU2VydmljZSxcclxuICAgICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9yZWZyZXNoQnJlYWRDcnVtYigpO1xyXG5cclxuICAgIHRoaXMucm91dGVyLmV2ZW50c1xyXG4gICAgICAucGlwZShmaWx0ZXIoKHgpID0+IHggaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fcmVmcmVzaEJyZWFkQ3J1bWIoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBfcmVmcmVzaEJyZWFkQ3J1bWIoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50Um9vdCA9IHRoaXMucm91dGVyLnJvdXRlclN0YXRlLnNuYXBzaG90LnJvb3Q7XHJcbiAgICBjb25zdCB1cmwgPSAoY3VycmVudFJvb3QgYXMgYW55KVsnX3JvdXRlclN0YXRlJ10udXJsO1xyXG4gICAgY29uc3Qgcm91dGVPYmpzID0gdGhpcy5fZ2V0UGF0aE9ianMoY3VycmVudFJvb3QsIHVybCk7XHJcbiAgICB0aGlzLmxpbmtzID0gdGhpcy5fY29udmVydFRvTGlua0VsZW1lbnRzKHJvdXRlT2JqcywgdXJsKTtcclxuICB9XHJcblxyXG4gIF9nZXRQYXRoT2JqcyhjdXJyZW50Um9vdDogYW55LCB1cmw6IHN0cmluZykge1xyXG4gICAgY29uc3QgcmVzcCA9IFtdO1xyXG4gICAgY29uc29sZS5sb2coe3VybH0pXHJcblxyXG4gICAgbGV0IHJvdXRlT2JqID0gY3VycmVudFJvb3QuX3JvdXRlclN0YXRlLl9yb290LmNoaWxkcmVuWzBdPy52YWx1ZT8ucm91dGVDb25maWc7XHJcbiAgICBpZighcm91dGVPYmope1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICByZXNwLnB1c2gocm91dGVPYmopO1xyXG4gICAgaWYoISFyb3V0ZU9iai5wYXRoKXtcclxuICAgICAgdXJsID0gdXJsLnJlcGxhY2UoJy8nICsgcm91dGVPYmoucGF0aCwgJycpO1xyXG4gICAgfVxyXG4gICAgbGV0IHJvdXRlT2JqcyA9IHRoaXMuX2dldENoaWxkcyhyb3V0ZU9iaik7XHJcblxyXG4gICAgLy8gQ291bnRlciBqdXN0IGluIGNhc2VcclxuICAgIGxldCBjb3VudGVyID0gMDtcclxuICAgIGNvbnN0IG1heE5iU3RlcHMgPSAyMDA7XHJcbiAgICB3aGlsZSAoISFyb3V0ZU9ianMgJiYgISFyb3V0ZU9iaiAmJiBjb3VudGVyIDwgbWF4TmJTdGVwcykge1xyXG4gICAgICBjb25zb2xlLmxvZyh7dXJsfSlcclxuICAgICAgcm91dGVPYmogPSB0aGlzLl9maW5kTmV4dFJvdXRlT2JqKHVybCwgcm91dGVPYmpzKTtcclxuICAgICAgaWYgKCFyb3V0ZU9iaikge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghIXJvdXRlT2JqLnBhdGgpIHtcclxuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgnLycgKyByb3V0ZU9iai5wYXRoLCAnJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmVzcC5wdXNoKHJvdXRlT2JqKTtcclxuICAgICAgcm91dGVPYmpzID0gdGhpcy5fZ2V0Q2hpbGRzKHJvdXRlT2JqKTtcclxuICAgICAgY291bnRlciArPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvdW50ZXIgPiBtYXhOYlN0ZXBzIC0gMSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ0luZmluaXRlIGxvb3Agd2hpbGUgZGVjb21wb3NpbmcgcGF0aCBpbiBFc25CcmVhZGNydW1iLicpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coe3Jlc3B9KVxyXG4gICAgcmV0dXJuIHJlc3A7XHJcbiAgfVxyXG5cclxuICBfZmluZE5leHRSb3V0ZU9iaih1cmw6IHN0cmluZywgcm91dGVPYmpzOiBhbnlbXSkge1xyXG4gICAgcmV0dXJuIHJvdXRlT2Jqcy5maW5kKChybykgPT4ge1xyXG4gICAgICBjb25zdCBwYXRoUmVnRXhwID0gdGhpcy5fZ2V0UmVnZXhwRnJvbVBhdGgoJy8nICsgcm8ucGF0aCk7XHJcbiAgICAgIGNvbnN0IGV4YWN0UGF0aFJlZ0V4cCA9IHRoaXMuX2dldFJlZ2V4cEZyb21QYXRoKCdeLycgKyByby5wYXRoICsgJyQnKTtcclxuICAgICAgcmV0dXJuIHJvLnBhdGhNYXRjaCA9PSAnZnVsbCdcclxuICAgICAgICA/IHVybC5tYXRjaChleGFjdFBhdGhSZWdFeHApXHJcbiAgICAgICAgOiB1cmwubWF0Y2gocGF0aFJlZ0V4cCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9nZXRDaGlsZHMocm91dGVPYmo6IGFueSkge1xyXG4gICAgcmV0dXJuIHJvdXRlT2JqLmNoaWxkcmVuIHx8IHJvdXRlT2JqLl9sb2FkZWRSb3V0ZXM7XHJcbiAgfVxyXG5cclxuICBfY29udmVydFRvTGlua0VsZW1lbnRzKHJvdXRlT2JqZWN0czogYW55W10sIHVybDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gcm91dGVPYmplY3RzXHJcbiAgICAgIC5maWx0ZXIoKHJvKSA9PiAhIXJvLmRhdGE/LmVzbkJyZWFkY3J1bWIpXHJcbiAgICAgIC5tYXAoKHJvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYmMgPSByby5kYXRhLmVzbkJyZWFkY3J1bWI7XHJcbiAgICAgICAgdGhpcy5fY29udHJvbEJyZWFkY3J1bWIoYmMpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICAgIGxhYmVsOiBiYy5sYWJlbCxcclxuICAgICAgICAgIHVybDpcclxuICAgICAgICAgICAgYmMudXJsIHx8IHRoaXMuX2NvbXB1dGVSb3V0ZU9iamVjdFBhdGgocm8sIHJvdXRlT2JqZWN0cywgdXJsKSxcclxuICAgICAgICAgIGljb246IGJjLmljb24sXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBfY29udHJvbEJyZWFkY3J1bWIoZXNuQnJlYWRjcnVtYjogYW55KSB7XHJcbiAgICBjb25zdCBhbGxvd2VkUHJvcHMgPSBbJ2xhYmVsJywgJ3VybCcsICdpY29uJ107XHJcbiAgICBjb25zdCBwcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGVzbkJyZWFkY3J1bWIpO1xyXG4gICAgcHJvcHNcclxuICAgICAgLmZpbHRlcigocCkgPT4gIWFsbG93ZWRQcm9wcy5pbmNsdWRlcyhwKSlcclxuICAgICAgLmZvckVhY2goKHApID0+XHJcbiAgICAgICAgY29uc29sZS53YXJuKGBQcm9wZXJ0eSAnJHtwfScgaXMgbm90IGFsbG93ZWQgaW4gZXNuQnJlYWRjcnVtYi5gKVxyXG4gICAgICApO1xyXG4gICAgaWYgKCFwcm9wcy5pbmNsdWRlcygnbGFiZWwnKSAmJiAhcHJvcHMuaW5jbHVkZXMoJ2ljb24nKSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgYFByb3BlcnR5ICdpY29uJyBvciAnbGFiZWwnIHNob3VsZCBiZSBzcGVjaWZpZWQgaW4gZXNuQnJlYWRjcnVtYi5gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfY29tcHV0ZVJvdXRlT2JqZWN0UGF0aChyb3V0ZU9iajogYW55LCBhbGxSb3V0ZU9ianM6IGFueVtdLCBmdWxsVXJsOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHJvSW5kZXggPSBhbGxSb3V0ZU9ianMuZmluZEluZGV4KChybykgPT4gcm8gPT09IHJvdXRlT2JqKTtcclxuICAgIGxldCBwYXRoID0gJyc7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvSW5kZXggKyAxOyBpKyspIHtcclxuICAgICAgaWYgKGFsbFJvdXRlT2Jqc1tpXS5wYXRoKSB7XHJcbiAgICAgICAgcGF0aCArPSAnLycgKyBhbGxSb3V0ZU9ianNbaV0ucGF0aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgbmJTZWdtZW50cyA9IHBhdGguc3BsaXQoJy8nKS5sZW5ndGg7XHJcblxyXG4gICAgY29uc3QgY29tcHV0ZWRQYXRoID0gZnVsbFVybC5zcGxpdCgnLycpLnNwbGljZSgwLCBuYlNlZ21lbnRzKS5qb2luKCcvJyk7XHJcbiAgICByZXR1cm4gY29tcHV0ZWRQYXRoO1xyXG4gIH1cclxuXHJcbiAgX2dldFJlZ2V4cEZyb21QYXRoKHBhdGg6IHN0cmluZykge1xyXG4gICAgbGV0IGNsZWFuZWRQYXRoID0gcGF0aC5yZXBsYWNlKCcqKicsICcqJyk7XHJcbiAgICBjb25zdCBwYXRoUmVnRXhwID0gY2xlYW5lZFBhdGgucmVwbGFjZShQQVRIX1ZBUl9SRUdFWFAsICcvW14oLyldKi8nKTtcclxuICAgIHJldHVybiBuZXcgUmVnRXhwKHBhdGhSZWdFeHApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdvVG9QYXRoKHBhdGg6IHN0cmluZykge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3BhdGhdKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnb0JhY2soKSB7XHJcbiAgICBpZiAodGhpcy5saW5rcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHRoaXMuZ29Ub1BhdGgodGhpcy5saW5rc1t0aGlzLmxpbmtzLmxlbmd0aCAtIDJdLnVybCEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5nb1RvUGF0aCgnL2dkZC9ob21lJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgKm5nSWY9XCJsaW5rcy5sZW5ndGggPiAxXCIgY2xhc3M9XCJlc24tYnJlYWRjcnVtYlwiPlxyXG4gIDxlc24tYnV0dG9uXHJcbiAgICB0eXBlPVwibGlua1wiXHJcbiAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgc2l6ZT1cIm1kXCJcclxuICAgIChjbGljayk9XCJnb0JhY2soKVwiXHJcbiAgPlxyXG4gICAgPGVzbi1pY29uIFtuYW1lXT1cIidhcnJvdy1sZWZ0J1wiPjwvZXNuLWljb24+XHJcbiAgICBSZXRvdXJcclxuICA8L2Vzbi1idXR0b24+XHJcblxyXG4gIDxzcGFuIGNsYXNzPVwiZXNuLWJyZWFkY3J1bWJfX3NlcGVyYXRvclwiPnw8L3NwYW4+XHJcblxyXG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGxpbmsgb2YgbGlua3MgfCBzbGljZTowOigoaXNNb2JpbGUkIHwgYXN5bmMpPzE6bGlua3MubGVuZ3RoKTsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgPGVzbi1pY29uICpuZ0lmPVwiaSA+IDBcIiBbbmFtZV09XCInY2hldnJvbi1yaWdodCdcIiBjbGFzcz1cImVzbi1icmVhZGNydW1iX19zZXBlcmF0b3JcIj48L2Vzbi1pY29uPlxyXG5cclxuICAgIDxlc24tYnV0dG9uXHJcbiAgICAgICpuZ0lmPVwiISFsaW5rLmljb25cIlxyXG4gICAgICBbaWNvbk9ubHldPVwidHJ1ZVwiXHJcbiAgICAgIHR5cGU9XCJsaW5rXCJcclxuICAgICAgY29sb3I9XCJuZXV0cmFsXCJcclxuICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgKGNsaWNrKT1cImkgPT09IGxpbmtzLmxlbmd0aCAtIDEgfHwgZ29Ub1BhdGgobGluay51cmwpXCJcclxuICAgID5cclxuICAgICAgPGVzbi1pY29uIGNsYXNzPVwiaWNvbi1saW5rIFwiIFtuYW1lXT1cImxpbmsuaWNvblwiPjwvZXNuLWljb24+XHJcbiAgICA8L2Vzbi1idXR0b24+XHJcblxyXG4gICAgPGVzbi1idXR0b25cclxuICAgICAgdHlwZT1cImxpbmtcIlxyXG4gICAgICBjb2xvcj1cIm5ldXRyYWxcIlxyXG4gICAgICBzaXplPVwibWRcIlxyXG4gICAgICAqbmdJZj1cIiFsaW5rLmljb25cIlxyXG4gICAgICAoY2xpY2spPVwiaSA9PT0gbGlua3MubGVuZ3RoIC0gMSB8fCBnb1RvUGF0aChsaW5rLnVybClcIlxyXG4gICAgICBjbGFzcz1cImVzbi1icmVhZGNydW1iX19saW5rXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImkgPT09IGxpbmtzLmxlbmd0aCAtIDFcIlxyXG4gICAgICA+e3sgbGluay5sYWJlbCB9fTwvZXNuLWJ1dHRvblxyXG4gICAgPlxyXG5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC9kaXY+XHJcbiJdfQ==