import { TestBed } from '@angular/core/testing';

import { GetPokemonSearchedService } from './get-pokemon-searched.service';

describe('GetPokemonSearchedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetPokemonSearchedService = TestBed.get(GetPokemonSearchedService);
    expect(service).toBeTruthy();
  });
});
