// src/reducers/stutor.js

import { ADD_USER, ADD_ACCEPT, ADD_REJECT, ADD_SKILL } from '../actions/stutor'
import { allUsers } from "../usersData/usersDummyData"

import update from 'react-addons-update';

const updateUserSkills = (skill, userId, tempState) => {
	// return tempState.map(user => user.id === userId ? (user.skills.includes(skill) ? user.skills : user.skills.unshift(skill)) : null )
	return tempState.map(user => {
		if (user.id === userId && !user.skills.includes(parseInt(skill,10))) {
			const newUser = { ...user, skills: [ ...user.skills, parseInt(skill,10)] }
			console.log(newUser)
			return newUser
		}
		return user
	})
}

const reducer = (state = allUsers, action = {}) => {
  switch (action.type) {
	case ADD_SKILL: {
		// Add the new skill to the skills object array
   		// return [...state, action.payload]
		console.log("logging to the console FROM THE REDUCER FROM THE ADD_SKILL! CASE")

		let skill = action.payload.skill
		let user = action.payload.userId
		let tempState = [...state]
		const updatedUsers = updateUserSkills(skill, user, tempState)


		return updatedUsers
	}
  case ADD_USER:
    return [...state, action.payload]
  case ADD_ACCEPT:
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
