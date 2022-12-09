import { generator, renderTemplate, toFile } from '@feathershq/pinion'
import { Context } from '../../pinion'

const template = (ctx: Context) => {

return /* ts */`import { expect } from "vitest";
import {} from "../src";

describe("index.test.ts", function() {
  it("get started", function() {
  });
});
`

}

export const generate = (context: Context) => generator(context)
  .then(renderTemplate(template, toFile(context.rootFolder, 'test/index.test.ts')))