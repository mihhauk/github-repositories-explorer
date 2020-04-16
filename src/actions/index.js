import { getUsers } from '../api'

export const SEARCH_USERS = 'SEARCH_USERS'
export const SEARCH_USERS_SUCCESS = 'SEARCH_USERS_SUCCESS'
export const SEARCH_USERS_ERROR = 'SEARCH_USERS_ERROR'


export const searchUsers = (query) => async (dispatch) => {
  dispatch({ type: SEARCH_USERS, query })
  let response
  try {
    response = await getUsers(query)
  } catch (e) {
    dispatch({ type: SEARCH_USERS_ERROR })
    return
  }
  dispatch({ type: SEARCH_USERS_SUCCESS, users: response.data.items })
}
