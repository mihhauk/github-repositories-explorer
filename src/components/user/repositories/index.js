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
              <span className={styles.name}>{name}</span>
              <span className={styles.stars}>
                {stargazers_count}
                <FaStar />
              </span>
            </div>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    )
  )
}

export default Repositories
