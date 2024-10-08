import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {
  API_KEY_COOKIE_NAME,
  PASSWORD_COOKIE_NAME,
} from 'src/app/modules/shared/model/constants';

@Injectable({
  providedIn: 'root',
})
export class PasswordExistGuard implements CanActivate {
  constructor(public router: Router, public cookieService: CookieService) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const password = this.cookieService.get(PASSWORD_COOKIE_NAME);
    const apiKey = this.cookieService.get(API_KEY_COOKIE_NAME);
    if (!!password || apiKey) {
      return true;
    } else {
      await this.router.navigate(['/login']);
      return false;
    }
  }
}
