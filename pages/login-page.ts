import { type Locator, type Page } from '@playwright/test';
import { HeaderFooter } from './header-footer';

export class LoginPage extends HeaderFooter {
    readonly urlExt: string;
    readonly loginError: Locator;
    readonly signupError: Locator;

    constructor(page: Page) {
        super(page);

        this.urlExt = '/login';
        this.loginError = page.getByText('Your email or password is incorrect!');
        this.signupError = page.getByText('Email address already exist!');
    }

    async goto() {
        return this.page.goto(this.urlExt);
    }

    async sendKeysToLoginEmailField(email: string) {
        return this.page.getByTestId('login-email').fill(email);
    }

    async sendKeysToLoginPasswordField(email: string) {
        return this.page.getByTestId('login-password').fill(email);
    }

    async clickLoginButton() {
        return this.page.getByTestId('login-button').click();
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

    async fillOutLoginFields(email: string, password: string) {
        await this.sendKeysToLoginEmailField(email);
        await this.sendKeysToLoginPasswordField(password);
        return this.clickLoginButton();
    }

    async fillOutSignUpFields(name: string, email: string) {
        await this.sendKeysToSignUpNameField(name);
        await this.sendKeysToSignUpEmailField(email);
        return this.clickSignUpButton();
    }
}