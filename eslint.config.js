// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: [
      "dist/*",
      "archive_pre_k2/*",
      "KAARIGAAR-2.0-main/*",
      "The KariGAAR Platform/*",
      "The-KariGAAR-Platform/*",
      "server/*",
    ],
    rules: {
      "react-hooks/set-state-in-effect": "warn",
    },
  }
]);
