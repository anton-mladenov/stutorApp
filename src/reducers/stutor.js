// src/reducers/stutor.js

// Import the action creator constants NEW_GAME and MAKE_GUESS
import { ADD_USER } from '../actions/stutor'

//import { students } from '../userData/usersDummyData'

const usersTemp = [
  {
    id: 1,
    firstName: "Hilargi",
    lastName: "Alecto",
    emailAddress: "hilargi@gmail.com",
    shortBio: "I am a 47-year-old associate at a law firm who enjoys listening to music, jigsaw puzzles and baking.",
    skills: {id:1,skill:'music'},
    rejected: [],
    accepted: []
  }
]

const initialState = usersTemp

// Define the state tranformation actions
const reducer = (state = initialState, action = {}) => {
  console.log(state,'store state')
  console.log(action,'action')
  switch (action.type) {
  case ADD_USER:
    // Add the new user to the user object array
    console.log([...state, action.payload],'store state updated')
    return [...state, action.payload]
  default:
    // Return the initial/default state
    return state
  }
}

//const store = redux.createStore(reducer)
//console.log('Initial state of the store', store.getState())

export default reducer
