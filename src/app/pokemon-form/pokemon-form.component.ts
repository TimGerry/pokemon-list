import { Component } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.scss'
})
export class PokemonFormComponent {

  constructor(private pokemonService: PokemonService) {}

  pokemonForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)], pokemonExistsValidator()),
    type: new FormControl('', [Validators.required, validTypeValidator()]),
    type2: new FormControl(''),
    attack: new FormControl('', Validators.required)
  },{
    validators: [uniqueTypeValidator()]
  });

  save() {
    this.pokemonService.add(this.pokemonForm.value as Pokemon);
  }
}

const VALID_POKEMON_TYPES = ['fire', 'water', 'grass', 'normal', 'fighting', 'psychic', 'poison'];
export function validTypeValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    return VALID_POKEMON_TYPES.includes(control.value) ? null : { invalidType: control.value }
  }
}

export function uniqueTypeValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const type1 = control.get('type')?.value;
    const type2 = control.get('type2')?.value;

    return type1 == type2 ? { duplicateType: type1 } : null;
  }
}

const VALID_POKEMON_LIST = ['bulbasaur', 'charmander', 'squirtle', 'mudkip', 'swampert', 'mew', 'charizard', 'venusaur', 'mewtwo'];

export function pokemonExistsValidator(): AsyncValidatorFn {
  return (control: AbstractControl) => {
    const isValid = VALID_POKEMON_LIST.includes(control.value);
    const error = isValid ? null : { invalidPokemon: control.value }

    return of(error).pipe(delay(1000))
  }
}