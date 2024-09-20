import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WfSelectUmlComponent } from './wf-select-uml.component';

describe('WfSelectUmlComponent', () => {
  let component: WfSelectUmlComponent;
  let fixture: ComponentFixture<WfSelectUmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WfSelectUmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WfSelectUmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
