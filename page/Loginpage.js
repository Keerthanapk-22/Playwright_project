export class Loginpage{
    constructor(page){
        this.page=page
        this.uname=page.locator('//input[@id="username"]')
            this.pass=page.locator('//input[@id="password"]')
            this.buttom= page.locator('//input[@id="login"]')
     }
     async geturl(){
        await this.page.goto('https://adactinhotelapp.com/')
     }
     async enteruname(user){
        await this.uname.fill(user)
     }
     async enterpass(password){
        await this.pass.fill(password)
     }
     async clicklogin(){
        await this.buttom.click()
     }
}