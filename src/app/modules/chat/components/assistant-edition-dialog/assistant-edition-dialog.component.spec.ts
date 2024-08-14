import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantEditionDialogComponent } from './assistant-edition-dialog.component';

describe('AssistantEditionDialogComponent', () => {
  let component: AssistantEditionDialogComponent;
  let fixture: ComponentFixture<AssistantEditionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistantEditionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssistantEditionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
