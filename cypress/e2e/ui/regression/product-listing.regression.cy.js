import LoginPage from "../../../pages/LoginPage";
import InventoryPage from "../../../pages/InventoryPage";
import { SORT_OPTIONS } from "../../../support/utils/constants";

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

  it("should display product images for all items", () => {
    cy.get(".inventory_item_img img").each(($img) => {
      expect($img.attr("src")).to.not.be.empty;
    });
  });

  it("should sort products by price low to high", () => {
    InventoryPage.sortBy(SORT_OPTIONS.PRICE_LOW_HIGH);

    cy.get(".inventory_item_price").then(($prices) => {
      const values = [...$prices].map((el) =>
        Number(el.innerText.replace("$", "").trim())
      );
      const sorted = [...values].sort((a, b) => a - b);
      expect(values).to.deep.equal(sorted);
    });
  });

  it("should sort products by price high to low", () => {
    InventoryPage.sortBy(SORT_OPTIONS.PRICE_HIGH_LOW);

    cy.get(".inventory_item_price").then(($prices) => {
      const values = [...$prices].map((el) =>
        Number(el.innerText.replace("$", "").trim())
      );
      const sorted = [...values].sort((a, b) => b - a);
      expect(values).to.deep.equal(sorted);
    });
  });

  it("should sort products by name Z to A", () => {
    InventoryPage.sortBy(SORT_OPTIONS.NAME_Z_A);

    cy.get(".inventory_item_name").then(($names) => {
      const values = [...$names].map((el) => el.innerText.trim());
      const sorted = [...values].sort().reverse();
      expect(values).to.deep.equal(sorted);
    });
  });

  it("should sort products by name A to Z", () => {
    InventoryPage.sortBy(SORT_OPTIONS.NAME_A_Z);

    cy.get(".inventory_item_name").then(($names) => {
      const values = [...$names].map((el) => el.innerText.trim());
      const sorted = [...values].sort();
      expect(values).to.deep.equal(sorted);
    });
  });

  it("should navigate to product detail on item click", () => {
    cy.get(".inventory_item_name").first().click();
    cy.url().should("include", "inventory-item.html");
    cy.get(".inventory_details_name").should("be.visible");
    cy.get(".inventory_details_price").should("be.visible");
  });
});