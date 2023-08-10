const inquirer = require('inquirer');

const askQuestions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo text:',
      validate: (input) => input.length <= 3 || 'Text must be up to three characters',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a text color keyword or hexadecimal number:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a shape color keyword or hexadecimal number:',
    },
  ]);
};

module.exports = { askQuestions };
