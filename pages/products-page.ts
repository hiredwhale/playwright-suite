import { type Locator, type Page } from '@playwright/test';
import { Navigation } from './navigation';

export class ProductsPage extends Navigation {
    readonly urlExt: string;

    constructor(page: Page) {
        super(page);

        this.urlExt = '/products';
    }

    async goto() {
        return this.page.goto(this.urlExt);
    }

    async sendKeysToSearchProductField(product: string) {
        return this.page.getByPlaceholder('Search Product').fill(product);
    }

    async clickSearchButton() {
        return this.page.locator('button#submit_search').click();
    }

    async clickFirstViewProduct() {
        return this.page
            .getByRole('link', { name: 'View Product' })
            .first()
            .click();
    }

    async searchForProduct(product: string) {
        await this.sendKeysToSearchProductField(product);
        return this.clickSearchButton();
    }
}