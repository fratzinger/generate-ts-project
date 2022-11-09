import { generator, renderTemplate, toFile } from '@feathershq/pinion'
import { Context } from '../pinion'
  
const template = (ctx: Context) => {
  
return /* json */`
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "outDir": "dist",
    "moduleResolution": "node",
    "target": "es2015",
    "module": "commonjs",
    "downlevelIteration": true,
    "sourceMap": false,
    "declaration": true,
    "types": ["vitest/globals"]
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
`
}
  
export const generate = (context: Context) => generator(context)
.then(renderTemplate(template, toFile(context.rootFolder, 'tsconfig.json')))