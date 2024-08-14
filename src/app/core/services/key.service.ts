import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KeyService {
  public key: string;
  public cipheredKey =
    'U2FsdGVkX193aRiuly/FN+lKPN8XPF06hYfWq3WW2ZEPICbI10Yxkf+FRRxhgjKJNFAuEdjHc7LT1s5MWryDjp8FHfu55bpZwA37r6Palbc=';
  public keyInit$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor(public cookieService: CookieService, public router: Router) {
    this.init();
  }

  public getKey() {
    return this.key;
  }

  public init() {
    const password = this.cookieService.get('key-encryption-pass');
    if (!!password) {
      this.decipherKey(password);
    } else {
      console.warn('Pas de mots de passe');
    }
  }

  public decipherKey(password: string) {
    try {
      const hash = CryptoJS.SHA256(password).toString();
      const bytes = CryptoJS.AES.decrypt(this.cipheredKey, hash);
      this.key = bytes.toString(CryptoJS.enc.Utf8);
      this.keyInit$.next(this.key);
    } catch (err) {
      console.error('Wrong key');
      this.resetPassword();
    }
  }

  public resetPassword() {
    this.cookieService.delete('key-encryption-pass');
    this.router.navigate(['/login']);
  }
}
