import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KeyService } from 'src/app/core/services/key.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../config-page.scss'],
})
export class HomeComponent {
  public profileName: string = '';
  constructor(public router: Router, public keyService: KeyService) {}

  ngOnInit() {
    this.keyService.profileName$.subscribe((n) => (this.profileName = n));
  }
  public goToThreads() {
    this.router.navigate([`/llm/threads`]);
  }

  public goToAssistants() {
    this.router.navigate([`/llm/assistants`]);
  }

  public goToFiles() {
    this.router.navigate([`/llm/files`]);
  }
  public goToDemo() {
    this.router.navigate([`/llm/demo`]);
  }

  public goToPatterns() {
    this.router.navigate([`/llm/patterns`]);
  }

  public logout() {
    this.keyService.resetPassword();
  }
}
