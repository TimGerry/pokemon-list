import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTrainingComponent } from './pokemon-training.component';

describe('PokemonTrainingComponent', () => {
  let component: PokemonTrainingComponent;
  let fixture: ComponentFixture<PokemonTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonTrainingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
