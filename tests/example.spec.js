// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
});

test('nagivate instagram', async ({ page }) => {
  await page.goto('https://www.instagram.com/?hl=en');
  await expect(page).toHaveURL('https://www.instagram.com/?hl=en')
  const title= await page.title()
  console.log(title)

});