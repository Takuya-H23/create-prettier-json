#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const prettier = require("./config/prettier.json");

fs.writeFileSync(
  path.join(process.cwd(), "/.prettier.json"),
  JSON.stringify(prettier)
);
