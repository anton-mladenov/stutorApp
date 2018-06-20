import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ResultsUserContainer from './ResultsUserContainer'
import './Results.css';
import { getTutorsWithSkillIdAndNotAccepted } from '../lib/matching.js'
import { addAccepted } from '../actions/stutor'

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
        currentUserId = {1}
        addAccepted = { addAccepted }
        getNoProxy = {this.getNoProxy}
      />
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

export default connect(mapStateToProps, { addAccepted })(ResultsContainer)
