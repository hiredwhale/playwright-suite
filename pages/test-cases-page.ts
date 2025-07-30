import { type Locator, type Page } from '@playwright/test';
import { Navigation } from './navigation';

export class TestCasesPage extends Navigation {
    readonly urlExt: string;
    readonly carousel: Locator;

    constructor(page: Page) {
        super(page);

        this.urlExt = '/test_cases';
    }

    async goto() {
        return this.page.goto(this.urlExt);
    }
}