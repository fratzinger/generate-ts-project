import { generator, renderTemplate, toFile } from '@feathershq/pinion'
import { Context } from '../pinion'

// A template to render using JavaScript template strings
const template = (ctx: Context) => {

  return /* json */`
{
  "name": "${ctx.npmPackageName}",
  "version": "0.0.0",
  "description": "${ctx.description}",
  "author": "${ctx.author}",
  "homepage": "https://github.com/${ctx.repository}",
  "repository": {
    "type": "git",
    "url": "https://github.com/${ctx.repository}"
  },
  "keywords": [],
  "license": "MIT",
  "main": "dist/",
  "types": "dist/",
  "directories": {
    "test": "test",
    "src": "src"
  },
  "engines": {
    "node": ">= 14.0.0"
  },
  "files": [
    "CHANGELOG.md",
    "LICENSE",
    "README.md",
    "src/**",
    "dist/**"
  ],
  "scripts": {
    "compile": "shx rm -rf dist/ && tsc",
    "version": "npm run compile",
    "release": "np",
    "mocha": "cross-env NODE_ENV=test TS_NODE_PROJECT='tsconfig.test.json' mocha --timeout 5000",
    "test": "npm run mocha",
    "coverage": "nyc npm run test",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx"
  },
  "dependencies": {},
  "devDependencies": {
    "@istanbuljs/nyc-config-typescript": "^1.0.2",
    "@types/mocha": "^9.1.1",
    "@types/node": "^18.7.18",
    "@typescript-eslint/eslint-plugin": "^5.37.0",
    "@typescript-eslint/parser": "^5.37.0",
    "cross-env": "^7.0.3",
    "eslint": "^8.23.1",
    "mocha": "^10.0.0",
    "np": "^7.6.2",
    "nyc": "^15.1.0",
    "shx": "^0.3.4",
    "ts-node": "^10.9.1",
    "typescript": "^4.8.3"
  }
}`

}

export const generate = (context: Context) => generator(context)
  .then(renderTemplate(template, toFile('package.json')))