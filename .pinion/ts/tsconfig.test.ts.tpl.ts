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
    "target": "es2018",
    "sourceMap": true,
    "allowJs": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.test.js"]
}
`
  
}
  
export const generate = (context: Context) => generator(context)
.then(renderTemplate(template, toFile('tsconfig.ts')))