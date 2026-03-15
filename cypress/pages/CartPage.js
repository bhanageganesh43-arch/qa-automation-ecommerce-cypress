class CartPage {
  getCartItems() {
    return cy.get(".cart_item");
  }

  clickCheckout() {
    cy.get('[data-test="checkout"]').click();
  }

  removeItemByName(productName) {
    cy.contains(".cart_item", productName)
      .within(() => {
        cy.contains("button", "Remove").click();
      });
  }
}

export default new CartPage();