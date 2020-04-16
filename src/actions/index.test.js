import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import {
  searchUsers,
  SEARCH_USERS,
  SEARCH_USERS_ERROR,
  SEARCH_USERS_SUCCESS,
  searchUserRepositories,
  SEARCH_USER_REPOS,
  SEARCH_USER_REPOS_ERROR,
  SEARCH_USER_REPOS_SUCCESS,
} from './'
import * as api from '../api'

jest.mock('../api', () => ({
  getUsers: jest.fn(),
  getUserRepositories: jest.fn(),
}))

const mockStore = configureStore([thunk])

describe('user search action', () => {
  test('successful search', async () => {
    const query = 'username'
    const users = [
      { id: 1, login: 'user1' },
      { id: 2, login: 'user2' },
    ]
    api.getUsers.mockResolvedValueOnce({ data: { items: users } })

    const store = mockStore({})

    await store.dispatch(searchUsers(query))

    const expectedActions = [
      { type: SEARCH_USERS, query },
      { type: SEARCH_USERS_SUCCESS, users },
    ]

    expect(store.getActions()).toEqual(expectedActions)
  })

  test('failed search', async () => {
    const query = 'username'
    api.getUsers.mockRejectedValueOnce({ error: 'failed' })

    const store = mockStore({})

    await store.dispatch(searchUsers(query))

    const expectedActions = [
      { type: SEARCH_USERS, query },
      { type: SEARCH_USERS_ERROR },
    ]

    expect(store.getActions()).toEqual(expectedActions)
  })
})

describe('repo search action', () => {
  test('successful search', async () => {
    const login = 'username'
    const repos = [
      { id: 1, name: 'repo1', description: 'desc1', stargazers_count: 1 },
      { id: 2, name: 'repo2', description: 'desc2', stargazers_count: 2 },
    ]
    api.getUserRepositories.mockResolvedValueOnce({ data: repos })

    const store = mockStore({})

    await store.dispatch(searchUserRepositories(login))

    const expectedActions = [
      { type: SEARCH_USER_REPOS, login },
      { type: SEARCH_USER_REPOS_SUCCESS, login, repos },
    ]

    expect(store.getActions()).toEqual(expectedActions)
  })

  test('failed search', async () => {
    const login = 'username'
    api.getUserRepositories.mockRejectedValueOnce({ error: 'failed' })

    const store = mockStore({})

    await store.dispatch(searchUserRepositories(login))


    const expectedActions = [
      { type: SEARCH_USER_REPOS, login },
      { type: SEARCH_USER_REPOS_ERROR, login },
    ]

    expect(store.getActions()).toEqual(expectedActions)
  })
})
