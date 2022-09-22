import { generator, renderTemplate, toFile } from '@feathershq/pinion'
import { Context } from '../../pinion'

const template = (ctx: Context) => {

return /* ts */`
export * from "./types"
`

}

export const generate = (context: Context) => generator(context)
  .then(renderTemplate(template, toFile('src/index.ts')))