import React, { useState } from 'react'
import * as styles from './styles'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { useUserRepos } from './data'
import { SUCCESS, LOADING } from '../../reducers/status'
import Repositories from './repositories'
import BeatLoader from 'react-spinners/BeatLoader'

function Chevron({ isOpen, loading }) {
  if (loading) return <BeatLoader size={5} />
  return isOpen ? <FaChevronUp /> : <FaChevronDown />
}

function User({ login }) {
  const [isOpen, setIsOpen] = useState(false)
  const { status, repos, getUserRepos } = useUserRepos(login)

  const toggleUserDetails = () => {
    !isOpen && status !== SUCCESS && getUserRepos()
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.heading}>
      <div
        tabIndex='0'
        className={styles.title}
        role='button'
        onClick={toggleUserDetails}
        onKeyDown={({ key }) => key === 'Enter' && toggleUserDetails()}
      >
        <span>{login}</span>
        <Chevron isOpen={isOpen} loading={status === LOADING} />
      </div>
      <Repositories
        isVisible={isOpen && status !== LOADING}
        status={status}
        repos={repos}
      />
    </div>
  )
}

export default User
