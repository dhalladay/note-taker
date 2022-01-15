const router = require('express').Router();
const notes = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

router.get('/notes', (req, res) => {
  res.json(notes);
});

router.post('/notes', (req, res) => {
  console.info(`${req.method} request received to add a note`);
  req.body.id = uuidv4();
  const note = req.body;
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'),
    JSON.stringify(notes, null, 2)
  );
  console.info(note);
  res.json(notes);
});

router.delete('/notes/:id', (req, res) => {
  console.info(`${req.method} request received to delete a note`);
  let filteredData = [];
  const params = [req.params.id];
  fs.readFile(path.join(__dirname, '../../db/db.json'), (err, data) => {
    if (err) throw err;
    return filteredData = JSON.parse(data).filter(x => x.id != `${params}`)
      .then(fs.writeFile(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(filteredData, null, 2)));
      });
});

module.exports = router;