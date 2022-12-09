import { generator, renderTemplate, toFile } from '@feathershq/pinion'
import { Context } from '../../../pinion'

const template = (ctx: Context) => {

return /* yml */`# This workflow will do a clean install of node dependencies, run tests across different versions of node
# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions

name: Node.js CI

on: [push, pull_request]

jobs:

  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [16.x, 18.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/
    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js \${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: \${{ matrix.node-version }}
    - run: npm i
    - run: npm test

  coverage:
    name: coverage
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master
      - uses: actions/setup-node@master
        with:
          node-version: "18"
      - run: npm ci
      - uses: paambaati/codeclimate-action@v3.2.0
        env:
          CC_TEST_REPORTER_ID: \${{ secrets.CC_TEST_REPORTER_ID }}
        with:
          coverageCommand: npm run coverage

  build:
    name: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master
      - uses: actions/setup-node@master
        with:
          node-version: "18"
      - run: npm ci
      - run: npm run build
`
}

export const generate = (context: Context) => generator(context)
  .then(renderTemplate(template, toFile(context.rootFolder, '.github/workflows/nodejs.yml')))