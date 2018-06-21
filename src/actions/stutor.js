// src/actions/stutor.js

// Set  the action creator constant ADD_USER
export const ADD_USER = 'ADD_USER'
export const ADD_ACCEPT = 'ADD_ACCEPT'
export const ADD_REJECT = 'ADD_REJECT'
export const ADD_SKILL = 'ADD_SKILL'

// Define the action creator addUser
export function addUser(user) {
  return {
    type: ADD_USER,
    payload: user
  }
}

export function addSkill(skill, userId) {
	console.log("logging to the console FROM THE ACTION!")
	return {
		type: ADD_SKILL,
		payload: {
			skill,
			userId
			}
	}
}

export function addAccepted(currentUserId, userId) {
  return {
    type: ADD_ACCEPT,
    payload: {currentUserId, userId}
  }
}
export function addRejected(currentUserId, userId) {
  return {
    type: ADD_REJECT,
    payload: {currentUserId, userId}
  }
}
