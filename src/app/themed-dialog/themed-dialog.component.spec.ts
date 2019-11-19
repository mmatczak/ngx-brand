import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemedDialogComponent } from './themed-dialog.component';

describe('ThemedDialogComponent', () => {
  let component: ThemedDialogComponent;
  let fixture: ComponentFixture<ThemedDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemedDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
