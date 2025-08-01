import { type Locator, type Page } from '@playwright/test';
import { HeaderFooter } from './header-footer';

export class CartPage extends HeaderFooter {
    readonly urlExt: string;
    readonly productNames: Locator;
    readonly quantity: Locator;

    constructor(page: Page) {
        super(page);

        this.urlExt = '/view_cart';
        this.productNames = page.locator(`tbody h4`);
        this.quantity = page.locator(`tbody .cart_quantity`);
    }

    async goto() {
        return this.page.goto(this.urlExt);
    }
}