const port = process.env.PORT || 3001;
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const db = 'mongodb://localhost:27017/boxscore-challenge';

const games = require('./routes/api/games');

const app = express();

mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use("/api/games", games);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(port, () => console.log(`Server is running on port ${port}`));
