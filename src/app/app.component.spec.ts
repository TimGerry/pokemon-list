import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should load the pokemon list', async () => {
    // Arrange
    fixture.componentInstance.pokemonList = [
      { name: 'torchic', type: 'fire' },
      { name: 'treecko', type: 'grass' },
      { name: 'mudkip', type: 'water' },
      { name: 'eevee', type: 'normal' }
    ]

    // Act
    fixture.detectChanges();
    await fixture.whenStable();

    // Assert
    const el: HTMLElement = fixture.nativeElement;
    const actualRows = el.querySelectorAll('tbody>tr');
    expect(actualRows.length).toBe(4);
  });

  fdescribe('async testing', () => {
    it('should run async 1', () => {
      const p = new Promise(res => {
        setTimeout(() => res(42));
      });
      p.then(num => expect(num).toBe(42));
    });

    it('should run async 2', async () => {
      const p = new Promise(res => setTimeout(() => res(42)));
      const num = await p;
      expect(num).toBe(42);
    });
  })
});
