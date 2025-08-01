import { type Locator, type Page } from '@playwright/test';
import { HeaderFooter } from './header-footer';

export class ProductsDetailsPage extends HeaderFooter {
    readonly urlExt: string;
    readonly nameLocator: Locator;
    readonly priceLocator: Locator;
    readonly categoryLocator: Locator;
    readonly availabilityLocator: Locator;
    readonly conditionLocator: Locator;
    readonly brandLocator: Locator;

    constructor(page: Page) {
        super(page);

        this.urlExt = '/product_details/';
        this.nameLocator = page.locator('.product-information h2');
        this.priceLocator = page.locator('.product-information h2');
        this.categoryLocator = page.locator(
            '.product-information p',
            { hasText: /Category:/ }
        );
        this.availabilityLocator = page.locator(
            '.product-information p',
            { hasText: /Availability:/ }
        );
        this.conditionLocator = page.locator(
            '.product-information p',
            { hasText: /Condition:/ }
        );
        this.brandLocator = page.locator(
            '.product-information p',
            { hasText: /Brand:/ }
        );
    }

    async clickAddToCartButton() {
        return this.page
            .getByRole('button', { name: 'Add to cart' })
            .click();
    }

    async sendTextToQuantityField(amount: string) {
        return this.page.locator('#quantity').fill(amount);
    }

    async clickViewCartLink() {
        return this.page.getByRole('link', { name: 'View Cart' }).click();
    }
}