const express = require('express');
const getUserSpend = require('../controllers/get');

const router = express.Router();

router.get('/users/:id/spend', async (req, res, next) => {
  try {
    const response = await getUserSpend(req.params.id, req.query.fromDate, req.query.toDate);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
