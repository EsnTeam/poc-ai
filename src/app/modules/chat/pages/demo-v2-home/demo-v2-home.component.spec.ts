import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoV2HomeComponent } from './demo-v2-home.component';

describe('DemoV2HomeComponent', () => {
  let component: DemoV2HomeComponent;
  let fixture: ComponentFixture<DemoV2HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoV2HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoV2HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
