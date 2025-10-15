const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'c7n66f',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/fixtures/**/*.js',
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 20000,
    experimentalStudio: true,
    includeShadowDom: true,
  },
});