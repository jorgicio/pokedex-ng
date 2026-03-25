import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokeSearchBar } from "./components/poke-search-bar/poke-search-bar";
import { PokeInfo } from "./poke-info/poke-info";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PokeSearchBar, PokeInfo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pokedex-ng');
}
