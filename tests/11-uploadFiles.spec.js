const { test, expect } = require('@playwright/test')

test.describe("Upload Files", () => {
    test("Examples", async ({ page }) => {
        await page.goto('/upload')
        await page.setInputFiles('#file-upload', 'uploadedFiles/marcelo.txt')
        await page.locator('input:has-text("Upload")').click();

        await expect(page.locator('text=File Uploaded')).toBeVisible()
        await expect(page.locator('text=marcelo.txt')).toBeVisible()
    })

    test("Another Example Upload", async ({ page }) => {
        await page.goto('/upload')
        // Note that Promise.all prevents a race condition
        // between clicking and waiting for the file chooser.
        const [fileChooser] = await Promise.all([
            // It is important to call waitForEvent before click to set up waiting.
            page.waitForEvent('filechooser'),
            page.locator('#file-upload').click(),
        ]);
        await fileChooser.setFiles('uploadedFiles/marcelo.txt');
        await page.locator('input:has-text("Upload")').click();

        await expect(page.locator('text=File Uploaded')).toBeVisible()
        await expect(page.locator('text=marcelo.txt')).toBeVisible()
    })

})