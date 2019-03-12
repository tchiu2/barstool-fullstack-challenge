import React, { Component } from 'react';
import { getGame } from '../util/game_api_util';
import Team from './team';
import TeamCard from './team_card';

class Boxscore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home_team: {},
      away_team: {},
      event_information: {},
      away_period_scores: [],
      home_period_scores: [],
      away_results: [],
      home_results: [],
    };
  }

  componentDidMount() {
    getGame("NBA").then(res => {
      this.setState(res.data);
    });
  }

  render() {
    return (
      <div className="boxscore">
        <Team 
          type="header"
          scores={this.state.home_period_scores} />
        <Team 
          type="away"
          team={this.state.away_team}
          results={[100]}
          scores={this.state.away_period_scores} />
        <Team 
          type="home"
          team={this.state.home_team}
          results={[100]}
          scores={this.state.home_period_scores} />
        <TeamCard team={this.state.away_team} home="false" />
        <div className="boxscore-details-info">
          <strong>{this.state.event_information.status === "completed" ? "Final" : "In Progress"}</strong>
        </div>
        <TeamCard team={this.state.home_team} home="true" />
      </div>
    );
  }
}

export default Boxscore;
