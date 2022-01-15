const router = require('express').Router();
const notes = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
  res.json(notes);
});

router.post('/notes', (req, res) => {
  console.info(`${req.method} request received to add a note`);
  req.body.id = uuidv4();
  const note = req.body;
  saveNote(note);
  console.log(notes);
  res.json(notes);
});

module.exports = router;