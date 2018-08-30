const path = require("path");
const fs = require("fs");
const eslint = require("eslint");

function getFixture(name) {
  const file = path.join(__dirname, "fixtures", name);
  return fs.readFileSync(file, "utf-8");
}

function runLinter(str, config) {
  const configFile = path.join(__dirname, "..", config + ".js");
  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile,
  });

  return linter.executeOnText(str);
}

module.exports = {
  getFixture,
  runLinter,
};
