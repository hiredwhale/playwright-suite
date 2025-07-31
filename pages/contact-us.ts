import { type Locator, type Page } from '@playwright/test';
import { HeaderFooter } from './header-footer';

export class ContactUsPage extends HeaderFooter {
    readonly urlExt: string;
    readonly successLocator: Locator;

    constructor(page: Page) {
        super(page);

        this.urlExt = '/contact_us';
        this.successLocator = page.locator('.status');
    }

    async goto() {
        return this.page.goto(this.urlExt);
    }

    async sendKeysToNameField(name: string) {
        return this.page.getByPlaceholder('Name').fill(name);
    }

    async sendKeysToEmailField(email: string) {
        return this.page.getByPlaceholder('Email', { exact: true }).fill(email);
    }

    async sendKeysToSubjectField(subject: string) {
        return this.page.getByPlaceholder('Subject').fill(subject);
    }

    async sendKeysToMessageField(message: string) {
        return this.page.getByPlaceholder('Your Message Here').fill(message);
    }

    async clickSubmitButton() {
        return this.page.getByTestId('submit-button').click();
    }

    async clickHomeButton() {
        return this.page.locator('.btn-success', { hasText: 'Home' }).click();
    }

    async fillOutContactUsForm(name: string, email: string, subject: string, message: string) {
        this.page.on('dialog', async (dialog) => await dialog.accept() );

        await this.sendKeysToNameField(name);
        await this.sendKeysToEmailField(email);
        await this.sendKeysToSubjectField(subject);
        await this.sendKeysToMessageField(message);
        return this.clickSubmitButton();
    }
}