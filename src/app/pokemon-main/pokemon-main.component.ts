import { Component } from '@angular/core';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
@Component({
  selector: 'app-pokemon-main',
  standalone: true,
  imports: [PokemonListComponent, PokemonFormComponent],
  templateUrl: './pokemon-main.component.html',
  styleUrl: './pokemon-main.component.scss'
})
export class PokemonMainComponent {

}
