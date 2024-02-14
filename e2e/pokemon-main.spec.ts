import { test, expect, Page, Locator } from '@playwright/test';

test.describe('Pokemon main component test', () => {
  let page: PokemonMainPage; 

  test.beforeEach(async ({page: p}) => {
    page = new PokemonMainPage(p);
    await page.navigate();
  })

  test('has 3 pokemon', async () => {
    expect(await page.pokemonTable.getPokemonCount()).toBe(3);
  });
})

export abstract class PageObject {
  constructor(protected host: Locator) {}
}

export class PokemonMainPage {
  public readonly pokemonTable = new PokemonList(this.page.locator('tbody'))
  constructor(private page: Page) {
  }
  async navigate() {
    return this.page.goto('/pokemon');
  }
}

export class PokemonList extends PageObject {
  public readonly pokemonItems = this.host.locator('tr');
  async getPokemonCount() {
    return await this.pokemonItems.count();
  }
}
