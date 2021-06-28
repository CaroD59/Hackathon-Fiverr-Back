const express = require('express');

const router = express.Router();
const { db } = require('../db-config');

router.get('/', async (req, res) => {
  const sql = 'SELECT * from profile';
  const [results] = await db.query(sql);
  res.json(results);
});

router.get('/', async (req, res) => {
  const [rows] = await db.query(
    'SELECT content, author, datetime FROM comments'
  );
  res.status(200).json(rows);
});

router.post('/', async (req, res) => {
  const { author, content } = req.body;
  await db.query(
    'INSERT INTO messages(author, datetime, content) VALUES(?,?,?)',
    [author, new Date(), content]
  );
  res.status(201).send(`Received new message: ${author} said ${content}`);
});

module.exports = router;
