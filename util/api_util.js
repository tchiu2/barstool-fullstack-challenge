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

    const away_results = [];
    const home_results = [];

    if (league === "MLB") {
      away_results.push(
        data.away_batter_totals.runs,
        data.away_batter_totals.hits,
        data.away_errors
      );
      home_results.push(
        data.home_batter_totals.runs,
        data.home_batter_totals.hits,
        data.home_errors
      );
    } else {
      away_results.push(data.away_totals.points);
      home_results.push(data.home_totals.points);
    }

    const game = new Game({
      cache_expiration: Date.now() + 15000,
      updated: Date.now(),
      league,
      away_team,
      home_team,
      away_period_scores,
      home_period_scores,
      away_results,
      home_results,
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
