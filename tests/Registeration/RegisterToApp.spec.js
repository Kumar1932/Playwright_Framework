import data from "../../loginCredentials.json" assert { type: "json" };
import {test, expect} from "@playwright/test";
import {RegisterPage} from "../../ObjectRepository/RegisterPage.js"


test("Register to Application",async ({page})=>{

    const random=Math.floor(Math.random() * 10000);

    await page.goto(data.url);
    const registerPage=new RegisterPage(page);
    await page.locator(registerPage.registerLink).click();
    await page.locator(registerPage.firstNameEdit).fill("KumarSwamy");
    await page.locator(registerPage.lastNameEdit).fill("R Patil");
    await page.locator(registerPage.emailEdit).fill(`prkumar${random}@gmail.com`);
    await page.locator(registerPage.phoneNumberEdit).fill("9739453901");
    await page.locator(registerPage.occupationDD).selectOption({label:"Engineer"});
    await registerPage.selectGender("Male");
    await page.locator(registerPage.passwordEdit).fill(`Kumar@${random}`);
    await page.locator(registerPage.confirmPassword).fill(`Kumar@${random}`);
    await page.locator(registerPage.iAm18YearCB).click();

    await page.locator(registerPage.registerBtn).click();

    await registerPage.verifyRegistration();

    console.log("Registration successful with email: "+`prkumar${random}@gmail.com`);
    console.log("Registration successful with password: "+"Kumar@"+random);

})

