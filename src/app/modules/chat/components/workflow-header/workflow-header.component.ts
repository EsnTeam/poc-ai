import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workflow-header',
  templateUrl: './workflow-header.component.html',
  styleUrls: ['./workflow-header.component.scss'],
})
export class WorkflowHeaderComponent {
  @Input() text: string;
  constructor(public router: Router) {}

  public back() {
    this.router.navigate([`/llm/demo-v2`]);
  }
}
