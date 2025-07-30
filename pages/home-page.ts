import { type Locator, type Page } from '@playwright/test';
import { Navigation } from './navigation';

export class HomePage extends Navigation {
    readonly urlExt: string;
    readonly carousel: Locator;

    constructor(page: Page) {
        super(page);

        this.urlExt = '/';
        this.carousel = page.locator('#slider #slider-carousel')
    }

    async goto() {
        return this.page.goto(this.urlExt);
    }
}