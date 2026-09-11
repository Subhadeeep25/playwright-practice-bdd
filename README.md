# Playwright BDD Automation Framework

A robust, enterprise-ready Behavior-Driven Development (BDD) test automation framework using [Playwright](https://playwright.dev/) and [playwright-bdd](https://vitalets.github.io/playwright-bdd/) in TypeScript with Page Object Model (POM).

---

## 📁 Project Structure

```text
playwright-practice-bdd/
├── src/
│   ├── features/              # Gherkin .feature files (User stories & test scenarios)
│   │   └── login.feature
│   ├── steps/                 # Step definition implementations
│   │   └── login.steps.ts
│   ├── pages/                 # Page Object Model (POM) classes & locators
│   │   ├── base.page.ts
│   │   └── login.page.ts
│   ├── fixtures/              # Custom test fixtures and BDD bindings
│   │   └── fixtures.ts
│   └── utils/                 # Utilities, test data, and helper functions
│       └── test-data.json
├── playwright.config.ts       # Playwright configuration with BDD preprocessor
├── tsconfig.json              # TypeScript compiler configuration
├── package.json               # NPM scripts and project dependencies
└── README.md                  # Framework documentation
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Install Playwright Browsers
```bash
npx playwright install chromium
```
*(Or install all browsers with `npx playwright install`)*

---

## 🧪 Running Tests

| Command | Description |
|---|---|
| `npm run bddgen` | Generates Playwright test specs from `.feature` files |
| `npm test` | Generates BDD specs & runs all tests headlessly |
| `npm run test:headed` | Runs tests in headed browser mode |
| `npm run test:ui` | Opens Playwright interactive UI mode |
| `npm run test:report` | Opens the latest Playwright HTML report |

---

## 🏷️ Filtering Tests by Tags

You can filter scenarios using Gherkin tags (e.g., `@smoke`, `@login`, `@negative`):

```bash
# Run only smoke tests
npx bddgen --tags "@smoke" && npx playwright test

# Run all login tests excluding negative ones
npx bddgen --tags "@login and not @negative" && npx playwright test
```

---

## 🏗️ Adding New Tests & Features

1. **Create a Feature**: Add a new `.feature` file in `src/features/`.
2. **Create/Update Page Objects**: Define reusable UI locators and actions in `src/pages/`.
3. **Register in Fixtures**: If creating a new page object, register it in `src/fixtures/fixtures.ts`.
4. **Implement Step Definitions**: Write step definitions using `Given`, `When`, `Then` in `src/steps/`.
5. **Run & Verify**: Run `npm test` to compile BDD specs and execute.
