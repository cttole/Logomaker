const { askQuestions } = require('./lib/userprompt.js');
const logoGen = require('./lib/logoGen.js');
const fs = require('fs');

askQuestions().then((answers) => {
    const svgString = logoGen.generateLogo(answers);
    fs.writeFile('logo.svg', svgString, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
});
