/** @format */

const fs = require('fs');
const path = require('path');

const challengeName = process.argv.slice(2).pop();
const here = (...args) => path.join(__dirname, ...args);
const challengePath = here(challengeName);

if (fs.existsSync(here(challengePath))) {
  throw new Error('Challenge already exists.');
}

fs.mkdirSync(challengePath);
fs.writeFile(
  path.join(challengePath, 'index.js'),
  `
  function ${challengeName}(...args) {
  }
  \n
  \n
  module.exports = {
    ${challengeName}
  }
`,
  error => {
    if (error) throw error;
  }
);

fs.writeFile(
  here(challengeName, 'index.test.js'),
  `
const { ${challengeName} } = require('./index.js');\n
describe('${challengeName}', () => {\n\n })
`,
  error => {
    if (error) throw error;
  }
);
