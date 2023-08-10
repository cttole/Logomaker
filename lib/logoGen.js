const fs = require('fs');
const { Triangle, Circle, Square } = require('./shapes');

exports.generateLogo = (answers) => {
    const { text, textColor, shape, shapeColor } = answers;

    return `
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  <${shape} cx="100" cy="100" r="40" fill="${shapeColor}" />
    <text x="50" y="50" font-family="Arial" font-size="20" fill="${textColor}">${text}</text>
    
  </svg>`;

};

exports.saveToFile = (svgContent) => {
  fs.writeFile('logo.svg', svgContent, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
};
