
import { generator, renderTemplate, toFile } from '@feathershq/pinion'
import { Context } from '../pinion'

const template = (ctx: Context) => {

return /* js */`
'use strict';
const path = require("path");

module.exports = {
  extension: ["ts"],
  package: path.join(__dirname, "./package.json"),
  ui: "bdd",
  spec: [
    "./test/**/*.test.ts",
  ],
  exit: true,
  require: ["ts-node/register"]
};
`

}

export const generate = (context: Context) => generator(context)
  .then(renderTemplate(template, toFile(context.rootFolder, '.mocharc.js')))