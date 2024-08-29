import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EsnOpenaiService } from 'src/app/core/services/opeanai.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss', '../config-page.scss'],
})
export class FilesComponent {
  public files: any[];
  public selectedFile: File | null = null;
  public loading: boolean = true;
  constructor(public oaiService: EsnOpenaiService, public router: Router) {}

  async ngOnInit() {
    this.refresh();
  }

  public async refresh() {
    this.loading = true;
    this.files = await this.oaiService.listFiles();
    this.loading = false;
  }

  public back() {
    this.router.navigate([`/llm/home`]);
  }

  public onFileSelected(event: Event): void {
    console.log({ event });

    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.uploadFile();
    }
  }

  async uploadFile(): Promise<void> {
    if (!this.selectedFile) {
      console.log({ fileSel: this.selectedFile });
      console.error('No file selected!');
      return;
    }

    await this.oaiService.createFile(this.selectedFile);
    this.refresh();
  }

  public stringify(o: any) {
    return JSON.stringify(o, null, 4);
  }

  public downloadFile(fileId: string) {
    this.oaiService.downloadFile(fileId);
  }
}
