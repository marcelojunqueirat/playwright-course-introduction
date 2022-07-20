const {test, expect} = require('@playwright/test')

test.describe("Examples", () => {

    test("Assertions", async ({page})=>{
        await page.goto("https://demoqa.com/text-box/")
        await page.locator('#userName').type("Test User Name")
        await page.locator('[placeholder="name@example.com"]').type("test@test.com")
        await page.locator('#currentAddress').type("This is my current address")
        await page.locator('#permanentAddress').type("This my permanent address")
        await page.locator('button:has-text("Submit")').click()
        
        // await page.pause()
        const name = page.locator('#name')
        const email = page.locator('#email')
        const currentAddress = page.locator('p#currentAddress')
        const permanentAddress = page.locator('p#permanentAddress')

        await expect(name).toBeVisible();
        await expect(name).toHaveText('Name:Test User Name')
        await expect(email).toBeVisible();
        await expect(email).toHaveText('Email:test@test.com')
        await expect(currentAddress).toBeVisible();
        await expect(currentAddress).toHaveText('Current Address :This is my current address')
        await expect(permanentAddress).toBeVisible();
        await expect(permanentAddress).toHaveText('Permananet Address :This my permanent address')
    })

    test.skip("Another example", async ({page}) => {
        await page.goto("https://demoqa.com/text-box/")
        await expect(page).toHaveTitle("ToolsQA")
        await expect(page).toHaveURL("https://demoqa.com/text-box/")
    })
}) 