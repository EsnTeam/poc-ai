import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  Message,
  TextContentBlock,
} from 'openai/resources/beta/threads/messages';
import { EsnOpenaiService } from 'src/app/core/services/opeanai.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  host: { '[class.bot]': 'message.role == "assistant"' },
})
export class MessageComponent {
  @Input() message!: Message;
  @Input() files: any[];
  @Output() delete: EventEmitter<void> = new EventEmitter();

  constructor(public oaiService: EsnOpenaiService) {}

  get text() {
    return (this.message.content[0] as TextContentBlock).text.value;
  }

  public getFileText(fileId: string) {
    return (
      this.files?.find((f) => f.id == fileId)?.filename ||
      `${fileId} (fichier inconnu)`
    );
  }

  public onDeleteClick() {
    this.delete.emit();
  }

  public downloadFile(fileId: string) {
    this.oaiService.downloadFile(fileId);
  }
}
