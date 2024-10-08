import { Component } from '@angular/core';
import { IdbService } from 'src/app/core/services/idb.service';
import { WorkflowSessionService } from 'src/app/core/services/workflow-session.service';
import {
  JSON_SCHEMA_DB_KEY,
  UI_SCHEMA_DB_KEY,
} from 'src/app/modules/shared/model/constants';
import { ViewConfigsModalComponent } from '../../components/view-configs-modal/view-configs-modal.component';
import { jsonSchema } from 'src/assets/data/jsonSchema';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss', '../config-page.scss'],
})
export class PreviewComponent {
  public schema = null;
  public uischema = null;
  constructor(public dbService: IdbService, public dialog: MatDialog) {}
  async ngOnInit() {
    this.schema = await this.dbService.getValueByKey(
      'session-data',
      JSON_SCHEMA_DB_KEY
    );
    this.uischema = await this.dbService.getValueByKey(
      'session-data',
      UI_SCHEMA_DB_KEY
    );
  }

  public openConfigModal() {
    this.dialog.open(ViewConfigsModalComponent, {
      data: {
        jsonSchema: JSON.stringify(this.schema, null, 4),
        uiSchema: JSON.stringify(this.uischema, null, 4),
      },
    });
  }
}
