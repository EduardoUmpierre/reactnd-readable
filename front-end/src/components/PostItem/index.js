import React from 'react'
import { connect } from 'react-redux'
import { handleAddScorePost } from '../../actions/posts'
import {
  Item,
  TitleContainer,
  Title,
  Author,
  ScoreContainer,
  Score,
  VoteButton,
  CommentCounter,
} from './styles'

const handleVote = (e, id, vote, dispatch) => {
  e.preventDefault()
  dispatch(handleAddScorePost({ id, vote }))
}

const PostItem = ({ post, dispatch }) => (
  <Item to={`${post.category}/${post.id}`}>
    <TitleContainer>
      <Title>{post.title}</Title>
      <Author>{post.author}</Author>
    </TitleContainer>

    <ScoreContainer>
      <Score>Score: {post.voteScore}</Score>
      <VoteButton onClick={e => handleVote(e, post.id, 'downVote', dispatch)}>
        -
      </VoteButton>
      <VoteButton onClick={e => handleVote(e, post.id, 'upVote', dispatch)}>
        +
      </VoteButton>
    </ScoreContainer>

    <CommentCounter>Comments: {post.commentCount}</CommentCounter>
  </Item>
)

export default connect()(PostItem)
