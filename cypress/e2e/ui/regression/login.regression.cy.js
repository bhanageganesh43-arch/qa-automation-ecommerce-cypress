import LoginPage from "../../../pages/LoginPage";
import { URLS } from "../../../support/utils/constants";

describe("UI Regression - Login", () => {
  beforeEach(() => {
    cy.fixture("users").as("usersData");
    cy.fixture("expectedMessages").as("messages");
    LoginPage.visit();
  });

  it("should show error for locked user", function () {
    const { username, password } = this.usersData.lockedUser;

    LoginPage.login(username, password);
    LoginPage.getError().should("contain.text", this.messages.lockedUserError);
  });

  it("should show error for invalid credentials", function () {
    const { username, password } = this.usersData.invalidUser;

    LoginPage.login(username, password);
    LoginPage.getError().should("contain.text", this.messages.invalidUserError);
  });

  it("should not login with empty username and password", () => {
    LoginPage.clickLogin();
    LoginPage.getError().should("be.visible");
  });

  it("should keep user on inventory page after successful login", function () {
    const { username, password } = this.usersData.validUser;

    LoginPage.login(username, password);
    cy.url().should("include", URLS.INVENTORY);
  });
});