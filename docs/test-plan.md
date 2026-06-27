# Test Plan

**Last Updated:** 2026-06-27  
**Version:** 1.2.0

## Environments

| Environment | URL                          |
|-------------|------------------------------|
| UI (SUT)    | https://www.saucedemo.com    |
| API (SUT)   | https://fakestoreapi.com     |

## Scope

### In Scope
- UI smoke and regression for SauceDemo core flows
- API smoke and regression for Fake Store API (products, categories, carts, users)
- Sorting validation (all 4 sort options)
- Response time SLA assertions (≤ 2000ms)
- Product schema and value-level validation

### Out of Scope
- Performance / load testing
- Cross-browser testing (Chrome is primary)
- Mobile viewport testing (planned future iteration)

## Entry Criteria
- `npm install` completed successfully
- `cypress.config.js` and `.env` configured
- Fixture files present under `cypress/fixtures/`

## Exit Criteria
- All smoke tests passing (0 failures)
- Regression run with no blocker or critical severity failures
- Mochawesome HTML report generated and reviewed

## Test Coverage Summary

| Suite              | Tests | Status  |
|--------------------|-------|---------|
| UI Smoke           | 3     | Passing |
| UI Regression      | 16+   | Passing |
| API Smoke          | 3     | Passing |
| API Regression     | 12+   | Passing |

## Risks & Mitigations

| Risk                              | Mitigation                                  |
|-----------------------------------|---------------------------------------------|
| Demo app data instability         | Retry logic (`runMode: 2`) in cypress.config |
| Third-party API latency spikes    | Response time assertions with 2s threshold  |
| Environment unavailability        | Smoke suite fast-fails for early signal     |