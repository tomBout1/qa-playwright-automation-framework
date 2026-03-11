# qa-playwright-automation-framework

Created repo to demostrate an enterprise test automation framfwork using Playwright. 

This project was created to show QA automation practice that include:
UI and API test coverage
  • maintainable page object architecture
  • reusable fixtures
  • data-driven testing
  • CI-ready structure

Tech Stack
  - Playwright
  - TypeScript
  - Node.js

Folder Structure: 
qa-playwright-automation-framework 
│ 
├── tests/ # Playwright test specifications 
├── pages/ # Page Object Model classes 
├── fixtures/ # Custom Playwright fixtures 
├── test-data/ # Test data used for data-driven testing 
├── utils/ # Helper utilities and shared logic 
├── scripts/ # Supporting scripts for test execution 
│ 
├── playwright.config.ts # Playwright configuration 
├── playwright-report/ # HTML test reports 
├── test-results/ # Test execution artifacts 
│ 
└── README.md

The page object model (POM) is being used to abstract UI interactions into reusable page classes. 
Tests → Page Objects → Playwright → Application


## Running the Tests
- Install dependencies:
- npm install
- Run all tests:
- npx playwright test
- Run tests in headed mode:
- npx playwright test --headed

## Future Improvements
• GitHub Actions CI pipeline
• Test reporting and artifacts
• Expanded API testing coverage
• Security and dependency scanning
• Parallel test execution optimization
