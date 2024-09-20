import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiToPledWorkflowComponent } from './ci-to-pled-workflow.component';

describe('CiToPledWorkflowComponent', () => {
  let component: CiToPledWorkflowComponent;
  let fixture: ComponentFixture<CiToPledWorkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiToPledWorkflowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiToPledWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
