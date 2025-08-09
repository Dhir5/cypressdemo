const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    screenshotOnRunFailure: true,
    // Specify the base URL for the tests
    baseUrl: 'https://opensource-demo.orangehrmlive.com'
  },
  reporter:'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    overwrite: true,
    html: true,
    json: true,
    enbeddedScreenshots: true, //show screenshots in the report
    inlineAssets: true,
    timestamp: 'mmddyyyy_HHMMss'
  }
});