import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrappedTextComponent } from './wrapped-text.component';

describe('WrappedTextComponent', () => {
  let component: WrappedTextComponent;
  let fixture: ComponentFixture<WrappedTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrappedTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrappedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
