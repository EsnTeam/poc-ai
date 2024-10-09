import { Attribute, Injectable } from '@angular/core';
import { KeyService } from './key.service';

// import * as fs from 'fs';

// Import chatgpt-api module
import OpenAI from 'openai';
import { CookieService } from 'ngx-cookie-service';
import {
  ASSISTANTS,
  CONFIG_COOKIE_NAME,
  JSON_SCHEMA_DB_KEY,
  THREADS,
  THREADS_COOKIE_NAME,
  UI_SCHEMA_DB_KEY,
} from 'src/app/modules/shared/model/constants';
import { threadId } from 'worker_threads';
import { EsnOpenaiService } from './opeanai.service';
import { DatePipe, LocationStrategy } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import {
  ObjectSchema,
  ObjectSchemaAttribute,
} from 'src/app/modules/shared/model/object-schema';
import { PocUtils } from 'src/app/modules/shared/utils/utils';
import { PROMPTS } from 'src/app/modules/shared/prompts/prompts';
const { XMLParser, XMLBuilder, XMLValidator } = require('fast-xml-parser');

import { z } from 'zod';
import { TextContentBlock } from 'openai/resources/beta/threads/messages';
import { saveAs } from 'file-saver';
import {
  ExecutionStateEnum,
  InputFormattingEnum,
  Pattern,
  PatternStep,
  PatternStepExecutionState,
  PatternStepType,
  RunFormatEnum,
  StepActionType,
} from 'src/app/modules/shared/model/pattern';
import { FirebaseController } from './firebase-controller.service';
import { UmlProcessingService } from './uml-processing.service';
import { WorkflowSessionService } from './workflow-session.service';
import { Router } from '@angular/router';
import { IdbService } from './idb.service';

@Injectable({
  providedIn: 'root',
})
export class PatternExecutionService {
  public loadedObjects: ObjectSchema[] = [];
  public executionState$: BehaviorSubject<{
    [key in string]: PatternStepExecutionState;
  }> = new BehaviorSubject({});
  public objectName$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor(
    public oaiService: EsnOpenaiService,
    public httpClient: HttpClient,
    public firebaseController: FirebaseController,
    public umlService: UmlProcessingService,
    public sessionService: WorkflowSessionService,
    public locationStrategy: LocationStrategy,
    public router: Router,
    public dbService: IdbService
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
        return this.executeActionStep(step, threadId, inputs);
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

  public async executeActionStep(
    step: PatternStep,
    threadId: string,
    inputs: string[]
  ) {
    switch (step.actionType) {
      case StepActionType.DOWNLOAD:
        return await this.downloadLastResponse(threadId, step.fileName!);
      case StepActionType.ADD_FIELD_TO_DATA:
        return await this.addFieldNames(threadId);
      case StepActionType.REPLACE_DATA:
        return await this.replaceData(threadId);
      case StepActionType.FORMAT_INPUT:
        return await this.formatInput(step, inputs);
      case StepActionType.IMPORT_JSON_SCHEMA_FROM_RESP:
        return await this.importJsonSchemaFromResp(threadId);
      case StepActionType.IMPORT_UI_SCHEMA_FROM_RESP:
        return await this.importUiSchemaFromResp(threadId);
      case StepActionType.OPEN_FORM_PREVIEW:
        return await this.openFormPreview();
      default:
        return true;
    }
  }

  public openFormPreview() {
    // this.router.navigate(['/llm/preview']);
    const url = `${this.locationStrategy.getBaseHref()}#/llm/preview`;
    window.open(url, '_blank');
  }

  public async importJsonSchemaFromResp(threadId: string) {
    await this.dbService.setValueByKey(
      'session-data',
      JSON_SCHEMA_DB_KEY,
      JSON.parse(await this.getLastResponseText(threadId))
    );
  }

  public async importUiSchemaFromResp(threadId: string) {
    await this.dbService.setValueByKey(
      'session-data',
      UI_SCHEMA_DB_KEY,
      JSON.parse(await this.getLastResponseText(threadId))
    );
  }

  public formatInput(step: PatternStep, inputs: string[]) {
    const inputNb = step.inputNb;

    inputs[step.inputNb!] = this.transformInput(
      inputs[step.inputNb!],
      step.inputFormat!
    );
  }

  public transformInput(str: string, formatting: InputFormattingEnum) {
    switch (formatting) {
      case InputFormattingEnum.FLAT_TO_NESTED:
        return this.flatToNested(str);
      default:
        return str;
    }
  }

  public flatToNested(str: string) {
    const input = JSON.parse(str);
    this.nestAttributes(input[0].attributes, input);

    return JSON.stringify(input[0], null, 2);
  }

  public nestAttributes(
    attributes: ObjectSchemaAttribute[],
    schemas: ObjectSchema[]
  ) {
    if (attributes.every((att) => !att.isSubObjectIncluded)) {
      return;
    }
    attributes.forEach((att: any) => {
      if (att.isSubObjectIncluded) {
        att.attributes = PocUtils.getSchemaNamed(att.type, schemas).attributes;
        this.nestAttributes(att.attributes, schemas);
      }
    });
  }

  public async replaceData(threadId: string) {
    const jsonVal = JSON.parse(
      (
        (await this.oaiService.listMessages(threadId)).data[0]
          .content[0] as TextContentBlock
      ).text.value
    );

    jsonVal.data.forEach((obj: ObjectSchema) => {
      obj.attributes.forEach((att) => {
        if (att.isPrimitiveType) {
          att.isIncluded = true;
        } else {
          att.isSubObjectIncluded = true;
        }
      });
    });

    this.umlService.loadedObjects = jsonVal.data;
    this.objectName$.next(jsonVal.data[0].name);
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
    const blob = new Blob([await this.getLastResponseText(threadId, true)], {
      type: 'text/plain;charset=utf-8',
    });
    saveAs(blob, fileName);
  }

  public async getLastResponseText(threadId: string, asJson: boolean = true) {
    const rawText = (
      (await this.oaiService.listMessages(threadId)).data[0]
        .content[0] as TextContentBlock
    ).text.value;

    if (!asJson) {
      return rawText;
    }

    let jsonVal = '';
    try {
      jsonVal = JSON.parse(rawText);
    } catch (err) {
      const extractedJson = rawText.split('```json')[1].split('```')[0];
      jsonVal = JSON.parse(extractedJson);
    }

    return JSON.stringify(jsonVal, null, 4);
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

  // public async generateJsonSchema(schemas: ObjectSchema[]) {
  //   const threadId = THREADS.main;
  //   await this.oaiService.clearThread(threadId);
  //   await this.oaiService.createMessage(
  //     PROMPTS.rawDataStatement.replace('##1', JSON.stringify(schemas, null, 2)),
  //     threadId
  //   );

  //   // JSON Schema
  //   await this.oaiService.createMessage(
  //     PROMPTS.askForJsonSchema.replace('##1', schemas[0].name),
  //     threadId
  //   );
  //   const run = await this.oaiService.runThread(ASSISTANTS.basic4ov2, threadId);
  //   await this.oaiService.waitForSuccess(run.id, threadId, true);

  //   const jsonSchema = await this.askAndGetJson(threadId);
  //   const blob = new Blob([JSON.stringify(jsonSchema, null, 4)], {
  //     type: 'text/plain;charset=utf-8',
  //   });
  //   saveAs(blob, 'json_schema.json');

  //   // JSON UI
  //   await this.oaiService.createMessage(
  //     PROMPTS.askForJsonUI.replace('##1', schemas[0].name),
  //     threadId
  //   );
  //   const run2 = await this.oaiService.runThread(
  //     ASSISTANTS.basic4ov2,
  //     threadId
  //   );
  //   await this.oaiService.waitForSuccess(run2.id, threadId, true);

  //   const jsonUI = await this.askAndGetJson(threadId);
  //   const blob2 = new Blob([JSON.stringify(jsonUI, null, 4)], {
  //     type: 'text/plain;charset=utf-8',
  //   });
  //   saveAs(blob2, 'json_ui.json');
  // }

  // public async askAndGetJson(threadId: string) {
  //   await this.oaiService.createMessage(PROMPTS.askForJsonOnly, threadId);

  //   const run2 = await this.oaiService.runThread(
  //     ASSISTANTS.noTool4oMini,
  //     threadId,
  //     null,
  //     true
  //   );
  //   await this.oaiService.waitForSuccess(run2.id, threadId, true);

  //   const jsonVal = JSON.parse(
  //     (
  //       (await this.oaiService.listMessages(threadId)).data[0]
  //         .content[0] as TextContentBlock
  //     ).text.value
  //   );

  //   console.log(jsonVal);
  //   return jsonVal;
  // }
}
