export const buildCheckoutUser = (overrides = {}) => ({
  firstName: "Ganesh",
  lastName: "QA",
  postalCode: "411001",
  ...overrides
});

export const buildGuestUser = (overrides = {}) => ({
  firstName: "Test",
  lastName: "User",
  postalCode: "100001",
  ...overrides
});

export const buildApiProduct = (overrides = {}) => ({
  title: "Test Product",
  price: 29.99,
  description: "A sample product for API testing",
  image: "https://fakestoreapi.com/img/test.jpg",
  category: "electronics",
  ...overrides
});

export const buildApiCart = (userId = 1, productId = 1, quantity = 1) => ({
  userId,
  date: new Date().toISOString().split("T")[0],
  products: [{ productId, quantity }]
});