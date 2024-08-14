import { TestBed } from '@angular/core/testing';

import { ChatFrService } from './chat-fr.service';

describe('ChatFrService', () => {
  let service: ChatFrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatFrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
