import React from 'react';

const TeamResults = ({ results, sport, type }) => (
  <div className="team-results flex-container">
    {
      type === "header" 
      ? results.length > 1 
        ? <><span>R</span><span>H</span><span>E</span></>
        : <span>T</span>
      : results.map((r, i) => <span key={i}>{r}</span>)
    }
  </div>
);

export default TeamResults;
