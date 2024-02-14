import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Pokemon } from '../../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private pokemonList: Pokemon[] = [
    { name: 'bulbasaur', type: 'grass', type2: 'poison', attack: 'razor leaf' },
    { name: 'squirtle', type: 'water', attack: 'water gun' },
    { name: 'charmander', type: 'fire', attack: 'ember' }
  ];
  private subject = new BehaviorSubject<Pokemon[]>(this.pokemonList);
  public pokemon$ = this.subject.asObservable();

  get(name: string): Observable<Pokemon | undefined> {
    return of(this.pokemonList.find(p => p.name === name))
  }

  likePokemon(name: string) {
    this.pokemonList.filter(p => p.name === name)
    .forEach(p => this.increaseLikes(p));
    this.subject.next(this.pokemonList);
  }

  private increaseLikes(pokemonToLike: Pokemon) {
    if (!pokemonToLike.likeCount) {
      pokemonToLike.likeCount = 1;
      return;
    }

    pokemonToLike.likeCount += 1;
  }

  train(name: string) {
    this.pokemonList.filter(p => p.name === name)
    .forEach(p => this.increaseTraining(p));
    this.subject.next(this.pokemonList);
  }

  private increaseTraining(pokemonToLike: Pokemon) {
    if (!pokemonToLike.trainingCount) {
      pokemonToLike.trainingCount = 1;
      return;
    }

    pokemonToLike.trainingCount += 1;
  }

  add(pokemonToAdd: Pokemon) {
    this.pokemonList.push(pokemonToAdd);
    this.subject.next(this.pokemonList);
  }
}
