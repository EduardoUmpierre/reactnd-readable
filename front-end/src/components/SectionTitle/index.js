import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  align-items: center;
  color: #333;
  display: flex;
  font-size: ${({ small }) => (small ? '1rem' : '1.5rem')};
  font-weight: 400;
  justify-content: space-between;
  margin: 2rem 0 1rem;

  a,
  button {
    background-color: transparent;
    border: none;
    color: #333;
    cursor: pointer;
    font-size: 0.85rem;
    margin-right: 1rem;
    text-decoration: underline;

    &:last-child {
      margin-right: 0;
    }
  }
`

const SectionTitle = ({ children, small }) => (
  <Title small={small}>{children}</Title>
)

export default SectionTitle
