import { type Locator, type Page } from '@playwright/test';
import { HeaderFooter } from './header-footer';

export class SignupPage extends HeaderFooter {
    readonly urlExt: string;
    readonly nameFieldLocator: Locator;
    readonly emailFieldLocator: Locator;

    constructor(page: Page) {
        super(page);

        this.urlExt = '/signup';
        this.nameFieldLocator = page.getByTestId('name');
        this.emailFieldLocator = page.getByTestId('email');
    }

    async goto() {
        return this.page.goto(this.urlExt);
    }

    async clickTitleRadioOption(title: string) {
        return this.page.locator('.radio-inline', { hasText: title }).click();
    }

    async sendKeysToNameField(name: string) {
        return this.nameFieldLocator.fill(name);
    }

    async sendKeysToEmailField(email: string) {
        return this.emailFieldLocator.fill(email);
    }

    async sendKeysToPasswordField(password: string) {
        // return this.page.getByTestId('password').fill(password);
        return this.page.getByLabel('Password').fill(password);
    }

    async selectDayFromDropdown(day: string) {
        return this.page.getByTestId('days').selectOption(day);
    }

    async selectMonthFromDropdown(month: string) {
        return this.page.getByTestId('months').selectOption({ label: month });
    }

    async selectYearFromDropdown(year: string) {
        return this.page.getByTestId('years').selectOption(year);
    }

    async clickSignUpForNewsLetterCheckbox() {
        return this.page.locator('#newsletter').click();
    }

    async clickReceiveSpecialOffersCheckbox() {
        return this.page.locator('#optin').click();
    }

    async sendKeysToFirstNameField(name: string) {
        return this.page.getByTestId('first_name').fill(name);
    }

    async sendKeysToLastNameField(name: string) {
        return this.page.getByTestId('last_name').fill(name);
    }

    async sendKeysToAddressField(address: string) {
        return this.page.getByTestId('address').fill(address);
    }

    async selectCountryFromDropdown(country: string) {
        return this.page.getByTestId('country').selectOption(country);
    }

    async sendKeysToStateField(state: string) {
        return this.page.getByTestId('state').fill(state);
    }

    async sendKeysToCityField(city: string) {
        return this.page.getByTestId('city').fill(city);
    }

    async sendKeysToZipCodeField(code: string) {
        return this.page.getByTestId('zipcode').fill(code);
    }

    async sendKeysToMobileNumberField(number: string) {
        return this.page.getByTestId('mobile_number').fill(number);
    }

    async clickCreateAccountButton() {
        // return this.page.getByTestId('create-account').click();
        return this.page.getByRole('button', { name: 'Create Account' }).click();
    }

    async fillOutAccountInformationForm(
        title: string, password: string,
        day: string, month: string, year: string
    ) {
        await this.clickTitleRadioOption(title);
        await this.sendKeysToPasswordField(password);
        await this.selectDayFromDropdown(day);
        await this.selectMonthFromDropdown(month);
        await this.selectYearFromDropdown(year);
        await this.clickSignUpForNewsLetterCheckbox();
    }

    async fillOutAddressInformationForm(
        first: string, last: string, address: string, country: string,
        state: string, city: string, zip: string, mobile: string
    ) {
        await this.sendKeysToFirstNameField(first);
        await this.sendKeysToLastNameField(last);
        await this.sendKeysToAddressField(address);
        await this.selectCountryFromDropdown(country);
        await this.sendKeysToStateField(state);
        await this.sendKeysToCityField(city);
        await this.sendKeysToZipCodeField(zip);
        await this.sendKeysToMobileNumberField(mobile);
        // return this.clickCreateAccountButton();
    }
}