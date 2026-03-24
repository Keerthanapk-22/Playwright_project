import {test,expect}  from '@playwright/test'

test('automate fields', async({page}) =>{
    await page.goto('https://demo.automationtesting.in/Register.html')
    await page.waitForTimeout(2000);
    await page.locator('(//input[@type="text"])[1]').fill("keerthana")
    await page.locator('(//input[@type="text"])[2]').fill("papaiyan")
   await page.locator('//textarea[@ng-model="Adress"]').fill("chennai")
   await page.locator('//input[@type="email"]').fill('keerthi@gmail.com')
   await page.locator('//input[@type="tel"]').fill('9809')
   await page.locator('//input[@value="FeMale"]').click()
   await page.locator('//input[@id="checkbox1"]').check()
   const dd= await page.locator('//select[@id="Skills"]')
  await dd.selectOption({value:"APIs"})
   const check= await dd.locator('option:checked').textContent()
   console.log(check)
   await page.waitForTimeout(2000);




})