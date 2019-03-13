import React from 'react';
import Boxscore from './boxscore';

const ScoreIndex = () => (
  <div className="index flex-container">
    <Boxscore league="NBA"/>
    <Boxscore league="MLB"/>
  </div>
);

export default ScoreIndex;
