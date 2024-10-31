const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    baseUrl: "https://www.saucedemo.com",
  },
});
