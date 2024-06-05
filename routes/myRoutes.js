const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
      res.sendFile(__dirname + '/views/index.html');
});
router.get('/about', (req, res) => {
      res.sendFile(__dirname + '/views/about.html');
});
router.get('/contact-me', (req, res) => {
      res.sendFile(__dirname + '/views/contact-me.html');
});

module.exports = router;