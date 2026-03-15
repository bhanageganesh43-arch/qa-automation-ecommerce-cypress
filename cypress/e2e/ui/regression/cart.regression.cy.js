import LoginPage from "../../../pages/LoginPage";
import InventoryPage from "../../../pages/InventoryPage";
import CartPage from "../../../pages/CartPage";

describe("UI Regression - Cart", () => {
  const productName = "Sauce Labs Backpack";

  beforeEach(() => {
    cy.fixture("users").then((users) => {
      LoginPage.visit();
      LoginPage.login(users.validUser.username, users.validUser.password);
    });
  });

  it("should remove product from cart successfully", () => {
    InventoryPage.addProductToCartByName(productName);
    InventoryPage.openCart();

    cy.contains(".inventory_item_name", productName).should("be.visible");
    CartPage.removeItemByName(productName);
    cy.contains(".inventory_item_name", productName).should("not.exist");
  });

  it("should retain cart item after navigating back to inventory", () => {
    InventoryPage.addProductToCartByName(productName);
    InventoryPage.openCart();
    cy.get('[data-test="continue-shopping"]').click();

    cy.get(".shopping_cart_badge").should("have.text", "1");
  });
});