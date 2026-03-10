import { test, expect } from '@playwright/test';

test('has title', async ({page}) => {
  // Go to the 1001 Albums Generator website.
  await page.goto('https://1001albumsgenerator.com/');

  // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle
    (/1001 Albums You Must Hear Before You Die/);
});