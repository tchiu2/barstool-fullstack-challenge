import React from 'react';
import TeamCard from './team_card';
import GameStatus from './game_status';

const BoxscoreDetails = ({ teams: { home, away }, status }) => (
  <div className="boxscore-details flex-container horizontal">
    <TeamCard team={away} home="false" />
    <GameStatus status={status} />
    <TeamCard team={home} home="true" />
  </div>
);

export default BoxscoreDetails;
