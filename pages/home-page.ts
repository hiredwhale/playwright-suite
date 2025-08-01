import { type Locator, type Page } from '@playwright/test';
import { HeaderFooter } from './header-footer';

export class HomePage extends HeaderFooter {
    readonly urlExt: string;
    readonly carousel: Locator;

    constructor(page: Page) {
        super(page);

        this.urlExt = '/';
        this.carousel = page.locator('#slider #slider-carousel');
    }

    async goto() {
        return this.page.goto(this.urlExt);
    }

    async clickFirstViewProductInList() {
        return this.page
            .getByRole('link', { name: 'View Product' })
            .first()
            .click();
    }
}