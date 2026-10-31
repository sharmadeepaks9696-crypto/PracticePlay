//import using Es model
import {test, expect} from '@playwright/test';

//define a test block
test('homepage   @smoke' , async ({page}) => {

    await page.goto("https://www.demoblaze.com/index.html");
    const pagetitle= page.title();
console.log("page title is:", pagetitle);

await expect(page).toHaveTitle("STORE");

await page.close();
 
})


