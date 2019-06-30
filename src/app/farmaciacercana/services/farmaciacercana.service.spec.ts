import { TestBed } from '@angular/core/testing';

import { FarmaciacercanaService } from './farmaciacercana.service';

describe('FarmaciacercanaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FarmaciacercanaService = TestBed.get(FarmaciacercanaService);
    expect(service).toBeTruthy();
  });
});
