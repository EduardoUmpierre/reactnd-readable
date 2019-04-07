import React from 'react'
import PropTypes from 'prop-types'
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
  DivItem,
} from './styles'

const handleVote = (e, id, vote, dispatch) => {
  e.preventDefault()
  dispatch(handleAddScorePost({ id, vote }))
}

const PostItem = ({ post, dispatch, link }) => {
  let Component = DivItem
  let customProps = {
    clickable: false,
  }

  if (link) {
    Component = Item
    customProps = {
      to: `${post.category}/${post.id}`,
    }
  }

  return (
    <Component {...customProps}>
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
    </Component>
  )
}

PostItem.propTypes = {
  link: PropTypes.bool,
}

PostItem.defaultProps = {
  link: true,
}

export default connect()(PostItem)
