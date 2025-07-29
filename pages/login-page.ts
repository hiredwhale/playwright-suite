import { type Locator, type Page } from '@playwright/test';
import { Navigation } from './navigation';

export class LoginPage extends Navigation {
    readonly urlExt: string;

    constructor(page: Page) {
        super(page);

        this.urlExt = '/login';
    }

    async goto() {
        return this.page.goto(this.urlExt);
    }

    async sendKeysToSignUpNameField(name: string) {
        return this.page.getByTestId('signup-name').fill(name);
    }

    async sendKeysToSignUpEmailField(email: string) {
        return this.page.getByTestId('signup-email').fill(email);
    }

    async clickSignUpButton() {
        return this.page.getByTestId('signup-button').click();
    }

    async fillOutSignUpFields(name: string, email: string) {
        await this.sendKeysToSignUpNameField(name);
        await this.sendKeysToSignUpEmailField(email);
        return this.clickSignUpButton();
    }
}