const express = require('express');

const app = express();
require('dotenv').config();
const cors = require('cors');
const homeRoute = require('./Routes/profile');
const profileRoute = require('./Routes/profiledescritpion');

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use('/', homeRoute);
app.use('/profile', profileRoute);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
