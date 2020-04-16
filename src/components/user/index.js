import React, { useState } from 'react'
import * as styles from './styles'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

function User({ login, repos_url }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <div className={styles.title}>
        <span>{login}</span>
        <button
          className={styles.showHideButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      {isOpen && <div className={styles.details}>{repos_url}</div>}
    </div>
  )
}

export default User
