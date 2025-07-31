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

    async getProductNameLocator(product: string) {
        return this.page.getByRole('heading', { name: product });
    }
}