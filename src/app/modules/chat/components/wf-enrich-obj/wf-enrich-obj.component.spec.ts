import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WfEnrichObjComponent } from './wf-enrich-obj.component';

describe('WfEnrichObjComponent', () => {
  let component: WfEnrichObjComponent;
  let fixture: ComponentFixture<WfEnrichObjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WfEnrichObjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WfEnrichObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
