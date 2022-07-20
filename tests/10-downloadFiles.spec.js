const { test, expect } = require('@playwright/test')

test.describe("Download Files", () => {
    test("Examples", async ({ page }) => {
        await page.goto('/download')

        // Note that Promise.all prevents a race condition
        // between clicking and waiting for the download.
        const [download] = await Promise.all([
            // It is important to call waitForEvent before click to set up waiting.
            page.waitForEvent('download'),
            // Triggers the download.
            page.locator('text=test.pdf').click(),
        ]);
        // wait for download to complete
        const path = await download.path();
        download.saveAs('uploadedFiles/41577.pdf')
        const url = download.url();
        console.log(path);
        console.log(url);

    })

})