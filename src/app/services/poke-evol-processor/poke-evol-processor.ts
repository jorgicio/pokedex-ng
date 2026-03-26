import { inject, Injectable,signal } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class PokeEvolProcessor {

  constructor() {}

  evolution = signal<any>(null);

  evolutionProcessor(name: string, species: any, evolChain: any) {

    let evolvesFrom = (species.evolves_from_species) ? species.evolves_from_species?.name : null;
    let evolvesToArray = evolChain.chain.evolves_to;
    let evolvesTo = evolvesToArray.map((e:any) => {
      if(evolvesFrom === null) {
        return e.species.name
      } else {
        return e.evolves_to.map((e: any) => e.species.name).filter((e: any) => name !== e);
      }
    }).filter((e: any) => !Array.isArray(e) || (Array.isArray(e) && e.length !== 0));
    
    this.evolution.set({
      "evolvesFrom": evolvesFrom,
      "evolvesTo": evolvesTo
    })
    
  }
  
}


