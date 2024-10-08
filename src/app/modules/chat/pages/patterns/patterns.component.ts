import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { FirebaseController } from 'src/app/core/services/firebase-controller.service';
import { Pattern } from 'src/app/modules/shared/model/pattern';
import { PatternCreationDialogComponent } from '../../components/pattern-creation-dialog/pattern-creation-dialog.component';
import {
  EsnConfirmationDialogComponent,
  EsnDialog,
} from 'src/assets/external-libs/arom-domain-ipnn-c90-design-lib';

@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.scss', '../config-page.scss'],
})
export class PatternsComponent {
  public patterns: Pattern[];
  public loading: boolean = true;
  constructor(
    public router: Router,
    public firebaseController: FirebaseController,
    public dialog: MatDialog,
    public esnDialog: EsnDialog
  ) {}

  async ngOnInit() {
    this.refreshPatterns();
  }

  public async refreshPatterns() {
    this.loading = true;
    this.patterns = await lastValueFrom(this.firebaseController.getPatterns());
    this.loading = false;
  }

  public openPatternCreationModal() {
    this.dialog
      .open(PatternCreationDialogComponent, {
        width: '70vw',
      })
      .componentInstance.updated.subscribe((resp) => {
        console.log('UPDATED');
        this.goToDetailView(resp.response);
      });
  }

  public openDeletionModal(pattern: Pattern) {
    console.log('AAAAAA');
    this.esnDialog
      .open(EsnConfirmationDialogComponent, {
        data: {
          title: `Delete pattern "${pattern.name}"`,
          message: 'This cannot be undone',
        },
        width: '70vw',
      })
      .componentInstance.decision.subscribe((resp) => {
        if (!!resp) {
          this.firebaseController.deletePattern(pattern.id!).subscribe(() => {
            this.refreshPatterns();
          });
        }
      });
  }

  public goToDetailView(patternId: string) {
    this.router.navigate([`/llm/patterns/${patternId}`]);
  }

  public back() {
    this.router.navigate([`/llm/`]);
  }
}
