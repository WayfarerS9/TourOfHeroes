import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmingComponent } from './dialog-confirming.component';

describe('DialogConfirmingComponent', () => {
  let component: DialogConfirmingComponent;
  let fixture: ComponentFixture<DialogConfirmingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogConfirmingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConfirmingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
