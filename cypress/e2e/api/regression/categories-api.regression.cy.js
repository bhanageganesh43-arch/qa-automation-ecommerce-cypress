import { API_ROUTES } from "../../../support/apiRoutes";

describe("API Regression - Categories", () => {
  it("should return categories list with 200 and non-empty values", () => {
    cy.request({
      method: "GET",
      url: `${Cypress.env("apiBaseUrl")}${API_ROUTES.CATEGORIES}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array").and.not.be.empty;

      response.body.forEach((category) => {
        expect(category).to.be.a("string").and.not.be.empty;
      });
    });
  });

  it("should return products for each category", () => {
    cy.request({
      method: "GET",
      url: `${Cypress.env("apiBaseUrl")}${API_ROUTES.CATEGORIES}`
    }).then((categoryResponse) => {
      const categories = categoryResponse.body;

      categories.forEach((category) => {
        cy.request({
          method: "GET",
          url: `${Cypress.env("apiBaseUrl")}${API_ROUTES.PRODUCTS_BY_CATEGORY(category)}`
        }).then((productsResponse) => {
          expect(productsResponse.status).to.eq(200);
          expect(productsResponse.body).to.be.an("array");
          productsResponse.body.forEach((product) => {
            expect(product.category).to.eq(category);
          });
        });
      });
    });
  });
});