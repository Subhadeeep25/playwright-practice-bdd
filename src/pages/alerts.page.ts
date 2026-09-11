import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class AlertsPage extends BasePage {
  readonly alertButton: Locator;
  readonly confirmButton: Locator;
  readonly promptButton: Locator;
  readonly resultMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.alertButton = page.locator('#js-alert');
    this.confirmButton = page.locator('#js-confirm');
    this.promptButton = page.locator('#js-prompt');
    this.resultMessage = page.locator('#dialog-response, #result');
  }

  async open(path: string = 'https://practice.expandtesting.com/js-dialogs') {
    await this.navigateTo(path);
  }

  async acceptAlert() {
    this.page.once('dialog', async (dialog) => {
      await dialog.accept();
    });
    await this.click(this.alertButton);
  }

  async dismissConfirm() {
    this.page.once('dialog', async (dialog) => {
      await dialog.dismiss();
    });
    await this.click(this.confirmButton);
  }

  async acceptConfirm() {
    this.page.once('dialog', async (dialog) => {
      await dialog.accept();
    });
    await this.click(this.confirmButton);
  }

  async enterPromptText(text: string) {
    this.page.once('dialog', async (dialog) => {
      await dialog.accept(text);
    });
    await this.click(this.promptButton);
  }

  async getResultMessage(): Promise<string> {
    return await this.getText(this.resultMessage);
  }
}