import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import UserSearch from '.'
import { useSearchUsers } from './data'

jest.mock('./data', () => ({
  useSearchUsers: jest.fn(() => ({ searchUsers: jest.fn(), status: '' })),
}))

describe('user search', () => {
  test('renders input', () => {
    const { getByPlaceholderText } = render(<UserSearch />)
    const input = getByPlaceholderText(/Enter username/i)
    expect(input).toBeInTheDocument()
  })

  test('renders button', () => {
    const { getByText } = render(<UserSearch />)
    const button = getByText(/Search/i)
    expect(button).toBeInTheDocument()
  })

  test('search users works', () => {
    const mockSearchUsers = jest.fn()
    const query = 'testUser'
    useSearchUsers.mockReturnValue({ searchUsers: mockSearchUsers, status: '' })

    const { getByText, getByPlaceholderText } = render(<UserSearch />)
    userEvent.type(getByPlaceholderText(/Enter username/i), query)

    userEvent.click(getByText(/Search/i))

    expect(mockSearchUsers).toBeCalledWith(query)
  })
})
