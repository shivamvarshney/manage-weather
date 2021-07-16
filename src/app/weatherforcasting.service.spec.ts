import { TestBed } from '@angular/core/testing';

import { WeatherforcastingService } from './weatherforcasting.service';

describe('WeatherforcastingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherforcastingService = TestBed.get(WeatherforcastingService);
    expect(service).toBeTruthy();
  });
});
