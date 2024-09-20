import { Component, Input } from '@angular/core';
import { WorkflowSessionService } from 'src/app/core/services/workflow-session.service';
import { WorkflowStep } from 'src/app/modules/shared/model/workflow';

@Component({
  selector: 'app-workflow-sidenav-element',
  templateUrl: './workflow-sidenav-element.component.html',
  styleUrls: ['./workflow-sidenav-element.component.scss'],
  host: { '[class.wf-sidenav-element--ongoing]': 'step.state == "ONGOING"' },
})
export class WorkflowSidenavElementComponent {
  @Input() step: WorkflowStep;

  constructor(public sessionService: WorkflowSessionService) {}

  public onGoClick() {
    this.sessionService.goToStep(this.step.stepId);
  }
}
