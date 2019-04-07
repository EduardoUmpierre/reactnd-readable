import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import PostItem from '../../../components/PostItem'
import { PostBody, Button } from './styles'
import { handleReceiveComments } from '../../../actions/comments'
import SectionTitle from '../../../components/SectionTitle'
import CommentList from '../../../components/CommentList'
import { handleRemovePost } from '../../../actions/posts'
import { EmptyMessage } from '../../../components/PostList/styles'

class PostDetail extends Component {
  componentDidMount() {
    const { post_id } = this.props.match.params

    this.props.dispatch(handleReceiveComments(post_id))
  }

  handleRemove = (e, id) => {
    e.preventDefault()

    const { dispatch, history } = this.props

    dispatch(handleRemovePost(id))

    history.push('/')
  }

  render() {
    const { post, comments } = this.props

    return post ? (
      <>
        <SectionTitle>
          Post
          <div>
            <Link to={`/post/${post.id}`}>Editar</Link>
            <Button onClick={e => this.handleRemove(e, post.id)}>
              Remover
            </Button>
          </div>
        </SectionTitle>

        <PostItem post={post} link={false} />
        <PostBody>{post.body}</PostBody>

        <CommentList postId={post.id} items={comments} />
      </>
    ) : (
      <EmptyMessage>Post não encontrado</EmptyMessage>
    )
  }
}

const mapStateToProps = ({ posts, comments }, props) => {
  const { post_id } = props.match.params

  return {
    post: posts.find(post => post.id === post_id),
    comments: comments.filter(
      comment => comment.parentId === post_id && !comment.deleted
    ),
  }
}

export default withRouter(connect(mapStateToProps)(PostDetail))
