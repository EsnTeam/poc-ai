import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../config-page.scss'],
})
export class HomeComponent {
  constructor(public router: Router) {}

  public goToThreads() {
    this.router.navigate([`/poc-ai/threads`]);
  }

  public goToAssistants() {
    this.router.navigate([`/poc-ai/assistants`]);
  }

  public goToFiles() {
    this.router.navigate([`/poc-ai/files`]);
  }
  public goToDemo() {
    this.router.navigate([`/poc-ai/demo`]);
  }
}
