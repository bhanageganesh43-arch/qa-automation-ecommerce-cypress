import LoginPage from "../../../pages/LoginPage";
import InventoryPage from "../../../pages/InventoryPage";
import CartPage from "../../../pages/CartPage";
import CheckoutPage from "../../../pages/CheckoutPage";
import { URLS } from "../../../support/utils/constants";

describe("UI Smoke - Checkout", () => {
  const productName = "Sauce Labs Backpack";

  beforeEach(() => {
    cy.fixture("users").then((users) => {
      LoginPage.visit();
      LoginPage.login(users.validUser.username, users.validUser.password);
    });
  });

  it("should complete checkout successfully", () => {
    cy.fixture("checkout").then((checkoutData) => {
      const user = checkoutData.validCheckoutUser;

      InventoryPage.addProductToCartByName(productName);
      InventoryPage.openCart();

      CartPage.clickCheckout();
      cy.url().should("include", URLS.CHECKOUT_STEP_ONE);

      CheckoutPage.fillCheckoutInfo(user.firstName, user.lastName, user.postalCode);
      CheckoutPage.continueCheckout();

      cy.url().should("include", URLS.CHECKOUT_STEP_TWO);
      CheckoutPage.finishCheckout();

      cy.url().should("include", URLS.CHECKOUT_COMPLETE);
      CheckoutPage.getCompleteHeader().should("have.text", "Thank you for your order!");
    });
  });
});