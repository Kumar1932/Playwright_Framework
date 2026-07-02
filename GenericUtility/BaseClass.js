import {test as base, expect} from "@playwright/test";
import data from "../loginCredentials.json" assert { type: "json" };
import {LoginPage} from "../ObjectRepository/index.js";

   //write the hooks for the test cases here
// const test=base.extend({
//     loggedInPage:async({page},use)=>
//     {
//         await page.goto(data.url);
//         await page.fill("#userEmail",data.username);
//         await page.fill("#userPassword",data.password);
//         await page.click("#login");

//         await use(page);
//     }                   
// });

base.beforeEach(async ({page})=>{
    await new LoginPage(page).loginToApplicationwithoutData();
});

base.afterEach(async ({page})=>{
    await new LoginPage(page).logoutFromApplication();
});

export { base as test, expect };
// export default base;
// export default test;


