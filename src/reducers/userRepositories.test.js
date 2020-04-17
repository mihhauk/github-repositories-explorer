import userRepositories from './userRepositories'
import {
  SEARCH_USER_REPOS_SUCCESS,
  SEARCH_USERS,
} from '../actions'

describe('usersRepositories reducer', () => {
  test('add new user repos when search is successful', () => {
    const currentState = [{ new1: ['repo1, repo2'] }]

    const state = userRepositories(currentState, {
      type: SEARCH_USER_REPOS_SUCCESS,
      repos: ['repo3, repo4'],
      login: 'user2',
    })

    expect(state).toEqual({ ...currentState, user2: ['repo3, repo4'] })
  })

  test('clear current data on new search', () => {
    const currentState = { new1: ['repo1, repo2'] }

    const state = userRepositories(currentState, {
      type: SEARCH_USERS,
    })

    expect(state).toEqual({})
  })
})
