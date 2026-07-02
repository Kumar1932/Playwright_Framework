import data from "../../loginCredentials.json" assert { type: "json" };
import {test, expect} from "../../GenericUtility/BaseClass.js";
import {HomePage} from "../../ObjectRepository"

test("Home page verification",async ({page})=>{
    // verify dashboard url and page title
    await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash");
    await expect(page).toHaveTitle("Let's Shop");

    const homePage = await new HomePage(page);
    await homePage.addToCartButton("ADIDAS ORIGINAL").click();
    await page.locator(homePage.cartIcon).click();
    await homePage.productInCartPage("ADIDAS ORIGINAL");
})
