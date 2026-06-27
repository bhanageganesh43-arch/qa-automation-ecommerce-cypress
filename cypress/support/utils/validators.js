export const validateProductShape = (product) => {
  expect(product).to.have.property("id");
  expect(product).to.have.property("title");
  expect(product).to.have.property("price");
  expect(product).to.have.property("category");
  expect(product).to.have.property("description");
  expect(product).to.have.property("image");
};

export const validateProductValues = (product) => {
  expect(product.id).to.be.a("number").and.greaterThan(0);
  expect(product.title).to.be.a("string").and.have.length.greaterThan(0);
  expect(product.price).to.be.a("number").and.greaterThan(0);
  expect(product.category).to.be.a("string").and.have.length.greaterThan(0);
  expect(product.description).to.be.a("string");
  expect(product.image).to.be.a("string").and.include("http");
};

export const validateUserShape = (user) => {
  expect(user).to.have.property("id");
  expect(user).to.have.property("email");
  expect(user).to.have.property("username");
  expect(user).to.have.property("name");
  expect(user.name).to.have.property("firstname");
  expect(user.name).to.have.property("lastname");
};

export const validateResponseTime = (response, maxMs = 2000) => {
  expect(response.duration).to.be.lessThan(maxMs);
};