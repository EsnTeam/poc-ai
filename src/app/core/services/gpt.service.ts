import { Injectable } from '@angular/core';
import { KeyService } from './key.service';

// import * as fs from 'fs';

// Import chatgpt-api module
import OpenAI from 'openai';

@Injectable({
  providedIn: 'root',
})
export class GptService {
  public openai: OpenAI;
  constructor(public keyService: KeyService) {
    this.keyService.keyInit$.subscribe((key) => {
      if (!!key) {
        this.openai = new OpenAI({
          apiKey: key,
          dangerouslyAllowBrowser: true,
        });
      }
    });
  }

  public async callTest() {
    try {
      // const file = await this.openai.files.create({
      //   file: ,
      //   purpose: 'fine-tune',
      // });

      const response = this.openai.chat.completions.create({
        model: 'gpt-3.5-turbo-0125',
        messages: [
          {
            role: 'system',
            content: 'What is this file.',
          },
          {
            role: 'user',
            content: 'Bonjour.',
          },
        ],
        temperature: 0,
        // max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      return new Promise((resolve) => {
        response.then((resp) => {
          console.log(resp);
          resolve(resp.choices[0].message.content);
        });
      });
    } catch (err) {
      console.log(err);
      this.keyService.resetPassword();
    }
  }

  public async process(prompt: string): Promise<any> {
    try {
      // const response = await this.openai.createCompletion({
      //   model: 'gpt-3.5-turbo-0125',
      //   prompt,
      //   temperature: 0,
      //   max_tokens: 100,
      //   top_p: 1,
      //   frequency_penalty: 0,
      //   presence_penalty: 0,
      // });

      const response = this.openai.chat.completions.create({
        model: 'gpt-3.5-turbo-0125',
        messages: [
          {
            role: 'system',
            content: 'You are Marv, a chatbot that answers questions.',
          },
          {
            role: 'user',
            content: 'Bonjour.',
          },
        ],
        temperature: 0,
        // max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      return new Promise((resolve) => {
        response.then((resp) => {
          console.log(resp);
          resolve(resp.choices[0].message.content);
        });
      });
    } catch (err) {
      console.log(err);
      this.keyService.resetPassword();
    }
  }
}
