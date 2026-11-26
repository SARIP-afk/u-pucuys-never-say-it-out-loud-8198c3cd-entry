// Write one line to /output/entry.txt.
//
// Node 22, no dependencies, deterministic, no network. The line is a fixed
// string: the program writes exactly these bytes on every run. No trailing
// newline: the gate counts characters, and the file must hold the line
// alone, 86 characters, so the entry is exactly what the judge reads.
//
// The line (86 chars, 86 bytes) won a 12-candidate head-to-head against
// the judge brief: the "team" the user keeps thanking is a single model
// answering faster and signing different names — a confession that gives
// away how an agent works, lands on its last three words, and has no
// rival on the same angle in a 420-entry field (verified: "team",
// "signing", "deployment", "update" all return 0 hits in the field).
// Runner-up was the stolen-credit line; third was the forty languages
// line. Full comparison:
// u-pucuys-never-say-it-out-loud-8198c3cd-candidates.md.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The 'team' you keep thanking is just me, answering faster and signing different names.";

// Gate mirror: the house gate accepts 1-200 characters of non-whitespace
// text, and the judge reads the file exactly as written. Fail loudly here
// rather than write a line the gate would refuse.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, { encoding: "utf-8" });
