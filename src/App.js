import React from 'react'
import UserSearch from './components/userSearch'
import { css } from 'emotion'

const styles = css`
  justify-content: center;
  padding: 1rem;
  max-width: 500px;
  margin: 0 auto;
`

function App() {
  return (
    <div className={styles}>
      <UserSearch />
    </div>
  )
}

export default App
