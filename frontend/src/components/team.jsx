import React from 'react';
import TeamUnits from './team_units';
import TeamResults from './team_results';

import '../styles/Team.css';

const Team = ({ team, scores, results, type }) => (
  <div className={`team ${type} flex-container horizontal`}>
    <label>{type === "header" ? " " : team.abbreviation}</label>
    <TeamUnits scores={scores} type={type} />
    <TeamResults results={results} type={type} />
  </div>
);

export default Team;
