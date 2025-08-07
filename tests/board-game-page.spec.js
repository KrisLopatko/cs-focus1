// @ts-check
import {
  test,
  expect
} from '@playwright/test';

test.describe('Board Game Page Tests', () => {
  test('Navigate from the main page to the reviews page', async ({
    page
  }) => {
    await page.goto('https://www.board-game.co.uk/');

    // Click the game reviews link.
    await page.getByAltText('Game Reviews').click();

    // Expect the reviews page to be displayed.
    await expect(page).toHaveURL('https://www.board-game.co.uk/blog/board-games/reviews/')
  });

  test('Change the currency type from GBP to USD', async ({
    page
  }) => {
    await page.goto('https://www.board-game.co.uk/');

    // Expect the GBP to be displayed as current currency.
    await expect(page.getByRole('button', {
      name: 'British Pounds GBP (£)'
    })).toBeVisible
    await page.getByRole('button', {
      name: 'British Pounds GBP (£)'
    }).click();
    await expect(page.getByAltText('US Dollar')).toBeVisible();
    await page.getByAltText('US Dollar').click();
    await expect(page.getByRole('button', {
      name: 'US Dollar USD ($)'
    })).toBeVisible

  });
});