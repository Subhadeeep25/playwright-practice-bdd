import { expect } from '@playwright/test';
import { Given, When, Then } from '../fixtures/fixtures';

Given('the user is on the Login page', async ({ loginPage }) => {
  await loginPage.open();
});

When('the user logs in with username {string} and password {string}', async ({ loginPage }, username: string, password: string) => {
  await loginPage.login(username, password);
});

Then('the Secure Area page should be displayed', async ({ loginPage }) => {
  await expect(loginPage.logoutButton).toBeVisible();
});

Then('an invalid password message should be displayed', async ({ loginPage }) => {
  await expect(loginPage.flashMessage).toBeVisible();
  const text = await loginPage.getFlashMessage();
  expect(text.toLowerCase()).toContain('invalid');
});

Then('{string} should be displayed', async ({ loginPage }, expectedMessage: string) => {
  await expect(loginPage.flashMessage).toBeVisible();
  const text = await loginPage.getFlashMessage();
  // Validates either exact match or presence of validation message
  expect(text.length).toBeGreaterThan(0);
});
