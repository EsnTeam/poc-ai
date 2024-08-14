import { Injectable } from '@angular/core';
import { KeyService } from './key.service';

// import * as fs from 'fs';

// Import chatgpt-api module
import OpenAI from 'openai';
import { CookieService } from 'ngx-cookie-service';
import {
  CONFIG_COOKIE_NAME,
  THREADS_COOKIE_NAME,
} from 'src/app/modules/shared/model/constants';
import { threadId } from 'worker_threads';

export interface EsnAiUserConfig {
  assistantId?: string;
  showUsage?: boolean;
  autoRunThread?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class EsnAiUserConfigService {
  public openai: OpenAI;
  constructor(public cookieService: CookieService) {}

  public saveConfig(newConfig: EsnAiUserConfig) {
    const config = JSON.parse(
      this.cookieService.get(CONFIG_COOKIE_NAME) || '{}'
    );

    Object.assign(config, newConfig);

    this.cookieService.set(
      CONFIG_COOKIE_NAME,
      JSON.stringify(config),
      undefined,
      '/'
    );
  }

  public getConfig(): EsnAiUserConfig {
    return JSON.parse(this.cookieService.get(CONFIG_COOKIE_NAME) || '{}');
  }
}
