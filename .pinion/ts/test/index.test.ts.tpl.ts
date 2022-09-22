import { generator, renderTemplate, toFile } from '@feathershq/pinion'
import { Context } from '../../pinion'

const template = (ctx: Context) => {

return /* ts */`
import assert from "assert";
import {} from "../src";

describe("index.test.ts", function() {
  it("get started", function() {
  });
});
`

}

export const generate = (context: Context) => generator(context)
  .then(renderTemplate(template, toFile('test/index.test.ts')))