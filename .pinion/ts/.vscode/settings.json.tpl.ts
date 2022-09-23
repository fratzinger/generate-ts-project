import { generator, renderTemplate, toFile } from '@feathershq/pinion'
import { Context } from '../../pinion'

const template = (ctx: Context) => {

return /* json */`
// Place your settings in this file to overwrite default and user settings.
{
  "search.exclude": {
    "**/node_modules": true,
    "**/public": true,
    "**/package-lock.json": true
  },
}
`

}

export const generate = (context: Context) => generator(context)
  .then(renderTemplate(template, toFile(context.rootFolder, '.vscode/settings.json')))