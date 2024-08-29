import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import {
  API_KEY_COOKIE_NAME,
  PASSWORD_COOKIE_NAME,
} from 'src/app/modules/shared/model/constants';

@Injectable({
  providedIn: 'root',
})
export class KeyService {
  public key: string;
  public cipheredKey =
    'U2FsdGVkX193aRiuly/FN+lKPN8XPF06hYfWq3WW2ZEPICbI10Yxkf+FRRxhgjKJNFAuEdjHc7LT1s5MWryDjp8FHfu55bpZwA37r6Palbc=';
  public keyInit$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public profileName$: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  public keys = [
    {
      profileName: 'Clé API de Paul',
      cipheredKey:
        'U2FsdGVkX193aRiuly/FN+lKPN8XPF06hYfWq3WW2ZEPICbI10Yxkf+FRRxhgjKJNFAuEdjHc7LT1s5MWryDjp8FHfu55bpZwA37r6Palbc=',
    },
    {
      profileName: 'Clé API de David',
      cipheredKey:
        'U2FsdGVkX19TmS4Jf51KPim160OTCoZmytR2Tlj9LJs+6/51hy43bZL610wPLZ+X05EbTdgW+wBc9ALB7Znb8l4WPYkGDJ40cb4huhhTBDuGsM55ha+ESBjJ8zvbi3U/GKBjPn13Z/D+WsQHA9l4f9Hrr/BvtLDKZBwYGFVaQOurlgXlfpcQxm1qW6ipGj3pSo7tQqN5N2n6OyYGVAjM/Q==',
    },
  ];
  constructor(public cookieService: CookieService, public router: Router) {
    this.init();
  }

  public getKey() {
    return this.key;
  }

  public init() {
    const password = this.cookieService.get(PASSWORD_COOKIE_NAME);
    const apiKey = this.cookieService.get(API_KEY_COOKIE_NAME);
    if (apiKey) {
      console.log({ apiKey });
      try {
        this.key = apiKey;
        this.keyInit$.next(this.key);
        this.profileName$.next('Clé API custom');
      } catch (err) {
        console.error('Wrong key');
        this.resetPassword();
      }
    } else if (!!password) {
      for (let i = 0; i < this.keys.length; i++) {
        try {
          this.decipherKey(password, this.keys[i].cipheredKey);
        } catch (err) {}
        if (!!this.key) {
          this.profileName$.next(this.keys[i].profileName);
          break;
        }
      }
      if (!this.key) {
        console.error('Wrong key');
        this.resetPassword();
      }
    } else {
      console.warn('Pas de mots de passe');
      this.resetPassword();
    }
  }

  public decipherKey(password: string, cipheredKey: string) {
    console.log({ password, cipheredKey });
    const hash = CryptoJS.SHA256(password).toString();
    const bytes = CryptoJS.AES.decrypt(cipheredKey, hash);
    this.key = bytes.toString(CryptoJS.enc.Utf8);
    console.log(this.key);
    this.keyInit$.next(this.key);
  }

  public resetPassword() {
    this.cookieService.delete(PASSWORD_COOKIE_NAME);
    this.cookieService.delete(API_KEY_COOKIE_NAME);
    this.router.navigate(['/login']);
  }
}
