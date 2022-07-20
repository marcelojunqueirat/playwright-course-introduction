const { test, expect } = require('@playwright/test');

test.describe("Smoke tests", () => {

    test.beforeEach(async({page})=> {
        await page.goto("/");
    })

    // test.afterEach(async({page})=>{
    //     console.log("This test finished")
    // })

    // test("Firts Test @fumaca", async ({ page }) => {
    //     // Write testing code here
    //     await page.goto("https://playwright.dev");
    //     const title = page.locator('.navbar__inner .navbar__title');
    //     await expect(title).toHaveText('Playwright');
    // })

    test("Simple click test @regressao", async ({ page, browserName }) => {
        // test.skip(browserName === "firefox", "Trabalhando na correção do firefox")
        const addRemove = page.locator("text=Add/Remove Elements");
        const addElement = page.locator("text=Add Element");
        await addRemove.click()
        // await addRemove.screenshot({path: "screenshot.png"})
        // await page.screenshot({path: "screenshot1.png"})
        await addElement.click();
    })

    test("Duplicate test @fumaca", async ({ page }) => {
        await page.click("text=Add/Remove Elements")
        await page.click("text=Add Element")
    })

    test("Duplicate test 1 @regressao", async ({ page }) => {
        await page.click("text=Add/Remove Elements")
        await page.click("text=Add Element")
    })

    // test("Duplicate test 2 @regressao", async ({ page }) => {
    //     await page.goto("/checkboxes");
    // })

})


