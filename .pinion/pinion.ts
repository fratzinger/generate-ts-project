import { PinionContext, generator, runGenerators, prompt } from '@feathershq/pinion'

// The main types of your generator
export interface Context extends PinionContext {
  // Add the types from prompts and command line arguments here
  npmPackageName: string
  repository: string
  author: string
  description: string
  rootFolder: string
}

const getScope = (pkgName: any): string | undefined => {
  const splitScopedPackage = pkgName.split('/');
  return splitScopedPackage.length > 1 ? splitScopedPackage[0].substring(1) : undefined
}

const getUnscopedPackage = (pkgName: any) => {
  const splitScopedPackage = pkgName.split('/');
  return splitScopedPackage[splitScopedPackage.length-1];
}

export const generate = (context: Context) => generator(context)
  // Ask prompts here (using Inquirer) that should be available to all other generators
  .then(prompt([{
    type: 'input',
    name: 'npmPackageName',
    message: 'What is the package name?'
  }, {
    type: 'input',
    name: 'author',
    message: 'Who is the author?',
    default: (answers: any) => getScope(answers.npmPackageName)
  }, {
    type: 'input',
    name: 'repository',
    message: 'What is the repository?',
    default: (answers: any) => {
      return `${answers.author}/${getUnscopedPackage(answers.npmPackageName)}`;
    }
  }, {
    type: 'input',
    name: 'description',
    message: 'What is the description?',
  }, {
    type: 'input',
    name: 'rootFolder',
    message: 'Where to put the package?',
    default: (answers: any) => `${getUnscopedPackage(answers.npmPackageName)}`
  }]))
  // Run all *.tpl.ts generators in this folder
  .then(runGenerators(__dirname, "ts"))
  .then(runGenerators(__dirname, "ts", ".github"))
  .then(runGenerators(__dirname, "ts", ".github", "workflows"))
  .then(runGenerators(__dirname, "ts", ".vscode"))
  .then(runGenerators(__dirname, "ts", "src"))
  .then(runGenerators(__dirname, "ts", "test"))