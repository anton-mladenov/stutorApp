import React, { Component } from 'react'
import './HomeDashContainer.css';
import background from '../lib/background.png';
import { Link } from 'react-router-dom';
import './HomeDashContainer.css';
import {waitingForAcceptance} from '../lib/matching'
import { connect } from 'react-redux'

export  class HomeDashContainer extends Component {
	currentUserId = parseInt(this.props.match.params.currentUserId, 10)
	waiting = waitingForAcceptance(9, this.props.data).length

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
      <div className="containerbubbles">
      <button className= "button-dash"><Link to={`/selectskill/${this.currentUserId}`} className="link-text"> Find a tutor</Link> </button>
      <button className= "button-dash3"><Link to={`/homedash`} className="link-text-small"> 1 Match </Link> </button>
      </div>
      <br/>
      <br/>
      <br/>
        <div className="containerbubbles">
      <button className= "button-dash2"> <Link to={`/addskill/${this.currentUserId}`} className="link-text"> Become a tutor </Link> </button>
      <button className= "button-dash4"> <Link to={`/friends/${this.currentUserId}`} className="link-text-small"> {this.waiting} Matches </Link> </button>
        </div>
      <br/>
      <div  className="footer">
      </div>
      </div>
	)
  }
}

const mapStateToProps = (state) => {
	return {
		data: state.stutor
	}
}

export default connect(mapStateToProps)(HomeDashContainer)
