import { generator, renderTemplate, toFile } from '@feathershq/pinion'
import { Context } from '../pinion'

const template = (ctx: Context) => {

return /* json */`
{
  "extends": "@istanbuljs/nyc-config-typescript",
  "cache": false,
  "check-coverage": true,
  "include": [
    "lib/**/*.js",
    "lib/**/*.ts"
  ],
  "exclude": [
    "lib/types.ts"
  ],
  "reporter": [
    "html",
    "text",
    "text-summary",
    "lcov"
  ],
  "sourceMap": true,
  "all": true,
  "instrument": true,
  "watermarks": {
    "statements": [70, 85],
    "lines": [70, 85],
    "functions": [70, 85],
    "branches": [70, 85]
  }
}
`

}

export const generate = (context: Context) => generator(context)
  .then(renderTemplate(template, toFile('.nycrc.json')))