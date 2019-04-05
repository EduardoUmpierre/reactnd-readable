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

const handleVote = (id, vote, dispatch) =>
  dispatch(handleAddScorePost({ id, vote }))

const PostItem = ({ post, dispatch }) => (
  <Item>
    <TitleContainer>
      <Title>{post.title}</Title>
      <Author>{post.author}</Author>
    </TitleContainer>

    <ScoreContainer>
      <Score>Score: {post.voteScore}</Score>
      <VoteButton onClick={() => handleVote(post.id, 'downVote', dispatch)}>
        -
      </VoteButton>
      <VoteButton onClick={() => handleVote(post.id, 'upVote', dispatch)}>
        +
      </VoteButton>
    </ScoreContainer>

    <CommentCounter>Comments: {post.commentCount}</CommentCounter>
  </Item>
)

export default connect()(PostItem)
