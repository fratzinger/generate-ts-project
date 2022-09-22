import { generator, renderTemplate, toFile } from '@feathershq/pinion'
import { Context } from '../pinion'

const template = (ctx: Context) => {

return /* json */`
{
  "root": true,
  "env": {
    "node": true,
    "mocha": true
  },
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "quotes": ["warn", "double", "avoid-escape"],
    "indent": ["warn", 2, { "SwitchCase": 1 }],
    "semi": ["warn", "always"],
    "@typescript-eslint/no-unused-vars": "warn",
    "no-console": "off",
    "camelcase": "warn",
    "require-atomic-updates": "off",
    "prefer-destructuring": ["warn", {
      "AssignmentExpression": { "object": false, "array": false },
      "VariableDeclarator": { "object": true, "array": true }
    }, {
      "enforceForRenamedProperties": false
    }],
    "security/detect-object-injection": "off",
    "object-curly-spacing": ["warn", "always"],
    "prefer-const": ["warn"],
    "@typescript-eslint/consistent-type-imports": ["warn", { "prefer": "type-imports" }]
  },
  "overrides": [
    {
      "files": ["test/**/*.ts"],
      "rules": {
        "@typescript-eslint/ban-ts-comment": ["off"],
        "@typescript-eslint/no-explicit-any": ["off"],
        "@typescript-eslint/no-unused-vars": ["off"]
      }
    }
  ]
}
`

}
    
export const generate = (context: Context) => generator(context)
  .then(renderTemplate(template, toFile('.eslintrc')))