#! /usr/bin/env node

import meow from 'meow';
import parseGH from './parse.js';

const cli = meow(``, {
  importMeta: import.meta,
  flags: {
    depth: {
      type: 'number',
      alias: 'd',
      default: Infinity,
    },
    token: {
      type: 'string',
      alias: 't',
    },
    output: {
      type: 'string',
      alias: 'o',
    },
  },
});

parseGH(cli.input, cli.flags);
