const express = require('express');
const router = express.Router();

router.use((err, req, res, next) => {
    res.status(500).sendFile(__dirname + '/views/404.html');
});

module.exports = router;