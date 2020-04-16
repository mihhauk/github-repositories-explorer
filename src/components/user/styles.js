import { css } from 'emotion'

export const title = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e6edf2;
  padding: 10px;
  margin-bottom: 5px;
`

export const details = css`
  background: #c9d5dd;
  padding-top: 5px;
`

export const showHideButton = css`
  all: unset;
  padding: 2px;
  :focus {
    outline: auto 3px -webkit-focus-ring-color;
  }
`
