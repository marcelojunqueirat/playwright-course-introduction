const {test, expect} = require('@playwright/test')

test.describe("Pegar e arrastar", () => {

    test("Examples", async ({page})=>{
        await page.goto('/drag_and_drop')
        await page.dragAndDrop('#column-a', '#column-b')
        await page.dragAndDrop('#column-b', '#column-a')
        await page.pause()
    })


})