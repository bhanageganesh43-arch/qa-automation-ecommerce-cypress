# Execution Guide

## Install
1. npm install

## Open Cypress UI
- npm run cy:open

## Run all tests
- npm run test:all

## Run smoke suites
- npm run test:smoke:ui
- npm run test:smoke:api

## Generate report
1. npm run report:merge
2. npm run report:generate


# Test Coverage

## UI Smoke Coverage
Valid login
Add product to cart
Complete checkout flow

## UI Regression Coverage
Invalid and locked user login validations
Product sorting (price/name)
Cart remove and cart behavior checks
Logout flow validation
Additional business flow reliability checks

## API Smoke Coverage
Products list status and structure validation
Single product validation
Carts endpoint health and response-time check

## API Regression Coverage
Product schema and business field validations
Invalid product behavior validation (as per actual API contract)
Categories endpoint and category-product consistency
Users endpoint field-level validation


# Getting Started

1) Clone repository
bash
git clone https://github.com/bhanageganesh43-arch/qa-automation-ecommerce-cypress.git
cd qa-automation-ecommerce-cypress

2) Install dependencies
bash
npm install

3) Open Cypress Test Runner
bash
npm run cy:open

4) Run tests in headless mode
bash
npm run test:all

# Available NPM Scripts
bash
npm run cy:open
npm run cy:run
npm run test:smoke:ui
npm run test:regression:ui
npm run test:smoke:api
npm run test:regression:api
npm run test:all
npm run report:merge
npm run report:generate

# Reporting
This project uses Mochawesome JSON reports and merged HTML generation.

# Generate report
bash
npm run report:merge
npm run report:generate
Generated report output:
cypress/reports/mochawesome/automation-report.html


# QA Documentation
Detailed QA documentation is included under docs/:
test-strategy.md
test-plan.md
execution-guide.md