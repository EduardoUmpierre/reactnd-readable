import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { box } from '../../styles/shared'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Item = styled(Link)`
  ${box({ clickable: true })}
  margin-right: 1rem;
  text-align: center;
  width: 100%;

  &:last-child {
    margin-right: 0;
  }
`
