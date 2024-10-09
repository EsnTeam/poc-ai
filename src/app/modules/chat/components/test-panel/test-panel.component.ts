import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { FirebaseController } from 'src/app/core/services/firebase-controller.service';
import { TestData } from 'src/app/modules/shared/model/test-data';
import { ModalInputTextConfirmComponent } from '../modal-input-text-confirm/modal-input-text-confirm.component';
import { THREADS } from 'src/app/modules/shared/model/constants';
import { EsnThreadManagementService } from 'src/app/core/services/thread-management.service';
import { EsnAiUserConfigService } from 'src/app/core/services/user-config.service';
import {
  EsnConfirmationDialogComponent,
  EsnDialog,
} from 'src/assets/external-libs/arom-domain-ipnn-c90-design-lib';

@Component({
  selector: 'app-test-panel',
  templateUrl: './test-panel.component.html',
  styleUrls: ['./test-panel.component.scss'],
})
export class TestPanelComponent {
  @Output() close: EventEmitter<void> = new EventEmitter();
  @Output() execute: EventEmitter<(string[] | string)[]> = new EventEmitter();
  public testData: TestData[];
  public threadId: string = THREADS.main;
  public threadIds: string[] = [];

  public selectedTestData?: TestData;

  public inputText1: string;
  public inputText2: string;
  public inputText3: string;

  constructor(
    public firebaseController: FirebaseController,
    public dialog: MatDialog,
    public threadsService: EsnThreadManagementService,
    public userConfigService: EsnAiUserConfigService,
    public esnDialog: EsnDialog
  ) {}

  async ngOnInit() {
    this.threadIds = this.threadsService.getThreadIds();
    if (this.threadIds.length) {
      const config = this.userConfigService.getConfig();
      if (config.threadId) {
        this.threadId = config.threadId;
      } else {
        this.threadId = this.threadIds[0];
        this.userConfigService.saveConfig({ threadId: this.threadId });
      }
    }

    this.refresh();
  }

  public onThreadChange() {
    this.userConfigService.saveConfig({ threadId: this.threadId });
  }

  public async refresh(selectId?: string) {
    this.testData = await lastValueFrom(
      this.firebaseController.getAllTestData()
    );
    if (selectId) {
      this.selectedTestData = this.testData.find((d) => d.id == selectId);
    }
  }

  public onCloseClick() {
    this.close.emit();
  }

  public onImportClick() {
    this.inputText1 = this.selectedTestData?.inputs[0]!;
    this.inputText2 = this.selectedTestData?.inputs[1]!;
    this.inputText3 = this.selectedTestData?.inputs[2]!;
  }

  public async onOverrideClick() {
    this.selectedTestData!.inputs = [
      this.inputText1,
      this.inputText2,
      this.inputText3,
    ];

    await lastValueFrom(
      this.firebaseController.updateTestData(
        this.selectedTestData!.id!,
        this.selectedTestData!
      )
    );
  }

  public onSaveNewClick() {
    this.openSaveDataModal();
  }

  public onExecuteClick() {
    this.execute.emit([
      [this.inputText1, this.inputText2, this.inputText3],
      this.threadId,
    ]);
    this.onCloseClick();
  }

  public openSaveDataModal() {
    const inputs = [this.inputText1, this.inputText2, this.inputText3];

    this.dialog
      .open(ModalInputTextConfirmComponent, {
        width: '70vw',
        data: {
          title: `Save as new test data`,
          textFiedlLabel: `Test data label`,
          confirmLabel: `Save`,
          callFunc: (val: string) =>
            this.firebaseController.createTestData({
              name: val,
              inputs,
            }),
        },
      })
      .componentInstance.updated.subscribe((resp) => {
        console.log({ resp });
        this.refresh(resp.response);
      });
  }

  public openDataDeletionModal() {
    this.esnDialog
      .open(EsnConfirmationDialogComponent, {
        data: {
          title: `Delete test data "${this.selectedTestData?.name}"`,
          message: 'This cannot be undone',
        },
        width: '70vw',
      })
      .componentInstance.decision.subscribe((resp) => {
        if (!!resp) {
          this.firebaseController
            .deleteTestData(this.selectedTestData?.id!)
            .subscribe(() => {
              this.selectedTestData = undefined;
              this.refresh();
            });
        }
      });
  }
}
