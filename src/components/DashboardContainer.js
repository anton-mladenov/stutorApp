import * as React from 'react'
import DashboardForm from './DashboardForm'
import { connect } from 'react-redux'

class DashboardContainer extends React.PureComponent {
  addUser = (user) => {
    this.props.dispatch({
      type: 'ADD_USER',
      payload: {
        id: Math.ceil(Math.random()*10000),
        ...user
      }
    })
  }

  render() {
    console.log('DashboardContainer')
    return <DashboardForm addUser={this.addUser} />
  }
}

export default connect()(DashboardContainer)
