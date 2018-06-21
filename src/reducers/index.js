// src/reducers/index.js

import { combineReducers } from 'redux'
import stutor from './stutor'
import skills from './skills'
export default combineReducers({
  stutor,
  skills
})
