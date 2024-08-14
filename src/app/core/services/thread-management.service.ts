import { Injectable } from '@angular/core';
import { KeyService } from './key.service';

// import * as fs from 'fs';

// Import chatgpt-api module
import OpenAI from 'openai';
import { CookieService } from 'ngx-cookie-service';
import { THREADS_COOKIE_NAME } from 'src/app/modules/shared/model/constants';
import { threadId } from 'worker_threads';

@Injectable({
  providedIn: 'root',
})
export class EsnThreadManagementService {
  public openai: OpenAI;
  constructor(public cookieService: CookieService) {}

  public saveThread(threadId: string) {
    const threads = JSON.parse(
      this.cookieService.get(THREADS_COOKIE_NAME) || '[]'
    );
    if (!threads.includes(threadId)) {
      threads.push(threadId);
    }
    console.log({ saving: threads });

    this.cookieService.set(
      THREADS_COOKIE_NAME,
      JSON.stringify(threads),
      undefined,
      '/'
    );
  }

  public deleteThread(threadId: string) {
    this.cookieService.set(
      THREADS_COOKIE_NAME,
      JSON.stringify(
        JSON.parse(this.cookieService.get(THREADS_COOKIE_NAME) || '[]').filter(
          (x: string) => x != threadId
        )
      ),
      undefined,
      '/'
    );
  }
  public getThreadIds(): string[] {
    console.log(this.cookieService.get(THREADS_COOKIE_NAME));
    return JSON.parse(this.cookieService.get(THREADS_COOKIE_NAME) || '[]');
  }
}
