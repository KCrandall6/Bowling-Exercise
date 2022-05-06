const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../../dist/index.html'));
});

module.exports = router;