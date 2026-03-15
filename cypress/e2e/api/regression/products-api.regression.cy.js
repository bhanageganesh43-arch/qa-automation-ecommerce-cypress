import { API_ROUTES } from "../../../support/apiRoutes";
import { validateProductShape } from "../../../support/utils/validators";

describe("API Regression - Products", () => {
it("should handle invalid product id gracefully", () => {
  cy.fixture("apiTestData").then((data) => {
    cy.request({
      method: "GET",
      url: `${Cypress.env("apiBaseUrl")}${API_ROUTES.PRODUCT_BY_ID(data.invalidProductId)}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);

      // Fake Store API may return {} for invalid ID
      expect(response.body).to.not.have.property("id");
      expect(Object.keys(response.body)).to.have.length(0);
    });
  });
});

  it("should validate all products have required fields", () => {
    cy.request({
      method: "GET",
      url: `${Cypress.env("apiBaseUrl")}${API_ROUTES.PRODUCTS}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      response.body.forEach((product) => validateProductShape(product));
    });
  });

  it("should validate product price is a positive number", () => {
    cy.request({
      method: "GET",
      url: `${Cypress.env("apiBaseUrl")}${API_ROUTES.PRODUCTS}`
    }).then((response) => {
      response.body.forEach((product) => {
        expect(product.price).to.be.a("number");
        expect(product.price).to.be.greaterThan(0);
      });
    });
  });
});