import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  handleAddScoreComment,
  handleRemoveComment,
} from '../../actions/comments'
import {
  TitleContainer,
  Title,
  Author,
  ScoreContainer,
  Score,
  VoteButton,
  Item,
  OptionsContainer,
} from './styles'
import { Button } from '../../views/Post/Detail/styles'
import { handleUpdateCommentCount } from '../../actions/posts'

const handleVote = (e, id, vote, dispatch) => {
  e.preventDefault()
  dispatch(handleAddScoreComment({ id, vote }))
}

const handleRemove = (e, comment, dispatch) => {
  e.preventDefault()

  const { id, parentId } = comment

  dispatch(handleRemoveComment(id))
  dispatch(handleUpdateCommentCount({ id: parentId, action: 'decrement' }))
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

    <OptionsContainer>
      <Link to={`/post/${comment.parentId}/comment/${comment.id}`}>Editar</Link>
      <Button onClick={e => handleRemove(e, comment, dispatch)}>Remover</Button>
    </OptionsContainer>
  </Item>
)

export default connect()(CommentItem)
