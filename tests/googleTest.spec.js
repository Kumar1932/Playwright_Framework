import {test , expect} from "@playwright/test";

test("To verify the Google Page",async ({page})=>{

    await page.goto("https://www.google.com");
    console.log("Navigated to Google Page");

});