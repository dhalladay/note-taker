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
  // saveNote(note);
  console.log(notes);
  res.json(notes);
});

// router.delete('/notes/:id', (req, res) => {
//   console.info(`${req.delete} request received to delete a note`);
  
// })

module.exports = router;