import { API_ROUTES } from "../apiRoutes";

Cypress.Commands.add("getProducts", () => {
  return cy.request({
    method: "GET",
    url: `${Cypress.env("apiBaseUrl")}${API_ROUTES.PRODUCTS}`
  });
});

Cypress.Commands.add("getProductById", (id) => {
  return cy.request({
    method: "GET",
    url: `${Cypress.env("apiBaseUrl")}${API_ROUTES.PRODUCT_BY_ID(id)}`
  });
});