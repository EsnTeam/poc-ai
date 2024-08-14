import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DipnnController {
  constructor(
    public tokenService: TokenService,
    public httpClient: HttpClient
  ) {}

  public doCall() {
    const token = this.tokenService.getToken();
    return this.httpClient.get(
      'https://tdm-api.hp.gda.edf.fr/ipnn_kmu_rfp/v1/api/sites',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
}
