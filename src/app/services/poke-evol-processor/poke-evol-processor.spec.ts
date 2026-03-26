import { TestBed } from '@angular/core/testing';

import { PokeEvolProcessor } from './poke-evol-processor';

describe('PokeEvolProcessor', () => {
  let service: PokeEvolProcessor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeEvolProcessor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
