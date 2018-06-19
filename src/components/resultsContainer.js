import React, { PureComponent } from 'react'
import ResultsButtonAccepts from './ResultsButtonAccepts'

export default class resultsContainer extends PureComponent {
  render () {
    return (
      <div className="results-container">
        <ResultsButtonAccepts userId="1" />
      </div>
    )
  }
}
