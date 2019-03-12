import React from 'react';
import TeamUnits from './team_units';
import TeamResults from './team_results';

const Team = ({ team, scores, results, type }) => (
  <div className={`team ${type}`}>
    <label>{type === "header" ? "" : team.abbreviation}</label>
    <TeamUnits scores={scores} type={type} />
    <TeamResults results={results} type={type} />
  </div>
);

export default Team;
