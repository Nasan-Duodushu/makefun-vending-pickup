// One Line, One Minute: the Vending Machine Pickup Line — at most 200 characters.
// The machine flirts in its own world: coils, exact change, the 3 p.m.
// regular — charming, observant, and a little bit stuck.
import { writeFileSync, mkdirSync } from "node:fs";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line =
  "You press B4 every day at 3 p.m. I notice. I'm not saying it's fate, but I have held your exact change and your favourite bar since Tuesday.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, line, "utf8");
