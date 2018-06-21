import React, { Component } from 'react'
import { Route, Link  } from 'react-router-dom'
import FriendsCurrent from "./FriendsCurrent"
import FriendsRequest from "./FriendsRequest"

export default class FriendsContainer extends Component {

currentUserId = parseInt(this.props.match.params.currentuserid, 10)

  render() {
	return (
	  <div>
		<FriendsCurrent />
		<FriendsRequest />
	  </div>
	)
  }
}
