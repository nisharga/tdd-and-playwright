import { test, chromium, expect } from '@playwright/test';

test('Close cookies', async ({ page }) => {
  await page.goto('https://www.udemy.com/');
  await page.getByRole('button', { name: 'OK', exact: true }).click();
});

test('Is the cookie banner still present?', async ({ page }) => {
  await page.goto('https://www.udemy.com/');
  await page.pause();
  // Add assertion to check if the cookie banner is no longer visible
  await expect(page.getByRole('button', { name: 'OK', exact: true })).not.toBeVisible();
});

test('Browser fixture', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.udemy.com/');
});

test('Create page manually', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.udemy.com/');
});