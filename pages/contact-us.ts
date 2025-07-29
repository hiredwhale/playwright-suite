import { type Locator, type Page } from '@playwright/test';
import { Navigation } from './navigation';

const successMessage = 'Success! Your details have been submitted successfully.';

export class ContactUsPage extends Navigation {
    readonly urlExt: string;
    readonly success: Locator;

    constructor(page: Page) {
        super(page);

        this.urlExt = '/contact_us';
        this.success = page.locator('.status', { hasText: successMessage });
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

    async fillOutContactUsForm(name: string, email: string, subject: string, message: string) {
        this.page.on('dialog', async (dialog) => await dialog.accept() );

        await this.sendKeysToNameField(name);
        await this.sendKeysToEmailField(email);
        await this.sendKeysToSubjectField(subject);
        await this.sendKeysToMessageField(message);
        return this.clickSubmitButton();
    }
}