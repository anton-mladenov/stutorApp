import React, { Component } from 'react';
import './App.css';
import { Route, Link  } from 'react-router-dom'
import ResultsContainer from './components/ResultsContainer'
import DashboardContainer from './components/DashboardContainer'
import SearchBar from "./components/SearchBar"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/results" component={ResultsContainer} />
        <Route exact path="/dashboard" component={DashboardContainer} />
        <Link to="/results">Go back to the results</Link>
        <Link to="/dashboard">Go back to the dashboard</Link>
		<Route exact path="/search" component={SearchBar} />
		<Link to="/search"> Look For Some New Skills To Learn </Link>
      </div>
    );
  }
}

export default App;
