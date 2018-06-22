import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import LandingContainer from "./components/LandingContainer"
import ProfileContainer from "./components/ProfileContainer"
import HomeDashContainer from "./components/HomeDashContainer"
import ResultsContainer from "./components/ResultsContainer"
import SelectSkillContainer from "./components/SelectSkillContainer"
import AddSkillContainer from "./components/AddSkillContainer"
import SearchBarContainer from "./components/SearchBarContainer"
import Home from "./components/Home.js"
import FriendsContainer from "./components/FriendsContainer"
import NewSearch from "./components/NewSearch"
// import ResultsContainer from './components/ResultsContainer'
// import DashboardContainer from './components/DashboardContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
	  	<Route exact path="/" component={Home} />
		<Route exact path="/landing" component={LandingContainer} />
		<Route exact path="/profile" component={ProfileContainer} />
		<Route path="/homedash/:currentUserId" component={HomeDashContainer} />
    	<Route path="/results/:userid/:skillid" component={ResultsContainer} />
		<Route path="/selectskill/:currentUserId" component={SelectSkillContainer} />
		<Route path="/addskill/:currentUserId" component={AddSkillContainer} />
		<Route exact path="/search" component={SearchBarContainer} />
		<Route path="/friends/:currentUserId" component={FriendsContainer} />

    <Route path="/newsearch/" component={NewSearch} />

    <Route path='/whatapp' component={() => window.location = 'https://wa.me/004915226150632'}/>

        {/* <Route exact path="/dashboard" component={DashboardContainer} /> */}



      </div>
    );
  }
}

export default App;
