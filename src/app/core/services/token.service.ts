import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(public cookieService: CookieService) {}

  public getToken() {
    const token = this.cookieService.get('aromToken');
    if (!!token) {
      return token;
    } else {
      console.warn(
        'No token in cookies !\nAdd a cookie {aromToken: THE_TOKEN}'
      );
      return '';
    }
  }
}
