const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
  team_id: String,
  abbreviation: String,
  first_name: String,
  last_name: String,
  full_name: String
})

module.exports = Team = mongoose.model('Team', TeamSchema);
