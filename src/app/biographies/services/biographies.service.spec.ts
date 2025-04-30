import { TestBed } from '@angular/core/testing';

import { BiographiesService } from './biographies.service';

describe('BiographiesService', () => {
  let service: BiographiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiographiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
