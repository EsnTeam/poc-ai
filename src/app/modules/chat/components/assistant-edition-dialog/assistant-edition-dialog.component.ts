import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EsnOpenaiService } from 'src/app/core/services/opeanai.service';
import { EsnUtils } from 'src/assets/external-libs/arom-domain-ipnn-c90-design-lib';

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
    public oaiService: EsnOpenaiService,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      assistantId: string;
      assistantConfig: any;
    }
  ) {}

  ngOnInit() {
    if (this.data.assistantId) {
      const conf = EsnUtils.cloneDeep(this.data.assistantConfig);
      delete conf.id;
      delete conf.object;
      delete conf.created_at;
      this.confString = JSON.stringify(conf, null, 4);
    }
  }

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
      !!this.data.assistantId
        ? await this.oaiService.updateAssistant(this.data.assistantId, config)
        : await this.oaiService.createAssistant(config);
      this.updated.emit();
      this.dialogRef.close();
    }
  }
}
