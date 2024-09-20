import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WfSelectObjComponent } from './wf-select-obj.component';

describe('WfSelectObjComponent', () => {
  let component: WfSelectObjComponent;
  let fixture: ComponentFixture<WfSelectObjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WfSelectObjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WfSelectObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
