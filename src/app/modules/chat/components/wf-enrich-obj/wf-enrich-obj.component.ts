import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { FirebaseController } from 'src/app/core/services/firebase-controller.service';
import { WorkflowSessionService } from 'src/app/core/services/workflow-session.service';
import { Pattern } from 'src/app/modules/shared/model/pattern';

@Component({
  selector: 'app-wf-enrich-obj',
  templateUrl: './wf-enrich-obj.component.html',
  styleUrls: ['./wf-enrich-obj.component.scss'],
})
export class WfEnrichObjComponent {
  public patterns: Pattern[];
  public selectedPatternId: string;
  constructor(
    public firebaseController: FirebaseController,
    public sessionService: WorkflowSessionService
  ) {}

  async ngOnInit() {
    this.patterns = await lastValueFrom(this.firebaseController.getPatterns());
  }
}
