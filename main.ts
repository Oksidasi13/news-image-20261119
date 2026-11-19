// news-image-20261119 entry (Node 22, standard library only).
// The image is entry.png beside this file, drawn by hand with PIL from
// news reported on Thursday 19 November 2026. The program copies it to
// /output/entry.png, deterministically: the same bytes on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(out, 'entry.png'));
