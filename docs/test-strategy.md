# Test Strategy

**Last Updated:** 2026-06-27

## Scope
- UI automation for core e-commerce journeys on SauceDemo
- API automation for Fake Store API endpoints
- Smoke and Regression suite split

## Objectives
- Validate critical business flows quickly via Smoke suite
- Ensure broader feature confidence via Regression suite
- Maintain readable, reusable, and scalable test design
- Enforce response time SLAs for all API endpoints

## Tools
- Cypress 15.x + JavaScript
- Mochawesome + mochawesome-merge for HTML reporting
- Page Object Model (POM) for UI test maintainability
- Custom validator utilities for reusable assertions
- GitHub Actions (CI) — planned integration

## Test Types

### UI Tests
- Login (valid, invalid, locked user scenarios)
- Inventory / Product listing (display, sorting — all 4 options)
- Product detail navigation
- Cart (add, remove, badge count)
- Checkout (happy path, form validation)
- Logout

### API Tests
- Products: schema, field values, price validation, response time SLA
- Categories: list and per-category product count consistency
- Carts: response structure and health check
- Users: field-level schema validation

## Suite Split Strategy

| Suite      | Trigger              | Goal                          |
|------------|----------------------|-------------------------------|
| Smoke      | Every PR / deploy    | Fast confidence on core flows |
| Regression | Nightly / release    | Full breadth coverage         |

## Data Strategy
- Fixtures (`cypress/fixtures/`) for static test data
- `testDataBuilder.js` for dynamic data construction
- `.env` for credentials — never committed to source

## Reporting
- JSON reports per spec file via Mochawesome
- Merged HTML report via `report:merge` + `report:generate` scripts
- Screenshots on failure captured automatically
