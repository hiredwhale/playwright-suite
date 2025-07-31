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
        await this.page.locator('button#submit_search').click();
        await this.page.waitForLoadState('load');
    }

    async addFirstProductToCart() {
        await this.page.locator('.single-products').first().hover();
        return this.page.locator('.product-overlay .add-to-cart').first().click();
    }

    async clickFirstViewProduct() {
        return this.page
            .getByRole('link', { name: 'View Product' })
            .first()
            .click();
    }

    async clickViewCartLink() {
        await this.page
            .getByRole('link', { name: 'View Cart' })
            .click();
        return this.page.waitForLoadState('load');
    }

    async clickContinueShoppingButton() {
        return this.page
            .getByRole('button', { name: 'Continue Shopping' })
            .click();
    }

    async searchForProduct(product: string) {
        await this.sendKeysToSearchProductField(product);
        return this.clickSearchButton();
    }
}