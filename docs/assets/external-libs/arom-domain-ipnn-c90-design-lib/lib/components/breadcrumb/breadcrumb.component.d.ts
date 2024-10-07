import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PathLinks } from './model';
import { ResponsiveService } from '../../utils/services/responsive/responsive.service';
import * as i0 from "@angular/core";
export declare class EsnBreadcrumb implements OnInit {
    router: Router;
    private responsiveService;
    isMobile$: import("rxjs").BehaviorSubject<boolean>;
    links: PathLinks[];
    constructor(router: Router, responsiveService: ResponsiveService);
    ngOnInit(): void;
    _refreshBreadCrumb(): void;
    _getPathObjs(currentRoot: any, url: string): any[];
    _findNextRouteObj(url: string, routeObjs: any[]): any;
    _getChilds(routeObj: any): any;
    _convertToLinkElements(routeObjects: any[], url: string): {
        path: string;
        label: any;
        url: any;
        icon: any;
    }[];
    _controlBreadcrumb(esnBreadcrumb: any): void;
    _computeRouteObjectPath(routeObj: any, allRouteObjs: any[], fullUrl: string): string;
    _getRegexpFromPath(path: string): RegExp;
    goToPath(path: string): void;
    goBack(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnBreadcrumb, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnBreadcrumb, "esn-breadcrumb", never, {}, {}, never, never, false, never>;
}
