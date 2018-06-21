import { ADD_ACCEPT } from '../actions/stutor'
import { allUsers } from "../usersData/usersDummyData"
const reducer = (state = allUsers, action = {}) => {
  switch (action.type) {
  case ADD_ACCEPT:
    console.log("TETETE")
    break
    default:
      return state
  }
}

export default reducer
