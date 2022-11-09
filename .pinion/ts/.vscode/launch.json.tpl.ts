import { generator, renderTemplate, toFile } from '@feathershq/pinion'
import { Context } from '../../pinion'

const template = (ctx: Context) => {

return /* json */`
{
    "version": "0.2.0",
    "configurations": [
      {},
    ]
  }
`

}

export const generate = (context: Context) => generator(context)
  .then(renderTemplate(template, toFile(context.rootFolder, '.vscode/launch.json')))
  