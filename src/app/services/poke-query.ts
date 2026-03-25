import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokeQuery {
  private apiUrl = 'https://pokeapi.co/api/v2';

  pokemonResult = signal<any>(null);
  isLoading = signal<boolean>(false);

  constructor(private http: HttpClient) {}

  search(name: string) {
    this.isLoading.set(true);

    this.http.get(`${this.apiUrl}/pokemon/${name.toLowerCase()}`)
    .subscribe({
      next: (data) => {
        this.pokemonResult.set(data);
      },
      error: () => {
        this.pokemonResult.set(null);
      },
      complete: () => {
        this.isLoading.set(false);
      }
    });
  }

}
