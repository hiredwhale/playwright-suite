import { type Locator, type Page } from '@playwright/test';
import { HeaderFooter } from './header-footer';

export class CartPage extends HeaderFooter {
    readonly urlExt: string;

    constructor(page: Page) {
        super(page);

        this.urlExt = '/view_cart';
    }

    async goto() {
        return this.page.goto(this.urlExt);
    }

    async getProductNameLocator(row: number = 1) {
        return this.page.locator(`tbody h4`).nth(row - 1);
    }
}