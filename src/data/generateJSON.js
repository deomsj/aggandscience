const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const { getColumns } = require('./helpers/getColumns');

const rows = [];
const csvFilePath = path.join(__dirname, './initial/data.csv');
const JsonFilePath = path.join(__dirname, './generated/data.json');

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', data => rows.push(data))
  .on('end', () => {
    const columns = getColumns(rows);
    const data = { rows, columns };
    const dataString = JSON.stringify(data, null, 2);

    fs.writeFile(JsonFilePath, dataString, err => {
      if (err) throw err;
      console.log('Rows and Columns generated and saved to: ' + JsonFilePath);
    });
  });
