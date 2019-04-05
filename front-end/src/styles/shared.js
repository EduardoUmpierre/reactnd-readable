import { css } from 'styled-components'

export const box = ({ clickable = false }) => css`
  border: 1px solid #f1f1f1;
  border-radius: 3px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
  color: #333;
  padding: 1rem;

  ${clickable &&
    css`
      cursor: pointer;
      text-decoration: none;
      transition: box-shadow 300ms ease;

      &:hover {
        box-shadow: none;
      }
    `}
`
export const container = css`
  margin: 0 auto;
  padding: 0 10px;
  max-width: 1024px;
`
