// src/components/ProfileContainer

import * as React from 'react'

import Profile from './Profile'
import { connect } from 'react-redux'
import { addUser } from '../actions/stutor'

class ProfileContainer extends React.PureComponent {
  addProfileUser = (user) => {
    console.log(user.id,'user id')
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
    console.log('ProfileContainer')
    return <Profile addProfileUser={this.addProfileUser}/>
  }
}

// Bind the action creator addUser
// so we can use it as props in the ProfileContainer component
export default connect(null,{ addUser })(ProfileContainer)
