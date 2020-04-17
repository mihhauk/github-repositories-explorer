import React, { useState } from 'react'
import * as styles from './styles'
import { useSearchUsers } from './data'
import { LOADING, SUCCESS } from '../../reducers/status'

function UserSearch() {
  const [query, setQuery] = useState('')
  const [searchedQuery, setSearchedQuery] = useState('')
  const { status, searchUsers } = useSearchUsers()

  const updateQuery = (e) => setQuery(e.target.value)
  const search = (e) => {
    e.preventDefault()
    if (status !== LOADING) {
      searchUsers(query)
      setSearchedQuery(query)
    }
  }
  return (
    <React.Fragment>
      <form onSubmit={search} className={styles.wrapper}>
        <input
          type='text'
          required
          className={styles.input}
          placeholder='Enter username'
          value={query}
          onChange={updateQuery}
        ></input>
        <button type='submit' className={styles.button}>
          Search
        </button>
      </form>
      {status === SUCCESS && (
        <span className={styles.resultsFor}>
          Showing users for "{searchedQuery}"
        </span>
      )}
    </React.Fragment>
  )
}

export default UserSearch
