import { Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from '../models/pokemon.model';
import { CommonModule, DatePipe } from '@angular/common';
import { AvailabilityPipe } from '../pipes/availability.pipe';
import { LoadingComponent } from './loading/loading.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonService } from './services/pokemon.service';
import { APP_TITLE } from './app.config';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  today = new Date();

  constructor(@Inject(APP_TITLE) public title: string) {}
}
