import React from 'react'
import * as styles from './styles'
import { SUCCESS, ERROR } from '../../../reducers/status'
import { FaStar } from 'react-icons/fa'

function Repositories({ status, repos }) {
  if (status === ERROR) {
    return <p className={styles.error}>Sorry, loading repositories failed.</p>
  }
  if (status === SUCCESS && !repos.length) {
    return <p className={styles.info}>Sorry, this user has no repositories.</p>
  }
  return (
    status === SUCCESS && (
      <ul className={styles.resultList}>
        {repos.map(({ id, name, description, stargazers_count }) => (
          <li key={id} className={styles.listItem}>
            <div className={styles.heading}>
              <span>{name}</span>
              <span>
                {stargazers_count}
                <FaStar />
              </span>
            </div>
            <span>{description}</span>
          </li>
        ))}
      </ul>
    )
  )
}

export default Repositories
