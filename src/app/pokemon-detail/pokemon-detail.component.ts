import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon | undefined

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.pokemon = data['pokemon']);
  }

  getPokemonImage(pokemon: Pokemon) {
    return `https://img.pokemondb.net/artwork/avif/${pokemon?.name.toLowerCase()}.avif`;
  }

  likePokemon() {
    this.pokemonService.likePokemon(this.pokemon!.name);
  }
}
