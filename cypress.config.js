const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  video: false,
  videoUploadOnPasses: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: "https://petstore.swagger.io/",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      allureWriter(on, config);
      return config;
    },
    env: {
      allureReuseAfterSpec: true
    },
  },
});
