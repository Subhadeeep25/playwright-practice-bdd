import { Page, Locator } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async click(locator: Locator) {
    await locator.click();
  }
  async fill(locator: Locator, text: string) {
    await locator.fill(text);
  }
  async getText(locator: Locator) {
    return (await locator.textContent()) ?? "";
  }
  async doubleClick(locator: Locator) {
    await locator.dblclick();
  }
  async rightClick(locator: Locator) {
    await locator.click({ button: 'right' });
  }
  async check(locator: Locator) {
    await locator.check();
  }
  async uncheck(locator: Locator) {
    await locator.uncheck();
  }
  async isChecked(locator: Locator) {
    return await locator.isChecked();
  }
  async isVisible(locator: Locator) {
    return await locator.isVisible();
  }
  async selectByText(locator: Locator, text: string) {
    await locator.selectOption({ label: text });
  }

  async selectByValue(locator: Locator, value: string) {
    await locator.selectOption({ value });
  }
  async waitForVisible(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
  }
  async waitForHidden(locator: Locator) {
    await locator.waitFor({ state: 'hidden' });
  }

  async navigateTo(path: string = '/') {
    await this.page.goto(path);
  }

  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  async getUrl(): Promise<string> {
    return this.page.url();
  }

  async waitForElement(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
  }
}
