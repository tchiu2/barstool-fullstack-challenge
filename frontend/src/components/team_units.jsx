import React from 'react';

const TeamUnits = ({ scores, type }) => (
  <div className="team-units">
  {
    type === "header" && scores.length > 0
    ? [...Array(scores.length).keys()].map(x => ++x)
    : scores.map((period, idx) => <span key={idx}>{period}</span>)
  }
  </div>
);

export default TeamUnits;
