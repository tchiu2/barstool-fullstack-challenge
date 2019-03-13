import React from 'react';

const TeamUnits = ({ scores, type }) => (
  <div className="team-units flex-container horizontal">
    {scores.map((period, idx) => (
      <span key={idx}>
        {type === 'header' ? idx + 1 : period}
      </span>
    ))}
  </div>
);

export default TeamUnits;
