import{test,expect} from '@playwright/test'

test('handle frame', async({page})=>{
    await page.goto('https://demo.automationtesting.in/Frames.html')
   const single=  await page.frameLocator('//iframe[@id="singleframe"]')
   await single.locator('//input[@type="text"]').fill("singleFrame")

   await page.locator('(//a[@class="analystic"])[2]').click()
   const multiframe=await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
   const frame2= await multiframe.frameLocator('//iframe[@src="SingleFrame.html"]')
   await frame2.locator('//input[@type="text"]').fill('12345')
   await page.waitForTimeout(2000);

})