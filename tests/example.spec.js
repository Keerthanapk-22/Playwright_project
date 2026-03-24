// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.waitForTimeout(3000)
});


test('has title', async ({ page }) => {
  await page.goto('https://www.myntra.com/');
  await page.waitForTimeout(3000)
});
