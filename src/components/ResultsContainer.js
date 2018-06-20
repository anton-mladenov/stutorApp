import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ResultsUserContainer from './ResultsUserContainer'
import './Results.css';
import { getTutorsWithSkillIdAndNotAccepted } from '../lib/matching.js'

class ResultsContainer extends PureComponent {
  currentUserId = 1
  skillId = 1
  selectedUsers = getTutorsWithSkillIdAndNotAccepted(this.currentUserId, this.skillId, this.props.data.stutor)

  showSelectedUsers = (selectedUsers) => {
    if (selectedUsers.length > 0) {
      return <ResultsUserContainer selectedUsers = { this.selectedUsers }data={ this.props.data } skillId= { this.skillId } currentUserId = { this.currentUserId }/>
    } else {
      return <p>nothing to see here</p>
    }
  }

  render () {
    return (
      <div className="results-container">
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

export default connect(mapStateToProps)(ResultsContainer)
