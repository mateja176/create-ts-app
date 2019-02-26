#!/usr/bin/env ts-node

import chalk from "chalk"
import { spawnSync } from "child_process"
import * as commander from "commander"
import * as fs from "fs-extra"
import { find, head, pipe, toPairs } from "ramda"

commander
  .option("-n, --new [projectName]", "Project name e.g. [my-app]", "my-app")
  .option("-w, --web", "Create parcel based project")
  .option("-g, --graphql", "Create graphql-yoga based project")
  .option("-r, --redux", "Create redux project")
  .option("-i, --install", "Install node modules")
  .parse(process.argv)

const { new: name, web, graphql, install } = commander

const options = { web, graphql, node: true }

const currentDirectory = `${process.cwd()}/${name}`

console.log(chalk.blue(`🛠 Building project '${name}'`))

const selectProject = pipe(
  toPairs,
  find(([_, value]) => value),
  head,
)

fs.copySync(
  `${__dirname}/../templates/${selectProject(options)}`,
  currentDirectory,
)

console.log(chalk.green("🖋 Files copied successfully"))

const packageJSONPath = `${currentDirectory}/package.json`

const packageJSON = fs.readFileSync(packageJSONPath, {
  encoding: "UTF-8",
})

fs.writeFileSync(packageJSONPath, packageJSON.replace("app-name", name))

spawnSync("git", ["init"], { cwd: currentDirectory })

console.log(chalk.green("📚 Initialized git repository"))

if (install) {
  console.log(chalk.blue("🏗 Installing node modules"))

  spawnSync("npm", ["install"], { cwd: currentDirectory })
}

spawnSync("git", ["add", "."], { cwd: currentDirectory })

spawnSync("git", ["commit", "-m", "Initial Commit"], { cwd: currentDirectory })

console.log(chalk.green("🚀 Project created successfully"))

console.log(chalk.bgBlue.black(`cd ${name} && npm start`))
