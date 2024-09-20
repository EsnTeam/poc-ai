import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowSidenavElementComponent } from './workflow-sidenav-element.component';

describe('WorkflowSidenavElementComponent', () => {
  let component: WorkflowSidenavElementComponent;
  let fixture: ComponentFixture<WorkflowSidenavElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkflowSidenavElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowSidenavElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
