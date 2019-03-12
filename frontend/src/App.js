import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Boxscore from './components/boxscore';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app">
          <Switch>
            <Route path="/" component={Boxscore} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
