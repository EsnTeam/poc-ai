import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConfigsModalComponent } from './view-configs-modal.component';

describe('ViewConfigsModalComponent', () => {
  let component: ViewConfigsModalComponent;
  let fixture: ComponentFixture<ViewConfigsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewConfigsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewConfigsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
