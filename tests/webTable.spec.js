import{test,expect} from '@playwright/test'
test('fetch webtable data', async({page})=>{
    await page.goto('https://qavbox.github.io/demo/webtable/')
    const rowdata=await page.locator('//table[@id="table02"]//tbody//tr[5]//td').allTextContents()
    console.log(rowdata)
    expect(rowdata).toContain('2008/11/28')

})