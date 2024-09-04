import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternCreationDialogComponent } from './pattern-creation-dialog.component';

describe('PatternCreationDialogComponent', () => {
  let component: PatternCreationDialogComponent;
  let fixture: ComponentFixture<PatternCreationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatternCreationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatternCreationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
