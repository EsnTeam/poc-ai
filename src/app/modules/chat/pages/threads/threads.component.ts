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
  public loading: boolean = true;
  constructor(
    public oaiService: EsnOpenaiService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    this.refresh();
  }

  public async refresh() {
    this.loading = true;
    this.threads = await this.oaiService.listThreads();
    this.loading = false;
  }
  public goToChatView(thread: Thread) {
    this.router.navigate([`/llm/threads/${thread.id}/chat`]);
  }

  public back() {
    this.router.navigate([`/llm/home`]);
  }

  public async createThread() {
    await this.oaiService.createThread();
    this.refresh();
  }
}
