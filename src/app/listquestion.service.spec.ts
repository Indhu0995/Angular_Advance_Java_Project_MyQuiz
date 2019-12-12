import { TestBed } from '@angular/core/testing';

import { ListquestionService } from './listquestion.service';

describe('ListquestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListquestionService = TestBed.get(ListquestionService);
    expect(service).toBeTruthy();
  });
});
