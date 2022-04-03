import { TestBed } from '@angular/core/testing';

import { HeroesGuardGuard } from './heroes-guard.guard';

describe('HeroesGuardGuard', () => {
  let guard: HeroesGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HeroesGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
