import { expect } from "@playwright/test";
export class HomePage
{
    constructor(page)
    {
        this.page=page;
        this.homeButton="//button[contains(.,'HOME')]";
        this.cartIcon="//li//button[contains(.,'Cart')]";

    }
    async navigateCartPage()
    {
        await this.page.locator(this.cartIcon).click();
    }

    addToCartButton(productName)
    {
        return this.page.locator(`//*[text()='${productName}']/ancestor::div[@class='card-body']//*[contains(.,'Add To Cart')]`);
    }

    async productInCartPage(productName)
    {
        await expect(this.page.locator(`//*[text()='${productName}']`)).toBeVisible();
    }

    addProductToCart(productName) {
        return this.products
        .filter({ hasText: productName })
        .getByRole('button', { name: 'Add To Cart' });
  }
}