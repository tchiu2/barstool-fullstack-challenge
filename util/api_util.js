const axios = require('axios');
const mongoose = require('mongoose');
const Game = require('../models/Game');
const parseGame = require('./parse_game');

const SOURCE_URL = {
  NBA: 'https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json',
  MLB: 'https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json'
};

const fetchGameData = league =>
  axios.get(SOURCE_URL[league])
    .then(parseGame)
    .catch(err => {
      console.log(err);
    });

module.exports = fetchGameData;
