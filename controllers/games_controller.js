const Game = require('../models/Game');
const findOneAndUpdate = require('../util/find_one_and_update');

const getHandler = (req, res) => {
  const league = req.params.league.toUpperCase();

  Game.findOne({ league })
    .then(game => {
      if (game && game.cache_expiration.getTime() > Date.now()) {
        console.log(`Returning cached data for ${league}. Cache expires: ${game.cache_expiration}`);
        return game;
      } else {
        console.log(`Fetching updated game data for ${league}. Last updated: ${game.updated}`);
        return findOneAndUpdate(league);
      }
    })
    .catch(() => findOneAndUpdate(league))
    .then(game => res.json(game));
};

module.exports = {
  getHandler
};
