import {test as setup, expect} from "@playwright/test"
import LoginPage from "../../ObjectRepository/LoginPage.js"
import data from "../../loginCredentials.json" assert { type: "json" }

setup("login and save session",async({page})=>{
    const lp=new LoginPage(page);
    await lp.loginToApplication(data.username,data.password);

    await page.waitForURL("https://rahulshettyacademy.com/client/#/dashboard/dash");

    await page.context().storageState({ path: 'playwright/.auth/user.json' });
})
