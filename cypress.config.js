module.exports = {
  defaultCommandTimeout: 8000, // Increase default timeout
};
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});