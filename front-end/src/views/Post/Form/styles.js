import styled, { css } from 'styled-components'

const sharedInput = css`
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  color: #333;
  padding: 0.75rem 1rem;
  width: 100%;

  &:disabled {
    background-color: #f1f1f1;
  }
`

export const Form = styled.form``
export const Label = styled.label`
  display: block;
  margin: 1rem 0 0.5rem;
`
export const Input = styled.input`
  ${sharedInput}
`
export const Textarea = styled.textarea`
  ${sharedInput}
  min-height: 100px;
`

export const Select = styled.select`
  ${sharedInput}
`

export const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  a {
    color: #333;
  }
`

export const Button = styled.button`
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  color: #333;
  padding: 0.5rem 1.5rem;
  margin-top: 2rem;
`
