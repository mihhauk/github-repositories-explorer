import { combineReducers } from 'redux'
import {
  SEARCH_USERS,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_ERROR,
  SEARCH_USER_REPOS,
  SEARCH_USER_REPOS_SUCCESS,
  SEARCH_USER_REPOS_ERROR,
} from '../actions'

export const SUCCESS = 'SUCCESS'
export const ERROR = 'ERROR'
export const LOADING = 'LOADING'

const searchUsers = (state = '', action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return LOADING
    case SEARCH_USERS_SUCCESS:
      return SUCCESS
    case SEARCH_USERS_ERROR:
      return ERROR
    default:
      return state
  }
}

const userRepositories = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_USER_REPOS: {
      const { login } = action
      return { ...state, [login]: LOADING }
    }

    case SEARCH_USER_REPOS_SUCCESS: {
      const { login } = action
      return { ...state, [login]: SUCCESS }
    }
    case SEARCH_USER_REPOS_ERROR: {
      const { login } = action
      return { ...state, [login]: ERROR }
    }
    case SEARCH_USERS:
      return {}
    default:
      return state
  }
}

export default combineReducers({ searchUsers, userRepositories })
