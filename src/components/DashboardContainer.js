import * as React from 'react'
import DashboardFormUser from './DashboardFormUser'
import { connect } from 'react-redux'
import { addUser } from '../actions/stutor'
//import DashboardFormSkills from './DashboardFormSkills'

class DashboardContainer extends React.PureComponent {
  
  addDashboardUser = (user) => {
    // console.log(user,'user')
    /*
    this.props.dispatch({
      type: 'ADD_USER',
      payload: {
        id: Math.ceil(Math.random()*10000),
        ...user
      }
    })
    */
    this.props.addUser(user)
  }

  render() {
    // console.log('DashboardContainer')
    return <DashboardFormUser addDashboardUser={this.addDashboardUser}/>
  }
}

// Bind the action creators addUser
// so we can use it as props in the DashboardContainer component
export default connect(null,{ addUser })(DashboardContainer)
