import { TestBed } from '@angular/core/testing';

import { SnackBarsService } from './snack-bars.service';

describe('SnackBarsService', () => {
  let service: SnackBarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackBarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
