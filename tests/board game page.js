// @ts-check
import {
  test,
  expect
} from '@playwright/test';

test('Navigate to the reviews page', async ({
  page
}) => {
  await page.goto('https://www.board-game.co.uk/');

  // Click the game reviews link.
  await page.getByAltText('Game Reviews').click();

  // Expect the reviews page to be displayed.
  await expect(page).toHaveURL('https://www.board-game.co.uk/blog/board-games/reviews/')
});