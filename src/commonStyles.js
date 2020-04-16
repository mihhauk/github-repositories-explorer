import { css } from 'emotion'

const message = css`
  padding: 10px;
  text-align: center;
`

export const error = css`
  ${message}
  background: #ffe0e0;
  color: #e90513;
`

export const info = css`
  ${message}
  background: #e6edf2;
`

export const resultList = css`
  list-style: none;
  padding: 0;
  li {
    padding-bottom: 5px;
  }
`
