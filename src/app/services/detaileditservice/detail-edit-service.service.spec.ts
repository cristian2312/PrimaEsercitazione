import { TestBed } from '@angular/core/testing';

import { DetailEditServiceService } from './detail-edit-service.service';

describe('DetailEditServiceService', () => {
  let service: DetailEditServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailEditServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
