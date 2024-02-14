import { Component } from '@angular/core';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { TwowayexampleDirective } from '../../directives/twowayexample.directive';
@Component({
  selector: 'app-pokemon-main',
  standalone: true,
  imports: [PokemonListComponent, PokemonFormComponent, TwowayexampleDirective],
  templateUrl: './pokemon-main.component.html',
  styleUrl: './pokemon-main.component.scss'
})
export class PokemonMainComponent {
  pokemonInfo = 'A pokemon can have 2 types at most';
}
