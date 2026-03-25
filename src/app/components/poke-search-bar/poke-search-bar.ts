import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { PokeQuery } from '../../services/poke-query';

@Component({
  selector: 'app-poke-search-bar',
  imports: [
    FloatLabelModule,
    FormsModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    ButtonModule
  ],
  templateUrl: './poke-search-bar.html',
  styleUrl: './poke-search-bar.css'
})
export class PokeSearchBar {
  searchValue: string | undefined;

  constructor(private pokeQuery: PokeQuery) {}

  onSearch() {
    if(this.searchValue?.trim()) {
      this.pokeQuery.search(this.searchValue);
    }
  }
}
