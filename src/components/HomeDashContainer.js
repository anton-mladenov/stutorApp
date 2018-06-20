import React, { Component } from 'react'
import './HomeDashContainer.css';
import { Link } from 'react-router-dom'

export default class HomeDashContainer extends Component {
  render() {
	return (

    <div className="home-dash-container">
      <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <div className="results-user-container-type">
      <p className="title">DASHBOARD</p>
      </div>
      <br/>
      <br/>
      <br/>
      <button className= "button-dash"><Link to={`/selectskill`} className="link-text"> Find a tutor</Link> </button>
      <br/>
      <br/>
      <button className= "button-dash2"> <Link to={`/addskill`} className="link-text"> Become a tutor </Link> </button>
      <br/>
      <br/>
      <br/>
      <br/>
      </div>
	)
  }
}
