// src/reducers/stutor.js

import { ADD_USER, ADD_ACCEPT, ADD_REJECT, ADD_SKILL } from '../actions/stutor'
import { allUsers } from "../usersData/usersDummyData"

import update from 'react-addons-update';

const updateUserSkills = (skill, userId, tempState) => {
	// return tempState.map(user => user.id === userId ? (user.skills.includes(skill) ? user.skills : user.skills.unshift(skill)) : null )
	return tempState.map(user => {
		if (user.id === userId && !user.skills.includes(parseInt(skill))) {
			const newUser = { ...user, skills: [ ...user.skills, parseInt(skill)] }
			console.log(newUser)
			return newUser
		}
		return user
	})
}

const reducer = (state = allUsers, action = {}) => {
  switch (action.type) {
	case ADD_USER: {
		return [...state, action.payload]
	}
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

	case ADD_ACCEPT: {
		const tempState = [...state]
		const targetUser = tempState.filter(user => user.id === action.payload.currentUserId)
		const targetUserIndex = tempState.findIndex(a => a.id === action.payload.currentUserId)
		const updatedUser = update(targetUser, [{accepted: {$push: [action.payload.userId]}}])
		tempState.push(updatedUser[0])
		tempState.splice(targetUserIndex, 1)
		return tempState
	}

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
