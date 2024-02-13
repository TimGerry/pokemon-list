import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon | undefined
  @Output() liked = new EventEmitter<Pokemon>();

  // @Input() set name(name: string) {
  //   this.pokemonService.get(name).subscribe(data => this.pokemon = data);
  // }

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.pokemon = data['pokemon']);
  }

  getPokemonImage(pokemon: Pokemon) {
    return `https://img.pokemondb.net/artwork/avif/${pokemon?.name.toLowerCase()}.avif`;
  }

  likePokemon() {
    this.liked.emit(this.pokemon);
  }
}
