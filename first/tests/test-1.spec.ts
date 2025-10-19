import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  const heading = page.getByRole('heading', { name: 'Installation' }) 
  await expect(heading).toHaveText('Installation')
});