const t = require("chai").assert;
const helpers = require("./helpers");

const runLinter = helpers.runLinter;
const getFixture = helpers.getFixture;

describe("React", () => {
  it("should mark valid code", () => {
    const code = getFixture("react/valid.js");
    const result = runLinter(code, "index");

    t.equal(result.errorCount, 0);
    t.equal(result.warningCount, 0);
  });

  it("should mark invalid code", () => {
    const code = getFixture("react/invalid.js");
    const result = runLinter(code, "index");

    t.equal(result.errorCount, 0);
    t.equal(result.warningCount, 1);
  });
});
