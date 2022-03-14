import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarUpdateHeroComponent } from './snack-bar-update-hero.component';

describe('SnackBarUpdateHeroComponent', () => {
  let component: SnackBarUpdateHeroComponent;
  let fixture: ComponentFixture<SnackBarUpdateHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackBarUpdateHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarUpdateHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
