import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  color: #333;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 2rem 0 1rem;
`

export default ({ children }) => <Title>{children}</Title>
