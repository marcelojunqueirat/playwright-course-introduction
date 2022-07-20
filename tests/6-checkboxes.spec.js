const {test, expect} = require('@playwright/test')

test.describe.parallel("Checkbox", () => {

    test("Example 1", async ({page}) =>{
        await page.goto("/checkboxes")
        await page.locator('input[type="checkbox"]').first().check()
        await page.locator('input[type="checkbox"]').last().uncheck()
        await page.pause()
    })
})