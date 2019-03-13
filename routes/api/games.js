const express = require('express');
const router = express.Router();
const Game = require('../../models/Game');
const fetchGameData = require('../../util/api_util');

const SOURCE_URL = {
  NBA: 'https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json',
  MLB: 'https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json'
};

router.get("/:league", (req, res) => {
  const league = req.params.league.toUpperCase();
  Game.findOne({ league })
    .then(game => {
      if (game && game.cache_expiration.getTime() > Date.now()) {
        console.log(`Returning cached data. Cache expires: ${game.cache_expiration}`);
        res.json(game)
      } else {
        console.log(`Fetching updated game data for ${league}. Last updated: ${game.updated}`);
        fetchGameData(SOURCE_URL[league], league)
          .then(game => res.json(game));
      }
    })
});

router.get("/:gameId", (req, res) => res.json({ msg: `This is game ${req.params.gameId}` }));

module.exports = router;
