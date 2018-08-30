const t = require('assert');
const helpers = require('./helpers');

const runLinter = helpers.runLinter;
const getFixture = helpers.getFixture;

describe('ES 2017', () => {
  it('should mark valid code', () => {
    const code = getFixture('es2017/valid.js');
    const result = runLinter(code, 'index');

    t.equal(result.errorCount, 0);
    t.equal(result.warningCount, 0);
  });

  it('should mark invalid code', () => {
    const code = getFixture('es2017/invalid.js');
    const result = runLinter(code, 'index');

    t.equal(result.errorCount, 2);
    t.equal(result.warningCount, 4);
  });
});
