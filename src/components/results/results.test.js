import React from 'react'
import { render } from '@testing-library/react'
import Results from '.'
import { useUsers } from './data'
import { SUCCESS, ERROR } from '../../reducers/status'

jest.mock('./data', () => ({
  useUsers: jest.fn(),
}))

jest.mock('../user', () => ({ login, ...props }) => (
  <span {...props}>{login}</span>
))

describe('user search results', () => {
  test('display found users', () => {
    useUsers.mockReturnValue({
      users: [
        { login: 'user1', id: 1 },
        { login: 'user2', id: 2 },
      ],
      status: SUCCESS,
    })

    const { getByText } = render(<Results />)
    const user1 = getByText(/user1/i)
    const user2 = getByText(/user2/i)

    expect(user1).toBeInTheDocument()
    expect(user2).toBeInTheDocument()
  })

  test('display message if no users were found', () => {
    useUsers.mockReturnValue({
      users: [],
      status: SUCCESS,
    })

    const { getByText } = render(<Results />)
    const message = getByText(
      /Sorry, there are no users matching this search./i
    )

    expect(message).toBeInTheDocument()
  })

  test('display message if no users were found', () => {
    useUsers.mockReturnValue({
      users: [],
      status: ERROR,
    })

    const { getByText } = render(<Results />)
    const error = getByText(/Sorry, your search failed./i)

    expect(error).toBeInTheDocument()
  })
})
