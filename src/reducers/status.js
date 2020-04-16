import {combineReducers } from 'redux'
import {
  SEARCH_USERS,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_ERROR,
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

export default combineReducers({ searchUsers })
