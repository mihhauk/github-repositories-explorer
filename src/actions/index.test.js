import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import {
  searchUsers,
  SEARCH_USERS,
  SEARCH_USERS_ERROR,
  SEARCH_USERS_SUCCESS,
} from './'
import * as api from '../api'

jest.mock('../api', () => ({
  getUsers: jest.fn(),
}))

const mockStore = configureStore([thunk])

describe('user search action', () => {
  test('successful search', async () => {
    const query = 'username'
    const users = [
      { id: 1, login: 'user1', repos_url: 'url1' },
      { id: 2, login: 'user2', repos_url: 'url2' },
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