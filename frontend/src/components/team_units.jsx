import React from 'react';

const TeamUnits = ({ scores, type }) => (
  <div className="team-units flex-container horizontal">
  {
    type === "header" && scores.length > 0
    ? [...Array(scores.length).keys()].map(x => <span key={x}>{x+1}</span>)
    : scores.map((period, idx) => <span key={idx}>{period}</span>)
  }
  </div>
);

export default TeamUnits;
