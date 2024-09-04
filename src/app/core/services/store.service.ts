import { Injectable } from '@angular/core';
import { EsnOpenaiService } from './opeanai.service';
import { Assistant } from 'openai/resources/beta/assistants';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  public store: {
    assistants?: Assistant[];
  } = {};
  constructor(public oaiService: EsnOpenaiService) {}

  public async getAssistants(): Promise<Assistant[]> {
    if (!this.store.assistants) {
      await this.refreshAssistants();
    }
    return this.store.assistants as Assistant[];
  }

  public async refreshAssistants() {
    this.store.assistants = await this.oaiService.listAssistants();
  }
}
