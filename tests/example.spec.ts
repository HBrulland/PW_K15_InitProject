import { test, expect } from '@playwright/test';
// Bi chan UIP nen phai chay web o local

test('has title', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/index.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Tài liệu học automation test - Playwright Việt Nam');
});

test('get started link', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/index.html');

  // Click the get started link.
  await page.getByRole('link', { name: 'Bài học 1: Register Page (có đủ các element)' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
});

test.afterAll(({ page }) => {
  page.close();
});
