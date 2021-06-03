/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  testEnvironment: "node",
  testRegex: "(src/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
  transform: {
    "\\.js$": ["babel-jest", { configFile: "./babel-jest.config.js" }],
  },
}
