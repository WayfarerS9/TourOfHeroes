import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarCreateHeroComponent } from './snack-bar-create-hero.component';

describe('SnackBarCreateHeroComponent', () => {
  let component: SnackBarCreateHeroComponent;
  let fixture: ComponentFixture<SnackBarCreateHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackBarCreateHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarCreateHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
