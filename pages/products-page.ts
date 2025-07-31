import { type Locator, type Page } from '@playwright/test';
import { HeaderFooter } from './header-footer';

export class ProductsPage extends HeaderFooter {
    readonly urlExt: string;
    readonly productListHeaderLocator: Locator;
    readonly productName: Locator;

    constructor(page: Page) {
        super(page);

        this.urlExt = '/products';
        this.productListHeaderLocator = page.locator('h2.title');
        this.productName = page.locator('.productinfo p')
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