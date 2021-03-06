#!/usr/bin/env node

var path = require("path");
var fs = require("fs");
var acorn = require("../acorn.js");

var infile, parsed, options = {}, silent = false, compact = false;

function help(status) {
  console.log("usage: " + path.basename(process.argv[1]) + " infile [--ecma3|--ecma5] [--strictSemicolons]");
  console.log("        [--locations] [--compact] [--silent] [--help]");
  process.exit(status);
}

for (var i = 2; i < process.argv.length; ++i) {
  var arg = process.argv[i];
  if (arg == "--ecma3") options.ecmaVersion = 3;
  else if (arg == "--ecma5") options.ecmaVersion = 5;
  else if (arg == "--strictSemicolons") options.strictSemicolons = true;
  else if (arg == "--locations") options.locations = true;
  else if (arg == "--silent") silent = true;
  else if (arg == "--compact") compact = true;
  else if (arg == "--help") help(0);
  else if (arg[0] == "-") help(1);
  else infile = arg;
}

if (!infile) help(1);

try {
  var code = fs.readFileSync(infile, "utf8");
  parsed = acorn.parse(code, options);
} catch (e) {
  console.log(e.message);
  process.exit(1);
}

if (!silent)
  console.log(JSON.stringify(parsed, null, compact ? null : 2));