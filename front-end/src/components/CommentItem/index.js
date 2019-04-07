import React from 'react'
import { connect } from 'react-redux'
import { handleAddScoreComment } from '../../actions/comments'
import {
  TitleContainer,
  Title,
  Author,
  ScoreContainer,
  Score,
  VoteButton,
  Item,
} from './styles'

const handleVote = (e, id, vote, dispatch) => {
  e.preventDefault()
  dispatch(handleAddScoreComment({ id, vote }))
}

const CommentItem = ({ comment, dispatch }) => (
  <Item>
    <TitleContainer>
      <Title>{comment.body}</Title>
      <Author>{comment.author}</Author>
    </TitleContainer>

    <ScoreContainer>
      <Score>Score: {comment.voteScore}</Score>
      <VoteButton
        onClick={e => handleVote(e, comment.id, 'downVote', dispatch)}
      >
        -
      </VoteButton>
      <VoteButton onClick={e => handleVote(e, comment.id, 'upVote', dispatch)}>
        +
      </VoteButton>
    </ScoreContainer>
  </Item>
)

export default connect()(CommentItem)
