const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/step_definitions/*.feature", // Agora fica dentro de e2e
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
  }
});
