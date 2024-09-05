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
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { ObjectSchema } from 'src/app/modules/shared/model/object-schema';
import { PocUtils } from 'src/app/modules/shared/utils/utils';
import { PROMPTS } from 'src/app/modules/shared/prompts/prompts';
const { XMLParser, XMLBuilder, XMLValidator } = require('fast-xml-parser');

import { z } from 'zod';
import { TextContentBlock } from 'openai/resources/beta/threads/messages';
import { saveAs } from 'file-saver';
import {
  ExecutionStateEnum,
  Pattern,
  PatternStep,
  PatternStepExecutionState,
  PatternStepType,
  RunFormatEnum,
  StepActionType,
} from 'src/app/modules/shared/model/pattern';
import { FirebaseController } from './firebase-controller.service';
import { UmlProcessingService } from './uml-processing.service';

@Injectable({
  providedIn: 'root',
})
export class PatternExecutionService {
  public loadedObjects: ObjectSchema[] = [];
  public executionState$: BehaviorSubject<{
    [key in string]: PatternStepExecutionState;
  }> = new BehaviorSubject({});
  constructor(
    public oaiService: EsnOpenaiService,
    public httpClient: HttpClient,
    public firebaseController: FirebaseController,
    public umlService: UmlProcessingService
  ) {}

  public async executePattern(
    patternId: string,
    inputs: string[],
    threadId: string
  ) {
    const pattern: Pattern = await lastValueFrom(
      this.firebaseController.getPatternById(patternId)
    );

    this.executionState$.next({
      clearThread: {
        state: ExecutionStateEnum.ONGOING,
      },
    });

    await this.oaiService.clearThread(threadId);
    this.executionState$.next({
      clearThread: {
        state: ExecutionStateEnum.SUCCESS,
      },
    });

    for (let i = 0; i < pattern.steps.length; i++) {
      if (!pattern.steps[i].pause) {
        this.executionState$.value[pattern.steps[i].stepId] = {
          state: ExecutionStateEnum.ONGOING,
        };
        this.executionState$.next(this.executionState$.value);

        await this.executeStep(pattern.steps[i], inputs, threadId);

        this.executionState$.value[pattern.steps[i].stepId] = {
          state: ExecutionStateEnum.SUCCESS,
        };
        this.executionState$.next(this.executionState$.value);
      }
    }
  }

  public async executeStep(
    step: PatternStep,
    inputs: string[],
    threadId: string
  ) {
    switch (step.type) {
      case PatternStepType.MESSAGE:
        return this.executeMessageStep(step, inputs, threadId);
      case PatternStepType.RUN:
        return this.executeRunStep(step, threadId);
      case PatternStepType.ACTION:
        return this.executeActionStep(step, threadId);
      default:
        return true;
    }
  }

  public async executeMessageStep(
    step: PatternStep,
    inputs: string[],
    threadId: string
  ) {
    if (step.attachedFileId) {
      await this.oaiService.createMessageWithFile(
        this.replaceVariablesInString(step.prompt!, inputs),
        threadId,
        this.replaceVariablesInString(step.attachedFileId!, inputs)
      );
    } else {
      await this.oaiService.createMessage(
        this.replaceVariablesInString(step.prompt!, inputs),
        threadId
      );
    }
  }

  public async executeRunStep(step: PatternStep, threadId: string) {
    let format = null;
    let jsonFormat = false;
    if (step.runFormat == RunFormatEnum.JSON) {
      jsonFormat = true;
    }
    if (step.runFormat == RunFormatEnum.UUID_SUGG_FIELD_NAME) {
      format = z.object({
        attributes: z.array(
          z.object({
            uuid: z.string(),
            suggestedFieldName: z.string(),
          })
        ),
      });
    }

    const run = await this.oaiService.runThread(
      step.assistantId!,
      threadId,
      format,
      jsonFormat
    );
    await this.oaiService.waitForSuccess(run.id, threadId, true);
  }

  public async executeActionStep(step: PatternStep, threadId: string) {
    switch (step.actionType) {
      case StepActionType.DOWNLOAD:
        return await this.downloadLastResponse(threadId, step.fileName!);
      case StepActionType.ADD_FIELD_TO_DATA:
        return await this.addFieldNames(threadId);
      default:
        return true;
    }
  }

  public async addFieldNames(threadId: string) {
    const jsonVal = JSON.parse(
      (
        (await this.oaiService.listMessages(threadId)).data[0]
          .content[0] as TextContentBlock
      ).text.value
    );

    this.umlService.loadedObjects.forEach((obj) => {
      obj.attributes.forEach((att) => {
        att.suggestedFieldName = jsonVal.attributes.find(
          (o: any) => o.uuid == att.uuid
        )?.suggestedFieldName;
      });
    });
  }

  public async downloadLastResponse(threadId: string, fileName: string) {
    const jsonVal = JSON.parse(
      (
        (await this.oaiService.listMessages(threadId)).data[0]
          .content[0] as TextContentBlock
      ).text.value
    );

    const blob = new Blob([JSON.stringify(jsonVal, null, 4)], {
      type: 'text/plain;charset=utf-8',
    });
    saveAs(blob, fileName);
  }

  public replaceVariablesInString(str: string, inputs: string[]) {
    let returnStr = str;
    for (let i = 0; i < 21; i++) {
      returnStr = returnStr.replace(`##${i + 1}`, inputs?.[i]);
    }
    return returnStr;
  }

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
