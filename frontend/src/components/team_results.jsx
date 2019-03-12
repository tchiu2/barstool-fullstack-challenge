import React from 'react';

const TeamResults = ({ results, sport, type }) => (
  <div className="team-results">
    {
      type === "header" 
      ? sport === "baseball"
        ? <><span>R</span><span>H</span><span>E</span></>
        : <span>TOTAL</span>
      : results.map((r, i) => <span key={i}>{r}</span>)
    }
  </div>
);

export default TeamResults;