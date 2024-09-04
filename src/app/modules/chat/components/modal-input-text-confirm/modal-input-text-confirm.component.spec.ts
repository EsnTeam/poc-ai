import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInputTextConfirmComponent } from './modal-input-text-confirm.component';

describe('ModalInputTextConfirmComponent', () => {
  let component: ModalInputTextConfirmComponent;
  let fixture: ComponentFixture<ModalInputTextConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInputTextConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalInputTextConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
