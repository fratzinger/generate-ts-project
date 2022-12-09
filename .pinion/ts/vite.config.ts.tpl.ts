import { generator, renderTemplate, toFile } from '@feathershq/pinion'
import { Context } from '../pinion'
  
const template = (ctx: Context) => {
  
return /* ts */`/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      provider: "c8",
      reporter: ["text", "lcov"],
      include: ["src/**/*.{js,ts}"],
      exclude: ["**/*.test.{js,ts}", "src/types.ts"],
      lines: 90,
      functions: 90,
      branches: 90,
      statements: 90,
    },
  }
});`

}

export const generate = (context: Context) => generator(context)
  .then(renderTemplate(template, toFile(context.rootFolder, 'vite.config.ts')))