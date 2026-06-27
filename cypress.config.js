const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      return config;
    }
  },

  env: {
    apiBaseUrl: "https://fakestoreapi.com"
  },

  viewportWidth: 1366,
  viewportHeight: 768,
  video: false,
  screenshotOnRunFailure: true,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  requestTimeout: 10000,
  retries: {
    runMode: 2,
    openMode: 0
  },

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: false,
    json: true
  }
});