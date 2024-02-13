import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { AvailabilityPipe } from '../../pipes/availability.pipe';
import { LoadingComponent } from '../loading/loading.component';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { PokemonService } from '../services/pokemon.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon-main',
  standalone: true,
  imports: [ AvailabilityPipe, LoadingComponent, PokemonDetailComponent, CommonModule, RouterModule],
  templateUrl: './pokemon-main.component.html',
  styleUrl: './pokemon-main.component.scss'
})
export class PokemonMainComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  selectedPokemon: Pokemon | undefined

  constructor(private pokemonService: PokemonService) {}

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
