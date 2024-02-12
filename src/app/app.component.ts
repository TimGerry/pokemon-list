import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pokemon-list';
  location = 'https://img.pokemondb.net/artwork/avif/venusaur.avif'
  pokemonList = [
    { name: 'bulbasaur', type: 'grass', type2: 'poison' },
    { name: 'squirtle', type: 'water' },
    { name: 'charmander', type: 'fire' },
  ];

}
