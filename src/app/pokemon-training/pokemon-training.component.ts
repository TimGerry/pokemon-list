import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Pokemon } from '../../models/pokemon.model';
import { interval } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-training',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pokemon-training.component.html',
  styleUrl: './pokemon-training.component.scss'
})
export class PokemonTrainingComponent implements OnInit {
  pokemon: Pokemon | undefined

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.pokemon = data['pokemon']);
    interval(1000).subscribe(() => {
      this.pokemonService.train(this.pokemon!.name);
      console.log(`${this.pokemon?.name} used ${this.pokemon?.attack}!`);
    })
  }
}
