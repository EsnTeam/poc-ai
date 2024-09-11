import { Injectable } from '@angular/core';
import { KeyService } from './key.service';
import { z } from 'zod';
import { zodResponseFormat } from 'openai/helpers/zod';

// import * as fs from 'fs';

// Import chatgpt-api module
import OpenAI from 'openai';
import { EsnThreadManagementService } from './thread-management.service';
import { PocUtils } from 'src/app/modules/shared/utils/utils';
import { ToastrService } from 'ngx-toastr';
import { MODELS_PRICING } from 'src/app/modules/shared/model/constants';
import { Assistant } from 'openai/resources/beta/assistants';

@Injectable({
  providedIn: 'root',
})
export class EsnOpenaiService {
  public openai: OpenAI;
  public assistants: Assistant[] = [];
  constructor(
    public keyService: KeyService,
    public threadMgmtService: EsnThreadManagementService,
    private toastr: ToastrService
  ) {
    this.keyService.keyInit$.subscribe((key) => {
      if (!!key) {
        this.openai = new OpenAI({
          apiKey: key,
          dangerouslyAllowBrowser: true,
        });
      }
    });
    this.listAssistants().then((data) => (this.assistants = data));
  }

  public listAssistants() {
    return this.openai.beta.assistants.list().then((x) => x.data);
  }

  public async listThreads() {
    const ids = this.threadMgmtService.getThreadIds();
    const threadsPromises: Promise<any>[] = [];

    console.log({ ids });

    ids.forEach((id) => {
      try {
        threadsPromises.push(
          this.openai.beta.threads
            .retrieve(id)
            .then((x) => x)
            .catch((e) => {})
        );
      } catch (err) {}
    });
    console.log('asdfqsdlkf');
    const resp = await Promise.all(threadsPromises);
    return resp.filter((x) => x);
  }

  public async createAssistant(config: any) {
    const myAssistant = await this.openai.beta.assistants
      // .create({
      //   instructions: "You are an assistant who's job is to parse UML files.",
      //   name: 'UML assistant',
      //   tools: [{ type: 'file_search' }],
      //   model: 'gpt-4o-mini',
      // })
      .create(config)
      .then((x) => x);
  }

  public async createThread() {
    const myThread = await this.openai.beta.threads.create().then((x) => x);
    this.threadMgmtService.saveThread(myThread.id);
  }

  public createMessage(str: string, threadId: string) {
    return this.openai.beta.threads.messages
      .create(threadId, {
        role: 'user',
        content: str,
      })
      .then((x) => x);
  }

  public createMessageWithFile(str: string, threadId: string, fileId: string) {
    return this.openai.beta.threads.messages
      .create(threadId, {
        role: 'user',
        content: str,
        attachments: [
          {
            file_id: fileId, //txtRCFileId,
            tools: [{ type: 'file_search' }, { type: 'code_interpreter' }],
            // tools: [{ type: 'code_interpreter' }],
          },
        ],
      })
      .then((x) => x);
  }

  public listMessages(threadId: string) {
    return this.openai.beta.threads.messages.list(threadId).then((resp) => {
      return resp;
    });
  }

  public deleteMessage(msgId: string, threadId: string) {
    return this.openai.beta.threads.messages
      .del(threadId, msgId)
      .then((x) => x);
  }

  public runThread(
    assistantId: string,
    threadId: string,
    format?: any,
    jsonFormat?: boolean
  ) {
    // const format = z.object({
    //   results: z.array(
    //     z.object({
    //       id: z.string(),
    //       name: z.string(),
    //       type: z.string(),
    //       association: z.string(),
    //     })
    //   ),
    // });

    const runConf = {
      assistant_id: assistantId,
      // response_format: zodResponseFormat(format, 'format'),
    } as any;

    if (jsonFormat) {
      runConf.response_format = { type: 'json_object' };
    }
    if (format) {
      runConf.response_format = zodResponseFormat(format, 'format');
    }

    return this.openai.beta.threads.runs
      .create(threadId, runConf)
      .then((x) => x);
  }

  public retreiveRun(threadId: string, runId: string) {
    return this.openai.beta.threads.runs
      .retrieve(threadId, runId)
      .then((x) => x);
  }

  public listFiles() {
    return this.openai.files.list().then((x) => x.data);
  }

  public async clearThread(threadId: string) {
    const list = await this.listMessages(threadId);
    const promises = [] as any[];

    list.data
      .map((d) => d.id)
      .forEach((id, index) => {
        // if (list.data.length - index > 2) {
        promises.push(this.deleteMessage(id, threadId));
        // }
      });
    await Promise.all(promises);
  }

  public async createFile(selectedFile: any) {
    const formData = new FormData();
    formData.append('file', selectedFile, selectedFile['name'] as any);

    return await this.openai.files
      .create({
        file: formData.get('file') as File,
        purpose: 'assistants',
      })
      .then((x) => x);
  }

  public async downloadFile(fileId: string) {
    const fileContent = await this.openai.files.content(fileId).then((x) => x);

    // const bufferView = new Uint8Array(await fileContent.arrayBuffer());
    // const string = new TextDecoder().decode(bufferView);

    // const str2 = Buffer.from(bufferView).toString('utf-8');

    console.log({ fileContent });

    var blob, url;
    blob = new Blob([await fileContent.arrayBuffer()], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    url = window.URL.createObjectURL(blob);

    const fileType = 'XLSX/XLS';
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', url);
    link.setAttribute('download', `test.xlsx`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  public async waitForSuccess(
    runId: string,
    threadId: string,
    showUsage: boolean = true
  ) {
    let status = 'queued';
    let runVal;
    while (status == 'queued' || status == 'in_progress') {
      await PocUtils.sleep(1000);
      runVal = await this.retreiveRun(threadId, runId);
      status = runVal.status;
      console.log({ runVal });
    }

    if (showUsage) {
      const inputToks = runVal?.usage?.prompt_tokens || 0;
      const outputToks = runVal?.usage?.completion_tokens || 0;

      let cost: any =
        (inputToks / 1000000) *
          this.getPricePerMInputTokens(runVal?.assistant_id!) +
        (outputToks / 1000000) *
          this.getPricePerMOutputTokens(runVal?.assistant_id!);

      if (cost < 0.0001) {
        cost = '< 0.0001';
      } else {
        cost = Math.trunc(cost * 10000) / 10000;
      }

      const message = `Input: ${inputToks} tokens
Output: ${outputToks} tokens
Cost: ${cost}$`;
      this.toastr.success(message, 'Usage', { disableTimeOut: true });
    }
  }

  public getPricePerMInputTokens(assistantId: string) {
    const modelPricing =
      MODELS_PRICING[
        this.assistants.find((a) => a.id == assistantId)?.model as 'gpt-4o'
      ];
    return modelPricing.input;
  }

  public getPricePerMOutputTokens(assistantId: string) {
    const modelPricing =
      MODELS_PRICING[
        this.assistants.find((a) => a.id == assistantId)?.model as 'gpt-4o'
      ];
    return modelPricing.output;
  }
}
