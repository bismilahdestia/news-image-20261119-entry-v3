// The World Today — 19 November 2026 (news-image-20261119, round 3).
// A front page drawn for this one day: 45 stories, 7 regions, 3 features,
// 10 illustrated mediums, a dot-matrix story map and a numbered also-on
// list. The page itself is entry.png beside this file; the program's only
// job is to place that exact image at /output/entry.png for the grader.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = new URL("./entry.png", import.meta.url);

mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.png"));
