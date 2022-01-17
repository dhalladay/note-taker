const router = require('express').Router();
const notes = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const createNote = require('../../lib/notes');

router.get('/notes', (req, res) => {
  return res.json(notes);
});

router.post('/notes', (req, res) => {
  console.info(`${req.method} request received to add a note`);
  req.body.id = uuidv4();
  notes.push(req.body);
  createNote(notes);
  return res.json(notes);
});

router.delete('/notes/:id', (req, res) => {
  console.info(`${req.method} request received to delete a note`);
  const params = [req.params.id];
  const filteredArray = notes.filter(x => x.id != `${params}`);
  createNote(filteredArray);
  return res.json(filteredArray);
  });

module.exports = router;