import styled from 'styled-components'
import { box } from '../../styles/shared'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Item = styled.div`
  ${box}
  margin-right: 1rem;
  text-align: center;
  width: 100%;

  &:last-child {
    margin-right: 0;
  }
`
