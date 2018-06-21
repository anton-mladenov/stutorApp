// src/reducers/stutor.js

import { ADD_USER } from '../actions/stutor'
import { allUsers } from "../usersData/usersDummyData"


const reducer = (state = allUsers, action = {}) => {
  switch (action.type) {
  case ADD_USER:
    return [...state, action.payload]
  default:
    return state
  }
}

export default reducer
