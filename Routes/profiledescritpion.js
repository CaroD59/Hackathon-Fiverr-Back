const express = require('express');

const router = express.Router();
const { db } = require('../db-config');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM profile WHERE id=?';
  const sqlValues = [id];
  const [results] = await db.query(sql, sqlValues);
  res.json(results);
});

router.get('/:id', async (req, res) => {
  const [rows] = await db.query(
    'SELECT content, author, datetime FROM comments WHERE id=?'
  );
  res.status(200).json(rows);
});

router.post('/:id', async (req, res) => {
  const { author, content } = req.body;
  await db.query(
    'INSERT INTO comments(author, datetime, content) VALUES(?,?,?) WHERE id=?',
    [author, new Date(), content]
  );
  res.status(201).send(`Received new message: ${author} said ${content}`);
});

module.exports = router;
