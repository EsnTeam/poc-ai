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
import { EsnOpenaiService } from './opeanai.service';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class EsnAiSnapshotService {
  public openai: OpenAI;
  constructor(public oaiService: EsnOpenaiService, public datePipe: DatePipe) {}

  public async downloadSnapshot(threadId: string) {
    const date = new Date();
    const snapshot = await this.getSnapshot(threadId);
    const fileType = 'text/plain';
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute(
      'href',
      `data:${fileType};charset=utf-8,${encodeURIComponent(
        JSON.stringify(snapshot, null, 4)
      )}`
    );
    link.setAttribute(
      'download',
      `conv-snapshot_${this.datePipe.transform(
        date,
        `dd-MM-yyyy_HH'h'mm`
      )}.json`
    );
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  public async getSnapshot(threadId: string) {
    const assistants = await this.oaiService.listAssistants();
    const messages = (await this.oaiService.listMessages(threadId)).data;

    const promises = messages
      .map((m) => m.run_id)
      .filter((x) => !!x)
      .map((runId) => this.oaiService.retreiveRun(threadId, runId!));
    const runs = await Promise.all(promises);

    return {
      threadId,
      messages,
      runs,
      assistants,
    };
  }
}
