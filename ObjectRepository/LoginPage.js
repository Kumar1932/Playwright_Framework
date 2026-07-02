import loginData from "../loginCredentials.json" assert { type: "json" };
import {expect} from "@playwright/test";

export class LoginPage
{
    constructor(page)
    {
        this.page=page;

        this.usernameEdit="#userEmail";
        this.passwordEdit="#userPassword";
        this.loginBtn="#login";
        this.signOutButton="//button[contains(.,'Sign Out')]";
        this.loginSuccessMsg="//div[contains(text(),'Login Successfully')]";
        this.loginErrorMsg="//div[contains(text(),'Incorrect email or password.')]";
        this.logoutSuccessMsg="//div[contains(text(),'Logout Successfully')]";
    }

    async loginToApplication(username,password)
    {
        await this.page.waitForTimeout(500);
        await this.page.goto(process.env.BASE_URL);
        await this.page.fill(this.usernameEdit,username);
        await this.page.fill(this.passwordEdit,password);
        await this.page.click(this.loginBtn);
    }

    async loginToApplicationwithoutData()
    {
        await this.page.goto(process.env.BASE_URL);
        await this.page.fill(this.usernameEdit,process.env.USER_NAME);
        await this.page.fill(this.passwordEdit,process.env.PASSWORD);
        await this.page.click(this.loginBtn);
    }

    async logoutFromApplication()
    {
        await this.page.click(this.signOutButton);
        await expect(this.page.locator(this.logoutSuccessMsg)).toBeVisible();
    }
}

