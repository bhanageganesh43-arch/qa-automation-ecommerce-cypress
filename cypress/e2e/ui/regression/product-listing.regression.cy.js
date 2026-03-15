import LoginPage from "../../../pages/LoginPage";
import InventoryPage from "../../../pages/InventoryPage";

describe("UI Regression - Product Listing", () => {
  beforeEach(() => {
    cy.fixture("users").then((users) => {
      LoginPage.visit();
      LoginPage.login(users.validUser.username, users.validUser.password);
    });
  });

  it("should display inventory items with name and price", () => {
    InventoryPage.getInventoryItems().should("have.length.greaterThan", 0);
    cy.get(".inventory_item_name").first().should("be.visible");
    cy.get(".inventory_item_price").first().should("be.visible");
  });

  it("should sort products by price low to high", () => {
    InventoryPage.sortBy("lohi");

    cy.get(".inventory_item_price").then(($prices) => {
      const values = [...$prices].map((el) =>
        Number(el.innerText.replace("$", "").trim())
      );

      const sorted = [...values].sort((a, b) => a - b);
      expect(values).to.deep.equal(sorted);
    });
  });

  it("should sort products by name Z to A", () => {
    InventoryPage.sortBy("za");

    cy.get(".inventory_item_name").then(($names) => {
      const values = [...$names].map((el) => el.innerText.trim());
      const sorted = [...values].sort().reverse();
      expect(values).to.deep.equal(sorted);
    });
  });
});