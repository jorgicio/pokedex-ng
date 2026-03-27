import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeQuery } from '../../services/poke-query/poke-query';
import { DialogModule } from 'primeng/dialog';
import { ChartModule } from 'primeng/chart';
import { PokeEvolProcessor } from '../../services/poke-evol-processor/poke-evol-processor';
import { ImageModule } from 'primeng/image';
import { ChipModule } from 'primeng/chip';
import { CapitalizePipe } from "../../pipes/capitalize/capitalize-pipe";

@Component({
  selector: 'app-poke-info',
  imports: [DialogModule, ChartModule, ImageModule, CommonModule, ChipModule, CapitalizePipe],
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
      labels: this.pokemon().stats.map((stat: any) => this.capitalize(stat.stat.name) ),
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

  getPokemonType(name: string) : string {
    return `type-${name}`
  }

  private capitalize(value: string) : string {
    if (!value) return value;
    return (value.charAt(0).toUpperCase() + value.slice(1)).replace('-',' ');
  }

}
