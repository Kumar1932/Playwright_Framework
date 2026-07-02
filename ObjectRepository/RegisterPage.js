import loginData from "../loginCredentials.json" assert { type: "json" };
import { expect } from "@playwright/test";

export class RegisterPage
{
    constructor(page){
        this.page=page;
        this.registerLink="//a[text()='Register']";
        this.firstNameEdit="#firstName";
        this.lastNameEdit="#lastName";
        this.emailEdit="#userEmail";
        this.phoneNumberEdit="#userMobile";
        this.occupationDD="//select[@formcontrolname='occupation']";
        this.maleRadioBtn="//input[@value='Male']";
        this.feamaleRadioBtn="//input[@value='Female']";
        this.passwordEdit="#userPassword";
        this.confirmPassword="#confirmPassword";
        this.iAm18YearCB="//input[@type='checkbox']";
        this.registerBtn="//input[@value='Register']";
        this.successfullMsg="//h1[@class='headcolor']";
    }
    async selectGender(gender){
        if(gender==="Male" || gender==="Female"){
        await this.page.locator(`//input[@value='${gender}']`).click();
        }
    }
    
    async verifyRegistration()
    {
        const text= await this.page.locator(this.successfullMsg).textContent();
        await expect(text.includes("Account Created Successfully")).toBeTruthy();
    }
}