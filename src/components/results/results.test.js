import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Results from '.'
import { useUsers } from './hooks'
import { SUCCESS, LOADING, ERROR } from '../../reducers/status'

jest.mock('./hooks', () => ({
  useUsers: jest.fn(),
}))

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
