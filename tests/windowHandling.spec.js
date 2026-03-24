import {test} from '@playwright/test'
test ('To handle window',async({browser})=>{
 const context=  await browser.newContext()
 const page=await context.newPage()
 await page.goto('https://www.amazon.in/')
 await page.locator('//input[@id="twotabsearchtextbox"]').fill('ps5')
await page.locator('//input[@type="submit"]').click()

const [newPage]=await Promise.all([
 context.waitForEvent('page'),
 //await page.click('//h2[@aria-label="Sony PlayStation5 Gaming Console (Slim)"]')
 //using dynamic XpathS
await page.click('//h2[text()="Results"]//ancestor::div[@data-cel-widget="search_result_0"]//following-sibling::div[@data-asin="B0CY5HVDS2"]//descendant::h2[@aria-label="Sony PlayStation5 Gaming Console (Slim)"]')
])
await newPage.waitForLoadState()
const title=await newPage.title() 
console.log(title)

})