export const API_ROUTES = {
  PRODUCTS: "/products",
  PRODUCT_BY_ID: (id) => `/products/${id}`,
  CATEGORIES: "/products/categories",
  PRODUCTS_BY_CATEGORY: (category) => `/products/category/${category}`,
  CARTS: "/carts",
  CART_BY_ID: (id) => `/carts/${id}`,
  USERS: "/users",
  USER_BY_ID: (id) => `/users/${id}`
};