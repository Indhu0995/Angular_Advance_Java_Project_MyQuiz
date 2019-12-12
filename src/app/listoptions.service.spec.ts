import { TestBed } from '@angular/core/testing';

import { ListoptionsService } from './listoptions.service';

describe('ListoptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListoptionsService = TestBed.get(ListoptionsService);
    expect(service).toBeTruthy();
  });
});
