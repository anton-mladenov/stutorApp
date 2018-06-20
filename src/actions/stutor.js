// src/actions/stutor.js

// Set  the action creator constant ADD_USER
export const ADD_USER = 'ADD_USER'
export const ADD_ACCEPT = 'ADD_ACCEPT'

// Define the action creator addUser
export function addUser(user) {
  return {
    type: ADD_USER,
    payload: user
  }
}

export function addAccepted(currentUserId, userId) {
  console.log("action" + currentUserId)
  return {
    type: ADD_ACCEPT,
    payload: currentUserId, userId
  }
}
