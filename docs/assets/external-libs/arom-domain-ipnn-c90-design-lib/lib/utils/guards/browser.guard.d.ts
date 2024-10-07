import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class BrowserGuard implements CanActivate {
    router: Router;
    constructor(router: Router);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
    static ɵfac: i0.ɵɵFactoryDeclaration<BrowserGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BrowserGuard>;
}
