import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class PasswordExistGuard implements CanActivate {
  constructor(public router: Router, public cookieService: CookieService) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const password = this.cookieService.get('key-encryption-pass');
    if (!!password) {
      return true;
    } else {
      await this.router.navigate(['/login']);
      return false;
    }
  }
}
