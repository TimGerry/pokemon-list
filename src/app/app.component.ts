import { Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from '../models/pokemon.model';
import { DatePipe } from '@angular/common';
import { AvailabilityPipe } from '../pipes/availability.pipe';
import { LoadingComponent } from './loading/loading.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonService } from './services/pokemon.service';
import { APP_TITLE } from './app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe, AvailabilityPipe, LoadingComponent, PokemonDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  today = new Date();
  pokemonList: Pokemon[] = [];
  selectedPokemon: Pokemon | undefined

  constructor(private pokemonService: PokemonService, @Inject(APP_TITLE) public title: string) {}
  
  ngOnInit(): void {
    this.pokemonService.getAll().subscribe(data => this.pokemonList = data);
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
