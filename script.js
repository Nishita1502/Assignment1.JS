// Use NodeJS built-in function to read text file contents asynchronously
const fs = require('fs');

// Specify the file path
const filePath = 'file.txt';

// Use the 'readFile' function to read the contents of the text file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    // Check if there's an error while reading the file
    if (err) {
        // If there's an error, log it to the console
        console.error('Error reading the file:', err);
        // Return to exit the function execution
        return;
    }
    
    // If no error occurred, log the file content to the console
    console.log('File Content:');
    console.log(data);
});
