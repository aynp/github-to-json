# GitHub to JSON

Generate JSON file of a repository structure using GitHub API.

## Installation

- ### Using npm

```bash
npm install --global github-to-json
```

- ### Using yarn

```bash
yarn global add github-to-json
```

- ### Using pnpm

```bash
pnpm install --global github-to-json
```

## Usage

```
$ github-to-json <owner> <repo>

Options:
-d, --depth <depth> Depth upto which JSON is to be genrated

-t, --token <token> GitHub PAT

-o, --output <file> Output file name, by default the output is printed directly to the cli
```

## Data Structure

The structure of genrated JSON is similar to the response of api.github.com/repos/aynp/resume/contents with exception of a `contents` property which recursively contains the contents of the directory.

- Directory

```json
{
  "name": "name",
  "path": "path",
  "sha": "sha",
  "size": 0,
  "url": "dir_url",
  "html_url": "html_url",
  "git_url": "git_url",
  "download_url": null,
  "type": "dir",
  "_links": {
    "self": "self_url",
    "git": "git_url",
    "html": "html_url"
  }
  "contents": [
    {}
  ]
}
```

- File

```json
{
  "name": "name",
  "path": "path",
  "sha": "sha",
  "size": 1234,
  "url": "file_url",
  "html_url": "html_url",
  "git_url": "git_url",
  "download_url": "download_url",
  "type": "file",
  "_links": {
    "self": "self_url",
    "git": "git_url",
    "html": "html_url"
  }
}
```
