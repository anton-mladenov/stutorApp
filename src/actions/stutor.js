// src/actions/stutor.js

// Set  the action creator constant ADD_USER
export const ADD_USER = 'ADD_USER'
export const ADD_ACCEPT = 'ADD_ACCEPT'
export const ADD_SKILL = 'ADD_SKILL'

// Define the action creator addUser
export function addUser(user) {
  return {
    type: ADD_USER,
    payload: user
  }
}

export function addSkill(skill) {
  return {
    type: ADD_SKILL,
    payload: skill
  }
}

export function addAccepted(currentUserId, userId) {
  console.log(currentUserId, userId)
  return {
    type: ADD_ACCEPT,
    payload: currentUserId, userId

  }
}
