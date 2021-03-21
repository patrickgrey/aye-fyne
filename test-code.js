const fs = require("fs");
const path = require("path");
const rollup = require("rollup");
const rollupBabel = require("@rollup/plugin-babel");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const glob = require("fast-glob");
const FastGlob = require("fast-glob");

const source = "course";
const publish = "_upload-files";

const entries = glob.sync([`${source}/**/*.js`], {
  dot: false,
  objectMode: true,
});

const outries = entries.map((entry) => {
  const withPubishDirectory = entry.path.replace(source, publish);
  const pathOnly = withPubishDirectory.substring(
    0,
    withPubishDirectory.length - entry.name.length
  );
  return pathOnly;
});

console.log(outries);
