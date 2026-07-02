import {test , expect, chromium} from "@playwright/test"

test("launch browser test",async ({page})=>{
    //   const  browser=await chromium.launch();
    //   const context=await browser.newContext();
    //   const page=await context.newPage();
    page.goto("http://49.249.28.218:8889/dolibarr/index.php");
});