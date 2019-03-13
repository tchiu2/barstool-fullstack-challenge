import React, { Component } from 'react';
import { getGame } from '../util/game_api_util';
import Team from './team';
import BoxscoreDetails from './boxscore_details';

class Boxscore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      away_team: {},
      home_team: {},
      event_information: {},
      away_period_scores: [],
      home_period_scores: [],
      away_results: [],
      home_results: [],
    };
  }

  componentDidMount() {
    getGame(this.props.league).then(res => {
      this.setState(res.data);
    });
  }

  render() {
    return (
      <div className="boxscore flex-container vertical">
        <Team 
          type="header"
          results={this.state.home_results}
          scores={this.state.home_period_scores} />
        <Team 
          type="away"
          team={this.state.away_team}
          results={this.state.away_results}
          scores={this.state.away_period_scores} />
        <Team 
          type="home"
          team={this.state.home_team}
          results={this.state.home_results}
          scores={this.state.home_period_scores} />
        <BoxscoreDetails
          teams={({
            away: this.state.away_team,
            home: this.state.home_team,
          })}
          status={this.state.event_information.status} />
      </div>
    );
  }
}

export default Boxscore;
