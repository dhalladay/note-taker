const fs = require('fs');
const path = require('path');

function createNote(noteArray) {
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(noteArray, null, 2)
  )};

module.exports = createNote;