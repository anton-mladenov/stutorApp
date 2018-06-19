import React, { PureComponent } from 'react'
import ResultsButtonAccept from './ResultsButtonAccept'
import ResultsButtonReject from './ResultsButtonReject'
import ResultsUserContainer from './ResultsUserContainer'

export default class ResultsContainer extends PureComponent {
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
