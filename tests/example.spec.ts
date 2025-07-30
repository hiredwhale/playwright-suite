import { test, expect } from '@playwright/test';
import { ContactUsPage } from '../pages/contact-us';
import { ProductsPage } from '../pages/products-page';
import { ProductsDetailsPage } from '../pages/products-details-page';
import { CartPage } from '../pages/cart-page';
import { LoginPage } from '../pages/login-page';
import { SignupPage } from '../pages/signup-page';
import { AccountCreatedPage } from '../pages/account-created-page';
import { HomePage } from '../pages/home-page';
import { DeleteAccountPage } from '../pages/delete-account-page';
import { TestCasesPage } from '../pages/test-cases-page';

var home: HomePage;

test.beforeEach(async ({ page }) => {
  home = new HomePage(page);
  await home.goto();
});

test('user can register an account', async ({ page }) => {
  let first_name = 'Automation';
  let last_name = 'Tester';
  let username = 'AutoTest123';

  let random = Math.floor(Math.random() * 100) + 1;
  let email = `tester${random}@fakedomain.fake`;
  let title = 'Mr.';
  let password = 'Qwerty1@3';
  let day = '13';
  let month = 'April';
  let year = '1993';

  let address = '4 Pennsylvania Plaza';
  let country = 'United States';
  let state = 'New York';
  let city = 'New York';
  let zipCode = '10001';
  let mobile = '212-555-1234';

  const login = new LoginPage(page);
  const signup = new SignupPage(page);
  const created = new AccountCreatedPage(page);
  const deleted = new DeleteAccountPage(page);

  await home.clickSignUpLoginHeaderLink();
  await login.fillOutSignUpFields(username, email);

  await expect(signup.nameFieldLocator).toHaveValue(username);
  await expect(signup.emailFieldLocator).toHaveValue(email);
  await signup.fillOutAccountInformationForm(title, password, day, month, year);
  await signup.fillOutAddressInformationForm(first_name, last_name, address,
    country, state, city, zipCode, mobile);
  await signup.clickCreateAccountButton();

  await expect(created.accountCreatedLocator).toBeVisible();
  await created.clickContinueButton();

  await expect(home.loggedIn).toContainText(username);
  await home.clickDeleteAccountLink();

  await expect(deleted.deleteAccountLocator).toBeVisible();
  await deleted.clickContinueButton();
});

test('user can login with valid credentials', async ({ page }) => {
  let email = 'tester_login@fakedomain.fake';
  let password = 'Qwerty1@3';
  let username = 'TesterLogin123';

  const login = new LoginPage(page);

  await home.clickSignUpLoginHeaderLink();
  await login.fillOutLoginFields(email, password);

  await expect(home.loggedIn).toContainText(username);
});

test('user is unable login with invalid credentials', async ({ page }) => {
  let email = 'tester_login@fakedomain.fake';
  let password = 'Qwerty12#';

  const login = new LoginPage(page);

  await home.clickSignUpLoginHeaderLink();
  await login.fillOutLoginFields(email, password);

  await expect(login.loginError).toBeVisible();
});

test('user can logout', async ({ page }) => {
  let email = 'tester_login@fakedomain.fake';
  let password = 'Qwerty1@3';
  let username = 'TesterLogin123';

  const login = new LoginPage(page);

  await home.clickSignUpLoginHeaderLink();
  await login.fillOutLoginFields(email, password);

  await expect(home.loggedIn).toContainText(username);
  await home.clickLogoutLink();

  expect(page.url()).toContain(login.urlExt);
});

test('user is unable to sign up with a duplicate email', async ({ page }) => {
  let username = 'ExistingEmail';
  let email = 'tester_login@fakedomain.fake';

  const login = new LoginPage(page);

  await home.clickSignUpLoginHeaderLink();
  await login.fillOutSignUpFields(username, email);

  await expect(login.signupError).toBeVisible();
});

test('user can fill out contact us form', async ({ page }) => {
  let name = 'Automation Tester';
  let email = 'AutomationTester@faketestdomain.com';
  let subject = 'A subject.';
  let message = 'This is a message.';

  const contact = new ContactUsPage(page);

  await home.clickContactUsHeaderLink();
  await contact.fillOutContactUsForm(name, email, subject, message);
  await expect(contact.success).toBeVisible();

  await contact.clickHomeButton();
  await expect(home.carousel).toBeVisible();
});

test('user can reach test cases page', async ({ page }) => {
  const tests = new TestCasesPage(page);

  await home.clickTestCasesHeaderLink();
  expect(page.url()).toContain(tests.urlExt);
});

test('user can reach product details page through all products page', async ({ page }) => {
  const products = new ProductsPage(page);
  const details = new ProductsDetailsPage(page);

  await home.clickProductsHeaderLink();
  expect(page.url()).toContain(products.urlExt);
  await expect(products.productListHeaderLocator)
    .toHaveText('All Products', { ignoreCase: true });

  await products.clickFirstViewProduct();
  await expect(details.nameLocator).toBeVisible();
  await expect(details.priceLocator).toBeVisible();
  await expect(details.categoryLocator).toBeVisible();
  await expect(details.availabilityLocator).toBeVisible();
  await expect(details.conditionLocator).toBeVisible();
  await expect(details.brandLocator).toBeVisible();
});

test('user can search for products on products page', async ({ page }) => {
  const products = new ProductsPage(page);
  let searchTerm = 'jeans';

  await home.clickProductsHeaderLink();
  await products.searchForProduct(searchTerm);
  await expect(products.productListHeaderLocator)
    .toHaveText('Searched Products', { ignoreCase: true });

  for (let name of await products.productName.all()) {
    await expect(name).toBeVisible();
    await expect(name).toContainText('jeans', { ignoreCase: true });
  }
});

test('user can add a product to the cart', async ({ page }) => {
  const products = new ProductsPage(page);
  const details = new ProductsDetailsPage(page);
  const cart = new CartPage(page);
  let productName = 'Winter Top';

  await products.clickProductsHeaderLink();
  await products.searchForProduct(productName);
  await products.clickFirstViewProduct();

  await details.clickAddToCartButton();
  await details.clickViewCartLink();

  let productInCart = await cart.getProductNameLocator(productName)
  await expect(productInCart).toBeVisible();
});
