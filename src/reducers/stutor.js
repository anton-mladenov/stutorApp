// src/reducers/stutor.js

import { ADD_USER } from '../actions/stutor'
import { allUsers } from "../usersData/usersDummyData"
import { ADD_SKILL } from '../actions/stutor'

const doMagic = (skill, userId, tempState) => {
	return tempState.map(user => user.id === userId ? (user.skills.includes(skill) ? user.skills : user.skills.unshift(skill)) : null )
}

const reducer = (state = allUsers, action = {}) => {
  switch (action.type) {
	case ADD_USER:
		return [...state, action.payload]
	case ADD_SKILL:
		// Add the new skill to the skills object array
   		// return [...state, action.payload]
		console.log("logging to the console FROM THE REDUCER FROM THE ADD_SKILL! CASE")
		
		let skill = action.payload.skill
		let user = action.payload.userId
		let tempState = [...state]
		
		return [...state, doMagic(skill, user, tempState)]

	default:
		return state
  }
}

export default reducer
