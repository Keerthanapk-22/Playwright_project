import {test, expect } from "@playwright/test";
test('Alert handling',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Alerts.html')
await page.once('dialog',async(dialog)=>{
    await console.log("simple alert: ",dialog.message())
    await dialog.accept()
})
await page.locator('//button[@class="btn btn-danger"]').click()
await page.locator('(//a[@class="analystic"])[2]').click()
    await page.once('dialog',async (dialog)=>{
await console.log("confirm alert: ",dialog.message())
await dialog.dismiss()
    })
await page.locator('//button[@class="btn btn-primary"]').click()
await page.locator('(//a[@class="analystic"])[3]').click()
await page.once('dialog',async (dialog)=>{
    await console.log("prompt alert: ", dialog.message())
    await dialog.accept(" buddy")
})
await page.locator('//button[@class="btn btn-info"]').click()
})

