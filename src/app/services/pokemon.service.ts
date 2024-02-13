import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pokemon } from '../../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemonList: Pokemon[] = [
    { name: 'bulbasaur', type: 'grass', type2: 'poison' },
    { name: 'squirtle', type: 'water' },
    { name: 'charmander', type: 'fire' }
  ]

  getAll(): Observable<Pokemon[]> {
    return of(this.pokemonList);
  }

  get(name: string): Observable<Pokemon | undefined> {
    return of(this.pokemonList.find(p => p.name === name))
  }
}
