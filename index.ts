import * as commander from "commander";
import * as fs from "fs-extra";
import chalk from "chalk";

commander
  .option("-n, --new [projectName]", "Project name e.g. [my-app]", "my-app")
  .option("-w, --web", "Create parcel based project")
  .parse(process.argv);

const { new: name, web } = commander;

const templateDirectory = __dirname;

const currentDirectory = `${process.cwd()}/${name}`;

console.log(chalk.blue(`Building project ${name}`));

fs.copySync(
  `${templateDirectory}/templates/${web ? "web" : "node"}`,
  currentDirectory
);

console.log(chalk.green("Files copied successfully"));

const packageJSONPath = `${currentDirectory}/package.json`;

const packageJSON = fs.readFileSync(packageJSONPath, {
  encoding: "UTF-8"
});

fs.writeFileSync(packageJSONPath, packageJSON.replace("app-name", name));

console.log(chalk.green("Project successfully created"));
