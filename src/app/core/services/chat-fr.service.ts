import { Injectable } from '@angular/core';
import { PROMPTS_FR } from 'src/app/modules/chat/data/prompts/chatPromptsFr';
import { GptService } from './gpt.service';

@Injectable({
  providedIn: 'root',
})
export class ChatFrService {
  public prompt: string;
  constructor(public gptService: GptService) {
    this.prompt = PROMPTS_FR.initChatEsn;
  }

  public async process(userMessage: string): Promise<string> {
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve('Ceci est une réponse mockée');
    //   }, 1000);
    // });

    this.prompt += PROMPTS_FR.beforeEach + userMessage + PROMPTS_FR.afterEach;
    console.log({ promptSent: this.prompt });
    const response = await this.gptService.process(this.prompt);
    this.prompt += response;
    return response;
  }
}
