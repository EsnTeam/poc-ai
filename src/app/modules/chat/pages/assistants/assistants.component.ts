import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CursorPage } from 'openai/pagination';
import { Assistant } from 'openai/resources/beta/assistants';
import { EsnOpenaiService } from 'src/app/core/services/opeanai.service';
import { AssistantEditionDialogComponent } from '../../components/assistant-edition-dialog/assistant-edition-dialog.component';
import { DataStoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-assistants',
  templateUrl: './assistants.component.html',
  styleUrls: ['./assistants.component.scss', '../config-page.scss'],
})
export class AssistantsComponent {
  public assistants: Assistant[];
  public loading: boolean = true;
  constructor(
    public oaiService: EsnOpenaiService,
    public router: Router,
    public dialog: MatDialog,
    public storeService: DataStoreService
  ) {}

  async ngOnInit() {
    this.refresh();
  }

  public goToDetailView(assistant: Assistant) {
    // this.router.navigate([`/llm/assistants/${assistant.id}/threads`]);
  }

  public async refresh() {
    this.loading = true;
    this.assistants = await this.storeService.getAssistants();
    this.loading = false;
  }

  public back() {
    this.router.navigate([`/llm/home`]);
  }

  public stringify(o: any) {
    return JSON.stringify(o, null, 4);
  }

  public openAssistantCreationModal(assistant?: any) {
    this.dialog
      .open(AssistantEditionDialogComponent, {
        data: {
          assistantId: assistant?.id,
          assistantConfig: assistant,
        },
        width: '70vw',
        height: '80vh',
      })
      .componentInstance.updated.subscribe(async () => {
        console.log('UPDATED');
        await this.storeService.refreshAssistants();
        this.refresh();
      });
  }
}
