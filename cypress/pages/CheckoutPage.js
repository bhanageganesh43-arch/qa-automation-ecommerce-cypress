class CheckoutPage {
  fillCheckoutInfo(firstName, lastName, postalCode) {
    cy.get('[data-test="firstName"]').clear().type(firstName);
    cy.get('[data-test="lastName"]').clear().type(lastName);
    cy.get('[data-test="postalCode"]').clear().type(postalCode);
  }

  continueCheckout() {
    cy.get('[data-test="continue"]').click();
  }

  finishCheckout() {
    cy.get('[data-test="finish"]').click();
  }

  getCompleteHeader() {
    return cy.get('[data-test="complete-header"]');
  }
}

export default new CheckoutPage();