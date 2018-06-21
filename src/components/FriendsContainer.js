import React, { Component } from 'react'
import { Route, Link  } from 'react-router-dom'
import {getNameofStudentsToBeAccepted,matchLogic,waitingForAcceptance} from '../lib/matching'
import { connect } from 'react-redux'
import {addAccepted} from '../actions/stutor'


 class FriendsContainer extends Component {

   currentUserId = parseInt(this.props.match.params.currentUserId, 10)

   logIt = () => {
     console.log(waitingForAcceptance(2, this.props.data))
   }

   waitingForAcceptance2 = (currentUserId, allUsers) => {
     return allUsers.filter(allUsers => allUsers.accepted.includes(currentUserId))
   }

  getAcceptedUsers = (currentUserId, allUsers) => {
     const currentUserAccepted = allUsers.filter(a => a.id === currentUserId).reduce((acc, val) => val)
     return this.waitingForAcceptance2(currentUserId, allUsers).filter(a => currentUserAccepted.accepted.includes(a.id))
   }

   // listOfFriends = getNameofStudentsToBeAccepted(this.currentUserId, this.props.data)

   // showListOfFriends = (listOfFriends) => {
   //   console.log(listOfFriends)
   //   return listOfFriends
   // }



    render() {
	   return (
	    <div>
      <div className="home-dash-container">

		    <h1>Student Waiting for Acceptance</h1>
        <ul>
        { waitingForAcceptance(9, this.props.data)
          .map(a => {
            return <li><button>{ a.firstName }</button></li>
          })
        }
        </ul>
        <br/>
        <h1>Accepted Students</h1>
         <ul>
         {this.getAcceptedUsers( 9,this.props.data)
         .map(a => {
           return <li>{a.firstName}</li>
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

export default connect(mapStateToProps)(FriendsContainer)
