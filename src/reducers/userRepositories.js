import {
  SEARCH_USERS,
  SEARCH_USER_REPOS_SUCCESS,
  SEARCH_USER_REPOS_ERROR,
} from '../actions'

const userRepositories = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_USER_REPOS_SUCCESS: {
      const { login, repos } = action
      return { ...state, [login]: repos }
    }
    case SEARCH_USER_REPOS_ERROR: {
      const { login } = action
      return { ...state, [login]: [] }
    }
    case SEARCH_USERS: {
      return {}
      }
    default:
      return state
  }
}

export default userRepositories
