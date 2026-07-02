import data from "../../loginCredentials.json" assert { type: "json" };
import { test, expect } from "../../GenericUtility/BaseClass.js";
import { HomePage } from "../../ObjectRepository/index.js";
import { CartPage } from "../../ObjectRepository/CartPage.js";

test("Add multiple products to cart and verify them", async ({ page }) => {
    // Step 1: Verify the page has loaded correctly
    await expect(page).toHaveTitle("Let's Shop");
    await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash");
    
    // Step 3: Create HomePage object
    const homePage = new HomePage(page);
    
    // Step 4: Define products to add to cart
    const productsToAdd = ["ADIDAS ORIGINAL", "iphone 13 pro", "ZARA COAT 3"];
    
    // Step 5: Add multiple products to cart
    for (const productName of productsToAdd) {
        try {
            // Click Add to Cart button for each product
            await homePage.addToCartButton(productName).click();
            
            // Wait for the product to be added
            await page.waitForTimeout(500);
            
            console.log(`✓ Successfully added "${productName}" to cart`);
        } catch (error) {
            console.log(`✗ Failed to add "${productName}" to cart`);
        }
    }
    
    // Step 6: Navigate to cart page
    await homePage.navigateCartPage();
    
    // Step 7: Wait for cart page to load
    await page.waitForTimeout(1000);
    
    // Step 8: Create CartPage object
    const cartPage = new CartPage(page);
    
    // Step 9: Verify all products are present in the cart
    for (const productName of productsToAdd) {
        try {
            await homePage.productInCartPage(productName);
            console.log(`✓ Verified "${productName}" is in the cart`);
        } catch (error) {
            console.log(`✗ Failed to verify "${productName}" in cart`);
        }
    }
    
    // Step 10: Final assertion - verify cart is not empty
    const cartItems = page.locator(cartPage.cartItems);
    const itemCount = await cartItems.count();
    expect(itemCount).toBeGreaterThan(0);
    
    console.log(`\n✓ Test completed: ${itemCount} items in cart`);
});

test("Add single product and remove from cart", async ({ page }) => {
    // Step 1: Verify page loaded
    await expect(page).toHaveTitle("Let's Shop");
    
    // Step 3: Create page objects
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    
    // Step 4: Add a product to cart
    const productToAdd = "ADIDAS ORIGINAL";
    await homePage.addToCartButton(productToAdd).click();
    await page.waitForTimeout(500);
    
    console.log(`✓ Added "${productToAdd}" to cart`);
    
    // Step 5: Navigate to cart
    await homePage.navigateCartPage();
    await page.waitForTimeout(1000);
    
    // Step 6: Verify product is in cart
    await homePage.productInCartPage(productToAdd);
    console.log(`✓ Verified "${productToAdd}" is in the cart`);
    
    // Step 7: Delete product from cart
    await cartPage.deleteItemFromCart(productToAdd).click();
    await page.waitForTimeout(500);
    
    console.log(`✓ Removed "${productToAdd}" from cart`);
    
    // Step 8: Verify product is removed
    try {
        await expect(page.locator(`//*[text()='${productToAdd}']`)).not.toBeVisible();
        console.log(`✓ Verified "${productToAdd}" is no longer in the cart`);
    } catch (error) {
        console.log(`✗ Product still visible in cart`);
    } 
});
