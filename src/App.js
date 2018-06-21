import React, { Component } from 'react';
import './App.css';
import { Route, Link  } from 'react-router-dom'
import LandingContainer from "./components/LandingContainer"
import ProfileContainer from "./components/ProfileContainer"
import HomeDashContainer from "./components/HomeDashContainer"
import ResultsContainer from "./components/ResultsContainer"
import SelectSkillContainer from "./components/SelectSkillContainer"
import AddSkillContainer from "./components/AddSkillContainer"
import SearchBarContainer from "./components/SearchBarContainer"
import Home from "./components/Home.js"
// import ResultsContainer from './components/ResultsContainer'
// import DashboardContainer from './components/DashboardContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
	  	<Route exact path="/home" component={Home} />
		<Route exact path="/" component={LandingContainer} />
		<Route exact path="/profile" component={ProfileContainer} />
		<Route exact path="/homedash" component={HomeDashContainer} />
    	<Route path="/results/:userid/:skillid" component={ResultsContainer} />
		<Route exact path="/selectskill" component={SelectSkillContainer} />
		<Route exact path="/addskill" component={AddSkillContainer} />
		<Route exact path="/search" component={SearchBarContainer} />
        {/* <Route exact path="/dashboard" component={DashboardContainer} /> */}

		<Link to="/home"> Home </Link>
		<Link to="/"> Landing </Link>
		<Link to="/profile"> Profile </Link>
		<Link to="/homedash"> HomeDash </Link>
    	<Link to="/results">Go back to the results</Link>
		<Link to="/selectskill"> Select A Skill </Link>
		<Link to="/addskill"> Add A Skill </Link>
        {/* <Link to="/dashboard">Go back to the dashboard</Link> */}
		<Link to="/search"> Look For Some New Skills To Learn </Link>


      </div>
    );
  }
}

export default App;
