import { test, expect } from '@playwright/test';

test('login test', async ({ page }) => {
  await page.goto('https://www.sima-land.ru/');

  await page.getByTestId('nav-item:cabinet').getByTestId('link').click();

  await page.getByTestId('login-field').getByTestId('text-field:field').fill('poeborn@yandex.ru');

  await page.getByTestId('password-field').getByTestId('text-field:field').fill('123456123456');

  await page.getByTestId('button').click();

  await expect(page.getByTestId('nav-item:favorites')).toBeVisible();
});
