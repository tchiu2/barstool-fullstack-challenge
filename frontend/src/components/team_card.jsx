import React from 'react';

const TeamCard = ({ team, home }) => (
  <div className={`boxscore-detaills-team${home === "true" ? " home" : " away"}`}>
    <p>
      <strong>{team.last_name}</strong>
      <small>{team.abbreviation}</small>
    </p>
    <span>36-28</span>
  </div>
)

export default TeamCard;
