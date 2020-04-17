import { css } from 'emotion'
import { info, error, resultList } from '../../../commonStyles'

export { info, error, resultList }

export const listItem = css`
  background: #c9d5dd;
  margin-top: 5px;
  padding: 10px;
  font-weight: 500;
  word-wrap: break-word;
`

export const heading = css`
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const name = css`
  max-width: 200px;
`

export const stars = css`
  display: flex;
  align-items: center;
  svg {
    margin-left: 5px;
  }
`
