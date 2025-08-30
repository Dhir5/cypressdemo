const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    screenshotOnRunFailure: true,
    baseUrl: 'https://opensource-demo.orangehrmlive.com'
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    cypressMochawesomeReporterReporterOptions: {
      reportDir: 'cypress/reports/html',
      charts: true,
      overwrite: true,
      html: true,
      json: true,
      embeddedScreenshots: true,
      inlineAssets: true,
      timestamp: 'mmddyyyy_HHMMss'
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml',
      toConsole: false
    }
  }
});
