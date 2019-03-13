import React from 'react';

const TeamResults = ({ results, sport, type }) => (
  <div className="team-results flex-container">
    {results.map((r, i) => <span key={i}>{r}</span>)}
  </div>
);

export default TeamResults;
