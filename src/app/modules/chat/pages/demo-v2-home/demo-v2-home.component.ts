import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { FirebaseController } from 'src/app/core/services/firebase-controller.service';
import { NEW_WF_SESSION_UML_TO_CI } from 'src/app/modules/shared/model/workflow';

@Component({
  selector: 'app-demo-v2-home',
  templateUrl: './demo-v2-home.component.html',
  styleUrls: ['./demo-v2-home.component.scss'],
  host: {
    class: 'poc-background',
  },
})
export class DemoV2HomeComponent {
  constructor(
    public router: Router,
    public firebaseController: FirebaseController
  ) {}

  public async goToUmlCiWf() {
    const resp = await lastValueFrom(
      this.firebaseController.createWorkflowSession(NEW_WF_SESSION_UML_TO_CI)
    );
    this.router.navigate([
      `/llm/demo-v2/uml-to-ci/${(resp as any)['response']}`,
    ]);
  }
}
