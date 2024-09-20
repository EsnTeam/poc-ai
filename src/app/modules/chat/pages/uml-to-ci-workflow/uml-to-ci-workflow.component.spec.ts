import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlToCiWorkflowComponent } from './uml-to-ci-workflow.component';

describe('UmlToCiWorkflowComponent', () => {
  let component: UmlToCiWorkflowComponent;
  let fixture: ComponentFixture<UmlToCiWorkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmlToCiWorkflowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmlToCiWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
