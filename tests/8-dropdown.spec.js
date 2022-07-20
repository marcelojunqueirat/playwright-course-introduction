const {test, expect} = require('@playwright/test')

test.describe("Dropdown", () => {

    test("Examples", async ({page})=>{
        await page.goto('/dropdown')
        //await page.locator('#dropdown').selectOption('1')
        await page.locator('#dropdown').selectOption({label:'Option 1'})
        await expect(page.locator('#dropdown')).toHaveValue('1')
        await page.locator('#dropdown').selectOption({label:'Option 2'})
        await expect(page.locator('#dropdown')).toHaveValue('2')
        await page.pause()
    })


})