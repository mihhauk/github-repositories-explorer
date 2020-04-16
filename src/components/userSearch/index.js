import React from 'react';
import * as styles from './styles'

function UserSearch() {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} placeholder='Enter username'></input>
      <button className={styles.button}>Search</button>
    </div>
  );
}

export default UserSearch;