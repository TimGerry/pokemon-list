import { Routes } from '@angular/router';
import { PokemonMainComponent } from './pokemon-main/pokemon-main.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonTypesComponent } from './pokemon-types/pokemon-types.component';
import { pokemonResolver } from '../resolvers/pokemon.resolver';
import { PokemonTrainingComponent } from './pokemon-training/pokemon-training.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
  { path: 'pokemon', component: PokemonMainComponent },
  { path: 'pokemon/:name', component: PokemonDetailComponent, resolve: { pokemon: pokemonResolver} },
  { path: 'pokemon/:name/training', component: PokemonTrainingComponent, resolve: { pokemon: pokemonResolver} },
  { path: 'types', component: PokemonTypesComponent }
];
