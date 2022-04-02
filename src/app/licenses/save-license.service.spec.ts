import { TestBed } from '@angular/core/testing';

import { SaveLicenseService } from './save-license.service';

describe('SaveLicenseService', () => {
  let service: SaveLicenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveLicenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
