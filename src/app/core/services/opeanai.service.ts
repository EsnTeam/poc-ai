import { Injectable } from '@angular/core';
import { KeyService } from './key.service';

// import * as fs from 'fs';

// Import chatgpt-api module
import OpenAI from 'openai';
import { EsnThreadManagementService } from './thread-management.service';

@Injectable({
  providedIn: 'root',
})
export class EsnOpenaiService {
  public openai: OpenAI;
  constructor(
    public keyService: KeyService,
    public threadMgmtService: EsnThreadManagementService
  ) {
    this.keyService.keyInit$.subscribe((key) => {
      if (!!key) {
        this.openai = new OpenAI({
          apiKey: key,
          dangerouslyAllowBrowser: true,
        });
      }
    });
  }

  public listAssistants() {
    return this.openai.beta.assistants.list().then((x) => x.data);
  }

  public listThreads() {
    const ids = this.threadMgmtService.getThreadIds();
    const threadsPromises: Promise<any>[] = [];

    console.log({ ids });

    ids.forEach((id) => {
      threadsPromises.push(
        this.openai.beta.threads.retrieve(id).then((x) => x)
      );
    });
    console.log('asdfqsdlkf');
    return Promise.all(threadsPromises);
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
            tools: [{ type: 'file_search' }],
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

  public runThread(assistantId: string, threadId: string) {
    return this.openai.beta.threads.runs
      .create(threadId, {
        assistant_id: assistantId,
      })
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

  public async createFile(selectedFile: any) {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile, selectedFile['name'] as any);

      const file = await this.openai.files
        .create({
          file: formData.get('file') as File,
          purpose: 'assistants',
        })
        .then((x) => x);

      console.log(file);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }
}
