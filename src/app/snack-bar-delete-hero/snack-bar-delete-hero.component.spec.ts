import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarDeleteHeroComponent } from './snack-bar-delete-hero.component';

describe('SnackBarDeleteHeroComponent', () => {
  let component: SnackBarDeleteHeroComponent;
  let fixture: ComponentFixture<SnackBarDeleteHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackBarDeleteHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarDeleteHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
