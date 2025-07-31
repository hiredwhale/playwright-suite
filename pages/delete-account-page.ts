import { type Locator, type Page } from '@playwright/test';
import { HeaderFooter } from './header-footer';

export class DeleteAccountPage extends HeaderFooter {
    readonly urlExt: string;
    readonly deleteAccountLocator: Locator;

    constructor(page: Page) {
        super(page);

        this.urlExt = '/delete_account';
        this.deleteAccountLocator = page.getByRole('heading', { name: 'Account Deleted!' })
    }

    async goto() {
        return this.page.goto(this.urlExt);
    }

    async clickContinueButton() {
        await this.page.getByTestId('continue-button').click();
        return this.page.waitForLoadState('load');
    }
}