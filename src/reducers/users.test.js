import users from './users'
import { SEARCH_USERS_SUCCESS, SEARCH_USERS_ERROR } from '../actions'

describe('users reducer', () => {
  test('load new users when search is successful', () => {
    const newUsers = ['new1', 'new2']

    const state = users(['user1'], {
      type: SEARCH_USERS_SUCCESS,
      users: newUsers
    })

    expect(state).toEqual(newUsers)
  })

  test('remove users when search failed', () => {

    const state = users(['user1'], {
      type: SEARCH_USERS_ERROR,
    })

    expect(state).toEqual([])
  })
})