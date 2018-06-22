import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ResultsUserContainer from './ResultsUserContainer'
import './Results.css';
import { getTutorsWithSkillIdAndNotAccepted } from '../lib/matching.js'
import { addAccepted, addRejected } from '../actions/stutor'
import  dashboardIcon from '../lib/icon-dashboard.png'
import  backIcon from '../lib/icon-back.png'
import { Link } from 'react-router-dom'

export class ResultsContainer extends PureComponent {
  currentUserId = parseInt(this.props.match.params.userid, 10)
  skillId = parseInt(this.props.match.params.skillid, 10)

  showSelectedUsers = (selectedUsers) => {
    if (getTutorsWithSkillIdAndNotAccepted(this.currentUserId, this.skillId, this.props.data.stutor).length > 0) {
      return <ResultsUserContainer
        selectedUsers = { getTutorsWithSkillIdAndNotAccepted(this.currentUserId, this.skillId, this.props.data.stutor).splice(0,1) }
        data={ this.props.data }
        skillId= { this.skillId }
        currentUserId = {this.currentUserId}
        addAccepted = { this.props.addAccepted }
        addRejected = { this.props.addRejected }
      />
    } else {
      return <div class="noresults"><p class="noresults-text">Computer says no</p></div>
    }
  }

  render () {
    return (
      <div className="results-container">
        <div className="results-user-container-nav">
          <Link to={`/selectskill/${this.currentUserId}`}>
            <img src={ backIcon } alt="Go Back" className="results-container-backicon"/>
          </Link>
          <Link to={`/homedash/${this.currentUserId}`} >
            <img src={ dashboardIcon } alt="Go To Dashboard" className="results-container-dashboardicon"/>
          </Link>
        </div>
        <div className="results-user-container-nav-border"></div>
        { this.showSelectedUsers(this.selectedUsers)
        }
      </div>


    )
  }

}
const mapStateToProps = (state) => {
  return {
    data: state
  }
}

export default connect(mapStateToProps, { addAccepted, addRejected })(ResultsContainer)
