#!/usr/bin/env node

import { execSync } from "child_process";
import path from "path";
import fs from "fs";

if (process.argv.length < 3) {
  console.log("You have to provide a name to your app.");
  console.log("For example :");
  console.log("    npx create-vite-netlify my-app");
  process.exit(1);
}

const projectName = process.argv[2] || path.basename(process.cwd());
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const git_repo = "https://github.com/azhariemuhammad/create-vite-netlify";
console.log({ projectName, projectPath });
if (projectName !== ".") {
  try {
    fs.mkdirSync(projectPath);
  } catch (err) {
    if (err.code === "EXIST") {
      console.log(
        `The file ${projectName} already exist in the current directory, please give it another name.`
      );
    } else {
      console.log(err);
    }
    process.exit(1);
  }
}

async function main() {
  try {
    console.log("Downloading files...");
    if (projectName !== ".") {
      execSync(`git clone --depth 1 ${git_repo} ${projectPath}`);
    } else {
      execSync(`git clone --depth 1 ${git_repo} .`);
    }

    process.chdir(projectPath);

    console.log("Installing dependencies...");
    execSync("pnpm install");

    console.log("Removing useless files");
    execSync("npx rimraf ./.git");
    fs.rmdirSync(path.join(projectPath, "bin"), { recursive: true });

    console.log("The installation is done, this is ready to use !");
  } catch (error) {
    console.log(error);
  }
}
main();
