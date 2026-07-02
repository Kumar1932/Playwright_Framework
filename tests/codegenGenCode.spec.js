import { test, expect } from '@playwright/test';

test('test', async ({page }) => {
  await page.goto('http://49.249.28.218:8889/dolibarr/index.php');
  await page.getByRole('textbox', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Login' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Members' }).click();
  await page.getByRole('link', { name: 'New member' }).click();
  await page.getByRole('cell', { name: 'New member' }).click();
  await expect(page.locator('#id-right').getByText('New member')).toBeVisible();
});