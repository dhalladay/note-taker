const path = require('path');
const fs = require('fs');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

router.post('/notes', (req, res) => {
  fs.writeFileSync(path.join(__dirname, '../../public/notes.html'))
})

module.exports = router;