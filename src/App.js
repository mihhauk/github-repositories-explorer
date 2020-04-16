import React from 'react'
import UserSearch from './components/userSearch'
import Results from './components/results'
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
      <Results />
    </div>
  )
}

export default App
