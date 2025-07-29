import { type Locator, type Page } from '@playwright/test';
import { Navigation } from './navigation';

export class ProductsDetailsPage extends Navigation {
    readonly urlExt: string;

    constructor(page: Page) {
        super(page);

        this.urlExt = '/product_details/';
    }

    async clickAddToCartButton() {
        return this.page
            .getByRole('button', { name: 'Add to cart' })
            .click();
    }

    async clickViewCartLink() {
        return this.page.getByRole('link', { name: 'View Cart' }).click();
    }
}