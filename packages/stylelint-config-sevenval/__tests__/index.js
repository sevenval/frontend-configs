const config = require('../index');
const t = require('assert');
const fs = require('fs');
const path = require('path');
const stylelint = require('stylelint');

function getFixture(name) {
  const file = path.join(__dirname, './fixtures/', name);
  return fs.readFileSync(file, 'utf-8');
}

describe('config', () => {
  it('should succeed on valid scss style', () => {
    const code = getFixture('valid.scss');

    return stylelint
      .lint({
        code,
        config,
        syntax: 'scss',
      })
      .then(data => {
        const { errored, results } = data;
        const { warnings } = results[0];

        t.equal(errored, false);
        t.equal(warnings.length, 0, 'flags no warnings');
      });
  });

  it('should fail on invalid scss style', () => {
    const code = getFixture('invalid.scss');

    return stylelint
      .lint({
        code,
        config,
      })
      .then(data => {
        const { errored, results } = data;
        const { warnings } = results[0];

        t.equal(errored, true);
        t.equal(warnings.length, 8, 'flags no warnings');
      });
  });
});
