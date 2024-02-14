import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';
import { CommonModule, AsyncPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AvailabilityPipe } from '../../pipes/availability.pipe';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [AvailabilityPipe, PokemonDetailComponent, CommonModule, RouterModule, AsyncPipe],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  pokemon$: Observable<Pokemon[]>;
  selectedPokemon: Pokemon | undefined;

  constructor(private pokemonService: PokemonService) {
    this.pokemon$ = this.pokemonService.pokemon$;
  }

  getPokemonImage(pokemon: Pokemon) {
    return `https://img.pokemondb.net/artwork/avif/${pokemon.name.toLowerCase()}.avif`
  }

  selectPokemon(pokemonToSelect: Pokemon) {
    this.selectedPokemon = pokemonToSelect;
  }
}
