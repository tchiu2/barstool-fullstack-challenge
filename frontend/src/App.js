import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Boxscore from './components/boxscore';
import ScoreIndex from './components/score_index';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app">
          <Switch>
            <Route 
              path="/nba" 
              render={(props) => <Boxscore {...props} league="NBA" />} 
            />
            <Route 
              path="/mlb" 
              render={(props) => <Boxscore {...props} league="MLB" />} 
            />
            <Route path="/" component={ScoreIndex} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
