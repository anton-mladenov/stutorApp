import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link  } from 'react-router-dom'
import resultsContainer from './components/resultsContainer'
import DashboardContainer from './components/DashboardContainer'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Route exact path="/results" component={resultsContainer} />
        <Route exact path="/dashboard" component={DashboardContainer} />
        <Link to="/results">Go back to the results</Link>
        <Link to="/dashboard">Go back to the dashboard</Link>

      </div>
    );
  }
}

export default App;
