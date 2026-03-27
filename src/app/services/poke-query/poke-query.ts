import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import axios from 'axios';
import { PokeEvolProcessor } from '../poke-evol-processor/poke-evol-processor';

@Injectable({
  providedIn: 'root',
})
export class PokeQuery {

  pokemonResult = signal<any>(null);
  typesResult = signal<any>(null);
  isLoading = signal<boolean>(false);

  constructor(private pokeEvolProcessor: PokeEvolProcessor) {}

  search(name: string) {

    this.isLoading.set(true);
    let typesList: any[] = [];

    const pokeApiURL = 'https://pokeapi.co/api/v2';
    
    axios.get(`${pokeApiURL}/pokemon/${name}`)
      .then((data) => {
        this.pokemonResult.set(data.data)
        data.data.types.map((type: any) => {
        axios.get(`${pokeApiURL}/type/${type.type.name}`)
        .then(response => {
          typesList.push(response.data.damage_relations)
        })
        this.typesResult.set(typesList);
        axios.get(`${pokeApiURL}/pokemon-species/${data.data.name}`)
        .then((data2) => {        
          axios.get(data2.data.evolution_chain.url)
          .then(response => {
            this.pokeEvolProcessor.evolutionProcessor(name,data2.data,response.data)
          })
          })
          .catch(error => console.error(error))
        })
      })
      .catch(() => {
        this.pokemonResult.set(null);
      })
      .finally(() => this.isLoading.set(false));

  }
}
