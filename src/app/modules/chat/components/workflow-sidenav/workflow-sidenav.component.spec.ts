import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowSidenavComponent } from './workflow-sidenav.component';

describe('WorkflowSidenavComponent', () => {
  let component: WorkflowSidenavComponent;
  let fixture: ComponentFixture<WorkflowSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkflowSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
