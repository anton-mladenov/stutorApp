import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ResultsUserContainer from './ResultsUserContainer'
import './Results.css';

class ResultsContainer extends PureComponent {

  render () {
    return (
      <div className="results-container">
        <ResultsUserContainer data={ this.props.data }/>
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
