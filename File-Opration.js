const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'input.txt'), 'utf8', (err, data) => {
  if (err) {
    return console.error('Error reading input.txt:', err);
  }
  console.log('Contents of input.txt:', data);

  fs.writeFile(path.join(__dirname, 'output.txt'), 'Hello, File!\n', err => {
    if (err) {
      return console.error('Error writing to output.txt:', err);
    }
    console.log('Wrote to output.txt');

    const currentDate = new Date().toISOString();
    fs.appendFile(path.join(__dirname, 'output.txt'), `Current date and time: ${currentDate}\n`, err => {
      if (err) {
        return console.error('Error appending to output.txt:', err);
      }
      console.log('Appended current date and time to output.txt');
    });
  });
});
