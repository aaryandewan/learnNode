const fs = require('fs');
const path = require('path');

const [, , command, filePath, content] = process.argv;

const fullPath = path.join(__dirname, filePath);

if (command === 'create') {
  fs.writeFile(fullPath, content, (err) => {
    if (err) {
      console.error('Error creating file:', err);
    } else {
      console.log('File created successfully!');
    }
  });
} else if (command === 'edit') {
  fs.writeFile(fullPath, content, (err) => {
    if (err) {
      console.error('Error editing file:', err);
    } else {
      console.log('File edited successfully!');
    }
  });
} else if (command === 'delete') {
  fs.unlink(fullPath, (err) => {
    if (err) {
      console.error('Error deleting file:', err);
    } else {
      console.log('File deleted successfully!');
    }
  });
} else {
  console.log('Invalid command. Please use one of the following commands: create, edit, delete');
}
