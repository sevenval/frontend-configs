const t = require('chai').assert;
const helpers = require('./helpers');

const runLinter = helpers.runLinter;
const getFixture = helpers.getFixture;

describe('ES 5', () => {
  it('should mark valid code', () => {
    const code = getFixture('es5/valid.js');
    const result = runLinter(code, 'es5');

    t.equal(result.errorCount, 0);
  });

  it('should mark invalid code', () => {
    const code = getFixture('es5/invalid.js');
    const result = runLinter(code, 'es5');

    t.equal(result.errorCount, 10);
  });
});
