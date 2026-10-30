import { test, expect } from '@playwright/test';

test('signin with Valid Credentials @smoke', async ({page}) => {
    //open the browser
  await page.goto('https://www.demoblaze.com/index.html');
  // Click on Sign in button in header
    await page.locator('id=login2').click()

    // clear fields
    const username = page.locator('#loginusername');
    const password = page.locator('#loginpassword');

    await username.clear();
    await password.clear();

    // provide username

    await page.fill('#loginusername','sharma.deepakg9696@gmail.com')
    await page.fill('#loginpassword','sharma@123')
    
});
