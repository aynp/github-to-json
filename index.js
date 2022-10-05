#! /usr/bin/env node

import meow from 'meow';
import parseGH from './parse.js';

const cli = meow(``, {
  importMeta: import.meta,
  flags: {},
});

parseGH(cli.input, cli.flags);
