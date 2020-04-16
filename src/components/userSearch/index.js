import React, { useState } from 'react'
import * as styles from './styles'
import { useSearchUsers } from './data'
import { LOADING } from '../../reducers/status'

function UserSearch() {
  const [query, setQuery] = useState('')
  const { status, searchUsers } = useSearchUsers()

  const updateQuery = (e) => setQuery(e.target.value)
  const search = (e) => {
    e.preventDefault()
    status !== LOADING && searchUsers(query)
  }
  return (
    <form onSubmit={search} className={styles.wrapper}>
      <input
        type="text"
        required
        className={styles.input}
        placeholder='Enter username'
        value={query}
        onChange={updateQuery}
      ></input>
      <button
        type='submit'
        className={styles.button}
      >
        Search
      </button>
    </form>
  )
}

export default UserSearch
