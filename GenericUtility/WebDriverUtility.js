import {test,expect} from "@playwright/test"

export default class WebDriverUtility
{
    static async switchToNewTabByAction(context, action)
    {
        const [newPage] = Promise.all(
            [
                context.waitForEvent('page'),
                action()
            ]
        )
        return newPage;
    }

    static async switchToWindowByURL(context, partialUrl)
    {
        const pages = context.pages();
        for(const newPage of pages)
        {
            if(newPage.url().includes(partialUrl))
            {
                return newPage;
            }
        }
        throw new Error('Page not found');
    }

    static async switchToWindowByTitle(context, partialTitle)
    {
       const pages = context.pages();
       for(const newPage of pages)
       {
            if(newPage.title().includes(partialTitle))
            {
                return newPage;
            }
       }
    }

    static async waitForElementToDisappear(page,locator,waitTime)
    {
        await page.locator(locator).waitFor( {state : 'hidden' , timeout : waitTime} );
    }

    static async waitForElementToBeVisible(page,locator,waitTime)
    {
        await page.locator(locator).waitFor({state : 'visible', timeout : waitTime});
    }

    static async verifyText(page, locator, expectedText) 
    {
        await expect(page.locator(locator)).toHaveText(expectedText);
    }

    static async selectByText(page, locator, text)
    {
        await page.selectOption(locator,{label : text});
    }

    static async selcetByValue(page , locator , value)
    {
        await page.selectOption(locator,{value : value});
    }

    static async selectByIndex(page , locator, index)
    {
        await page.selectOption(locator, {index : index});
    }

    static async randomNumber(max)
    {
        const random=await Math.floor(Math.random()* max)
        return random;
    }

    static async takeScreenshot(page, name) 
    {
        await page.screenshot({ path: `screenshots/${name}.png` });
    }
}