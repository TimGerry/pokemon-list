import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pokemon-list';
  pokemonList: Pokemon[] = [
    { name: 'bulbasaur', type: 'grass', type2: 'poison' },
    { name: 'squirtle', type: 'water' },
    { name: 'charmander', type: 'fire' }
  ];

  getPokemonImage(pokemon: Pokemon) {
    return `https://img.pokemondb.net/artwork/avif/${pokemon.name.toLowerCase()}.avif`
  }
}
