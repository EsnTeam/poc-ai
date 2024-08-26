import { Attribute, Injectable } from '@angular/core';
import { KeyService } from './key.service';

// import * as fs from 'fs';

// Import chatgpt-api module
import OpenAI from 'openai';
import { CookieService } from 'ngx-cookie-service';
import {
  ASSISTANTS,
  CONFIG_COOKIE_NAME,
  THREADS,
  THREADS_COOKIE_NAME,
} from 'src/app/modules/shared/model/constants';
import { threadId } from 'worker_threads';
import { EsnOpenaiService } from './opeanai.service';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { ObjectSchema } from 'src/app/modules/shared/model/object-schema';
import { PocUtils } from 'src/app/modules/shared/utils/utils';
import { PROMPTS } from 'src/app/modules/shared/prompts/prompts';
const { XMLParser, XMLBuilder, XMLValidator } = require('fast-xml-parser');

import { z } from 'zod';
import { TextContentBlock } from 'openai/resources/beta/threads/messages';
import { saveAs } from 'file-saver';

const NAME_ATT = '@_name';
const ID_ATT = '@_xmi:id';

@Injectable({
  providedIn: 'root',
})
export class PatternExecutionService {
  public loadedObjects: ObjectSchema[] = [];
  constructor(
    public oaiService: EsnOpenaiService,
    public httpClient: HttpClient
  ) {}

  public async suggestFieldNames(schemas: ObjectSchema[]) {
    const threadId = THREADS.main;
    await this.oaiService.clearThread(threadId);
    await this.oaiService.createMessage(
      PROMPTS.rawDataStatement.replace('##1', JSON.stringify(schemas, null, 2)),
      threadId
    );

    await this.oaiService.createMessage(
      PROMPTS.askForFieldSuggestions,
      threadId
    );

    const run = await this.oaiService.runThread(ASSISTANTS.basic4ov2, threadId);
    await this.oaiService.waitForSuccess(run.id, threadId, true);

    const newMessage = (await this.oaiService.listMessages(threadId)).data[0];

    await this.oaiService.createMessage(
      PROMPTS.formatFieldNamesAnswer,
      threadId
    );

    const format = z.object({
      attributes: z.array(
        z.object({
          uuid: z.string(),
          suggestedFieldName: z.string(),
        })
      ),
    });

    const run2 = await this.oaiService.runThread(
      ASSISTANTS.noTool4oMini,
      threadId,
      format
    );
    await this.oaiService.waitForSuccess(run2.id, threadId, true);

    const jsonVal = JSON.parse(
      (
        (await this.oaiService.listMessages(threadId)).data[0]
          .content[0] as TextContentBlock
      ).text.value
    );

    console.log(jsonVal);
    return jsonVal;
  }

  public async generateJsonSchema(schemas: ObjectSchema[]) {
    const threadId = THREADS.main;
    await this.oaiService.clearThread(threadId);
    await this.oaiService.createMessage(
      PROMPTS.rawDataStatement.replace('##1', JSON.stringify(schemas, null, 2)),
      threadId
    );

    // JSON Schema
    await this.oaiService.createMessage(
      PROMPTS.askForJsonSchema.replace('##1', schemas[0].name),
      threadId
    );
    const run = await this.oaiService.runThread(ASSISTANTS.basic4ov2, threadId);
    await this.oaiService.waitForSuccess(run.id, threadId, true);

    const jsonSchema = await this.askAndGetJson(threadId);
    const blob = new Blob([JSON.stringify(jsonSchema, null, 4)], {
      type: 'text/plain;charset=utf-8',
    });
    saveAs(blob, 'json_schema.json');

    // JSON UI
    await this.oaiService.createMessage(
      PROMPTS.askForJsonUI.replace('##1', schemas[0].name),
      threadId
    );
    const run2 = await this.oaiService.runThread(
      ASSISTANTS.basic4ov2,
      threadId
    );
    await this.oaiService.waitForSuccess(run2.id, threadId, true);

    const jsonUI = await this.askAndGetJson(threadId);
    const blob2 = new Blob([JSON.stringify(jsonUI, null, 4)], {
      type: 'text/plain;charset=utf-8',
    });
    saveAs(blob2, 'json_ui.json');
  }

  public async askAndGetJson(threadId: string) {
    await this.oaiService.createMessage(PROMPTS.askForJsonOnly, threadId);

    const run2 = await this.oaiService.runThread(
      ASSISTANTS.noTool4oMini,
      threadId,
      null,
      true
    );
    await this.oaiService.waitForSuccess(run2.id, threadId, true);

    const jsonVal = JSON.parse(
      (
        (await this.oaiService.listMessages(threadId)).data[0]
          .content[0] as TextContentBlock
      ).text.value
    );

    console.log(jsonVal);
    return jsonVal;
  }
}
