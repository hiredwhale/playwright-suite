import { type Locator, type Page } from '@playwright/test';
import { HeaderFooter } from './header-footer';

export class CartPage extends HeaderFooter {
    readonly urlExt: string;
    readonly productNames: Locator;

    constructor(page: Page) {
        super(page);

        this.urlExt = '/view_cart';
        this.productNames = page.locator(`tbody h4`);
    }

    async goto() {
        return this.page.goto(this.urlExt);
    }

    // async getProductNameLocator(row: number = 1) {
    //     return this.productNames.nth(row - 1);
    // }
}