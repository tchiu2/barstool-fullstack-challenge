const Game = require('../models/Game');
const fetchGameData = require('../util/api_util');

module.exports = league =>
  fetchGameData(league)
    .then(game => Game.findOneAndUpdate(
      { league },
      game,
      { upsert: true, new: true }
    ).exec());
