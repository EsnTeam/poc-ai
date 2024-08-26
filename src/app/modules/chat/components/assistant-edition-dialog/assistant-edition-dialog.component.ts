import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EsnOpenaiService } from 'src/app/core/services/opeanai.service';

@Component({
  selector: 'app-assistant-edition-dialog',
  templateUrl: './assistant-edition-dialog.component.html',
  styleUrls: ['./assistant-edition-dialog.component.scss'],
})
export class AssistantEditionDialogComponent {
  @Output() updated = new EventEmitter();
  public confString: string = `{
    "name": "XXXXXXXX[EDIT THIS]",
    "instructions": "You are a helpful assistant.",
    "tools": [
      {"type": "file_search"},
      {"type": "code_interpreter"}
    ],
    "model": "gpt-4o"
  }`;
  public parseError: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<AssistantEditionDialogComponent>,
    public oaiService: EsnOpenaiService
  ) {}

  public async createAssistant() {
    let config;
    console.log(this.confString);
    try {
      config = JSON.parse(this.confString);
    } catch (err) {
      console.error(err);
      this.parseError = true;
    }

    if (config) {
      this.parseError = false;
      await this.oaiService.createAssistant(config);
      this.updated.emit();
      this.dialogRef.close();
    }
  }
}
