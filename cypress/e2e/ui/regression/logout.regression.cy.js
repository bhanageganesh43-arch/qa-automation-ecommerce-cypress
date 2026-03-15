import LoginPage from "../../../pages/LoginPage";
import HeaderComponent from "../../../pages/HeaderComponent";

describe("UI Regression - Logout", () => {
  beforeEach(() => {
    cy.fixture("users").then((users) => {
      LoginPage.visit();
      LoginPage.login(users.validUser.username, users.validUser.password);
    });
  });

  it("should logout successfully and return to login page", () => {
    HeaderComponent.openMenu();
    cy.get('[data-test="logout-sidebar-link"]').should("be.visible");
    HeaderComponent.clickLogout();

    cy.url().should("eq", "https://www.saucedemo.com/");
    cy.get('[data-test="login-button"]').should("be.visible");
  });
});