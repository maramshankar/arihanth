import { TestBed } from '@angular/core/testing';

import { BehaServiceService } from './beha-service.service';

describe('BehaServiceService', () => {
  let service: BehaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
