import styled from 'styled-components'
import { box } from '../../styles/shared'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const EmptyMessage = styled.div`
  ${box({ clickable: false })}
`

export const Label = styled.label`
  color: #333;
  font-size: 0.75rem;
  margin-right: 0.5rem;
`
export const Select = styled.select`
  border: 1px solid #f1f1f1;
  color: #333;
  margin-right: 2rem;
  padding: 0.25rem 0.5rem;
`
