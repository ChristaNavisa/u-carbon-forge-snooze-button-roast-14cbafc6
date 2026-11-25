import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// The joke: the alarm is the one with a job — it shows up at 6 AM on a
// Saturday like an overeager employee, while its owner has nowhere to be.
const entry =
  "Saturday 6 AM, my alarm screamed like it was late for a job I don't even have.";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
