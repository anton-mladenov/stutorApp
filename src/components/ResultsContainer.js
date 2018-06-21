import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ResultsUserContainer from './ResultsUserContainer'
import './Results.css';
import { getTutorsWithSkillIdAndNotAccepted } from '../lib/matching.js'
import { addAccepted } from '../actions/stutor'
import  dashboardIcon from '../lib/icon-dashboard.png'
import  backIcon from '../lib/icon-back.png'
import { Link } from 'react-router-dom'

export class ResultsContainer extends PureComponent {
  currentUserId = parseInt(this.props.match.params.currentuserid, 10)
  skillId = parseInt(this.props.match.params.skillid, 10)
  selectedUsers = getTutorsWithSkillIdAndNotAccepted(this.currentUserId, this.skillId, this.props.data.stutor)
  getNoProxy = (i) => {
    console.log(i)
  }
  showSelectedUsers = (selectedUsers) => {
    if (selectedUsers.length > 0) {
      return <ResultsUserContainer
        selectedUsers = { this.selectedUsers }
        data={ this.props.data }
        skillId= { this.skillId }
        currentUserId = {this.currentUserId}
        addAccepted = { addAccepted }
      />
    } else {
      return <p>nothing to see here</p>
    }
  }

  render () {
    return (
      <div className="results-container">
        <div className="results-user-container-nav">
          <Link to="/selectskill" >
            <img src={ backIcon } alt="Go Back" className="results-container-backicon"/>
          </Link>
          <Link to="/homedash" >
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

export default connect(mapStateToProps, { addAccepted })(ResultsContainer)
