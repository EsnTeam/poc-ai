import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, lastValueFrom } from 'rxjs';
import { FirebaseController } from 'src/app/core/services/firebase-controller.service';
import { WorkflowSessionService } from 'src/app/core/services/workflow-session.service';
import { WorkflowSession } from 'src/app/modules/shared/model/workflow';

@Component({
  selector: 'app-uml-to-ci-workflow',
  templateUrl: './uml-to-ci-workflow.component.html',
  styleUrls: ['./uml-to-ci-workflow.component.scss'],
  host: {
    class: 'poc-background',
  },
})
export class UmlToCiWorkflowComponent {
  public sessionId: string;
  public session: WorkflowSession;
  constructor(
    public firebaseController: FirebaseController,
    public activatedRoute: ActivatedRoute,
    public sessionService: WorkflowSessionService
  ) {}

  ngOnInit() {
    this.sessionService.session$.pipe(filter((x) => !!x)).subscribe((val) => {
      this.session = val!;
    });
    this.activatedRoute.params.subscribe(async (params) => {
      this.sessionService.loadSession(params['sessionId']);
    });
  }
}
