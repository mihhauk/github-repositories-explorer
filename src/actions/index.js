import { getUsers, getUserRepositories } from '../api'

export const SEARCH_USERS = 'SEARCH_USERS'
export const SEARCH_USERS_SUCCESS = `${SEARCH_USERS}_SUCCESS`
export const SEARCH_USERS_ERROR = `${SEARCH_USERS}_ERROR`

export const SEARCH_USER_REPOS = 'SEARCH_USER_REPOS'
export const SEARCH_USER_REPOS_SUCCESS = `${SEARCH_USER_REPOS}_SUCCESS`
export const SEARCH_USER_REPOS_ERROR = `${SEARCH_USER_REPOS}_ERROR`


export const searchUsers = (query) => async (dispatch) => {
  dispatch({ type: SEARCH_USERS, query })
  let response
  try {
    response = await getUsers(query)
  } catch (e) {
    dispatch({ type: SEARCH_USERS_ERROR })
    return
  }

  const users = response.data.items.map(user => {
    const { id, login } = user
    return {id, login }
  })

  dispatch({ type: SEARCH_USERS_SUCCESS, users  })
}

export const searchUserRepositories = (login) => async (dispatch) => {
  dispatch({ type: SEARCH_USER_REPOS, login })
  let response
  try {
    response = await getUserRepositories(login)
  } catch (e) {
    dispatch({ type: SEARCH_USER_REPOS_ERROR, login })
    return
  }

  const repos = response.data.map((repo) => {
    const { id, name, description, stargazers_count } = repo
    return { id, name, description, stargazers_count }
  })

  dispatch({ type: SEARCH_USER_REPOS_SUCCESS, login, repos })
}
