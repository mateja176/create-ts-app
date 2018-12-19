import { ChildProcess } from "child_process";
import chalk from "chalk";

const logCommand = (command: ChildProcess) => (processName: string) => {
  console.log(chalk.blue(`${processName} start`));

  command.on("close", code =>
    code
      ? console.log(chalk.red(`${processName} fail`))
      : console.log(chalk.green(`${processName} success`))
  );

  return command;
};

export default logCommand;
