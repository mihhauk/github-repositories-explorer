import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import User from '.'
import { useUserRepos } from './data'
import { SUCCESS } from '../../reducers/status'

jest.mock('./data', () => ({
  useUserRepos: jest.fn(),
}))

describe('user details', () => {
  test('display heading', () => {
    useUserRepos.mockReturnValue({
      repos: [],
      status: '',
      getUserRepos: jest.fn(),
    })

    const { getByText } = render(<User login='testuser' />)
    const name = getByText(/testuser/)

    expect(name).toBeInTheDocument()
  })

  describe('show repositories on expand', () => {
    test('show loaded', () => {
      const getUserRepos = jest.fn()
      const repos = [
        { id: 1, name: 'repo1', description: 'desc1', stargazers_count: 1 },
        { id: 2, name: 'repo2', description: 'desc2', stargazers_count: 2 },
      ]
      useUserRepos.mockReturnValue({
        repos,
        status: SUCCESS,
        getUserRepos,
      })

      const { getByRole, getByText } = render(<User login='testuser' />)
      const button = getByRole('button')
      userEvent.click(button)

      const repo1 = getByText('repo1')
      const repo2 = getByText('repo2')

      expect(getUserRepos).not.toBeCalled()
      expect(repo1).toBeInTheDocument()
      expect(repo2).toBeInTheDocument()
    })
    test('load repos if needed', () => {
      const getUserRepos = jest.fn()
      useUserRepos.mockReturnValue({
        repos: [],
        status: '',
        getUserRepos,
      })

      const { getByRole } = render(<User login='testuser' />)
      const button = getByRole('button')
      userEvent.click(button)

      expect(getUserRepos).toBeCalled()
    })
  })
})
