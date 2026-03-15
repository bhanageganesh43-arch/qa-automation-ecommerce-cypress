import { API_ROUTES } from "../../../support/apiRoutes";

describe("API Regression - Users", () => {
  it("should return users list with required fields", () => {
    cy.request({
      method: "GET",
      url: `${Cypress.env("apiBaseUrl")}${API_ROUTES.USERS}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array").and.not.be.empty;

      response.body.forEach((user) => {
        expect(user).to.have.property("id");
        expect(user).to.have.property("email");
        expect(user).to.have.property("username");
      });
    });
  });

  it("should return user by id with address details", () => {
    cy.request({
      method: "GET",
      url: `${Cypress.env("apiBaseUrl")}${API_ROUTES.USER_BY_ID(1)}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(1);
      expect(response.body).to.have.property("address");
      expect(response.body.address).to.have.property("city");
    });
  });
});