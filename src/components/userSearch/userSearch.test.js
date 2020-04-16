import React from 'react'
import { render } from '@testing-library/react'
import UserSearch from '.'

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
})
