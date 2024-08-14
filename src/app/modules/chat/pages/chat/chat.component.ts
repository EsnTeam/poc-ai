import { LocationStrategy } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import OpenAI from 'openai';
import { Assistant } from 'openai/resources/beta/assistants';
import { Message } from 'openai/resources/beta/threads/messages';
import { EsnOpenaiService } from 'src/app/core/services/opeanai.service';
import { EsnAiSnapshotService } from 'src/app/core/services/snapshot.service';
import { EsnAiUserConfigService } from 'src/app/core/services/user-config.service';
import {
  ASSISTANTS,
  FILES,
  MODELS_PRICING,
  THREADS,
  VECTOR_STORES,
} from 'src/app/modules/shared/model/constants';

//what are the names and types of the <attr> of <elm> with name contrat ?
// https://esnteam.github.io/poc-ai/poc-ai/

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  selectedFile: File | null = null;
  openai: OpenAI;
  messages: Message[] = [];
  value: string;
  withFiles: boolean = false;
  processing: boolean = false;
  public threadId: string;
  public fileId: string;
  public assistantId: string;
  public files: any[];
  public assistants: Assistant[] = [];
  public autoRunThread: boolean = true;
  public showUsage: boolean = true;
  public snapshotLoading: boolean = false;

  constructor(
    public oaiService: EsnOpenaiService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public locationStrategy: LocationStrategy,
    private toastr: ToastrService,
    public userConfigService: EsnAiUserConfigService,
    public snapshotService: EsnAiSnapshotService
  ) {}

  async ngOnInit() {
    this.activatedRoute.params.subscribe(async (params) => {
      this.threadId = params['threadId'];
      this.refreshMessages();
    });

    this.assistants = await this.oaiService.listAssistants();
    this.useConfig();

    this.files = await this.oaiService.listFiles();
  }

  public useConfig() {
    const userConfig = this.userConfigService.getConfig();
    if (userConfig.autoRunThread === false) {
      this.autoRunThread = false;
    }

    if (userConfig.showUsage === false) {
      this.showUsage = false;
    }
    this.assistantId = userConfig.assistantId || this.assistants[0].id;
  }

  onAssistantChange(e: any) {
    console.log(e.target.value);
  }

  public onInput(e: any) {
    if (e.key == 'Enter') {
      this.addMessageRunAndRefresh(this.value);
      this.value = '';
      e.preventDefault();
      e.stopPropagation();
    }
  }

  public async callTest() {
    // this.retreiveThread();
    // this.retreiveFile();
    // await this.createMessageWithFile('What is this file ?');
    // await this.runThread();
    // this.retreiveAssistant();
    // this.openai.beta.vectorStores.files.list(VECTOR_STORES.main);
    // await this.listMessages();
    // this.updateAssistant();
    // this.listFiles();
    // this.openai.files.content('file-x86ut9l1ASYFWVIWbHl8WQyj');
    // this.openai.files.del(FILES.min_v1);
    // this.addFileToVectorStore();
  }

  public updateConfig() {
    this.userConfigService.saveConfig({
      assistantId: this.assistantId,
      showUsage: this.showUsage,
      autoRunThread: this.autoRunThread,
    });
  }

  public async createThread() {
    const emptyThread = await this.openai.beta.threads.create({
      tool_resources: {
        file_search: {
          vector_store_ids: [VECTOR_STORES.main],
        },
      },
    });
    console.log(emptyThread);
  }

  public async createVectorStore() {
    let vectorStore = await this.openai.beta.vectorStores.create({
      name: 'UML file test',
    });
  }

  public async addFileToVectorStore() {
    const myVectorStoreFile = await this.openai.beta.vectorStores.files.create(
      VECTOR_STORES.main,
      {
        file_id: FILES.min_v1,
      }
    );
  }

  public onSelectedFileChange(e: any) {
    this.fileId = e.target.value;
  }

  public handleWithFileClick(e: any) {
    console.log({ val: e.target.checked });
    this.withFiles = e.target.checked;
  }

  public async refreshMessages() {
    return this.oaiService.listMessages(this.threadId).then((resp) => {
      this.messages = resp.data;

      return resp;
    });
  }

  public async downloadSnapshot() {
    this.snapshotLoading = true;
    await this.snapshotService.downloadSnapshot(this.threadId);
    this.snapshotLoading = false;
  }

  public async clearThread() {
    // this.listMessages().then((list) => console.log({ list }));
    const list = await this.refreshMessages();
    console.log({ data: list.data.map((d) => d.id) });

    const promises = [] as any[];

    list.data
      .map((d) => d.id)
      .forEach((id, index) => {
        // if (list.data.length - index > 2) {
        promises.push(this.oaiService.deleteMessage(id, this.threadId));
        // }
      });
    await Promise.all(promises);
    await this.refreshMessages();
  }

  public async retreiveFile() {
    const file = await this.openai.files.retrieve(FILES.min_v1);
  }

  public async runThread() {
    const run = await this.oaiService.runThread(
      this.assistantId,
      this.threadId
    );
    console.log({ run });
    const runId = run.id;

    await this.waitForSuccess(runId);

    await this.refreshMessages();
  }

  public async addMessageRunAndRefresh(msg: string) {
    await (this.withFiles
      ? this.oaiService.createMessageWithFile(msg, this.threadId, this.fileId)
      : this.oaiService.createMessage(msg, this.threadId));

    await this.refreshMessages();

    if (!this.autoRunThread) {
      return;
    }

    await this.runThread();

    await this.refreshMessages();

    // }
    // this.openai.beta.threads.messages.create(
    //   THREADS.main,
    //   {
    //     role: 'user',
    //     content: msg,
    //   }
    // );
  }

  public async waitForSuccess(runId: string) {
    this.processing = true;
    let status = 'queued';
    let runVal;
    while (status == 'queued' || status == 'in_progress') {
      await this.sleep(1000);
      runVal = await this.oaiService.retreiveRun(this.threadId, runId);
      status = runVal.status;
      console.log({ runVal });
    }

    if (this.showUsage) {
      const inputToks = runVal?.usage?.prompt_tokens || 0;
      const outputToks = runVal?.usage?.completion_tokens || 0;

      let cost: any =
        (inputToks / 1000000) * this.getPricePerMInputTokens() +
        (outputToks / 1000000) * this.getPricePerMOutputTokens();

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

    this.processing = false;
  }

  public getPricePerMInputTokens() {
    const modelPricing =
      MODELS_PRICING[
        this.assistants.find((a) => a.id == this.assistantId)?.model as 'gpt-4o'
      ];
    return modelPricing.input;
  }

  public getPricePerMOutputTokens() {
    const modelPricing =
      MODELS_PRICING[
        this.assistants.find((a) => a.id == this.assistantId)?.model as 'gpt-4o'
      ];
    return modelPricing.output;
  }

  public listFiles() {
    this.openai.files.list();

    // for await (const file of list) {
    //   console.log(file);
    // }
  }

  public async sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  public updateAssistant() {
    this.openai.beta.assistants.update(ASSISTANTS.main, {
      // temperature: 0.1,
      // top_p: 0.1,
      model: 'gpt-4o-mini',
    });
  }

  public back() {
    this.router.navigate([`/poc-ai/threads`]);
  }

  public onManageFilesClick() {
    const url = `${this.locationStrategy.getBaseHref()}poc-ai/files`;
    window.open(url, '_blank');
  }

  public onManageAssistantsClick() {
    const url = `${this.locationStrategy.getBaseHref()}poc-ai/assistants`;
    window.open(url, '_blank');
  }

  public async onDeleteMessage(message: Message) {
    await this.oaiService.deleteMessage(message.id, this.threadId);
    this.refreshMessages();
  }
}
