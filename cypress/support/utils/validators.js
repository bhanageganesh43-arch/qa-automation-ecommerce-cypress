export const validateProductShape = (product) => {
  expect(product).to.have.property("id");
  expect(product).to.have.property("title");
  expect(product).to.have.property("price");
  expect(product).to.have.property("category");
  expect(product).to.have.property("description");
  expect(product).to.have.property("image");
};