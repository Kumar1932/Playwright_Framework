import {test,expect} from "../../GenericUtility/BaseClass.js";
import {CartPage} from "../../ObjectRepository/index.js";

test("Add product to cart and verify in cart page",async ({page})=>{
    const cartPage=new CartPage(page);
    await cartPage.addProductToCart("ADIDAS ORIGINAL");
    await cartPage.navigateToCart();
    await cartPage.verifyProductInCart("ADIDAS ORIGINAL");
    
}) 