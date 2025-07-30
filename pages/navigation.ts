import { type Locator, type Page } from '@playwright/test';

export class Navigation {
    readonly page: Page;
    readonly loggedIn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loggedIn = page.locator('.navbar-nav a', { hasText: /Logged in as/ });
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
}