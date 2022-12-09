import { generator, renderTemplate, toFile } from '@feathershq/pinion'
import { Context } from '../pinion'
  
const template = (ctx: Context) => {
  
return /* ts */`import { defineBuildConfig } from "unbuild";
import pkg from "./package.json";

export default defineBuildConfig({
  entries: ["./lib/index"],
  outDir: "./dist",
  declaration: true,
  externals: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.devDependencies),
  ],
  rollup: {
    emitCJS: true,
  },
});`
}

export const generate = (context: Context) => generator(context)
  .then(renderTemplate(template, toFile(context.rootFolder, 'build.config.ts')))