import { Linter, Configuration } from 'tslint';
import * as fs from 'fs';

export function run(filename: string, config: string) {
  const fileContents = fs.readFileSync(filename, 'utf8');
  const linter = new Linter({
    fix: false,
    formatter: 'json',
  });

  const configuration = Configuration.findConfiguration(config, filename)
    .results;
  linter.lint(filename, fileContents, configuration);
  return linter.getResult();
}
