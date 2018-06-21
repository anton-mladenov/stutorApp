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
    // const tempState = [...state]
    // const targetUser = tempState.filter(user => user.id === action.payload.currentUserId)
    // const targetUserIndex = tempState.findIndex(a => a.id === action.payload.currentUserId)
    // const updatedUser = update(targetUser, [{accepted: {$push: [action.payload.userId]}}])
    // tempState.push(updatedUser[0])
    // tempState.splice(targetUserIndex, 1)
    // return update(state.filter(a => a.id === action.payload.currentUserId).reduce((a,b) => b), {accepted: {$push: [action.payload.userId]}})
    const currentUserIndex = state.findIndex(a => a.id === action.payload.currentUserId)
    return update(state, {[currentUserIndex]:{accepted: {$push: [action.payload.userId]}}})

  case ADD_REJECT:
    const currentUserIndex1 = state.findIndex(a => a.id === action.payload.currentUserId)
    return update(state, {[currentUserIndex1]:{rejected: {$push: [action.payload.userId]}}})
  default:
    return state
  }
}

export default reducer
