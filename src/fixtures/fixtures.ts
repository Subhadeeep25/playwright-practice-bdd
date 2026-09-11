import { test as base, createBdd } from 'playwright-bdd';
import { BasePage } from '@pages/base.page';
import { LoginPage } from '@pages/login.page';
import { AlertsPage } from '@pages/alerts.page';

type CustomFixtures = {
  loginPage: LoginPage;
  alertsPage: AlertsPage;
};

export const test = base.extend<CustomFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  alertsPage: async ({ page }, use) => {
    const alertsPage = new AlertsPage(page);
    await use(alertsPage);
  },
});

export const { Given, When, Then, Before, After, BeforeAll, AfterAll } = createBdd(test);
