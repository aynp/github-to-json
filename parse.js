import { Octokit } from '@octokit/core';
import fs from 'fs';

async function rec(octokit, url) {
  const result = [];

  const data = (await octokit.request(`GET ${url}`, {})).data;

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    if (item.type === 'dir') {
      const temp = await rec(octokit, item.url);
      result.push({ name: item, contents: temp });
    } else {
      result.push(item);
    }
  }

  return result;
}

async function parseGH(input, { depth = Infinity, token, output }) {
  const [owner, repo, path = ''] = input;
  const url = `/repos/${owner}/${repo}/contents/${path}`;

  const octokit = new Octokit({
    auth: token,
  });

  const result = await rec(octokit, url);

  if (output) {
    fs.writeFile(output, JSON.stringify(result), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log(`File written to ${output}`);
    });
  } else {
    console.dir(result, { depth: null });
  }
}

export default parseGH;
