import { type Locator, type Page } from '@playwright/test';

export class HeaderFooter {
    readonly page: Page;
    readonly loggedIn: Locator;
    readonly subscribedLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loggedIn = page.locator('.navbar-nav a', { hasText: /Logged in as/ });
        this.subscribedLocator = page.locator('#success-subscribe');
    }

    async clickProductsHeaderLink() {
        await this.page.getByRole('link', { name: 'Products' }).click();
        return this.page.waitForLoadState('load');
    }

    async clickCartHeaderLink() {
        await this.page.getByRole('link', { name: 'Cart' }).click();
        return this.page.waitForLoadState('load');
    }

    async clickSignUpLoginHeaderLink() {
        await this.page.getByRole('link', { name: 'Signup / Login' }).click();
        return this.page.waitForLoadState('load');
    }

    async clickLogoutLink() {
        await this.page.getByRole('link', { name: 'Logout' }).click();
        return this.page.waitForLoadState('load');
    }

    async clickDeleteAccountLink() {
        await this.page.getByRole('link', { name: 'Delete Account' }).click();
        return this.page.waitForLoadState('load');
    }

    async clickTestCasesHeaderLink() {
        await this.page
            .getByRole('link', { name: 'Test Cases', exact: true })
            .click();
        return this.page.waitForLoadState('load');
    }

    async clickContactUsHeaderLink() {
        await this.page.getByRole('link', { name: 'Contact us' }).click();
        return this.page.waitForLoadState('load');
    }

    async sendKeysToSubscriptionEmailField(email: string) {
        return this.page.getByPlaceholder('Your email address').fill(email);
    }

    async clickSubscribeButton() {
        return this.page.locator('#subscribe').click();
    }

    async subscribeToUpdates(email: string) {
        await this.sendKeysToSubscriptionEmailField(email);
        return this.clickSubscribeButton();
    }
}