const fs = require('fs');
const file = './test.txt';
function readFile(file, callback) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}
function display(err, data) {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    console.log('File Contents:');
    console.log(data);
  }
}
readFile(file, display);
console.log('Reading file');
