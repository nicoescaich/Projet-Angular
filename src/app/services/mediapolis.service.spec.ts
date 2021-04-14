import { TestBed } from '@angular/core/testing';

import { MediapolisService } from './mediapolis.service';

describe('MediapolisService', () => {
  let service: MediapolisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediapolisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
