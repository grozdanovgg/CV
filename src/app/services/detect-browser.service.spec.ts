import { TestBed, inject } from '@angular/core/testing';

import { DetectBrowserService } from './detect-browser.service';

describe('DetectBrowserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetectBrowserService]
    });
  });

  it('should be created', inject([DetectBrowserService], (service: DetectBrowserService) => {
    expect(service).toBeTruthy();
  }));
});
