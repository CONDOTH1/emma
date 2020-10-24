const express = require('express');

const router = express.Router();

router.get('/ping', (_, res, next) => {
  res.status(200).json({ message: 'OK' });
  next();
});

router.get('/ready', async (_, res, next) => {
  try {
    res.status(200).json({ message: 'OK' });
  } catch (err) {
    res.status(503).json({ message: 'NOT READY' });
  }
  next();
});

module.exports = router;
