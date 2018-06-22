import React, { Component } from 'react'
import FriendsCurrent from "./FriendsCurrent"
import { Route, Link  } from 'react-router-dom'
import {getNameofStudentsToBeAccepted,matchLogic,waitingForAcceptance} from '../lib/matching'
import { connect } from 'react-redux'
import {addAccepted, addRejected} from '../actions/stutor'
import './FriendsContainer.css'



 class FriendsContainer extends Component {

   currentUserId1 = parseInt(this.props.match.params.currentUserId, 10)

   logIt = () => {
     console.log(waitingForAcceptance(2, this.props.data))
   }

   waitingForAcceptance2 = (currentUserId, allUsers) => {
     return allUsers.filter(allUsers => allUsers.accepted.includes(currentUserId))
   }

  getAcceptedUsers = (currentUserId, allUsers) => {
     const currentUserAccepted = allUsers.filter(a => a.id === currentUserId).reduce((acc, val) => val)
     console.log(currentUserAccepted, 'currentUserAccepted')
     //return this.waitingForAcceptance2(currentUserId, allUsers).filter(a => currentUserAccepted.accepted.includes(a.id))
     return allUsers.filter(user => currentUserAccepted.accepted.includes(user.id))
   }

   handleClick = (param1, param2) => (e) => {
     this.props.addAccepted(param1, param2)
   }
   handleClickNo = (param1, param2) => (e) => {
  this.props.addRejected(param1, param2)
  }

    render() {
	   return (
	    <div>
      <div className="home-dash-container">

		    <h1 className="title3">Student Waiting for Acceptance</h1>
        <ul>
        { waitingForAcceptance(this.currentUserId1, this.props.data)
          .map(a => {
            return <li className = "coolName">{ a.firstName }<button value="GO" className="button-go" onClick={ this.handleClick(this.currentUserId1, a.id) }/> <button value="NO" className="button-no" onClick={ this.handleClickNo(this.currentUserId1, a.id) }/></li>
          })
        }
        </ul>
        <br/>
        <h1 className="title3">Accepted Students</h1>
         <ul>
         {this.getAcceptedUsers( this.currentUserId1,this.props.data)
         .map(a => {
           return <div><li className = "coolName">{ a.firstName } <Link to="/whatapp" ><button className="button-chat">Text me</button></Link></li></div>
         })}
         </ul>
        </div>
	      </div>
	      )
      }
}

    const mapStateToProps = (state) => {

      return {
        data: state.stutor
      }
    }

export default connect(mapStateToProps, {addAccepted, addRejected})(FriendsContainer)
