import { generator, renderTemplate, toFile } from '@feathershq/pinion'
import { Context } from '../../pinion'

const template = (ctx: Context) => {

return /* json */`
{
    "version": "0.2.0",
    "configurations": [
      {
        "type": "node",
        "resolveSourceMapLocations": [
            "\${workspaceFolder}/**",
            "!**/node_modules/**"
        ],
        "request": "launch",
        "name": "Mocha Tests",
        "program": "\${workspaceFolder}/node_modules/mocha/bin/mocha",
        "args": [
          "--require",
          "ts-node/register",
          "--timeout",
          "99000",
          "--colors",
          "--recursive"
        ],
        "internalConsoleOptions": "openOnSessionStart",
        "env": {
          "NODE_ENV": "test",
          "TS_NODE_PROJECT": "tsconfig.test.json"
        },
        "outputCapture": "std",
        "skipFiles": [
          "<node_internals>/**"
        ]
      },
    ]
  }
`

}

export const generate = (context: Context) => generator(context)
  .then(renderTemplate(template, toFile(context.rootFolder, '.vscode/launch.json')))
  