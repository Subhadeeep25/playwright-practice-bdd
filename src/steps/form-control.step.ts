import { Given, When, Then } from '../fixtures/fixtures';
import { expect } from '@playwright/test';

Given('the user is on Dropdown page', async ({ page }) => {
    await page.goto("https://practice.expandtesting.com/dropdown");
})

When("the user selects Option {string}", async ({ page }, option: string) => {
    await page.locator("#dropdown").selectOption({ value: option });
})

Then("Option {string} should be selected", async ({ page }, option: string) => {
    await expect(page.locator("#dropdown")).toHaveValue(option);
})


Given('the user is on Checkboxes page', async ({ page }) => {
    await page.goto("https://practice.expandtesting.com/checkboxes");
})

When('the user checks Checkbox 2', async ({ page }) => {
    await page.check("#checkbox2");
})

Then('Checkbox 2 should be selected', async ({ page }) => {
    await expect(page.locator("#checkbox2")).toBeChecked();
})

Given('Checkbox 2 is already selected', async ({ page }) => {
    await page.goto("https://practice.expandtesting.com/checkboxes");
    await page.check("#checkbox2");
})

When('the user unchecks Checkbox 2', async ({ page }) => {
    await page.locator("#checkbox2").uncheck();
})

Then('Checkbox 2 should not be selected', async ({ page }) => {
    await expect(page.locator("#checkbox2")).not.toBeChecked();
})

