import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Thread } from 'openai/resources/beta/threads/threads';
import { EsnOpenaiService } from 'src/app/core/services/opeanai.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss', '../config-page.scss'],
})
export class ThreadsComponent {
  public threads: Thread[] = [];
  constructor(
    public oaiService: EsnOpenaiService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    this.refresh();
  }

  public async refresh() {
    this.threads = await this.oaiService.listThreads();
  }
  public goToChatView(thread: Thread) {
    this.router.navigate([`/poc-ai/threads/${thread.id}/chat`]);
  }

  public back() {
    this.router.navigate([`/poc-ai/home`]);
  }

  public async createThread() {
    await this.oaiService.createThread();
    this.refresh();
  }
}
