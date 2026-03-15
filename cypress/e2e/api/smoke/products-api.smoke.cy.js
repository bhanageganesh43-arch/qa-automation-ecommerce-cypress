import { validateProductShape } from "../../../support/utils/validators";

describe("API Smoke - Products", () => {
  it("should return products list with 200 and valid structure", () => {
    cy.getProducts().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array").and.not.be.empty;

      const firstProduct = response.body[0];
      validateProductShape(firstProduct);
    });
  });

  it("should return a single product by id with valid fields", () => {
    cy.fixture("apiTestData").then((data) => {
      cy.getProductById(data.validProductId).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(data.validProductId);
        validateProductShape(response.body);
      });
    });
  });
});