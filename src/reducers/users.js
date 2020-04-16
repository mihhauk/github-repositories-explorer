import { SEARCH_USERS_SUCCESS, SEARCH_USERS_ERROR } from '../actions'

const users = (state = [], action) => {
  switch (action.type) {
    case SEARCH_USERS_SUCCESS: {
      return action.users
    }
    case SEARCH_USERS_ERROR: {
      return []
    }
    default:
      return state
  }
}

export default users