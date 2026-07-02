import {test,expect} from "@playwright/test"

test.use({
  viewport: {width:700,height:800}
}); 

test("loginTest",async ({page})=>{
    //step 1 --> navigating to the login page
    await page.goto("http://49.249.28.218:8889/dolibarr/index.php");

    //step 2 --> Enter username

    await page.getByPlaceholder("Login").type("admin",{delay : 100});

    //Step 3 --> Enter password
    await page.locator("//input[@name='password']").type("admin123",{delay : 100});

    //Step 4 --> Click on login button

    await page.getByRole("button",{type : 'submit'}).click();

    await page.waitForTimeout(3000);
    //Step 5 --> Verifing that Home page is displayed

    await expect(page).toHaveURL(/mainmenu/);

});

test("Verifying error message",async ({page})=>{

    await page.goto("http://49.249.28.218:8889/dolibarr/index.php");

    await page.getByPlaceholder("Login").fill("admin");

    await page.locator("//input[@name='password']").fill("admin123");

    await page.getByRole("button",{type : 'submit'}).click();

    await page.waitForTimeout(3000);

    

});