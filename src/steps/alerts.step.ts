import { Given, When, Then } from '../fixtures/fixtures';
import { expect } from '@playwright/test';
import { AlertsPage } from '../pages/alerts.page';

Given('the user is on JavaScript Dialog page', async ({ alertsPage }) => {
    await alertsPage.open()
})

When('the user accepts JS Alert', async ({ alertsPage }) => {
    await alertsPage.acceptAlert()
})

Then('success message should be displayed', async ({ alertsPage }) => {
    const text = await alertsPage.getResultMessage()
    expect(text).toContain('OK')
})


When('the user dismisses JS Confirm', async ({ alertsPage }) => {
    await alertsPage.dismissConfirm();
})
Then('cancel message should be displayed', async ({ alertsPage }) => {
    const text = await alertsPage.getResultMessage()
    expect(text).toContain('Cancel')
})
When('the user enters {string}', async ({ alertsPage }, text: string) => {
    await alertsPage.enterPromptText(text);
})
Then('entered text should be displayed', async ({ alertsPage }) => {
    const text = await alertsPage.getResultMessage();
    expect(text).toContain('Automation Testing');
})