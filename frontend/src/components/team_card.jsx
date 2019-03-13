import React from 'react';

const TeamCard = ({ team, home }) => (
  <div className={`boxscore-details-team${home === "true" ? " home" : " away"} flex-container vertical`}>
    <p>
      <strong>{team.last_name}</strong>
    </p>
    <span>36-18</span>
  </div>
)

export default TeamCard;
