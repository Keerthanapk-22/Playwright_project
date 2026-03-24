import { test, expect } from '@playwright/test';

// test('nagivate instagram', async ({ page }) => {
//   await page.goto('https://www.instagram.com/?hl=en');
//   await expect(page).toHaveURL('https://www.instagram.com/?hl=en')
//   const title= await page.title()
//   console.log(title)

// });

test('login Insta', async({page})=> {
  await page.goto("https://www.instagram.com/?hl=en")
  await page.waitForTimeout(3000)
 await page.locator('//input[@name="email"]').fill("keerthana")
 await page.locator('//input[@type="password"]').fill("alliswell")
 await page.locator('//span[text()="Log in"]').click()
await page.waitForTimeout(3000)

})
