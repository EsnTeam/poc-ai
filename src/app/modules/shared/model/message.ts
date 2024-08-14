export interface Message {
  origin: MessageOriginEnum;
  text: string;
}

export enum MessageOriginEnum {
  USER = 'USER',
  BOT = 'BOT',
}
