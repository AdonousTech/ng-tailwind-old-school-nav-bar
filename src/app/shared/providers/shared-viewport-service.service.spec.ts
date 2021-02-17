import { TestBed } from '@angular/core/testing';

import { SharedViewportServiceService } from './shared-viewport-service.service';

describe('SharedViewportServiceService', () => {
  let service: SharedViewportServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedViewportServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
