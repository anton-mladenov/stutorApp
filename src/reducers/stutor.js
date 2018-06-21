// src/reducers/stutor.js

import { ADD_USER, ADD_ACCEPT, ADD_REJECT } from '../actions/stutor'
import { allUsers } from "../usersData/usersDummyData"
import update from 'react-addons-update';


const reducer = (state = allUsers, action = {}) => {
  console.log("HELLO")
  switch (action.type) {
  case ADD_USER:
    return [...state, action.payload]
  case ADD_ACCEPT:
    const tempState = [...state]
    const targetUser = tempState.filter(user => user.id === action.payload.currentUserId)
    const targetUserIndex = tempState.findIndex(a => a.id === action.payload.currentUserId)
    const updatedUser = update(targetUser, [{accepted: {$push: [action.payload.userId]}}])
    tempState.push(updatedUser[0])
    tempState.splice(targetUserIndex, 1)
    return tempState



  case ADD_REJECT:
    // const tempState1 = [...state]
    // const targetUser1 = tempState1.filter(user => user.id === action.payload.currentUserId)
    // const targetUserIndex1 = tempState1.findIndex(a => a.id === action.payload.currentUserId)
    // const updatedUser1 = update(targetUser1, [{accepted: {$push: [action.payload.userId]}}])
    // tempState.push(updatedUser1[0])
    // tempState.splice(targetUserIndex1, 1)
    // return tempState
  default:
    return state
  }
}

export default reducer
