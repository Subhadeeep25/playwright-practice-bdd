import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly flashMessage: Locator;
  readonly logoutButton: Locator;
  readonly secureHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
    this.flashMessage = page.locator('#flash');
    this.logoutButton = page.getByRole('link', { name: 'Logout' });
    this.secureHeading = page.getByRole('heading', { level: 1 });
  }

  async open(path: string = '/login') {
    await this.navigateTo(path);
  }

  async enterUsername(username: string) {
    await this.fill(this.usernameInput, username);
  }

  async enterPassword(password: string) {
    await this.fill(this.passwordInput, password);
  }

  async clickLogin() {
    await this.click(this.loginButton);
  }

  async login(username: string, password: string) {
    if (username) {
      await this.enterUsername(username);
    }
    if (password) {
      await this.enterPassword(password);
    }
    await this.clickLogin();
  }

  async getFlashMessage(): Promise<string> {
    const text = await this.getText(this.flashMessage);
    return text.trim();
  }
}
