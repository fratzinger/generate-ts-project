import { generator, renderTemplate, toFile } from '@feathershq/pinion'
import { Context } from '../pinion'
  
const template = (ctx: Context) => {
  
return /* ts */`
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
    "declaration": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
`
  
}
  
export const generate = (context: Context) => generator(context)
.then(renderTemplate(template, toFile('tsconfig.test.ts')))