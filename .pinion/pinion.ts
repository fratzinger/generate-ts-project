import { PinionContext, generator, runGenerators, prompt } from '@feathershq/pinion'

// The main types of your generator
export interface Context extends PinionContext {
  // Add the types from prompts and command line arguments here
  npmPackageName: string
  repository: string
  author: string
  description: string
  mocha: boolean
}

export const generate = (context: Context) => generator(context)
  // Ask prompts here (using Inquirer) that should be available to all other generators
  .then(prompt([{
    type: 'input',
    name: 'npmPackageName',
    message: 'What is the package name?'
  }, {
    type: 'input',
    name: 'repository',
    message: 'What is the repository?'
  }, {
    type: 'input',
    name: 'author',
    message: 'Who is the author?'
  }, {
    type: 'input',
    name: 'description',
    message: 'What is the description?',
  }, {
    type: 'confirm',
    name: 'mocha',
    message: 'Do you want to use Mocha?',
  }]))
  // Run all *.tpl.ts generators in this folder
  .then(runGenerators(__dirname, "ts"))