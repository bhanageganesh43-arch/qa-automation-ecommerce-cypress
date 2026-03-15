import LoginPage from "../../../pages/LoginPage";
import InventoryPage from "../../../pages/InventoryPage";
import CartPage from "../../../pages/CartPage";

describe("UI Smoke - Add to Cart", () => {
  const productName = "Sauce Labs Backpack";

  beforeEach(() => {
    cy.fixture("users").then((users) => {
      LoginPage.visit();
      LoginPage.login(users.validUser.username, users.validUser.password);
    });
  });

  it("should add one product to cart and verify item in cart", () => {
    InventoryPage.addProductToCartByName(productName);
    cy.get(".shopping_cart_badge").should("have.text", "1");

    InventoryPage.openCart();
    CartPage.getCartItems().should("have.length", 1);
    cy.contains(".inventory_item_name", productName).should("be.visible");
  });
});