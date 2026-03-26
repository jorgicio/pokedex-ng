import { Component, inject, computed } from '@angular/core';
import { PokeQuery } from '../../services/poke-query/poke-query';
import { DialogModule } from 'primeng/dialog';
import { ChartModule } from 'primeng/chart';
import { PokeEvolProcessor } from '../../services/poke-evol-processor/poke-evol-processor';

@Component({
  selector: 'app-poke-info',
  imports: [DialogModule, ChartModule],
  templateUrl: './poke-info.html',
  styleUrl: './poke-info.css',
})
export class PokeInfo {

  pokeQuery = inject(PokeQuery);
  pokeEvolProcessor = inject(PokeEvolProcessor);
  
  constructor() {}


  pokemon = this.pokeQuery.pokemonResult;
  isLoading = this.pokeQuery.isLoading;
  pokemonTypes = this.pokeQuery.typesResult;
  pokeEvol = this.pokeEvolProcessor.evolution;

  visible = false;

  statsData = computed(() => {
    return { 
      labels: this.pokemon().stats.map((stat: any) => stat.stat.name),
      datasets: [
        {
          label: 'Stats',
          data: this.pokemon().stats.map((stat: any) => stat.base_stat)
        }
      ]
    }
  })

  showDialog(){
    this.visible = true;
    return this.visible;
  }

}
