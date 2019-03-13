import React from 'react';

const GameStatus = ({ status }) => (
  <div className="boxscore-details-info flex-container vertical">
    <strong>
      {status === "completed" ? "Final" : status}
    </strong>
  </div>
);

export default GameStatus;
