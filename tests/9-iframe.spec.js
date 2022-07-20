const {test, expect} = require('@playwright/test')

test.describe("Iframe", () => {

    test("Examples", async ({page})=>{    
        await page.goto('/iframe')
        const frameTest = page.frameLocator('#mce_0_ifr').locator('html')
        await frameTest.click();
        await frameTest.type('Apenas um teste no iframe')
    })

})