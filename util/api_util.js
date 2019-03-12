const axios = require('axios');
const mongoose = require('mongoose');
const Game = mongoose.model('Game');

const fetchGameData = async (url, league) => {
  console.log(`Fetching game data for ${league}`);
  try {
    const response = await axios.get(url);
    const data = response.data;
    const { 
      league,
      away_team,
      home_team,
      away_period_scores,
      home_period_scores,
      event_information
    } = data;

    const game = new Game({
      cache_expiration: Date.now() + 15000,
      updated: Date.now(),
      league,
      away_team,
      home_team,
      away_period_scores,
      home_period_scores,
      event_information
    }).toObject();

    delete game._id;

    return Game.findOneAndUpdate(
      { league },
      game,
      { upsert: true, new: true }
    ).exec()
      .then(res => res)
      .catch(console.log);
  } catch (err) {
    console.log(err);
  }
}

module.exports = fetchGameData;
