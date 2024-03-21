const fs = require('fs');
const csv = require('csv-parser');

// Path to your CSV file
const csvFilePath = 'test.csv';

// Array to store parsed CSV data
const data = [];

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', (row) => {
    // Process each row of the CSV
    data.push(row);
  })
  .on('end', () => {
    // All rows parsed, log the data
    console.log(data);
  });
  const element = document.getElementById("ideaList");
  for (let i = 0, ln = 100; i < ln; ++i) {
                 element.value += data[i] + '\n';
 
             }
 