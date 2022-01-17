//declare dependencies
const router = require('express').Router();
const notes = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const createNote = require('../../lib/notes');

//GET route
router.get('/notes', (req, res) => {
  return res.json(notes);
});

//POST route
router.post('/notes', (req, res) => {
  //advise that POST request was received
  console.info(`${req.method} request received to add a note`);
  //create unique id using uuid npm package
  req.body.id = uuidv4();
  //add new note to the bottom of db.json
  notes.push(req.body);
  //rewrite the notes to db.json
  createNote(notes);
  return res.json(notes);
});

//DELETE route
router.delete('/notes/:id', (req, res) => {
  //Advise that delete request was received
  console.info(`${req.method} request received to delete a note`);
  const params = [req.params.id];
  //user .filter() to create a new array without the deleted note
  const filteredArray = notes.filter(x => x.id != `${params}`);
  //rewrite the notes to db.json
  createNote(filteredArray);
  return res.json(filteredArray);
  });

module.exports = router;