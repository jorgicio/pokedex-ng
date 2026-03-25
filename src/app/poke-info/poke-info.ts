import { Component, inject } from '@angular/core';
import { PokeQuery } from '../services/poke-query';

@Component({
  selector: 'app-poke-info',
  imports: [],
  templateUrl: './poke-info.html',
  styleUrl: './poke-info.css',
})
export class PokeInfo {

  pokeQuery = inject(PokeQuery);

  pokemon = this.pokeQuery.pokemonResult;
  isLoading = this.pokeQuery.isLoading;

}
