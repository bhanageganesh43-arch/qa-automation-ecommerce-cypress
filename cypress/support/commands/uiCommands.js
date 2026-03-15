Cypress.Commands.add("login", (username, password) => {
  cy.visit("/");
  cy.get('[data-test="username"]').clear().type(username);
  cy.get('[data-test="password"]').clear().type(password, { log: false });
  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add("addProductToCartByName", (productName) => {
  cy.contains(".inventory_item", productName)
    .within(() => {
      cy.contains("button", "Add to cart").click();
    });
});

Cypress.Commands.add("openCart", () => {
  cy.get('[data-test="shopping-cart-link"]').click();
});