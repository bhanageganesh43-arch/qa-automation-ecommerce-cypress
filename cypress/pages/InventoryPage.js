class InventoryPage {
  getInventoryItems() {
    return cy.get(".inventory_item");
  }

  addProductToCartByName(productName) {
    cy.contains(".inventory_item", productName)
      .within(() => {
        cy.contains("button", "Add to cart").click();
      });
  }

  openCart() {
    cy.get('[data-test="shopping-cart-link"]').click();
  }

  sortBy(value) {
    cy.get('[data-test="product-sort-container"]').select(value);
  }
}

export default new InventoryPage();