import React, { PureComponent } from 'react'
import ResultsButtonAccept from './ResultsButtonAccept'
import ResultsButtonReject from './ResultsButtonReject'
import ResultsUserContainer from './ResultsUserContainer'
import getTutorsWithSkillIdAndNotAccepted from '../lib/matching'
import allUsers from '../lib/matching'





export default class ResultsContainer extends PureComponent {
  getTutorsWithSkillIdAndNotAccepted = (1, 2, allUsers)
  render () {
    return (
      <div className="results-container">
        <ResultsUserContainer />
        <div className="results-buttons-container">
          <ResultsButtonReject />
          <ResultsButtonAccept />
        </div>
      </div>
    )
  }
}
