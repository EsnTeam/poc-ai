import { Component, Input } from '@angular/core';
import { WorkflowSession } from 'src/app/modules/shared/model/workflow';

@Component({
  selector: 'app-workflow-sidenav',
  templateUrl: './workflow-sidenav.component.html',
  styleUrls: ['./workflow-sidenav.component.scss'],
})
export class WorkflowSidenavComponent {
  @Input() session: WorkflowSession;
}
