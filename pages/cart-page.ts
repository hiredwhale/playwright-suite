import { type Locator, type Page } from '@playwright/test';
import { Navigation } from './navigation';

export class CartPage extends Navigation {
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