import { API_ROUTES } from "../../../support/apiRoutes";

describe("API Smoke - Carts", () => {
  it("should return carts list with 200", () => {
    cy.request({
      method: "GET",
      url: `${Cypress.env("apiBaseUrl")}${API_ROUTES.CARTS}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array").and.not.be.empty;
    });
  });

  it("should validate carts API response time within threshold", () => {
    cy.fixture("apiTestData").then((data) => {
      cy.request({
        method: "GET",
        url: `${Cypress.env("apiBaseUrl")}${API_ROUTES.CARTS}`
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.lessThan(data.maxExpectedResponseTimeMs);
      });
    });
  });
});