import { type Locator, type Page } from '@playwright/test';
import { HeaderFooter } from './header-footer';

export class TestCasesPage extends HeaderFooter {
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