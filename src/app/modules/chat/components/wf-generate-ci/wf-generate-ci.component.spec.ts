import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WfGenerateCiComponent } from './wf-generate-ci.component';

describe('WfGenerateCiComponent', () => {
  let component: WfGenerateCiComponent;
  let fixture: ComponentFixture<WfGenerateCiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WfGenerateCiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WfGenerateCiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
