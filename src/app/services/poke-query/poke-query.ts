import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import axios from 'axios';
import { PokeEvolProcessor } from '../poke-evol-processor/poke-evol-processor';

@Injectable({
  providedIn: 'root',
})
export class PokeQuery {
  private apiUrl = 'https://pokeapi.co/api/v2';

  pokemonResult = signal<any>(null);
  typesResult = signal<any>(null);
  isLoading = signal<boolean>(false);

  constructor(private pokeEvolProcessor: PokeEvolProcessor) {}

  search(name: string) {
    this.isLoading.set(true);
    let typesList: any[] = [];

    axios.get(`${this.apiUrl}/pokemon/${name.toLowerCase()}`)
    .then(response => {
      this.pokemonResult.set(response.data);
      response.data.types.map((type: any) => {
        axios.get(type.type.url)
        .then(response => {
          typesList.push(response.data.damage_relations)
        })
        this.typesResult.set(typesList);
      })
      axios.get(response.data.species.url)
      .then(response2 => {
        axios.get(response2.data.evolution_chain.url)
        .then(response3 =>{
          this.pokeEvolProcessor.evolutionProcessor(response.data.name,response2.data,response3.data);
        })
      })
      
    })
    .catch(() => this.pokemonResult.set(null))
    .finally(() => this.isLoading.set(false))
  }
  
  

}
