import React from 'react'
import { useUsers } from './data'
import { ERROR, LOADING, SUCCESS } from '../../reducers/status'
import BarLoader from 'react-spinners/BarLoader'
import * as styles from './styles'
import User from '../user'
import {motion} from 'framer-motion'

function Results() {
  const { status, users } = useUsers()
  if (status === ERROR) {
    return <p className={styles.error}>Sorry, your search failed.</p>
  }

  return (
    <div>
      <BarLoader width={'100%'} loading={status === LOADING} />
      {status !== ERROR && !!users.length && (
        <ul className={styles.resultList}>
          {users.map((user) => (
            <motion.li animate={{ opacity: 1 }} initial={{ opacity: 0 }} key={user.id}>
              <User {...user} />
            </motion.li>
          ))}
        </ul>
      )}
      {status === SUCCESS && !users.length && (
        <p className={styles.info}>
          Sorry, there are no users matching this search.
        </p>
      )}
    </div>
  )
}

export default Results
