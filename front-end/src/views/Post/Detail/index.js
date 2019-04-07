import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PostItem from '../../../components/PostItem'
import { PostBody } from './styles'
import { handleReceiveComments } from '../../../actions/comments'
import SectionTitle from '../../../components/SectionTitle'
import CommentList from '../../../components/CommentList'

class PostDetail extends Component {
  componentDidMount() {
    const { post_id } = this.props.match.params

    this.props.dispatch(handleReceiveComments(post_id))
  }

  render() {
    const { post, comments } = this.props

    return post ? (
      <>
        <SectionTitle>
          Post
          <div>
            <Link to={`/post/${post.id}`}>Editar</Link>
            <Link to="/">Excluir</Link>
          </div>
        </SectionTitle>

        <PostItem post={post} link={false} />
        <PostBody>{post.body}</PostBody>

        <CommentList items={comments} />
      </>
    ) : null
  }
}

const mapStateToProps = ({ posts, comments }, props) => {
  const { post_id } = props.match.params

  return {
    post: posts.find(post => post.id === post_id),
    comments: comments.filter(comment => comment.parentId === post_id),
  }
}

export default connect(mapStateToProps)(PostDetail)
