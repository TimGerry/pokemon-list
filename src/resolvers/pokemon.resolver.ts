import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { PokemonService } from '../app/services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';

export const pokemonResolver: ResolveFn<Pokemon | undefined> = (
  route: ActivatedRouteSnapshot) => {
  return inject(PokemonService).get(route.paramMap.get('name')!);
};
