import { generator, renderTemplate, toFile } from '@feathershq/pinion'
import { Context } from '../../../pinion'

const template = (ctx: Context) => {

return /* yml */`
# This workflow will do a clean install of node dependencies, run tests across different versions of node
# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions

name: Node.js CI

on: [push, pull_request]

jobs:

  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [14.x, 16.x, 18.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/
    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js \${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: \${{ matrix.node-version }}
    - run: npm ci
    - run: npm test

  coverage:
    needs: [ test ]
    name: coverage
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@master
    - uses: actions/setup-node@master
      with:
        node-version: '12'
    - run: npm ci
    - uses: paambaati/codeclimate-action@v2.7.5
      env:
        CC_TEST_REPORTER_ID: \${{ secrets.CC_TEST_REPORTER_ID }}
      with:
        coverageCommand: npm run coverage
`

}

export const generate = (context: Context) => generator(context)
  .then(renderTemplate(template, toFile('.github/workflows/nodejs.yml')))