#! /usr/bin/env node

import meow from 'meow';
import parseGH from './parse.js';

const helpText = `
Usage:
$ github-to-json <owner> <repo>

Options:
-d, --depth  <depth> Depth upto which JSON is to be genrated

-t, --token  <token> GitHub PAT

-o, --output <file>  Output file name, by default the output is printed directly to the cli
`;

const cli = meow(helpText, {
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
