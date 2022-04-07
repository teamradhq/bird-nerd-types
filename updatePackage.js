#!/usr/bin/env node
const fs = require('fs');

const version = String(process.argv[2]);
const versionMatch = version.match(/^\d+\.\d+\.\d+$/);

if (!versionMatch) {
  throw new ReferenceError(`Please supply a valid semantic version. eg: 5.43.2`)
}

const packageJson = require('./package.json');
packageJson.version = version;

fs.writeFile('./package.wikiJson', JSON.stringify(packageJson, null, 2), () => {});
