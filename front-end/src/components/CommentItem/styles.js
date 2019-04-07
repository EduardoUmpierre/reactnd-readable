import styled, { css } from 'styled-components'
import { box } from '../../styles/shared'

const sharedFontStyle = css`
  color: #666;
  font-size: 0.75rem;
`

export const Item = styled.div`
  align-items: center;
  ${box({ clickable: false })}
  display: flex;
  margin-bottom: 1rem;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }
`

export const TitleContainer = styled.div`
  width: 100%;
`
export const Title = styled.div``

export const Author = styled.div`
  ${sharedFontStyle}
`

export const ScoreContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-shrink: 0;
  margin: 0 2rem;
`
export const Score = styled.div`
  ${sharedFontStyle}
  line-height: 1;
  margin-right: 0.5rem;
`
export const VoteButton = styled.button`
  background-color: #f1f1f1;
  border: 1px solid #f1f1f1;
  color: #333;
  cursor: pointer;
  line-height: 1;
  margin-right: 0.25rem;
  padding: 0.25rem 0.5rem;

  &:last-child {
    margin-right: 0;
  }
`
export const CommentCounter = styled.div`
  ${sharedFontStyle}
  flex-shrink: 0;
`

export const OptionsContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-shrink: 0;

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
