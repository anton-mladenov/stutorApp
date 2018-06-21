// src/reducers/stutor.js

// import { ADD_SKILL } from '../actions/stutor'
import { tutorsSkillSet } from "../usersData/usersDummyData"
// import { allUsers } from "../usersData/usersDummyData"



// Define the state tranformation actions
const reducer = (state = tutorsSkillSet, action = {}) => {
  switch (action.type) {
//   case ADD_SKILL:
//     // Add the new skill to the skills object array
//     // return [...state, action.payload]
// 	console.log("logging to the console FROM THE REDUCER FROM THE ADD_SKILL! CASE")

// 	return [...state, doMagic(action.payload.skill, action.payload.userId)]

  default:
    // Return the initial/default state
    return state
  }
}

export default reducer
