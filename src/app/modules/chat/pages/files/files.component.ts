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
  constructor(public oaiService: EsnOpenaiService, public router: Router) {}

  async ngOnInit() {
    this.refresh();
  }

  public async refresh() {
    this.files = await this.oaiService.listFiles();
  }

  public back() {
    this.router.navigate([`/poc-ai/home`]);
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

    this.oaiService.createFile(this.selectedFile);
  }

  public stringify(o: any) {
    return JSON.stringify(o, null, 4);
  }
}
