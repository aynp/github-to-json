import { Octokit } from '@octokit/core';

async function rec(octokit, url) {
  const result = [];

  const data = (await octokit.request(`GET ${url}`, {})).data;

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    if (item.type === 'dir') {
      const temp = await rec(octokit, item.url);
      result.push({ name: item.name, children: temp });
    } else {
      result.push(item.name);
    }
  }

  return result;
}

async function parseGH(input, { depth = Infinity, token }) {
  const [owner, repo, path = ''] = input;
  const url = `/repos/${owner}/${repo}/contents/${path}`;

  const octokit = new Octokit({
    auth: token,
  });

  const result = await rec(octokit, url);
  console.dir(result, { depth: null });
}

export default parseGH;
