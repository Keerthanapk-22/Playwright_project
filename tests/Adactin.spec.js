import{test} from '@playwright/test'
import { Loginpage } from '../page/Loginpage'

test('visit adactin app', async({page})=>{
    const loginpage=new Loginpage(page)
    await loginpage.geturl()
    await loginpage.enteruname('keerthana1998')
    await loginpage.enterpass('Adactin@123')
    await loginpage.clicklogin()
})