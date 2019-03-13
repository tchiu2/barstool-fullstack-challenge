import React from 'react';

const GameStatus = ({ status }) => (
  <div className="boxscore-details-info">
    <strong>
      {status === "completed" ? "Final" : status}
    </strong>
  </div>
);

export default GameStatus;
