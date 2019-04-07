import { css } from 'styled-components'

export const box = ({ clickable = true }) => css`
  border: 1px solid #f1f1f1;
  border-radius: 3px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
  color: #333;
  cursor: default;
  padding: 1rem;
  text-decoration: none;

  ${clickable &&
    css`
      cursor: pointer;
      transition: background-color 300ms ease, box-shadow 300ms ease;

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
