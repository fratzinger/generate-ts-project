import { generator, renderTemplate, toFile } from '@feathershq/pinion'
import { Context } from '../pinion'

const template = (ctx: Context) => {

return /* md */`# ${ctx.npmPackageName}
`
}

export const generate = (context: Context) => generator(context)
  .then(renderTemplate(template, toFile(context.rootFolder, 'README.md')))