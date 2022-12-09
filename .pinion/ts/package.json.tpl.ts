import { generator, renderTemplate, toFile } from '@feathershq/pinion'
import { Context } from '../pinion'

// A template to render using JavaScript template strings
const template = (ctx: Context) => {

  return /* json */`{
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
  "type": "module",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs"
    }
  },
  "main": "./dist/index.cjs",
  "types": "./dist/index.d.ts",
  "engines": {
    "node": ">= 16.0.0"
  },
  "files": [
    "CHANGELOG.md",
    "LICENSE",
    "README.md",
    "src/**",
    "dist/**"
  ],
  "scripts": {
    "build": "unbuild",
    "version": "npm run build",
    "release": "np",
    "vitest": "vitest",
    "test": "vitest run",
    "coverage": "vitest run --coverage",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx"
  },
  "dependencies": {},
  "devDependencies": {
    "@types/node": "^18.7.18",
    "@typescript-eslint/eslint-plugin": "^5.37.0",
    "@typescript-eslint/parser": "^5.37.0",
    "@vitest/coverage-c8": "^0.25.3",
    "cross-env": "^7.0.3",
    "eslint": "^8.28.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-unicorn": "^45.0.0",
    "np": "^7.6.2",
    "prettier": "^2.8.0",
    "shx": "^0.3.4",
    "typescript": "^4.9.3",
    "unbuild": "^1.0.1",
    "vite": "^3.2.3",
    "vitest": "^0.25.1"
  }
}`

}

export const generate = (context: Context) => generator(context)
  .then(renderTemplate(template, toFile(context.rootFolder, 'package.json')))