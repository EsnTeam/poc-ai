import { Component } from '@angular/core';
import { UmlProcessingService } from 'src/app/core/services/uml-processing.service';
import { WorkflowSessionService } from 'src/app/core/services/workflow-session.service';

@Component({
  selector: 'app-wf-select-obj',
  templateUrl: './wf-select-obj.component.html',
  styleUrls: ['./wf-select-obj.component.scss'],
})
export class WfSelectObjComponent {
  public objectName = 'Contrat';
  public searchOngoing = false;
  constructor(
    public umlService: UmlProcessingService,
    public sessionService: WorkflowSessionService
  ) {}

  public search() {
    this.searchOngoing = true;
    this.umlService.resetLoadedObjects();
    setTimeout(() => (this.searchOngoing = false));
  }

  public goToNextStep() {
    this.sessionService.goToNextStep();
  }
}
