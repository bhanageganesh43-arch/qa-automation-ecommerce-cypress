# QA Automation E-Commerce Portfolio (Cypress + API)

A practical QA automation portfolio project designed to demonstrate real-world test automation skills for remote international roles such as **Senior QA Engineer, QA Automation Engineer, Test Automation Engineer, Quality Assurance Engineer, and SDET**.

This project covers:
- **UI test automation** on [Sauce Demo](https://www.saucedemo.com/)
- **API test automation** on [Fake Store API](https://fakestoreapi.com/)
- **Smoke and Regression test strategy**
- **Maintainable Cypress framework design** using Page Objects, reusable commands, fixtures, and utilities

---

## Project Objectives

- Showcase maintainable and scalable Cypress automation design
- Validate critical business flows (smoke) and broader feature quality (regression)
- Demonstrate practical QA thinking: positive, negative, and reliability-focused checks
- Keep implementation realistic, clean, and recruiter-friendly (not overengineered)

---

## Tech Stack

- **Language:** JavaScript
- **Automation Tool:** Cypress
- **Test Types:** UI + API
- **Reporting:** Mochawesome
- **CI Ready:** GitHub Actions workflow structure included

---

## Application Under Test

### UI
- [Sauce Demo](https://www.saucedemo.com/)

### API
- [Fake Store API](https://fakestoreapi.com/)

> Note: UI and API suites are intentionally decoupled because they validate different demo platforms. This keeps tests stable, realistic, and meaningful for framework demonstration.

---

## Framework Design

- **Page Object Model (POM)** for UI maintainability
- **Reusable custom commands** for common UI/API actions
- **Fixtures** for test data and expected messages
- **Utilities** for constants, validators, and data builder patterns
- **Smoke vs Regression split** for fast confidence + deeper coverage

---

## Folder Structure

```bash
qa-automation-ecommerce-cypress/
├── .github/
│   └── workflows/
│       └── cypress.yml
├── cypress/
│   ├── e2e/
│   │   ├── ui/
│   │   │   ├── smoke/
│   │   │   └── regression/
│   │   ├── api/
│   │   │   ├── smoke/
│   │   │   └── regression/
│   │   └── integration/
│   ├── fixtures/
│   ├── pages/
│   ├── support/
│   │   ├── commands/
│   │   └── utils/
│   ├── reports/
│   └── downloads/
├── docs/
├── cypress.config.js
├── package.json
└── README.md



# Professional Highlights (Portfolio Value)
Built a practical Cypress automation framework with clear suite strategy
Automated critical e-commerce user journeys and API validations
Applied maintainable design practices (POM + reusable commands + test data separation)
Demonstrated end-to-end QA ownership mindset: planning, validation, and execution
Structured project for fast onboarding, easy review, and CI extensibility

# About the Candidate
This portfolio project reflects hands-on QA capabilities aligned with remote product teams:
7+ years in QA
Web and mobile testing experience
Strong API validation and test strategy ownership
Cypress automation experience
Strong manual testing, release support, UAT coordination, and stakeholder collaboration

# Contact
If you are hiring for remote QA automation roles, feel free to connect via LinkedIn and GitHub.
Ganesh Bhanage
+91 9595952882
bhanageganesh.43@gmail.com
https://www.linkedin.com/in/ganesh-bhanage