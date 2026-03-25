import { TestBed } from '@angular/core/testing';

import { PokeQuery } from './poke-query';

describe('PokeQuery', () => {
  let service: PokeQuery;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeQuery);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
