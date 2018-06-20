// src/reducers/stutor.js

// Import the action creator constants NEW_GAME and MAKE_GUESS
import { ADD_USER } from '../actions/stutor'
import { ADD_ACCEPT } from '../actions/stutor'
import { allUsers } from "../usersData/usersDummyData"

// Define the state tranformation actions
const reducer = (state = allUsers, action = {}) => {
//   console.log(state,'store state')
//   console.log(action,'action')
  switch (action.type) {
  case ADD_USER:
    // Add the new user to the user object array
    // console.log([...state, action.payload],'store state updated')
    return [...state, action.payload]

  case ADD_ACCEPT :
    console.log('REDUCER')
    return (
      state.map(user => {
        if (user.id === action.currentUserId) {
          return {...user.accepted, ...action.userId}
        } else {
          return user
        }
      }
      )
    )

  default:

    return state
  }
}

//const store = redux.createStore(reducer)
//console.log('Initial state of the store', store.getState())

export default reducer
