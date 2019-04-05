import React from 'react'
import { connect } from 'react-redux'
import {
  Container,
  Item,
  TitleContainer,
  Title,
  Author,
  ScoreContainer,
  Score,
  VoteButton,
  CommentCounter,
} from './styles'
import SectionTitle from '../SectionTitle'
import { handleAddScorePost } from '../../actions/posts'

const handleVote = (id, vote, dispatch) =>
  dispatch(handleAddScorePost({ id, vote }))

const PostList = ({ items, dispatch }) => (
  <>
    <SectionTitle>Posts</SectionTitle>
    <Container>
      {items.map(post => (
        <Item key={post.id}>
          <TitleContainer>
            <Title>{post.title}</Title>
            <Author>{post.author}</Author>
          </TitleContainer>

          <ScoreContainer>
            <Score>Score: {post.voteScore}</Score>
            <VoteButton
              onClick={() => handleVote(post.id, 'downVote', dispatch)}
            >
              -
            </VoteButton>
            <VoteButton onClick={() => handleVote(post.id, 'upVote', dispatch)}>
              +
            </VoteButton>
          </ScoreContainer>

          <CommentCounter>Comments: {post.commentCount}</CommentCounter>
        </Item>
      ))}
    </Container>
  </>
)

export default connect()(PostList)
