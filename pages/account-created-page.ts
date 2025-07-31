import { type Locator, type Page } from '@playwright/test';
import { HeaderFooter } from './header-footer';

export class AccountCreatedPage extends HeaderFooter {
    readonly urlExt: string;
    readonly accountCreatedLocator: Locator;

    constructor(page: Page) {
        super(page);

        this.urlExt = '/account_created';
        this.accountCreatedLocator = page.getByRole('heading', { name: 'Account Created!' })
    }

    async goto() {
        return this.page.goto(this.urlExt);
    }

    async clickContinueButton() {
        await this.page.getByTestId('continue-button').click();
        return this.page.waitForLoadState('load');
    }
}