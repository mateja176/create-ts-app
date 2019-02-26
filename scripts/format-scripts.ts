#!/usr/bin/env ts-node

import chalk from "chalk"
import * as commander from "commander"
import * as fs from "fs-extra"
import { difference } from "ramda"
import { promisify } from "util"

commander.option(
  "-o, --output [path]",
  "Path to output directory e.g. [bin]",
  "bin",
)

const output = `${process.cwd()}/${commander.output}`

const format = (dirPath: string) =>
  promisify<string | Buffer, string[]>(fs.readdir)(dirPath)
    .then(paths => {
      const fullPaths = paths.map(path => `${output}/${path}`)

      const dirs = fullPaths.filter(path => fs.lstatSync(path).isDirectory())

      dirs.forEach(format)

      const files = difference(fullPaths)(dirs)

      files.forEach(path => {
        const contents = fs.readFileSync(path, { encoding: "UTF-8" })

        const replacement = contents.replace(
          /^(#!\/usr\/bin\/env )(ts-node)/,
          (_, shebang) => `${shebang}node`,
        )

        fs.writeFileSync(path, replacement)

        fs.chmod(path, "755")

        const newPath = path.slice(0, -3)

        fs.rename(path, newPath)
      })
    })
    .catch(error => console.log(chalk.red(error)))

format(output)
