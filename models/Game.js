const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Team = require('./Team.js');

const GameSchema = new Schema({
  cache_expiration: { type: Date, default: Date.now() + 15000 },
  updated: { type: Date, default: Date.now() },
  league: String,
  away_team: { 
    team_id: String,
    abbreviation: String,
    first_name: String,
    last_name: String,
    full_name: String
  },
  home_team: { 
    team_id: String,
    abbreviation: String,
    first_name: String,
    last_name: String,
    full_name: String
  },
  away_period_scores: [Number],
  home_period_scores: [Number],
  event_information: {
    duration: String,
    status: String,
    season_type: String,
    start_date_time: Date
  },
})

module.exports = Game = mongoose.model('Game', GameSchema);
