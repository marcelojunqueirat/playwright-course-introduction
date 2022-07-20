const { test, expect } = require('@playwright/test')


test.describe("Authentication", () => {
    test.use(
        { viewport: 
            { 
                width: 600, 
                height: 900 
            } 
        }
    );

    test("Saving Authentication", async ({ page }) => {

    })

})