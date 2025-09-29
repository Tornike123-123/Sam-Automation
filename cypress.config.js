const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'c7n66f',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/fixtures/**/*.js',
    defaultCommandTimeout: 40000,
    pageLoadTimeout: 60000,
    // experimantalStudio: true,
    experimentalStudio:true,
    includeShadowDom: true,
     experimentalSessionAndOrigin: true,
     experimentalShadowDomSupport: true,
  },
});