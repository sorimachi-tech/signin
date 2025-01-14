import { TestBed } from '@angular/core/testing';

import { VuiVoiceRecognitionService } from './ng-voice-inputs.service';

describe('VuiVoiceRecognitionService', () => {
  let service: VuiVoiceRecognitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(VuiVoiceRecognitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
