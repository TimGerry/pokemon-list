import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from '../models/pokemon.model';
import { DatePipe } from '@angular/common';
import { AvailabilityPipe } from '../pipes/availability.pipe';
import { LoadingComponent } from './loading/loading.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe, AvailabilityPipe, LoadingComponent, PokemonDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Pokémon List';
  today = new Date();
  pokemonList: Pokemon[] = [];
  selectedPokemon: Pokemon | undefined
  
  ngOnInit(): void {
    setTimeout(() => {
      this.pokemonList = [
        { name: 'bulbasaur', type: 'grass', type2: 'poison' },
        { name: 'squirtle', type: 'water' },
        { name: 'charmander', type: 'fire' }
      ]
    }, 1000);
  }

  getPokemonImage(pokemon: Pokemon) {
    return `https://img.pokemondb.net/artwork/avif/${pokemon.name.toLowerCase()}.avif`
  }

  selectPokemon(pokemonToSelect: Pokemon) {
    this.selectedPokemon = pokemonToSelect;
  }

  increaseLikes(pokemonToLike: Pokemon) {
    if (!pokemonToLike.likeCount) {
      pokemonToLike.likeCount = 1;
      return;
    }

    pokemonToLike.likeCount += 1;
  }
}
