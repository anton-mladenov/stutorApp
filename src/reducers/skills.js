// src/reducers/stutor.js

// import { ADD_SKILL } from '../actions/stutor'
import { tutorsSkillSet } from "../usersData/usersDummyData"


// Define the state tranformation actions
const reducer = (state = tutorsSkillSet, action = {}) => {
  console.log(state,'store state')
  console.log(action,'action')
  switch (action.type) {
//   case ADD_SKILL:
//     // Add the new user to the user object array
//     console.log([...state, action.payload],'store state updated')
//     return [...state, action.payload]
  default:
    // Return the initial/default state
    return state
  }
}

//const store = redux.createStore(reducer)
//console.log('Initial state of the store', store.getState())

export default reducer
