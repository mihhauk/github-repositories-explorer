import React from 'react'
import { useUsers } from './hooks'
import { ERROR, LOADING, SUCCESS } from '../../reducers/status'
import BarLoader from 'react-spinners/BarLoader'
import * as styles from './styles'

function Results() {
  const { status, users } = useUsers()
  if (status === ERROR) {
    return <p className={styles.error}>Sorry, your search failed.</p>
  }

  return (
    <div>
      <BarLoader width={'100%'} loading={status === LOADING} />
      {status !== ERROR && !!users.length && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
      )}
      {status === SUCCESS && !users.length && (
        <p>Sorry, there are no users matching this search.</p>
      )}
    </div>
  )
}

export default Results
