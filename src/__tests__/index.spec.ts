import { assert as t } from "chai";
import * as path from "path";
import { run } from "./helpers";

const fixture = (file: string) =>
  path.join(__dirname, "fixtures", file);

describe("Default Preset", () => {
  const config = path.join(__dirname, "..", "index.json");
  it("should fail", () => {
    const res = run(fixture("invalid.ts"), config);
    t.equal(res.errorCount, 3);
    t.equal(res.warningCount, 0);
  });

  it("should succeed", () => {
    const res = run(fixture("valid.ts"), config);
    t.deepEqual(res, {
      errorCount: 0,
      failures: [],
      fixes: [],
      format: "json",
      output: "[]",
      warningCount: 0,
    });
  });
});
