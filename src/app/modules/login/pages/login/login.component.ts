import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DipnnController } from 'src/app/core/services/dipnn-controller.service';
import { KeyService } from 'src/app/core/services/key.service';
import {
  API_KEY_COOKIE_NAME,
  PASSWORD_COOKIE_NAME,
} from 'src/app/modules/shared/model/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public value: string = '';
  public apiKey: string = '';

  constructor(
    public cookieService: CookieService,
    public router: Router,
    public keyService: KeyService,
    public dipnnService: DipnnController
  ) {}

  ngOnInit() {
    console.log('on INIT');
    this.dipnnService.doCall().subscribe((resp) => console.log({ resp }));
  }

  public onSubmit() {
    this.cookieService.set(PASSWORD_COOKIE_NAME, this.value);
    this.keyService.init();
    this.router.navigate(['/llm']);
  }

  public onInput(e: any) {
    if (e.key == 'Enter') {
      this.onSubmit();
    }
  }

  public onCustomKeySubmit() {
    this.cookieService.set(API_KEY_COOKIE_NAME, this.apiKey);
    this.keyService.init();
    console.log('qsdf');
    this.router.navigate(['/llm']);
  }

  public onCustomKeyInput(e: any) {
    if (e.key == 'Enter') {
      this.onCustomKeySubmit();
    }
  }
}
