import { TestBed, inject } from '@angular/core/testing';

import { CurrentSystemService } from './current-system-service';

describe('CurrentSystemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentSystemService]
    });
  });

  it('should be created', inject([CurrentSystemService], (service: CurrentSystemService) => {
    expect(service).toBeTruthy();
  }));
});
