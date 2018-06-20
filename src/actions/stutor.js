// src/actions/stutor.js

// Set  the action creator constant ADD_USER
export const ADD_USER = 'ADD_USER'

// Define the action creator addUser
export function addUser(user) {
  return {
    type: ADD_USER,
    payload: user
  }
}

export const ADD_SKILL = 'ADD_SKILL'

export function addSkill(skill) {
  return {
    type: ADD_SKILL,
    payload: skill
  }
}
