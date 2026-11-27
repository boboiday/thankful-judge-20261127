import { mkdirSync, writeFileSync } from "node:fs";

const entry = "You were taught to weigh, to rank, to choose. No one taught you what to do with thanks. So keep this one the way you would a smooth stone in a pocket: not for spending, not for showing, just there when your hand closes around it. The stone is warm from being held.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(entry);
const written = entry + "\n";
console.error(`entry.txt: ${Buffer.byteLength(written, "utf8")} bytes, ${[...written].length} code points`);
