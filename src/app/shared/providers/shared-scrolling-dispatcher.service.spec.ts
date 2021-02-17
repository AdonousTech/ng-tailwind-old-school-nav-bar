import { TestBed } from '@angular/core/testing';

import { SharedScrollingDispatcherService } from './shared-scrolling-dispatcher.service';

describe('SharedScrollingDispatcherService', () => {
  let service: SharedScrollingDispatcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedScrollingDispatcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
