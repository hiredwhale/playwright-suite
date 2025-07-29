import { type Locator, type Page } from '@playwright/test';
import { Navigation } from './navigation';

export class HomePage extends Navigation {
    readonly urlExt: string;

    constructor(page: Page) {
        super(page);

        this.urlExt = '/';
    }

    async goto() {
        return this.page.goto(this.urlExt);
    }
}