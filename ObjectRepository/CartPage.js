export class CartPage
{
    constructor(page)
    {
        this.page=page;
        this.cartItems="//div[@class='cartSection']";
        this.checkoutBtn="//button[contains(.,'Checkout')]";
        this.continueShoppingBtn="//button[contains(.,'Continue Shopping')]";
    }

    deleteItemFromCart(productName)
    {
        return this.page.locator(`//h3[text()='${productName}']/ancestor::div[@class='infoWrap']//button[@class='btn btn-danger']`);
    }
}