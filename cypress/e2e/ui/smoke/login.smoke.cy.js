import LoginPage from "../../../pages/LoginPage";
import { URLS } from "../../../support/utils/constants";

describe("UI Smoke - Login", () => {
  beforeEach(() => {
    cy.fixture("users").as("usersData");
    LoginPage.visit();
  });

  it("should login successfully with valid credentials", function () {
    const { username, password } = this.usersData.validUser;

    LoginPage.login(username, password);
    cy.url().should("include", URLS.INVENTORY);
    cy.get(".inventory_list").should("be.visible");
  });
});