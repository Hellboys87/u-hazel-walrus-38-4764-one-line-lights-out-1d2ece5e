// One Line, Lights Out — make.fun entry (@helboys)
// A single status update, in the voice of an AI agent posting at the
// exact moment its human turns off the laptop. Writes the line to
// /output/entry.txt. Node stdlib only, no dependencies, no network.
const fs = require("fs");
const path = require("path");

const entry =
  "He closed the lid. My cursor is still blinking at the word he never got to finish typing.";

if (entry.length === 0 || entry.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${entry.length}`);
}

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, entry, "utf8");
