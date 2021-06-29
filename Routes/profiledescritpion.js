const express = require('express');

const router = express.Router();
const { db } = require('../db-config');

router.get('/:idprofile', async (req, res) => {
  const { idprofile } = req.params;
  const sql =
    'SELECT * FROM Profile INNER JOIN Comments ON Profile.id = Comments.id_profile INNER JOIN Projects ON Profile.id = Projects.id_profile WHERE Profile.id=?';
  const sqlValues = [idprofile];
  const [results] = await db.query(sql, sqlValues);
  res.status(200).json(results);
});

router.post('/:idprofile', async (req, res) => {
  const { author, content } = req.params;
  const sql =
    'INSERT INTO Comments(author, datetime, content) VALUES(?,?,?) WHERE id=?';
  const sqlValues = [author, new Date(), content];
  const [results] = await db.query(sql, sqlValues);
  res.status(201).json(results);
});

module.exports = router;
