import { TestBed, inject } from '@angular/core/testing';

import { AlphabetMatchingService } from './alphabet-matching.service';

describe('AlphabetMatchingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlphabetMatchingService]
    });
  });

  it('should be created', inject([AlphabetMatchingService], (service: AlphabetMatchingService) => {
    expect(service).toBeTruthy();
  }));
});
